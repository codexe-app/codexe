import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { Container, Box, Flex, SimpleGrid } from '@mantine/core'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getCurrentUser } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from '@/utils/amplifyserverutils'
import { getUser } from '@/graphql/queries'
import type { User } from '@/graphql/API'
import ProfileCard from './profile'
import CreateCard from './create'
import DocumentsTable from './documents/table'

export const dynamic = 'force-dynamic'

async function AuthGetCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    })
    return currentUser
  } catch (error) {
    console.error(error)
    redirect('/')
  }
}

export default async function Page(props: any) {
  const theuser = await AuthGetCurrentUserServer()
  const response = (await cookieBasedClient.graphql({
    query: getUser,
    variables: {
      id: theuser.userId,
    },
  })) as {
    data: {
      getUser: User
    }
  }
  const user = response.data.getUser
  //@ts-ignore
  const docs = response.data.getUser.documents.items

  return (
    <Container size='responsive'>
      <SimpleGrid cols={{ base: 2, md: 2 }} spacing='md' my='md'>
        <ProfileCard user={user} />
        <CreateCard user={user} />
      </SimpleGrid>
      <Flex direction='column' h='100%' justify='space-between' gap='md'>
        <DocumentsTable data={docs} />
      </Flex>
    </Container>
  )
}

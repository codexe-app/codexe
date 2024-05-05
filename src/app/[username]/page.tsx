import Link from 'next/link'
import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { Paper, Title, Text, Container, Box, Flex, Grid, GridCol } from '@mantine/core'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getCurrentUser } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from '@/utils/amplifyserverutils'
import { getUser } from '@/graphql/queries'
import type { User } from '@/graphql/API'
import ProfileCard from './profile'
import CreateCard from './create'
import Chart from './chart'
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
  //console.log(`page props :`, props)
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
  console.log(`/username : `, user)

  return (
    <Container size='responsive' p='lg'>
      <Grid>
        <GridCol span={{ sm: 12, md: 12, lg: 4 }}>
          <ProfileCard user={user} />
        </GridCol>
        <GridCol span={{ sm: 12, md: 12, lg: 8 }}>
          <CreateCard user={user} />
        </GridCol>
        <GridCol span={12}>
          <Title order={3}>Documents</Title>
          <Flex direction='column' h='100%' justify='space-between' gap='md'>
            <DocumentsTable data={docs} />
          </Flex>
        </GridCol>
      </Grid>
    </Container>
  )
}

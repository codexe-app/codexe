import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { Container, Flex, SimpleGrid } from '@mantine/core'
import { listUsers } from '@/graphql/queries'
import type { User } from '@/graphql/API'
import ProfileCard from './profile'
import CreateCard from './create'
import DocumentsTable from './documents/table'
import DiagramsTable from './diagrams/table'

export default async function Page({ params }: { params: { username: string } }) {
  const variables = {
    filter: {
      username: { eq: params.username },
    },
  }

  const response = (await cookieBasedClient.graphql({
    query: listUsers,
    variables: variables,
  })) as {
    data: {
      listUsers: {
        items: User[]
      }
    }
  }

  const user = response.data.listUsers.items[0]
  const docs = user?.documents?.items
  const dias = user?.diagrams?.items
  
  return (
    <Container size='responsive'>
      <SimpleGrid cols={{ base: 2, md: 2 }} spacing='md' my='md'>
        <CreateCard user={user} />
        <ProfileCard user={user} />
      </SimpleGrid>
      <Flex direction='column' h='100%' justify='space-between' gap='md'>
        <DocumentsTable data={docs} />
        <DiagramsTable data={dias} />
      </Flex>
    </Container>
  )
}

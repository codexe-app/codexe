import { Link } from '@/utils/router-events'
import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { listTopics } from '@/graphql/queries'
import { Title, Container, Flex, Button } from '@mantine/core'
import { IconFilePlus } from '@tabler/icons-react'
import type { Topic } from '@/graphql/API'
import DataTable from './datatable'

export default async function Page() {
  
  const response = (await cookieBasedClient.graphql({
    query: listTopics,
  })) as {
    data: {
      listTopics: {
        items: Topic[]
      }
    }
  }

  const topics = response.data.listTopics.items

  return (
    <Container size='responsive' py='lg'>
      <DataTable data={topics} />     
    </Container>
  )
}

import { Link } from '@/utils/router-events'
import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { listDocuments } from '@/graphql/queries'
import { Title, Container, Flex, Button } from '@mantine/core'
import { IconFilePlus } from '@tabler/icons-react'
import type { Document } from '@/graphql/API'
import Docs from './table'
import DataTable from './datatable'

export default async function Page() {
  
  const response = (await cookieBasedClient.graphql({
    query: listDocuments,
  })) as {
    data: {
      listDocuments: {
        items: Document[]
      }
    }
  }

  const documents = response.data.listDocuments.items

  return (
    <Container size='responsive' py='xl'>
      <DataTable data={documents} />     
    </Container>
  )
}

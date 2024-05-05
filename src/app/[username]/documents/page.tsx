import Link from 'next/link'
import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { listDocuments } from '@/graphql/queries'
import { Title, Container, Flex, Button } from '@mantine/core'
import { IconFilePlus } from '@tabler/icons-react'
import type { Document } from '@/graphql/API'
import Docs from './table'

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
    <Container size='responsive'>
      <Flex align='end' justify='space-between'>
        <Title order={2}>Documents</Title>
        <Button variant='outline' component={Link} href='/documents/new' size='xs' mb='xs'>
          New Document
          <IconFilePlus size={14} />
        </Button>
      </Flex>
      <Docs data={documents} />
    </Container>
  )
}

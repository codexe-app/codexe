import Link from 'next/link'
import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { listDiagrams } from '@/graphql/queries'
import { Title, Container, Flex, Button } from '@mantine/core'
import { IconFilePlus } from '@tabler/icons-react'
import type { Diagram } from '@/graphql/API'
import Docs from './table'

export default async function Page() {
  const response = (await cookieBasedClient.graphql({
    query: listDiagrams,
  })) as {
    data: {
      listDiagrams: {
        items: Diagram[]
      }
    }
  }

  const diagrams = response.data.listDiagrams.items

  return (
    <Container size='responsive'>
      <Flex align='end' justify='space-between'>
        <Title order={2}>Diagrams</Title>
        <Button variant='outline' component={Link} href='/diagrams/new' size='xs' mb='xs'>
          New Diagram
          <IconFilePlus size={14} />
        </Button>
      </Flex>
      <Docs data={diagrams} />
    </Container>
  )
}

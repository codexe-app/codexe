import Link from 'next/link'
import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { fullDocuments } from '@/graphql/custom'
import { Button, Title, Flex, Container, Box } from '@mantine/core'
import type { Document } from '@/graphql/API'
import { IconFilePlus } from '@tabler/icons-react'
import DocForm from './form'

export default async function Page({ params }: { params: { slug: string } }) {
  const variables = {
    filter: {
      slug: { eq: params.slug },
    },
  }
  const response = (await cookieBasedClient.graphql({
    query: fullDocuments,
    variables: variables,
  })) as {
    data: {
      listDocuments: {
        items: Document[]
      }
    }
  }

  const document = response.data.listDocuments.items[0]

  return (
    <Container size='responsive'>
      <Flex align='end' justify='space-between'>
        <Title order={2}>Document</Title>
        <Button variant='outline' component={Link} href='/docs/new' size='xs' mb='xs'>
          New Document
          <IconFilePlus size={14} />
        </Button>
      </Flex>
      <DocForm data={document} />
    </Container>
  )
}

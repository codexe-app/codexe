import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { listDocuments } from '@/graphql/queries'
import { Container } from '@mantine/core'
import type { Document } from '@/graphql/API'
import Editor from '../editor'

export default async function Page({ params }: { params: { slug: string } }) {
  const variables = {
    filter: {
      slug: { eq: params.slug },
    },
  }
  const response = (await cookieBasedClient.graphql({
    query: listDocuments,
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
      <Editor document={document} markdown={document.content} new={false} />
    </Container>
  )
}

import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { Container } from '@mantine/core'
import { listDiagrams } from '@/graphql/queries'
import type { Diagram } from '@/graphql/API'
import DiagramCanvas from '../canvas'

export default async function Page({ params }: { params: { slug: string } }) {
  const variables = {
    filter: {
      slug: { eq: params.slug },
    },
  }
  const response = (await cookieBasedClient.graphql({
    query: listDiagrams,
    variables: variables,
  })) as {
    data: {
      listDiagrams: {
        items: Diagram[]
      }
    }
  }

  const diagram = response.data.listDiagrams.items[0]

  return (
    <Container size='responsive'>
      <DiagramCanvas diagram={diagram} new={false} tab='view' />
    </Container>
  )
}

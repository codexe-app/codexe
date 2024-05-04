import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { listDiagrams } from '@/graphql/queries'
import type { Diagram } from '@/graphql/API'
import Flowchart from './flow'

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

  const flow = response.data.listDiagrams.items[0]
  const nodes = flow.nodes!.items
  const edges = flow.edges!.items

  return <Flowchart flow={flow} nodes={nodes} edges={edges} />
}

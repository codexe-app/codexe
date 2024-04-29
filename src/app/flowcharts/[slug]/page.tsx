import Link from 'next/link'
import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { fullFlows } from '@/graphql/custom'
import { Button, Title, Flex, Container, Box } from '@mantine/core'
import type { Flow } from '@/graphql/API'
import { IconFilePlus } from '@tabler/icons-react'
import Flowchart from './flow'

export default async function Page({ params }: { params: { slug: string } }) {
  const variables = {
    filter: {
      slug: { eq: params.slug },
    },
  }
  const response = (await cookieBasedClient.graphql({
    query: fullFlows,
    variables: variables,
  })) as {
    data: {
      listFlows: {
        items: Flow[]
      }
    }
  }

  const flow = response.data.listFlows.items[0]
  const nodes = flow.nodes.items
  const edges = flow.edges.items

  return <Flowchart flow={flow} nodes={nodes} edges={edges} />
}

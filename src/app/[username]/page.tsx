import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { Container } from '@mantine/core'
import * as queries from '@/graphql/queries'
import type { User, Document } from '@/graphql/API'
import Dashboard from '@/components/dashboard'

var _ = require('lodash')

export default async function Page({ params }: { params: { username: string } }) {

  const dashboard = (await cookieBasedClient.graphql({
    query: queries.listUsers,
    variables: {
      filter: {
        username: { eq: params.username },
      },
    },
  })) as {
    data: {
      listUsers: {
        items: User[]
      }
    }
  }

  const user = dashboard.data.listUsers.items[0]
  const documents = user?.documents?.items
  const diagrams = user?.diagrams?.items
  //@ts-ignore
  const everything = documents?.concat(diagrams)
  const sorteverything = _.orderBy(everything, ['updatedAt'], ['desc'])
  const carousel = _.slice(sorteverything, 0, 12);
  const allpinned = _.filter(everything, (item : any) => item.pinned);
  const sortpinned = _.orderBy(allpinned, ['updatedAt'], ['asc'])
  var pinned = _.slice(sortpinned, 0, 1);
  pinned = pinned[0]

  const codexe = (await cookieBasedClient.graphql({
    query: queries.documentsByTopicIdAndCreatedAt,
    variables: {
      topicId: '63410a6f-0500-40bc-b25a-daf64f63eede',
      //@ts-ignore
      filter: {status: {eq: 'live'}}
    },
  })) as {
    data: {
      documentsByTopicIdAndCreatedAt: {
        items: Document[]
      }
    }
  }

  var codexedocs = codexe.data.documentsByTopicIdAndCreatedAt.items
  codexedocs = _.orderBy(codexedocs, ['ranking', 'updatedAt'], ['asc', 'desc']);

  return (
    <Container size='responsive' pb='xl'>
      <Dashboard user={user} data={sorteverything} carousel={carousel} pinned={pinned} docs={codexedocs}/>
    </Container>
  )
}

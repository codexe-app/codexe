import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { Container } from '@mantine/core'
import { listUsers } from '@/graphql/queries'
import type { User } from '@/graphql/API'
import Dashboard from '@/components/dashboard'

var _ = require('lodash')

export default async function Page({ params }: { params: { username: string } }) {
  const variables = {
    filter: {
      username: { eq: params.username },
    },
  }

  const response = (await cookieBasedClient.graphql({
    query: listUsers,
    variables: variables,
  })) as {
    data: {
      listUsers: {
        items: User[]
      }
    }
  }

  const user = response.data.listUsers.items[0]
  const documents = user?.documents?.items
  const diagrams = user?.diagrams?.items
  //@ts-ignore
  const everything = documents?.concat(diagrams)
  const sorted = _.orderBy(everything, ['updatedAt'], ['desc'])

  return (
    <Container size='responsive'>
      <Dashboard user={user} data={sorted} />
    </Container>
  )
}

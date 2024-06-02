import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { getCurrentUser } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from '@/utils/amplifyserverutils'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { listDiagrams } from '@/graphql/queries'
import { Container } from '@mantine/core'
import type { Diagram } from '@/graphql/API'
import DiagramCanvas from '../canvas'

async function AuthGetCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    })
    return currentUser
  } catch (error) {
    console.error(error)
    redirect('/')
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const theuser = await AuthGetCurrentUserServer()
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
      <DiagramCanvas diagram={diagram} new={false} tab='view' s3url={process.env.S3_URL} user={theuser}/>
    </Container>
  )
}

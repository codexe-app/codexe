import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { getCurrentUser } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from '@/utils/amplifyserverutils'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { listDocuments } from '@/graphql/queries'
import { Container } from '@mantine/core'
import type { Document } from '@/graphql/API'
import Editor from '../editor'

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
      <Editor document={document} markdown={document.content} new={false} user={theuser}/>
    </Container>
  )
}

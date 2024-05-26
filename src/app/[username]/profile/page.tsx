import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { Container } from '@mantine/core'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getCurrentUser } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from '@/utils/amplifyserverutils'
import type { User } from '@/graphql/API'
import UserForm from './form'

export const dynamic = 'force-dynamic'

const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    avatar {
      alt
      title
      caption
      description
      url
      key
      thumbnail
    }
    firstname
    lastname
    role
    email
    theme {
      config
      palette
      primary
      font
      heading
      mono
    }
  }
}
`

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

export default async function Page() {
  const theuser = await AuthGetCurrentUserServer()
  //console.log(theuser)
  const response = (await cookieBasedClient.graphql({
    query: getUser,
    variables: {
      id: theuser.userId,
    },
  })) as {
    data: {
      getUser: User
    }
  }
  const user = response.data.getUser

  return (
    <Container size='responsive' p='lg'>
      <UserForm user={user} s3url={process.env.S3_URL}/>
    </Container>
  )
}

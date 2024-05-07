import React from 'react'
import { cookies } from 'next/headers'
import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { getUser } from '@/graphql/queries'
import type { User } from '@/graphql/API'
import { redirect } from 'next/navigation'
import { getCurrentUser } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from '@/utils/amplifyserverutils'
import Shell from './shell'

export const dynamic = 'force-dynamic'

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

export default async function Layout(props: any) {
  const theuser = await AuthGetCurrentUserServer()
  if (props.params.username !== theuser.username) {
    redirect(`/${theuser.username}`)
  }

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
    <Shell user={user}>
      {props.children}
    </Shell>
  )
}

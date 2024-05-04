import React from 'react'
import { cookies } from 'next/headers'
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

export default async function Layout(props : any) {
  const theuser = await AuthGetCurrentUserServer()
  if ( props.params.username !== theuser.username )
  {
    redirect(`/${theuser.username}`)
  }
  return <Shell user={theuser}>{props.children}</Shell>
}

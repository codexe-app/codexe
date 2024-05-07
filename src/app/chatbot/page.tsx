
import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getCurrentUser } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from '@/utils/amplifyserverutils'
import { cookieBasedClient } from '@/utils/cookiebasedclient';
import { getUser } from '@/graphql/queries';
import type { User } from '@/graphql/API'
import { IconRobot } from '@tabler/icons-react'
import ChatBot from '@/components/chatbot'
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'

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

export default async function Page(props: any) {
  const theuser = await AuthGetCurrentUserServer()
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
  const cid = nanoid()
  const chat = {
    new: true,
    id: cid,
    name: 'New Chat Session',
    path: '',
    userId: user.id,
    createdAt: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
    updatedAt: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
    __typename: 'Chat'
  }

  return (
    <React.Fragment>
        <ChatBot id={cid} chat={chat} user={user}/>
    </React.Fragment>
  )
}

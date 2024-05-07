import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getCurrentUser } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from '@/utils/amplifyserverutils'
import { cookieBasedClient } from '@/utils/cookiebasedclient';
import ChatBot from '@/components/chatbot'
import { messagesByChatIdAndCreatedAt, getChat, getUser } from '@/graphql/queries';
import type { Message, User } from '@/graphql/API'

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

export default async function ChatPage({ params }: { params: { uid: string } }) {
  const theuser = await AuthGetCurrentUserServer()
  const chatcall = (await cookieBasedClient.graphql({
    query: getChat,
    variables: { id: params.uid },
  }))
  const chat = chatcall.data.getChat
  console.log(chat)
  const msgscall = (await cookieBasedClient.graphql({
    query: messagesByChatIdAndCreatedAt,
    variables: { chatId: params.uid },
  }))
  const messages = msgscall.data.messagesByChatIdAndCreatedAt?.items!;
  console.log(msgscall)
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
  
  // @ts-ignore
  return <ChatBot id={params.uid} chat={chat} initialMessages={messages as Message[]} user={user} />
}
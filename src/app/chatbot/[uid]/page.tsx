import { cookieBasedClient } from '@/utils/cookieBasedClient';
import ChatWrapper from '../_components/chatbot'
import { messagesByChatIdAndCreatedAt, getChat } from '@/graphql/queries';
import type { Message } from '@/graphql/API'

export default async function ChatPage({ params }: { params: { uid: string } }) {
  const chatcall = (await cookieBasedClient.graphql({
    query: getChat,
    variables: { id: params.uid },
  }))
  const chat = chatcall.data.getChat
  const msgscall = (await cookieBasedClient.graphql({
    query: messagesByChatIdAndCreatedAt,
    variables: { chatId: params.uid },
  }))
  const messages = msgscall.data.messagesByChatIdAndCreatedAt?.items!;
  // @ts-ignore
  return <ChatWrapper id={params.uid} chat={chat} initialMessages={messages as Message[]} />
}
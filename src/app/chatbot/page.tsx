import ChatWrapper from '@/components/chatbot'

const chat = {
  "id": "ab1bdbbf-9161-42b9-8dd3-f8e88d35d2f0",
  "title": "New Chat Session",
  "path": "",
  "userId": "",
  "createdAt": "2023-12-10T22:00:22.766Z",
  "updatedAt": "2023-12-10T22:00:22.766Z",
}

export default function Page() {
  // @ts-ignore
  return <ChatWrapper id='new' chat={chat}/>
}

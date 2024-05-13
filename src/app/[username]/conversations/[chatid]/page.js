import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { getChat } from '@/graphql/queries'
import { Container, Stack, Text, Divider } from '@mantine/core'
import ChatMessage from '@/components/chatbot/message'
import dayjs from 'dayjs'

export default async function Page({ params }) {
  const variables = {
    id: params.chatid,
  }
  const response = await cookieBasedClient.graphql({
    query: getChat,
    variables: variables,
  })

  const messages = response.data.getChat.messages.items

  return (
    <Container size='responsive'>
      <Stack>
        {messages.map((message, index) => (
          <Stack key={index}>
            <Divider
              label={
                <Text c='purple' size='xs'>
                  {dayjs(message.createdAt).format('dddd, h:mm a')}
                </Text>
              }
              color='var(--mantine-color-gray-light)'
            />
            <ChatMessage message={message} />
          </Stack>
        ))}
      </Stack>
    </Container>
  )
}

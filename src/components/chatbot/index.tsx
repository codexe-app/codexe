'use client'
import { Suspense, useState } from 'react'
import { useChat } from 'ai/react'
import { useToggle } from '@mantine/hooks'
import { generateClient } from 'aws-amplify/api'
import { createMessage, createChat } from '@/graphql/mutations'
import { IconDeviceFloppy, IconEdit } from '@tabler/icons-react'
import { Group, Stack, TextInput, Text, ActionIcon, Box, LoadingOverlay, Card, Title } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { modals } from '@mantine/modals'
import dayjs from 'dayjs'
import ChatPanel from './panel'
import ChatHistory from './history'
import ChatList from './list'
import './overrides.css'
var _ = require('lodash')

const Shaped = () => {
  return (
    <svg width='120' height='74' viewBox='0 0 120 74' fill='var(--mantine-primary-color-2)' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill='var(--mantine-primary-color-2)'
        d='M74.7921 0L103.987 73.2312H120L90.8055 0H74.7921ZM27.5762 44.2496L37.5632 18.5048L47.5503 44.2496H27.5762ZM29.1945 0L0 73.2312H16.3328L22.2952 57.8567H52.8313L58.7937 73.2312H75.1264L45.9319 0H29.1945Z'
      />
    </svg>
  )
}

export default function ChatBot(props: any) {
  const { id, initialMessages, chat, user } = props
  const [name, setName] = useState(chat.name)
  const [locked, setLocked] = useToggle([true, false])
  const client = generateClient()
  const { messages, append, reload, stop, isLoading, input, setInput } = useChat({
    api: '/api/anthropic',
    // @ts-ignore
    initialMessages,
    id,
    body: {
      id,
    },
    onResponse(response) {
      //console.log(response);
      if (response.status === 401) {
        notifications.show({ message: `CHATAPI ERROR: ${response.statusText}` })
      }
    },
    onFinish(message) {
      recordMessage(message.content, message.role)
      //console.log(message);
    },
  })

  async function chatTitle(chat: any) {
    chat.name = name
    let cleaned = _.omit(chat, ['new', 'updatedAt', '__typename'])
    await client.graphql({
      query: createChat,
      variables: { input: cleaned },
    })
  }

  async function recordMessage(content: string, role: string) {
    await client.graphql({
      query: createMessage,
      variables: { input: { chatId: chat.id, content: content, role: role } },
    })
  }

  return (
    <Card style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 60px)', backgroundColor: 'var(--mantine-primary-color-1)' }}>
      <Card.Section>
        <Group wrap='nowrap' h='60px'>
          <Box w='20px'>
            <Shaped />
          </Box>
          <Stack p='sm' gap='0'>
            <Title order={4} c='var(--mantine-primary-color-7)'>
              Welcome {user.username}
            </Title>
            <Text c='var(--mantine-primary-color-7)' size='sm'>
              An AI assistant powered by Anthropic's Claude via AWS Bedrock.
            </Text>
          </Stack>
        </Group>
      </Card.Section>
      {messages.length > 0 && (
        <Card.Section bg='var(--mantine-color-body)'>
          <TextInput
            className='chattitle'
            // @ts-ignore
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            variant='filled'
            size='lg'
            px='0'
            placeholder='Input placeholder'
            disabled={locked}
            rightSection={
              <Group wrap='nowrap' gap='2'>
                <ActionIcon variant='transparent' size='sm' onClick={() => setLocked()}>
                  <IconEdit />
                </ActionIcon>
                <ActionIcon variant='transparent' size='sm' disabled={locked} onClick={() => chatTitle(chat)}>
                  <IconDeviceFloppy />
                </ActionIcon>
              </Group>
            }
          />
        </Card.Section>
      )}
      <Card.Section
        bg='var(--mantine-color-body)'
        style={{
          overflowY: 'scroll',
          flex: 1,
        }}>
        <Suspense fallback={<LoadingOverlay visible={true} zIndex={998} loaderProps={{ size: 'xl', type: 'dots' }} overlayProps={{ blur: 4, backgroundOpacity: 0.6 }} />}>
          <Box px='xs'>{messages.length ? <ChatList messages={messages} /> : <ChatHistory userid={user.id} />}</Box>
        </Suspense>
      </Card.Section>
      <Card.Section bg='var(--mantine-primary-color-1)' pt='xs' pb='lg' px='sm'>
        <ChatPanel id={id} isLoading={isLoading} stop={stop} append={append} reload={reload} messages={messages} input={input} setInput={setInput} />
      </Card.Section>
    </Card>
  )
}

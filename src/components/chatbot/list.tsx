'use client'
import { Stack, Text, Divider } from '@mantine/core'
import type { Message } from 'ai/react'
import dayjs from 'dayjs'
import ChatMessage from './message'

var _ = require('lodash')

type ChatlistProps = {
  messages: Message[]
}

export default function ChatList({ messages }: ChatlistProps) {
  return (
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
  )
}

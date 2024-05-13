'use client'
import React, { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import { generateClient } from 'aws-amplify/api'
import { chatsByUserIdAndCreatedAt, messagesByChatIdAndCreatedAt } from '@/graphql/queries'
import { deleteMessage, deleteChat } from '@/graphql/mutations'
import { useRouter } from 'next/navigation'
import { modals } from '@mantine/modals'
import { Chat } from '@/graphql/API'
import { Box, Group, ActionIcon, Divider, Stack, Title, Text, UnstyledButton, Badge, LoadingOverlay } from '@mantine/core'
import { IconCalendarClock, IconTrash, IconDeviceAudioTape } from '@tabler/icons-react'
import dayjs from 'dayjs'

export default function ChatHistory(props: any) {
  //console.log(`ChatHistory Props:`, props)
  const { user } = props
  const [chats, setChats] = useState<Chat[]>([])
  const client = generateClient()
  const router = useRouter()

  const openModal = (chat: any) =>
    modals.openConfirmModal({
      title: `Deleting ${chat.name}`,
      children: (
        <Text size='sm'>
          Please confirm you want to delete {chat.name} from {dayjs(chat.createdAt).format('MMM D, YYYY h:mm a')}
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => trashChatMsgs(chat),
    })

  async function listChatHistory() {
    try {
      const chatcall = (await client.graphql({
        query: chatsByUserIdAndCreatedAt,
        variables: { userId: user.id },
      })) as {
        data: {
          chatsByUserIdAndCreatedAt: {
            items: Chat[]
          }
        }
      }
      const chatlist = chatcall.data.chatsByUserIdAndCreatedAt.items
      setChats(chatlist)
      //console.log(chatlist)
    } catch (error) {
      console.error(error)
    }
  }

  async function trashChatMsgs(chat: any) {
    try {
      const msgcall = await client.graphql({
        query: messagesByChatIdAndCreatedAt,
        variables: { chatId: chat.id },
      })
      const messages = msgcall.data.messagesByChatIdAndCreatedAt?.items!
      messages.forEach((msg) => {
        trashMsg(msg)
      })
      trashChat(chat)
      router.refresh
    } catch (error) {
      console.error(error)
    }
  }

  async function trashMsg(msg: any) {
    try {
      await client.graphql({
        query: deleteMessage,
        variables: { input: { id: msg.id } },
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function trashChat(chat: any) {
    try {
      await client.graphql({
        query: deleteChat,
        variables: { input: { id: chat.id } },
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    listChatHistory()
  }, [])

  return (
    <Box>
      <Group py='sm' gap='xs'>
        <IconDeviceAudioTape size={32} color='var(--mantine-primary-color-filled)' />
        <Title order={3}>Saved Conversations</Title>
      </Group>
      <Divider />
      {chats &&
        chats.map((chat, i) => (
          <Group key={chat.id} py='sm' justify='space-between' wrap='nowrap'>
            <Stack gap='xs'>
              <Group mb={0} justify='space-between' wrap='nowrap'>
                <UnstyledButton component={Link} href={`/${user.username}/conversations/${chat.id}`}>
                  <Text fw={500} lh={1}>
                    {chat.name}{' '}
                  </Text>
                </UnstyledButton>
                <Group gap='xs'>
                  <Text size='xs' fw={500} lh={1} c='grey'>
                    Messages
                  </Text>
                  <Badge size='sm' radius='lg'>
                    {chat.messages?.items.length}
                  </Badge>
                </Group>
              </Group>
              <Group gap={2}>
                <IconCalendarClock color='gray' size={14} />
                <Text c='dimmed' size='xs'>
                  {dayjs(chat.createdAt).format('MMM D, YYYY h:mm a')}
                </Text>
              </Group>
            </Stack>
            <ActionIcon variant='transparent' size='sm' onClick={() => openModal(chat)}>
              <IconTrash />
            </ActionIcon>
          </Group>
        ))}
    </Box>
  )
}

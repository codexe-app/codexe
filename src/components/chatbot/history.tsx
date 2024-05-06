'use client';
import React, { Suspense, useState, useEffect } from 'react';
import Link from 'next/link'
import { generateClient } from 'aws-amplify/api';
import { listChats, messagesByChatIdAndCreatedAt } from '@/graphql/queries';
import { deleteMessage, deleteChat } from '@/graphql/mutations';
import { useRouter } from 'next/navigation';
import { modals } from '@mantine/modals';
import { Chat } from '@/graphql/API';
import { Box, Group, ActionIcon, Divider, Stack, Text, UnstyledButton, Badge, LoadingOverlay } from '@mantine/core';
import { IconCalendarClock, IconTrash } from '@tabler/icons-react';
import { useLocalStorage } from '@mantine/hooks';
import dayjs from 'dayjs';

export default function ChatHistory() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [mode, setMode] = useLocalStorage<'guest' | 'preview' | 'admin'>({
    key: 'mode',
  });
  const client = generateClient();
  const router = useRouter();

  const openModal = (chat: any) =>
    modals.openConfirmModal({
      title: `Deleting ${chat.name}`,
      children: (
        <Text size="sm">
          Please confirm you want to delete {chat.name} from{' '}
          {dayjs(chat.createdAt).format('MMM D, YYYY h:mm a')}
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => trashChatMsgs(chat),
    });

  async function getChatHistory() {
    try {
      const chatcall = (await client.graphql({
        query: listChats,
        variables: {
          filter: {
            _deleted: { ne: true },
          },
        },
      })) as {
        data: {
          listChats: {
            items: Chat[];
          };
        };
      };
      const chathist = chatcall.data.listChats.items;
      setChats(chathist);
    } catch (error) {
      console.error(error);
    }
  }

  async function trashChatMsgs(chat: any) {
    try {
      const msgcall = await client.graphql({
        query: messagesByChatIdAndCreatedAt,
        variables: { chatId: chat.id },
      });
      const messages = msgcall.data.messagesByChatIdAndCreatedAt?.items!;
      messages.forEach((msg) => {
        trashMsg(msg);
      });
      trashChat(chat);
      router.push('/chatbot');
    } catch (error) {
      console.error(error);
    }
  }

  async function trashMsg(msg: any) {
    try {
      await client.graphql({
        query: deleteMessage,
        variables: { input: { id: msg.id, _version: msg._version } },
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function trashChat(chat: any) {
    try {
      await client.graphql({
        query: deleteChat,
        variables: { input: { id: chat.id, _version: chat._version } },
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getChatHistory();
  }, []);

  return (
    <Suspense
        fallback={
          <LoadingOverlay
            visible={true}
            zIndex={998}
            loaderProps={{ size: 'xl', type: 'dots' }}
            overlayProps={{ blur: 4, backgroundOpacity: 0.6 }}
          />
        }
      >
      {chats &&
        chats.map((chat, i) => (
          <Box key={chat.id} mt='xs'>
            <Group mb="sm" justify="space-between" wrap="nowrap">
              <Stack gap={2}>
                <UnstyledButton component={Link} href={`/chatbot/${chat.id}`}>
                  <Text fw={500} lh={1}>{chat.name} </Text>
                </UnstyledButton>
                <Group gap={2} mt={4}>                
                  <Badge size='xs' radius='xl'>{chat.messages?.items.length}</Badge>
                  <Text size='xs' fw={400} lh={1}>Messages</Text>
                </Group>
                <Group gap={2}>
                  <IconCalendarClock color="gray" size={14} />
                  <Text c="dimmed" size="xs">
                    {dayjs(chat.createdAt).format('MMM D, YYYY h:mm a')}
                  </Text>
                </Group>
              </Stack>
                {mode == 'admin' && (
                  <ActionIcon variant="transparent" size="sm" onClick={() => openModal(chat)}>
                    <IconTrash />
                  </ActionIcon>
                )}
            </Group>
            <Divider />
          </Box>
        ))}
    </Suspense>
  );
}

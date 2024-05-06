'use client';
import { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createChat } from '@/graphql/mutations';
import { modals } from '@mantine/modals';
import { useToggle } from '@mantine/hooks';
import { IconDeviceFloppy, IconEdit } from '@tabler/icons-react';
import { Group, Stack, TextInput, Text, ActionIcon, Divider } from '@mantine/core';
import ChatMessage from './message';
import type { Message } from 'ai/react';
import type { Chat } from '@/graphql/API'
import dayjs from 'dayjs';
var _ = require('lodash')

type ChatlistProps = {
  chat: Chat;
  messages: Message[];
}

export default function ChatList({ chat, messages }: ChatlistProps) {
  const [title, setTitle] = useState(chat.name);
  const [locked, setLocked] = useToggle([true, false]);
  const client = generateClient();

  async function chatTitle(chat: any) {
    console.log(chat)
    let cleaned = _.omit(chat, ['new', 'updatedAt', '__typename'])

    await client.graphql({
      query: createChat,
      variables: { input: cleaned },
    });
  }

  const openModal = (chat: any) =>
    modals.openConfirmModal({
      title: `Changing ${chat.name}`,
      children: (
        <Text size="sm">
          Please confirm you want change {chat.name} from{' '}
          {dayjs(chat.createdAt).format('MMM D, YYYY h:mm a')}
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => chatTitle(chat),
    });

  return (
    <Stack>
      <TextInput
        className="chattitle"
        // @ts-ignore
        value={title}
        onChange={(event) => setTitle(event.currentTarget.value)}
        variant="filled"
        size="lg"
        px='xl'
        placeholder="Input placeholder"
        disabled={locked}
        rightSection={
          <Group wrap="nowrap" gap="2">
            <ActionIcon variant="transparent" size="sm" onClick={() => setLocked()}>
              <IconEdit />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              size="sm"
              disabled={locked}
              onClick={() => openModal(chat)}
            >
              <IconDeviceFloppy />
            </ActionIcon>
          </Group>
        }
      />
      {messages.map((message, index) => (
        <Stack key={index}>
          <Divider
            label={<Text c="purple" size='xs'>{dayjs(message.createdAt).format('dddd, h:mm a')}</Text>}
            color="var(--mantine-color-gray-light)"
          />
          <ChatMessage message={message} />
        </Stack>
      ))}
    </Stack>
  );
}
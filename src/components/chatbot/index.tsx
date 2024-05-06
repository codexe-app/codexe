'use client';
import { useChat } from 'ai/react';
import { generateClient } from 'aws-amplify/api';
import { createMessage } from '@/graphql/mutations';
import { useDisclosure } from '@mantine/hooks';
import { Container, Drawer, Space, Title, Group, Divider } from '@mantine/core';
import { IconDeviceAudioTape } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import Welcome from './welcome';
import ChatHistory from './history';
import ChatPanel from './panel';
import ChatList from './list';
import type { Chat, Message } from '@/graphql/API';
import classes from './chat.module.css';
import './overrides.css';

const client = generateClient();

type ChatProps = {
  chat: Chat;
  initialMessages?: Message[];
  id: string;
};

export default function ChatWrapper({ id, initialMessages, chat }: ChatProps) {
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
        notifications.show({ message: `CHATAPI ERROR: ${response.statusText}` });
      }
    },
    onFinish(message) {
      recordMessage(message.content, message.role);
      //console.log(message);
    },
  });
  const [opened, { open, close }] = useDisclosure(false);

  async function recordMessage(content: string, role: string) {
    await client.graphql({
      query: createMessage,
      variables: { input: { chatId: id, content: content, role: role } },
    });
  }

  function toggleDrawer() {
    if (opened) {
      close();
    } else {
      open();
    }
  }

  return (
    <Container pt="lg" size="responsive" className={classes.chatwrapper}>
      <Drawer opened={opened} onClose={close} withCloseButton={false} size="280">
        <Space h={36} />
        <Group mb="sm" gap="xs">
          <IconDeviceAudioTape size={32} color="var(--mantine-color-anchor)" />
          <Title order={3}>Conversations</Title>
        </Group>
        <Divider />
        <ChatHistory />
      </Drawer>
      <Container size="md" className={classes.msgscroll}>
        {messages.length ? <ChatList chat={chat} messages={messages} /> : <Welcome />}
      </Container>
      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
        drawer={toggleDrawer}
      />
    </Container>
  );
}

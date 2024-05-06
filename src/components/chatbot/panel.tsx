import React, { useEffect } from 'react';
import { type UseChatHelpers } from 'ai/react';
import { generateClient } from 'aws-amplify/api';
import { createMessage } from '@/graphql/mutations';
import { Hub } from 'aws-amplify/utils';
import {
  Affix,
  Button,
  Paper,
  Container,
  Group,
  ActionIcon,
  UnstyledButton,
} from '@mantine/core';
import {
  IconRefresh,
  IconSquareX,
  IconArrowNarrowDown,
  IconLayoutSidebarLeftExpandFilled,
} from '@tabler/icons-react';
import { PromptForm } from './prompt-form';
import { useLocalStorage, useForceUpdate } from '@mantine/hooks';

const client = generateClient();

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    'append' | 'isLoading' | 'reload' | 'messages' | 'stop' | 'input' | 'setInput'
  > {
  id: string;
  title?: string;
  drawer: any;
}

export default function ChatPanel({
  id,
  title,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages,
  drawer,
}: ChatPanelProps) {
  const [mode, setMode] = useLocalStorage<'guest' | 'preview' | 'admin'>({
    key: 'mode',
  });
  const forceUpdate = useForceUpdate();

  async function recordMessage(value: string) {
    await client.graphql({
      query: createMessage,
      variables: { input: { chatId: id, content: value, role: 'user' } },
    });
  }

  useEffect(() => {
    Hub.listen('auth', ({ payload }) => {
      switch (payload.event) {
        case 'signedIn':
          forceUpdate;
          break;
        case 'signedOut':
          forceUpdate;
          break;
      }
    });
  }, []);

  return (
      <Container size="md">
        <Group justify="space-between" mb="sm">
          <ActionIcon variant="transparent" onClick={drawer} size={36}>
            <IconLayoutSidebarLeftExpandFilled size={36}/>
          </ActionIcon>
          {mode == 'admin' &&
            (isLoading ? (
              <Button size="sm" variant="filled" onClick={() => stop()} className="bg-background">
                <IconSquareX />
                Stop generating
              </Button>
            ) : (
              messages?.length >= 2 && (
                <Button size="sm" variant="filled" onClick={() => reload()}>
                  <IconRefresh />
                  Regenerate response
                </Button>
              )
            ))}
          <ActionIcon
            variant="filled"
            size="md"
            aria-label="Gradient action icon"
            radius="xl"
            onClick={() =>
              window.scrollTo({
                top: document.body.offsetHeight,
                behavior: 'smooth',
              })
            }
          >
            <IconArrowNarrowDown />
          </ActionIcon>
        </Group>
            <PromptForm
              onSubmit={async (value) => {
                recordMessage(value);
                await append({
                  id,
                  content: value,
                  role: 'user',
                });
                //console.log(`${value} user ${id}`);
              }}
              input={input}
              setInput={setInput}
              isLoading={isLoading}
            />

      </Container>
  );
}

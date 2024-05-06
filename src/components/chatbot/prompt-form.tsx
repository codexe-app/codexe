import * as React from 'react';
import { Textarea, Button, ActionIcon } from '@mantine/core';
import { UseChatHelpers } from 'ai/react';
import { generateClient } from 'aws-amplify/api';
import { createChat, createMessage } from '@/graphql/mutations';
import { useEnterSubmit } from './use-enter-submit';
import { IconArrowRight, IconPlus } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const client = generateClient();

export interface PromptProps extends Pick<UseChatHelpers, 'input' | 'setInput'> {
  onSubmit: (value: string) => void;
  isLoading: boolean;
}

export function PromptForm({ onSubmit, input, setInput, isLoading }: PromptProps) {
  const { formRef, onKeyDown } = useEnterSubmit();
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  async function recordChat() {
    const chatcall = await client.graphql({
      query: createChat,
      variables: { input: { name: 'Chat Log' } },
    });
    const chatid = chatcall.data.createChat?.id;
    router.push(`/chat/${chatid}`);
    router.refresh();
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!input?.trim()) {
          return;
        }
        setInput('');
        onSubmit(input);
      }}
      ref={formRef}
    >
      <Textarea
        leftSection={
          <ActionIcon
            size={28}
            radius="xl"
            variant="filled"
            onClick={(e) => {
              e.preventDefault();
              recordChat();
            }}
          >
            <IconPlus style={{ width: 24, height: 24 }} stroke={1.5} />
          </ActionIcon>
        }
        ref={inputRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        rows={1}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Send a message."
        spellCheck={false}
        rightSectionWidth={32}
        rightSection={
          <ActionIcon
            size={28}
            radius="xl"
            variant="filled"
            type="submit"
            disabled={isLoading || input === ''}
          >
            <IconArrowRight style={{ width: 24, height: 24 }} stroke={1.5} />
          </ActionIcon>
        }
      />
    </form>
  );
}

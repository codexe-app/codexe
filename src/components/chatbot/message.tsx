import { Message } from 'ai';
import { Group, Avatar, ActionIcon, Paper, Code } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconMan, IconRobot, IconCheck, IconCopy } from '@tabler/icons-react';
import Markdown from 'react-markdown';
import { CodeHighlight, InlineCodeHighlight } from '@mantine/code-highlight';
import '@mantine/code-highlight/styles.css';

export interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message, ...props }: ChatMessageProps) {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Group justify="space-between" my="md" wrap="nowrap" align="start">
      {message.role === 'user' ? (
        <Avatar radius="xl" variant="default">
          <IconMan />
        </Avatar>
      ) : (
        <Avatar radius="xl" variant="filled" color="purple">
          <IconRobot />
        </Avatar>
      )}
      <Paper withBorder px="lg" w="100%" bg={message.role === 'user' ? 'white' : 'paper'}>
        <Markdown
          children={message.content}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <CodeHighlight
                  code={String(children).replace(/\n$/, '')}
                  language={match[1]}
                />
              ) : (
                <InlineCodeHighlight
                  code={String(children).replace(/\n$/, '')}
                />
              );
            },
          }}
        />
      </Paper>
      <ActionIcon variant="subtle" size="xs" onClick={() => clipboard.copy(message.content)}>
        {clipboard.copied ? <IconCheck /> : <IconCopy />}
      </ActionIcon>
    </Group>
  );
}

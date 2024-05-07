import React, { useEffect } from 'react'
import { Textarea, ActionIcon } from '@mantine/core'
import { UseChatHelpers } from 'ai/react'
import { useEnterSubmit } from './use-enter-submit'
import { IconArrowRight } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

export interface PromptProps extends Pick<UseChatHelpers, 'input' | 'setInput'> {
  onSubmit: (value: string) => void
  isLoading: boolean
}

export function PromptForm({ onSubmit, input, setInput, isLoading }: PromptProps) {
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        if (!input?.trim()) {
          return
        }
        setInput('')
        onSubmit(input)
      }}
      ref={formRef}>
      <Textarea
        ref={inputRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        autosize
        minRows={1}
        maxRows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Send a message.'
        spellCheck={false}
        rightSectionWidth={32}
        rightSection={
          <ActionIcon size={28} radius='xl' variant='filled' type='submit' disabled={isLoading || input === ''}>
            <IconArrowRight style={{ width: 24, height: 24 }} stroke={1.5} />
          </ActionIcon>
        }
      />
    </form>
  )
}

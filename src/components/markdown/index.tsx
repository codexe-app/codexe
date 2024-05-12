import React from 'react'
import { useLinkClass } from '@/hooks'
import type { CmdKey } from '@milkdown/core'
import { editorViewCtx, parserCtx } from '@milkdown/core'
import { redoCommand, undoCommand } from '@milkdown/plugin-history'
import { toggleEmphasisCommand, toggleStrongCommand, wrapInBlockquoteCommand, wrapInBulletListCommand, wrapInOrderedListCommand } from '@milkdown/preset-commonmark'
import { insertTableCommand, toggleStrikethroughCommand } from '@milkdown/preset-gfm'
import { Slice } from '@milkdown/prose/model'
import { Milkdown as Editor } from '@milkdown/react'
import { callCommand } from '@milkdown/utils'
import clsx from 'clsx'
import type { FC, RefObject } from 'react'
import { useImperativeHandle } from 'react'
import { usePlayground } from './usePlayground'
import { Flex, ActionIcon, Container,Box, rem } from '@mantine/core'
import { IconItalic, IconTablePlus, IconStrikethrough, IconBlockquote, IconListNumbers, IconBold, IconList, IconArrowForward, IconArrowBackUp } from '@tabler/icons-react'
import './playground.css'

const Button: FC<{ icon: string; onClick?: () => void }> = ({ icon, onClick }) => {
  const linkClass = useLinkClass()
  return (
    <div
      className={clsx('flex h-10 w-10 cursor-pointer items-center justify-center rounded', linkClass(false))}
      onMouseDown={(e) => {
        onClick?.()
        e.preventDefault()
      }}>
      <span className='material-symbols-outlined !text-base'>{icon}</span>
    </div>
  )
}

interface MilkdownProps {
  content: string
  onChange: (markdown: string) => void
  milkdownRef: RefObject<MilkdownRef>
}

export interface MilkdownRef {
  update: (markdown: string) => void
}

export const MarkdownEditor: FC<MilkdownProps> = ({ content, onChange, milkdownRef }) => {
  //console.log(`PlaygroundMilkdown: `, content)
  const { loading, get } = usePlayground(content, onChange)

  useImperativeHandle(milkdownRef, () => ({
    update: (markdown: string) => {
      if (loading) return
      const editor = get()
      editor?.action((ctx) => {
        const view = ctx.get(editorViewCtx)
        const parser = ctx.get(parserCtx)
        const doc = parser(markdown)
        if (!doc) return
        const state = view.state
        view.dispatch(state.tr.replace(0, state.doc.content.size, new Slice(doc.content, 0, 0)))
      })
    },
  }))

  function call<T>(command: CmdKey<T>, payload?: T) {
    return get()?.action(callCommand(command, payload))
  }

  return (
    <React.Fragment>
      <Flex pos='fixed' top='96px' left='0'>
        <ActionIcon.Group orientation='vertical'>
          <ActionIcon variant='default' size='lg' aria-label='undo' onClick={() => call(undoCommand.key)}>
            <IconArrowBackUp style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='default' size='lg' aria-label='redo' onClick={() => call(redoCommand.key)}>
            <IconArrowForward style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='default' size='lg' aria-label='Bold' onClick={() => call(toggleStrongCommand.key)}>
            <IconBold style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='default' size='lg' aria-label='format_italic' onClick={() => call(toggleEmphasisCommand.key)}>
            <IconItalic style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='default' size='lg' aria-label='format_strikethrough' onClick={() => call(toggleStrikethroughCommand.key)}>
            <IconStrikethrough style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='default' size='lg' aria-label='table' onClick={() => call(insertTableCommand.key)}>
            <IconTablePlus style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='default' size='lg' aria-label='format_list_bulleted' onClick={() => call(wrapInBulletListCommand.key)}>
            <IconList style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='default' size='lg' aria-label='format_list_numbered' onClick={() => call(wrapInOrderedListCommand.key)}>
            <IconListNumbers style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='default' size='lg' aria-label='format_quote' onClick={() => call(wrapInBlockquoteCommand.key)}>
            <IconBlockquote style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
        </ActionIcon.Group>
      </Flex>
      <div className='h-full overflow-auto overscroll-none'>
        <Editor />
      </div>
    </React.Fragment>
  )
}

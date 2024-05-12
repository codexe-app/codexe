import { commandsCtx, editorViewCtx } from '@milkdown/core'
import { Ctx, MilkdownPlugin } from '@milkdown/ctx'
import { slashFactory } from '@milkdown/plugin-slash'
import { createCodeBlockCommand, insertHrCommand, wrapInHeadingCommand } from '@milkdown/preset-commonmark'
import { ReactNode } from 'react'
import { Group, Title, Text, Avatar } from '@mantine/core'
import { IconH1, IconH2, IconH3, IconH4, IconCode, IconBorderHorizontal } from '@tabler/icons-react'

type ConfigItem = {
  renderer: ReactNode
  onSelect: (ctx: Ctx) => void
}

const removeSlash = (ctx: Ctx) => {
  // remove slash
  const view = ctx.get(editorViewCtx)
  view.dispatch(view.state.tr.delete(view.state.selection.from - 1, view.state.selection.from))
}

export const slash = slashFactory('slashMenu') satisfies MilkdownPlugin[]

export const config: Array<ConfigItem> = [
  {
    onSelect: (ctx: Ctx) => ctx.get(commandsCtx).call(wrapInHeadingCommand.key, 1),
    renderer: (
      <Group gap={2}>
        <Avatar color='primary' radius='xs'>
          <IconH1 size='1.5rem' />
        </Avatar>
        <Title order={6} ml='xs'>
          Large Heading
        </Title>
      </Group>
    ),
  },
  {
    onSelect: (ctx: Ctx) => ctx.get(commandsCtx).call(wrapInHeadingCommand.key, 2),
    renderer: (
      <Group gap={2}>
        <Avatar color='primary' radius='xs'>
          <IconH2 size='1.5rem' />
        </Avatar>
        <Title order={6} ml='xs'>
          Medium Heading
        </Title>
      </Group>
    ),
  },
  {
    onSelect: (ctx: Ctx) => ctx.get(commandsCtx).call(wrapInHeadingCommand.key, 3),
    renderer: (
      <Group gap={2}>
        <Avatar color='primary' radius='xs'>
          <IconH3 size='1.5rem' />
        </Avatar>
        <Title order={6} ml='xs'>
          Small Heading
        </Title>
      </Group>
    ),
  },
  {
    onSelect: (ctx: Ctx) => ctx.get(commandsCtx).call(createCodeBlockCommand.key),
    renderer: (
      <Group gap={2}>
        <Avatar color='primary' radius='xs'>
          <IconCode size='1.5rem' />
        </Avatar>
        <Title order={6} ml='xs'>
          Code Block
        </Title>
      </Group>
    ),
  },
  {
    onSelect: (ctx: Ctx) => ctx.get(commandsCtx).call(insertHrCommand.key),
    renderer: (
      <Group gap={2} component='a'>
        <Avatar color='primary' radius='xs'>
          <IconBorderHorizontal size='1.5rem' />
        </Avatar>
        <Title order={6} ml='xs'>
          Horizonal Rule
        </Title>
      </Group>
    ),
  },
].map((item) => ({
  ...item,
  onSelect: (ctx: Ctx) => {
    removeSlash(ctx)
    item.onSelect(ctx)
  },
}))

import { commandsCtx } from '@milkdown/core'
import { BlockProvider } from '@milkdown/plugin-block'
import { turnIntoTextCommand, wrapInHeadingCommand } from '@milkdown/preset-commonmark'
import { useInstance } from '@milkdown/react'
import { usePluginViewContext } from '@prosemirror-adapter/react'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { ActionIcon, Container, rem } from '@mantine/core'
import { IconGrain, IconFiles } from '@tabler/icons-react'

export const Block = () => {
  const { view } = usePluginViewContext()
  const blockProvider = useRef<BlockProvider>()
  const [element, setElement] = useState<HTMLDivElement | null>(null)
  const [loading, get] = useInstance()
  const [showMenu, setShowMenu] = useState(true)

  useEffect(() => {
    if (element && !loading) {
      blockProvider.current ??= new BlockProvider({
        ctx: get().ctx,
        content: element,
        tippyOptions: {
          zIndex: 20,
          offset: [0, 8],
          appendTo: document.body,
          onBeforeUpdate: () => setShowMenu(false),
          onClickOutside: () => setShowMenu(false),
          onHide: () => setShowMenu(false),
        },
      })
    }

    return () => {
      blockProvider?.current?.destroy()
    }
  }, [loading, get, element])

  useEffect(() => {
    blockProvider.current?.update(view)
  })

  return (
    <div className='hidden'>
      <div className={clsx('relative cursor-grab rounded-full border-2 bg-gray-50 dark:border-gray-900 dark:bg-gray-900', showMenu ? 'ring-2 ring-offset-2' : '')} ref={setElement}>
        <ActionIcon size='md' variant="outline" aria-label='grab' onClick={() => setShowMenu((x) => !x)}>
          <IconGrain size='1rem' stroke={1.5} />
        </ActionIcon>
        {showMenu && (
          <div className='absolute top-full mt-2 w-60 cursor-pointer rounded border-2 bg-gray-50 shadow dark:border-gray-900 dark:bg-gray-900'>
            <div
              onClick={() => {
                if (loading) return
                const commands = get().ctx.get(commandsCtx)
                commands.call(wrapInHeadingCommand.key, 1)
              }}
              className='px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700'>
              Heading 1
            </div>
            <div
              onClick={() => {
                if (loading) return
                const commands = get().ctx.get(commandsCtx)
                commands.call(wrapInHeadingCommand.key, 2)
              }}
              className='px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700'>
              Heading 2
            </div>
            <div
              onClick={() => {
                if (loading) return
                const commands = get().ctx.get(commandsCtx)
                commands.call(wrapInHeadingCommand.key, 3)
              }}
              className='px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700'>
              Heading 3
            </div>
            <div
              onClick={() => {
                if (loading) return
                const commands = get().ctx.get(commandsCtx)
                commands.call(turnIntoTextCommand.key)
              }}
              className='px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700'>
              Text
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

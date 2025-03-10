import { Ctx } from '@milkdown/ctx'
import { Instance } from '@milkdown/react'
import { Box } from '@mantine/core'
import { clsx } from 'clsx'
import { FC, ReactNode } from 'react'

type SlashItemProps = {
  index: number
  instance: Instance
  onSelect: (ctx: Ctx) => void
  children: ReactNode
  selected: boolean
  setSelected: (selected: number) => void
}

export const SlashItem: FC<SlashItemProps> = ({ index, instance, onSelect, children, selected, setSelected }) => {
  const [loading, getEditor] = instance

  const onPick = () => {
    if (loading) return

    getEditor().action((ctx) => {
      onSelect(ctx)
    })
  }

  return (
    <Box
      className={clsx('cursor-pointer ', selected && 'bg-gray-400')}
      miw='180px'
      bg='white'
      onMouseMove={() => setSelected(index)}
      onMouseDown={(e) => {
        e.preventDefault()
        onPick()
      }}>
      {children}
    </Box>
  )
}

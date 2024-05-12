import { useNodeViewContext } from '@prosemirror-adapter/react'
import type { FC } from 'react'
import classes from '../mdpg.module.css'

export const ListItem: FC = () => {
  const { contentRef, node, setAttrs, selected } = useNodeViewContext()
  const { attrs } = node
  const checked = attrs?.checked
  const isBullet = attrs?.listType === 'bullet'
  return (
    <li className={[selected ? 'ProseMirror-selectednode' : ''].join(' ')} style={{ display: 'flex', alignItems: 'center', gap: '2' }}>
      <span style={{ display: 'flex', alignItems: 'center', height: '2' }}>
        {checked != null ? (
          <input className='form-checkbox rounded' onChange={() => setAttrs({ checked: !checked })} type='checkbox' checked={checked} />
        ) : isBullet ? (
          <span className='h-2 w-2 rounded-full bg-nord8 dark:bg-nord9' />
        ) : (
          <span className='text-nord8'>{attrs?.label}</span>
        )}
      </span>
      <div className='min-w-0' ref={contentRef} />
    </li>
  )
}

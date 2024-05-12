import React, { useEffect, useState,useCallback,useRef } from 'react'
import { Code, Group, Select, ActionIcon } from '@mantine/core'
import { useNodeViewContext } from '@prosemirror-adapter/react'
import clsx from 'clsx'
import type { FC } from 'react'
import { IconCopy, IconTablePlus, IconStrikethrough, IconBlockquote, IconListNumbers, IconBold, IconList, IconArrowForward, IconArrowBackUp } from '@tabler/icons-react'

const langs = ['text', 'typescript', 'javascript', 'html', 'css', 'json', 'markdown']

export const CodeBlock: FC = () => {
  const { contentRef, selected, node, setAttrs } = useNodeViewContext()
  const [ thelang, setThelang] = useState('')

  function SelectLang(value : any) {
    setAttrs({ language: value })
    setThelang(value)
  }

  return (
    <div className={clsx(selected ? 'ProseMirror-selectednode' : '', 'not-prose my-4 rounded bg-gray-200 p-5 shadow dark:bg-gray-800')}>
      <div contentEditable='false' suppressContentEditableWarning className='mb-2 flex justify-between'>
        <Select placeholder='Pick language' data={langs} onChange={(_value, option) => SelectLang( _value )}></Select>
        <ActionIcon
         variant="outline" 
          aria-label='Copy'
          onClick={(e) => {
            e.preventDefault()
            navigator.clipboard.writeText(node.textContent)
          }}>
          <IconCopy style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </div>
      <pre spellCheck={false} className={`language-${thelang}`}>
        <code ref={contentRef} className={`language-${thelang}`} />
      </pre>
 
    </div>
  )
}

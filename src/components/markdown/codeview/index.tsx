import { Container } from '@mantine/core'
import type { FC, RefObject } from 'react'
import type { CodemirrorProps, CodemirrorRef } from '../codemirror'
import { Codemirror } from '../codemirror'

interface ControlPanelProps extends CodemirrorProps {
  codemirrorRef: RefObject<CodemirrorRef>
}

export const ControlPanel: FC<ControlPanelProps> = ({ content, onChange, lock, codemirrorRef }) => {

  return (
    <Container size='responsive'>
      <Codemirror ref={codemirrorRef} content={content} onChange={onChange} lock={lock} />
    </Container>
  )
}

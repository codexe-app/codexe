'use client'
import { readLocalStorageValue } from '@mantine/hooks'
import { nanoid } from 'nanoid'
import { Container } from '@mantine/core'
import DiagramCanvas from '../canvas'

export default function Page() {
  const userdata = readLocalStorageValue({ key: 'userId' })
  const d1 = nanoid()
  const n1 = nanoid()
  const n2 = nanoid()
  const e1 = nanoid()
  const e2 = nanoid()

  const diagram = {
    name: 'New Diagram',
    slug: 'new-diagram',
    description: '',
    content: '',
    status: 'draft',
    graphic: { title: 'No Graphic', alt: '', caption: '', description: '', key: '', source: '', url: '' },
    nodes: {
      items: [
        { id: n1, data: { label: 'Node 1' }, position: { x: 100, y: 100 }, diagramId: d1 },
        { id: n2, data: { label: 'Node 2' }, position: { x: 300, y: 100 }, diagramId: d1 },
      ],
    },
    edges: {
      items: [
        { id: e1, source: n1, target: n2 },
        { id: e2, source: n2, target: n1 },
      ],
    },
    userId: userdata,
  }

  return (
    <Container size='responsive'>
      <DiagramCanvas diagram={diagram} new={true} tab='upload' />
    </Container>
  )
}

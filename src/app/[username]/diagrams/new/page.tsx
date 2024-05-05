import { nanoid } from 'nanoid'
import { Container } from '@mantine/core'
import { cookies } from 'next/headers'
import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { getUser } from '@/graphql/queries'
import type { User } from '@/graphql/API'
import { redirect } from 'next/navigation'
import { getCurrentUser } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from '@/utils/amplifyserverutils'
import DiagramCanvas from '../canvas'

async function AuthGetCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    })
    return currentUser
  } catch (error) {
    console.error(error)
    redirect('/')
  }
}

export default async function Page() {
  const theuser = await AuthGetCurrentUserServer()
  const d1 = nanoid()
  const n1 = nanoid()
  const n2 = nanoid()
  const e1 = nanoid()
  const e2 = nanoid()

  const diagram = {
    id: d1,
    name: 'New Diagram',
    slug: 'new-diagram',
    description: '',
    content: '',
    status: 'draft',
    graphic: { title: 'No Graphic', alt: '', caption: '', description: '', key: '', source: '', url: '' },
    nodes: {
      items: [
        { id: n1, type: 'custom', data: { label: 'Node 1' }, position: { x: 100, y: 100 }, diagramId: d1 },
        { id: n2, type: 'custom', data: { label: 'Node 2' }, position: { x: 300, y: 100 }, diagramId: d1 },
      ],
    },
    edges: {
      items: [
        { id: e1, source: n1, target: n2, diagramId: d1 },
        { id: e2, source: n2, target: n1, diagramId: d1 },
      ],
    },
    userId: theuser.userId,
  }

  return (
    <Container size='responsive' p={0}>
      <DiagramCanvas diagram={diagram} new={true} tab='upload' user={theuser} />
    </Container>
  )
}

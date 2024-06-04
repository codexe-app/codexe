import { nanoid } from 'nanoid'
import { Container } from '@mantine/core'
import { cookies } from 'next/headers'
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

  const diagram = {
    new: true,
    id: d1,
    name: 'New Diagram',
    slug: 'new-diagram',
    description: '',
    content: '',
    status: 'draft',
    graphic: { title: 'No Graphic', alt: '', caption: '', description: '', key: '', source: '', url: '' },
    nodes: {
      items: [
        { id: n1, new: true, type: 'terminal', data: { label: 'Start' }, position: { x: 100, y: 100 }, diagramId: d1 },
      ],
    },
    edges: {
      items: [],
    },
    userId: theuser.userId,
  }

  return (
    <Container size='responsive' p={0}>
      <DiagramCanvas diagram={diagram} new={true} tab='upload' user={theuser} />
    </Container>
  )
}

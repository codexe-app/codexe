import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Container } from '@mantine/core'
import { getCurrentUser } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from '@/utils/amplifyserverutils'
import { nanoid } from 'nanoid'
import Editor from '../../documents/editor'

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
  const res = await fetch('https://codexemedia6aa5d-next.s3-us-west-2.amazonaws.com/public/markdown/new.md')
  const markdown = await res.text()
  const document = { id: nanoid(), name: 'New Document', slug: 'new-document', description: '', content: '', status: 'draft', graphic: { title: 'No Graphic', alt: '', caption: '', description: '', key: '', source: '', url: '' }, userId: theuser.userId }

  return (
    <Container size='lg'>
      <Editor document={document} markdown={markdown} new={true} user={theuser}/>
    </Container>
  )
}

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Container } from '@mantine/core'
import { getCurrentUser } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from '@/utils/amplifyserverutils'

import DocumentForm from '../form'

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
  const document = { name: 'New Document', slug: 'new-document', description: '', content: '', status: 'draft', graphic: { title: 'No Graphic', alt: '', caption: '', description: '', key: '', source: '', url: '' }, userId: theuser.userId }

  return (
    <Container size='responsive'>
      <DocumentForm user={theuser} data={document} new={true} tab='upload'/>
    </Container>
  )
}

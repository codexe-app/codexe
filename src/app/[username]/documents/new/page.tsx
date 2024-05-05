'use client'
import { readLocalStorageValue } from '@mantine/hooks'
import { Container } from '@mantine/core'
import DocumentForm from '../form'

export default function Page() {
  const userdata = readLocalStorageValue({ key: 'userId' })
  const document = { name: 'New Document', slug: 'new-document', description: '', content: '', status: 'draft', graphic: { title: 'No Graphic', alt: '', caption: '', description: '', key: '', source: '', url: '' }, userId: userdata }

  return (
    <Container size='responsive'>
      <DocumentForm data={document} new={true} tab='upload'/>
    </Container>
  )
}

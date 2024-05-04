'use client'
import React, { useEffect, useState, Suspense } from 'react'
import type { ForwardedRef } from 'react'
import { useRouter } from 'next/navigation'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import { TextInput, SimpleGrid, Textarea, Flex, Fieldset, Paper, Title, Text, Container, Box, Group, Button, Alert, Select } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { modals } from '@mantine/modals'
import { useForm } from '@mantine/form'
import { IconTrash, IconAlertCircle, IconDeviceFloppy } from '@tabler/icons-react'
import {
  MDXEditor,
  MDXEditorMethods,
  headingsPlugin,
  linkPlugin,
  UndoRedo,
  ListsToggle,
  InsertImage,
  CreateLink,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  linkDialogPlugin,
  imagePlugin,
  listsPlugin,
  DiffSourceToggleWrapper,
  diffSourcePlugin,
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

export default function NewDocument() {
  const client = generateClient()
  const mdxEditorRef = React.useRef<MDXEditorMethods>(null)
  const form = useForm({ initialValues: { name: 'New Document', slug: '', description: '', content: '', status: 'draft', userId: 'c82123d0-2011-70ba-7a55-f2fc8a2db5a1' } })
  const [apierror, setApierror] = useState({ active: false, code: '', message: '' })
  const router = useRouter()

  async function newDocument(values: any) {
    console.log(values)
    try {
      const doc = await client.graphql({ query: mutations.createDocument, variables: { input: values } })
      console.log(doc)
      modals.openConfirmModal({
        title: `${values.name} was created`,
        children: <Text size='sm'>Would you like to continue editing or goto your documents list?</Text>,
        labels: { confirm: 'Edit', cancel: 'Docs' },
        onCancel: () => router.push('/documents'),
        onConfirm: () => router.push(`/documents/edit/${values.slug}`),
      })
    } catch (error) {
      notifications.show({
        title: 'There was an error creating the document',
        message: JSON.stringify(error),
      })
      console.log(`There was a problem creating the Doc :`, error)
    }
  }

  return (
    <Container>
      <form
        onSubmit={form.onSubmit(
          (values, event) => {
            newDocument(values)
          },
          (validationErrors, values, event) => {
            console.log(
              validationErrors,
              values,
              event
            )
          }
        )}>
        <Box mb='xl'>
          <Title ta='center' order={2}>
            {form.values.name}
          </Title>
        </Box>
        <SimpleGrid cols={4}>
          <TextInput label='Name' placeholder='Name' required {...form.getInputProps('name')} />
          <TextInput label='Slug' placeholder='slug' required {...form.getInputProps('slug')} />
          <TextInput label='Topic' placeholder='topic' disabled {...form.getInputProps('topic')} />
          <Select label='Status' data={['live', 'draft', 'private', 'archive', 'trash']} {...form.getInputProps(`status`)} />
        </SimpleGrid>
        <Textarea label='Description' placeholder='Description' {...form.getInputProps('description')} />
        <Text fw={500} size='sm'>
          Content
        </Text>
        <Fieldset p={0}>
          <Paper>
            <MDXEditor
              ref={mdxEditorRef}
              markdown={form.values.content || ''}
              onChange={(e) => form.setFieldValue('content', e)}
              contentEditableClassName='prose'
              plugins={[
                toolbarPlugin({
                  toolbarContents: () => (
                    <>
                      {' '}
                      <DiffSourceToggleWrapper>
                        <BlockTypeSelect />
                        <BoldItalicUnderlineToggles />
                        <ListsToggle />
                        <CreateLink />
                        <InsertImage />
                      </DiffSourceToggleWrapper>
                    </>
                  ),
                }),
                headingsPlugin(),
                linkPlugin(),
                linkDialogPlugin(),
                imagePlugin(),
                listsPlugin(),
                diffSourcePlugin(),
              ]}
            />
          </Paper>
        </Fieldset>
        {apierror.active ? (
          <Alert variant='light' color='red' icon={<IconAlertCircle />} title={apierror.code}>
            {apierror.message}
          </Alert>
        ) : null}
        <Flex justify='end'>
          <Button mt='md' type='submit' rightSection={<IconDeviceFloppy size={14} />}>
            Create Document
          </Button>
        </Flex>
      </form>
    </Container>
  )
}

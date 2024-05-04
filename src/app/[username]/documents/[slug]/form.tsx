'use client'
import React, { useEffect, useState, Suspense } from 'react'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import { TextInput, SimpleGrid, Textarea, Flex, Fieldset, Paper, Title, Text, Container, Box, Group, Button, Alert, Select } from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { modals } from '@mantine/modals'
import { IconTrash, IconAlertCircle, IconPlus, IconMapPinPlus, IconRocket, IconArrowBackUp, IconMarkdown, IconDeviceFloppy } from '@tabler/icons-react'
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

export default function DocForm(data: any) {
  const doc = data.data
  const client = generateClient()
  const mdxEditorRef = React.useRef<MDXEditorMethods>(null)
  const form = useForm({ initialValues: { id: doc.id, name: doc.name, slug: doc.slug, description: doc.description, content: doc.content, status: doc.status, userId: doc.userId, _version: doc._version } })

  async function updateDocument(doc: any) {
    console.log(`updating doc :`, doc)
    try {
      const wtf = await client.graphql({
        query: mutations.updateDocument,
        variables: { input: doc },
      })
      console.log(wtf)
      notifications.show({
        title: `${doc.name}`,
        message: `The document was updated`,
      })
    } catch (error) {
      notifications.show({
        title: `There was an error updating ${doc.name}`,
        message: JSON.stringify(error),
      })
      console.log(`There was a problem updating the doc :`, error)
    }
  }

  return (
    <form
      onSubmit={form.onSubmit(
        (values, event) => {
          updateDocument(values)
        },
        (validationErrors, values, event) => {
          console.log(validationErrors, values, event)
        }
      )}>
      <Box mb='xl'>
        <Title ta='left' order={2}>
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
      <Flex justify='end'>
        <Button mt='md' type='submit' rightSection={<IconDeviceFloppy size={14} />}>
          Save Document
        </Button>
      </Flex>
    </form>
  )
}

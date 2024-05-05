'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { generateClient } from 'aws-amplify/api'
import { uploadData, getUrl } from 'aws-amplify/storage'
import * as mutations from '@/graphql/mutations'
import { TextInput, SimpleGrid, Textarea, Flex, Fieldset, Accordion, Tabs, Avatar, Paper, Title, Text, Container, Box, Card, Group, Image, Stack, Button, Alert, Select, Progress, rem } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { modals } from '@mantine/modals'
import { useForm } from '@mantine/form'
import dayjs from 'dayjs'
import { IconAlertCircle, IconDeviceFloppy, IconUpload, IconPhoto, IconX } from '@tabler/icons-react'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
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

export default function DocumentForm(props: any) {
  const client = generateClient()
  const router = useRouter()
  const mdxEditorRef = React.useRef<MDXEditorMethods>(null)
  const [apierror, setApierror] = useState({ active: false, code: '', message: '' })
  const [uploadProgress, setUploadProgress] = useState(0)
  const [graphic, setGraphic] = useState(props.data.graphic.url)
  const [activeTab, setActiveTab] = useState<string | null>(props.tab)
  const form = useForm({
    initialValues: props.data,
    onValuesChange: (values) => {
      slugify(values.name);
    },
  })

  function submitForm(values: any) {
    //NEED SLUG DUPE CHECK
    if (props.new) {
      newDocument(values)
    } else {
      saveDocument(values)
    }
  }

  async function newDocument(values: any) {
    try {
      const doc = await client.graphql({ query: mutations.createDocument, variables: { input: values } })
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

  async function saveDocument(values: any) {
    try {
      const doc = await client.graphql({ query: mutations.updateDocument, variables: { input: values } })
      modals.openConfirmModal({
        title: `${values.name} was updated`,
        children: <Text size='sm'>Would you like to continue editing or goto your documents list?</Text>,
        labels: { confirm: 'Edit', cancel: 'Docs' },
        onCancel: () => router.push('/documents'),
        onConfirm: () => router.push(`/documents/edit/${values.slug}`),
      })
    } catch (error) {
      notifications.show({
        title: 'There was an error updating the document',
        message: JSON.stringify(error),
      })
      console.log(`There was a problem updating the Doc :`, error)
    }
  }

  async function uploadMedia(file: any) {
    const thepath = `public/${dayjs().format('YYYY/MM/DD')}/${file.name}`
    try {
      const result = uploadData({
        path: thepath,
        data: file,
        options: {
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              setUploadProgress(Math.round((transferredBytes / totalBytes) * 100))
              console.log(`Upload progress ${Math.round((transferredBytes / totalBytes) * 100)} %`)
            }
          },
        },
      }).result
      console.log('uploadData result: ', result)
      form.setFieldValue('graphic.key', thepath)
      s3authurl(thepath)
      notifications.show({
        title: 'Your file has been uploaded',
        message: thepath,
      })
    } catch (error) {
      console.log('Error : ', error)
      notifications.show({
        title: 'There was an error uploading your file',
        message: JSON.stringify(error),
      })
    }
  }

  async function s3authurl(key: any) {
    try {
      const result = await getUrl({
        path: key,
      })
      //console.log(`gs3authurl :`, result)
      const url = result.url.origin + result.url.pathname
      form.setFieldValue('graphic.url', url)
      return result.url
    } catch (error) {
      console.log('Error ', error)
    }
  }

  function slugify(text : any) {
    const snail = text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
    form.setFieldValue('slug', snail)
  }

  useEffect(() => {
    s3authurl(props.data?.graphic?.key).then((key) => {
      //@ts-ignore
      setGraphic(key)
    })
  }, [])

  return (
    <Container size='responsive'>
      <form
        onSubmit={form.onSubmit(
          (values, event) => {
            submitForm(values)
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
        <SimpleGrid cols={2}>
          <Stack>
            <TextInput label='Name' placeholder='Name' required key={form.key('name')} {...form.getInputProps('name')} />
            <Textarea label='Description' placeholder='Description' {...form.getInputProps('description')} />
            <Stack gap={2}>
              <Text fw={500} size='sm'>
                Graphic
              </Text>
              <Accordion chevronPosition='right' variant='contained'>
                <Accordion.Item value='graphic' key='graphic'>
                  <Accordion.Control>
                    <Group wrap='nowrap'>
                      <Avatar src={graphic} radius='xs' size='lg' />
                      <div>
                        <Text>{form.values.graphic?.title || ''}</Text>
                        <Text size='sm' c='dimmed' fw={400}>
                          {form.values.graphic?.key || ''}
                        </Text>
                      </div>
                    </Group>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Stack>
                      <TextInput label='Title' placeholder='Title' {...form.getInputProps('graphic.title')} />
                      <TextInput label='Alt' placeholder='Alt' {...form.getInputProps('graphic.alt')} />
                      <TextInput label='Caption' placeholder='Caption' {...form.getInputProps('graphic.caption')} />
                      <TextInput label='Description' placeholder='Description' {...form.getInputProps('graphic.description')} />
                      <TextInput label='S3 Key' placeholder='S3 Key' {...form.getInputProps('graphic.key')} />
                      <TextInput label='URL' placeholder='Image URL' {...form.getInputProps('graphic.url')} />
                      <Tabs value={activeTab} onChange={setActiveTab}>
                        <Tabs.List>
                          <Tabs.Tab value='view' leftSection={<IconPhoto style={{ width: rem(12), height: rem(12) }} />}>
                            View
                          </Tabs.Tab>
                          <Tabs.Tab value='upload' leftSection={<IconUpload style={{ width: rem(12), height: rem(12) }} />}>
                            Upload
                          </Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel value='view'>
                          <Image src={graphic || ''} />
                        </Tabs.Panel>
                        <Tabs.Panel value='upload'>
                          <Card shadow='sm' padding='lg' radius='md' withBorder>
                            <Dropzone onDrop={(files) => uploadMedia(files[0])} onReject={(files) => console.log('rejected files', files)} maxFiles={1} maxSize={10 * 1024 ** 2} accept={IMAGE_MIME_TYPE}>
                              <Group justify='center' gap='xl' mih={220} style={{ pointerEvents: 'none' }}>
                                <Dropzone.Accept>
                                  <IconUpload style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }} stroke={1.5} />
                                </Dropzone.Accept>
                                <Dropzone.Reject>
                                  <IconX style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }} stroke={1.5} />
                                </Dropzone.Reject>
                                <Dropzone.Idle>
                                  <IconPhoto style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }} stroke={1.5} />
                                </Dropzone.Idle>
                                <div>
                                  <Text size='xl' inline>
                                    Drag images here or click to select files
                                  </Text>
                                  <Text size='sm' c='dimmed' inline mt={7}>
                                    Attach as many files as you like, each file should not exceed 5mb
                                  </Text>
                                </div>
                              </Group>
                              <Progress value={uploadProgress} />
                            </Dropzone>
                          </Card>
                        </Tabs.Panel>
                      </Tabs>
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Stack>
          </Stack>
          <Stack>
            <TextInput label='Slug' placeholder='slug' required {...form.getInputProps('slug')} />
            <TextInput label='Topic' placeholder='topic' disabled {...form.getInputProps('topic')} />
            <Select label='Status' data={['live', 'draft', 'private', 'archive', 'trash']} {...form.getInputProps(`status`)} />
          </Stack>
        </SimpleGrid>
        <Text fw={500} size='sm' mt='lg'>
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
            {props.new ? 'Create Document' : 'Save Document'}
          </Button>
        </Flex>
      </form>
    </Container>
  )
}

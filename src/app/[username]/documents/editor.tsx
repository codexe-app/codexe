'use client'
import React, { useState, useCallback, useRef } from 'react'
import { uploadData, getUrl } from 'aws-amplify/storage'
import { useRouter } from 'next/navigation'
import type { MilkdownRef } from '@/components/markdown'
import { MarkdownEditor } from '@/components/markdown'
import { FeatureToggleProvider } from '@/components/markdown/FeatureToggleProvider'
import { InspectorProvider } from '@/components/markdown/InspectorProvider'
import { ProseStateProvider } from '@/components/markdown/ProseStateProvider'
import { ShareProvider } from '@/components/markdown/ShareProvider'
import { compose } from '@/utils/compose'
import { MilkdownProvider } from '@milkdown/react'
import { useForm } from '@mantine/form'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/react'
import { useHotkeys } from '@mantine/hooks'
import { modals } from '@mantine/modals'
import { notifications } from '@mantine/notifications'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import { ActionIcon, TextInput, SimpleGrid, Textarea, Center, Flex, Accordion, AccordionControlProps, Tabs, Avatar, Title, Text, Box, Card, Group, Image, Stack, Button, Select, Progress, rem, Space, Container } from '@mantine/core'
import { IconUpload, IconDatabaseEdit, IconX, IconPhoto, IconDeviceFloppy } from '@tabler/icons-react'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import dayjs from 'dayjs'
var _ = require('lodash')

const Provider = compose(FeatureToggleProvider, MilkdownProvider, ProsemirrorAdapterProvider, ProseStateProvider, ShareProvider, InspectorProvider)

export default function Editor(props: any) {
  const { document, user } = props
  const [graphic, setGraphic] = useState(document?.graphic?.url)
  const [activeTab, setActiveTab] = useState<string | null>(props.tab)
  const [content, setContent] = useState(props.markdown)
  const [uploadProgress, setUploadProgress] = useState(0)
  const client = generateClient()
  const router = useRouter()
  const milkdownRef = useRef<MilkdownRef>(null)
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: props.document,
    onValuesChange: (values) => {
      slugify(values.name)
    },
  })
  const markdownRef = useRef('')

  function slugify(text: any) {
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
  useHotkeys([['mod+S', () => submitForm(form.values)]])

  const onMilkdownChange = useCallback((markdown: string) => {
    markdownRef.current = markdown
  }, [])

  function submitForm(values: any) {
    const value = markdownRef.current
    values.content = value
    setContent(value)
    if (props.new) {
      newDocument(values)
    } else {
      saveDocument(values)
    }
  }

  async function newDocument(values: any) {
    console.log(`NEW DOC :`, values)
    try {
      const doc = await client.graphql({ query: mutations.createDocument, variables: { input: values } })
      modals.openConfirmModal({
        title: `${values.name} was created`,
        children: <Text size='sm'>Would you like to continue editing or goto your doashboard?</Text>,
        labels: { confirm: 'Edit', cancel: 'Dash' },
        onCancel: () => router.push(`/${user.username}/`),
        onConfirm: () => router.push(`/${user.username}/documents/${values.slug}`),
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
    let cleaned = _.omit(values, ['topic', 'createdAt', 'updatedAt', '__typename'])
    console.log(cleaned)

    try {
      await client.graphql({ query: mutations.updateDocument, variables: { input: cleaned } })
      notifications.show({
        title: values.name,
        message: 'The Document was updated',
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
    console.log(file)
    const imageUrl = URL.createObjectURL(file)
    setGraphic(imageUrl)
    setActiveTab('view')
    var title = file.name
    title = title.split('.').slice(0, -1).join('.')
    form.setFieldValue('graphic.title', title)
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

  function AccordionControl(props: AccordionControlProps) {
    return (
      <Group gap='lg' wrap='nowrap'>
        <Accordion.Control {...props} icon={<IconDatabaseEdit color='var(--mantine-color-primary-filled)'/>}/>
        <ActionIcon size='lg' type='submit' variant='outline'>
          <IconDeviceFloppy size='1.25rem' />
        </ActionIcon>
      </Group>
    )
  }

  return (
    <Box className='prose'>
      <form
        onSubmit={form.onSubmit(
          (values, event) => {
            submitForm(values)
          },
          (validationErrors, values, event) => {
            console.log(validationErrors, values, event)
          }
        )}>
        <Flex justify='space-between' mb='xl' pos='fixed' top='48px' left='0' w='100%' bg='var(--mantine-color-default-hover)' style={{ zIndex: 201 }}>
          <Accordion w='100%'>
            <Accordion.Item key='meta' value='meta'>
              <Container size='responsive'>
                <AccordionControl style={{paddingInline: 0}}>
                  <Title ta='left' order={4}>
                    {form.values.name}
                  </Title>
                </AccordionControl>
              </Container>
              <Accordion.Panel>
                <Container size='responsive'>
                  <Flex>
                    <TextInput label='Name' placeholder='Name' required key={form.key('name')} {...form.getInputProps('name')} />
                    <Textarea label='Description' placeholder='Description' {...form.getInputProps('description')} />
                    <TextInput label='CONTENT' placeholder='CONTENT' {...form.getInputProps('content')} />
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
                            <SimpleGrid cols={2} px='xs' pb='xs'>
                              <Stack>
                                <TextInput label='Title' placeholder='Title' {...form.getInputProps('graphic.title')} />
                                <TextInput label='Alt' placeholder='Alt' {...form.getInputProps('graphic.alt')} />
                                <TextInput label='Caption' placeholder='Caption' {...form.getInputProps('graphic.caption')} />
                                <TextInput label='Description' placeholder='Description' {...form.getInputProps('graphic.description')} />
                                <TextInput label='S3 Key' placeholder='S3 Key' {...form.getInputProps('graphic.key')} />
                                <TextInput label='URL' placeholder='Image URL' {...form.getInputProps('graphic.url')} />
                              </Stack>
                              <Stack>
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
                                              Drag image here or click to select file
                                            </Text>
                                            <Text size='sm' c='dimmed' inline mt={7}>
                                              File should not exceed 5mb
                                            </Text>
                                          </div>
                                        </Group>
                                        <Progress value={uploadProgress} />
                                      </Dropzone>
                                    </Card>
                                  </Tabs.Panel>
                                </Tabs>
                              </Stack>
                            </SimpleGrid>
                          </Accordion.Panel>
                        </Accordion.Item>
                      </Accordion>
                    </Stack>
                    <TextInput label='Slug' placeholder='slug' required {...form.getInputProps('slug')} />
                    <TextInput label='Topic' placeholder='topic' disabled />
                    <Select label='Status' data={['live', 'draft', 'private', 'archive', 'trash']} {...form.getInputProps(`status`)} />
                  </Flex>
                </Container>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Flex>
      </form>
      <Space h='48' />
      <Provider>
        <MarkdownEditor milkdownRef={milkdownRef} content={content} onChange={onMilkdownChange} />
      </Provider>
    </Box>
  )
}

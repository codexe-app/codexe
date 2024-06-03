'use client'
import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import * as mutations from '@/graphql/mutations'
import { generateClient } from 'aws-amplify/api'
import { notifications } from '@mantine/notifications'
import {
  useMatches,
  Stack,
  Flex,
  ActionIcon,
  Checkbox,
  Progress,
  Text,
  Tabs,
  Image,
  Container,
  Card,
  NumberInput,
  Fieldset,
  Title,
  Avatar,
  Badge,
  TextInput,
  Grid,
  Button,
  Group,
  Textarea,
  Select,
  Tooltip,
  Accordion,
  SimpleGrid,
  rem,
} from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { useForm } from '@mantine/form'
import { modals } from '@mantine/modals'
import { ReactFlow, useNodesState, useEdgesState, addEdge, Controls, MiniMap, Background, BackgroundVariant } from '@xyflow/react'
import {
  IconFileTypeSvg,
  IconPhoto,
  IconForms,
  IconDatabaseEdit,
  IconUpload,
  IconX,
  IconFileTypePng,
  IconFileTypeJpg,
  IconTrash,
  IconDeviceFloppy,
  IconRestore,
  IconDialpad,
  IconLine,
  IconRefresh,
  IconSquarePlus,
  IconBookmarkPlus,
  IconPencil,
  IconEye,
} from '@tabler/icons-react'
import { nanoid } from 'nanoid'
import { uploadData } from 'aws-amplify/storage'
import { toPng, toSvg, toJpeg } from 'html-to-image'
import '@xyflow/react/dist/style.css'
import classes from './diagrams.module.css'
import { nodetypes, nodeTypes } from '@/components/diagram/nodes'
var _ = require('lodash')

export default function DiagramCanvas(props) {
  //console.log(`Diagram Canvas Props :`, props)
  const hideme = true
  const { s3url } = props
  const client = generateClient()
  const router = useRouter()
  const diagram = useForm({
    mode: 'controlled',
    initialValues: props.diagram,
    onValuesChange: (values) => {
      //console.log(values)
      slugify(values.name)
    },
  })
  const diagramid = props.diagram.id
  const [saved, setSaved] = useState(props.diagram)
  const [newgram, setNewgram] = useState(props.new)
  const [pinned, setPinned] = useState(props?.diagram?.pinned)
  const [graphic, setGraphic] = useState(props?.diagram?.graphic?.url)
  const [activeTab, setActiveTab] = useState('view')
  const [addnodem, setAddnodem] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [showtb, setShowtb] = useState(true)
  const [nodes, setNodes, onNodesChange] = useNodesState(props.diagram.nodes?.items)
  const [edges, setEdges, onEdgesChange] = useEdgesState(props.diagram.edges?.items)
  const sizeme = useMatches({
    base: 'sm',
    sm: 'xs',
    lg: 'md',
  })

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  const addnode = useForm({
    mode: 'uncontrolled',
    initialValues: {
      id: nanoid(10),
      new: true,
      data: { label: 'New Node', description: 'Node description.', id: nanoid(3) },
      type: 'custom',
      position: {
        x: 100,
        y: 100,
      },
      diagramId: diagramid,
    },
  })

  const onAdd = useCallback(
    (values) => {
      modals.closeAll()
      const newNode = {
        id: nanoid(10),
        data: { label: values.data.label, description: values.data.description, id: nanoid(3) },
        type: values.data.type,
        position: {
          x: (Math.random() * window.innerWidth) / 2,
          y: (Math.random() * window.innerHeight) / 2,
        },
        diagramId: diagramid,
      }
      setNodes((nds) => nds.concat(newNode))
      setAddnodem(false)
    },
    [setNodes]
  )

  async function newDiagram(values) {
    let cleaned = _.omit(values, ['new', 'edges', 'nodes', 'content', 'topic', 'user', 'createdAt', 'updatedAt', '__typename'])
    //console.log(cleaned)
    try {
      await client.graphql({ query: mutations.createDiagram, variables: { input: cleaned } })
      notifications.show({
        title: `${values.name} was updated`,
        message: `The Diagram was updated. id: ${values.id}`,
      })
      router.push(`/${props.user.username}/diagrams/${values.slug} `)
    } catch (error) {
      notifications.show({
        title: 'There was an error updating the Diagram',
        message: JSON.stringify(error),
      })
      console.log(`There was a problem updateing the Diagram ${values.name}:`, error)
    }
  }

  async function saveDiagram(values) {
    let cleaned = _.omit(values, ['edges', 'nodes', 'content', 'topic', 'user', 'createdAt', 'updatedAt', '__typename'])
    //console.log(cleaned)
    try {
      await client.graphql({ query: mutations.updateDiagram, variables: { input: cleaned } })
      notifications.show({
        title: `${values.name} was updated`,
        message: `The Diagram was updated. id: ${values.id}`,
      })
    } catch (error) {
      notifications.show({
        title: 'There was an error saving the Diagram',
        message: JSON.stringify(error),
      })
      console.log(`There was a problem saving the Diagram ${values.name}:`, error)
    }
  }

  function saveEdge(values, index) {
    const theedgedata = values.edges.items[index]
    newEdge(theedgedata)
    //console.log(`Save Edge : ${index} | Values : ${JSON.stringify(theedgedata)}`)
  }

  async function newEdge(theedgedata) {
    try {
      await client.graphql({ query: mutations.createEdge, variables: { input: theedgedata } })
      notifications.show({
        title: `${theedgedata.id}`,
        message: 'The Edge was created',
      })
    } catch (error) {
      notifications.show({
        title: 'There was an error creating the Edge',
        message: JSON.stringify(error),
      })
      console.log(`There was a problem creating the Edge :`, error)
    }
  }

  async function updatetheEdge(theedgedata) {
    console.log(`updateEdge :`, theedgedata)
    let cleaned = _.omit(theedgedata, ['createdAt', 'updatedAt', '__typename'])
    try {
      await client.graphql({ query: mutations.updateEdge, variables: { input: cleaned } })
      notifications.show({
        title: `${theedgedata.id}`,
        message: 'The Edge was updated',
      })
    } catch (error) {
      notifications.show({
        title: 'There was an error updating the Edge',
        message: JSON.stringify(error),
      })
      console.log(`There was a problem updating the Edge :`, error)
    }
  }

  function startRemoveEdge(theedge, index) {
    modals.openConfirmModal({
      title: <Title order={4}>Delete Edge</Title>,
      centered: true,
      children: (
        <Text size='sm'>
          Are you sure you want to delete{' '}
          <Text span fw={600} inherit>
            {theedge.data?.label}
          </Text>
          ?
        </Text>
      ),
      labels: { confirm: 'Delete Edge', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => removeEdge(theedge, index),
    })
  }

  function removeEdge(theedge, index) {
    diagram.removeListItem('edges.items', index)
    //diagram.removeListItem('nodes.items.edges.items', index)
    deleteEdge(theedge)
  }

  async function deleteEdge(theedge) {
    try {
      await client.graphql({ query: mutations.deleteEdge, variables: { input: { id: theedge.id } } })
      notifications.show({
        title: 'The Edge was deleted',
        message: `${theedge.id}`,
      })
    } catch (error) {
      notifications.show({
        title: 'There was an error deleting the Edge',
        message: JSON.stringify(error),
      })
      console.log(`There was a problem deleting the Edge :`, error)
    }
  }

  function startRemoveNode(thenode, index) {
    modals.openConfirmModal({
      title: <Title order={4}>Delete Node</Title>,
      centered: true,
      children: (
        <Text size='sm'>
          Are you sure you want to delete{' '}
          <Text span fw={600} inherit>
            {thenode.data.label}
          </Text>
          ?
        </Text>
      ),
      labels: { confirm: 'Delete Node', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => removeNode(thenode, index),
    })
  }

  function removeNode(thenode, index) {
    diagram.removeListItem('nodes.items', index)
    deleteNode(thenode)
  }

  async function deleteNode(thenode) {
    try {
      const doc = await client.graphql({ query: mutations.deleteNode, variables: { input: { id: thenode.id } } })
      notifications.show({
        title: `${thenode.data.label}`,
        message: 'The Node was deleted',
      })
    } catch (error) {
      notifications.show({
        title: 'There was an error deleting the Node',
        message: JSON.stringify(error),
      })
      console.log(`There was a problem deleting the Node :`, error)
    }
  }

  async function newNode(thenode) {
    try {
      await client.graphql({ query: mutations.createNode, variables: { input: thenode } })
      notifications.show({
        title: `${thenode.data.label}`,
        message: 'The Node was created',
      })
    } catch (error) {
      notifications.show({
        title: 'There was an error creating the Node',
        message: JSON.stringify(error),
      })
      console.log(`There was a problem creating the Node :`, error)
    }
  }

  async function updatetheNode(thenodedata) {
    let cleaned = _.omit(thenodedata, ['handles', 'ariaLabel', 'className', 'createdAt', 'updatedAt', '__typename', 'position.__typename', 'measured.__typename', 'data.__typename'])
    //console.log(`updateNode :`, cleaned)
    try {
      await client.graphql({ query: mutations.updateNode, variables: { input: cleaned } })
      notifications.show({
        title: `${thenodedata.data.label}`,
        message: 'The Node was updated',
      })
    } catch (error) {
      notifications.show({
        title: `There was an error updating the Node ${thenodedata.data.label}`,
        message: JSON.stringify(error),
      })
      console.log(`There was a problem updating the Node ${thenodedata.data.label}:`, error)
    }
  }

  function saveNode(thenode, index) {
    if (thenode.new) {
      newNode(thenode)
    } else {
      updatetheNode(thenode)
    }
  }

  function pushtoForm() {
    nodes.forEach((node, index) => {
      diagram.setFieldValue(`nodes.items.${index}`, node)
    })
    edges.forEach((edge, index) => {
      diagram.setFieldValue(`edges.items.${index}`, edge)
    })
  }

  function updateView() {
    setNodes(diagram.values.nodes.items)
    setEdges(diagram.values.edges.items)
  }

  function switchPinned(pinned) {
    diagram.setFieldValue('pinned', pinned)
    setPinned(pinned)
  }

  function slugify(text) {
    const snail = text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
    diagram.setFieldValue('slug', snail)
  }

  function screenShot() {
    toPng(document.querySelector('.react-flow'), {
      width: 1024,
      height: 1024,
      style: {
        width: 1024,
        height: 1024,
      },
    }).then(downloadImage)
  }

  function downloadImage(dataUrl) {
    const a = document.createElement('a')
    a.setAttribute('download', `${diagram.values.slug}.png`)
    a.setAttribute('href', dataUrl)
    a.click()
  }

  function screenShotS3() {
    toPng(document.querySelector('.react-flow'), {
      width: 1024,
      height: 1024,
      style: {
        width: 1024,
        height: 1024,
      },
    }).then(function (dataUrl) {
      const thefile = dataURLtoFile(dataUrl, `${diagram.values.slug}.png`)
      uploadMedia(thefile)
    })
  }

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
  }

  async function uploadMedia(file) {
    const thepath = `public/${props.user.username}/${file.name}`
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
    const theurl = s3url + thepath
    diagram.setFieldValue('graphic.key', thepath)
    diagram.setFieldValue('graphic.url', theurl)
  }

  const NewNodeForm = () => {
    return (
      <form onSubmit={addnode.onSubmit((values) => onAdd(values))}>
        <Stack gap='xs'>
          <TextInput label='Label' placeholder='Label' size='xs' {...addnode.getInputProps('data.label')} />
          <Textarea label='Description' placeholder='Description' size='xs' {...addnode.getInputProps('data.description')} />
          <Select label='Type' placeholder='Pick value' size='xs' data={nodetypes} {...addnode.getInputProps('data.type')} />
          <Button type='submit'>Add Node</Button>
        </Stack>
      </form>
    )
  }

  async function submitForm(values) {
    //console.log(`SUBMITING :`, values)
    pushtoForm()
    if (newgram) {
      values.nodes.items.forEach((node, index) => {
        newNode(node)
      })
      values.edges.items.forEach((edge, index) => {
        newEdge(edge)
      })
      newDiagram(values)
      setNewgram(false)
    } else {
      const updatednodes = values.nodes.items.filter((o2) => {
        const index = saved.nodes.items.findIndex((o1) => o1.id === o2.id)
        if (index === -1) return true
        return JSON.stringify(o2) !== JSON.stringify(saved.nodes.items[index])
      })
      updatednodes.forEach((node, index) => {
        updatetheNode(node)
      })

      const updatededges = values.edges.items.filter((o2) => {
        const index = saved.edges.items.findIndex((o1) => o1.id === o2.id)
        if (index === -1) return true
        return JSON.stringify(o2) !== JSON.stringify(saved.edges.items[index])
      })
      updatededges.forEach((edge, index) => {
        updatetheEdge(edge)
      })

      const newnodes = values.nodes.items.filter((o2) => {
        return !saved.nodes.items.some((o1) => o1.id === o2.id)
      })
      newnodes.forEach((node, index) => {
        newNode(node)
      })

      const newedges = values.edges.items.filter((o2) => {
        return !saved.edges.items.some((o1) => o1.id === o2.id)
      })
      newedges.forEach((edge, index) => {
        edge.diagramId = diagram.values.id
        newEdge(edge)
      })

      saveDiagram(values)
    }
  }

  function AccordionControl(props) {
    return (
      <Group gap={sizeme} wrap='nowrap' justify='space-between'>
        <Tooltip label='Save Diagram'>
          <ActionIcon size='md' type='submit' variant='outline'>
            <IconDeviceFloppy size='1.25rem' />
          </ActionIcon>
        </Tooltip>
        <Accordion.Control {...props} icon={<IconDatabaseEdit color='var(--mantine-primary-color-filled)' />} />
        <Tooltip label='Add Node'>
          <ActionIcon
            variant='outline'
            onClick={() => {
              modals.open({
                title: 'Add Node',
                children: <NewNodeForm />,
              })
            }}>
            <IconSquarePlus size={14} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label='Sync View'>
          <ActionIcon variant='outline' onClick={updateView}>
            <IconEye style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label='Sync Form'>
          <ActionIcon variant='outline' onClick={pushtoForm}>
            <IconForms style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
        </Tooltip>
        <ActionIcon.Group>
          <Tooltip label='Download PNG'>
            <ActionIcon variant='default' size='lg' aria-label='Gallery' onClick={screenShot}>
              <IconFileTypePng style={{ width: rem(20) }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
          <ActionIcon variant='default' size='lg' aria-label='SVG' disabled>
            <IconFileTypeSvg style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='default' size='lg' aria-label='JPG' disabled>
            <IconFileTypeJpg style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
        </ActionIcon.Group>
      </Group>
    )
  }

  return (
    <React.Fragment>
      <form onSubmit={diagram.onSubmit((values) => submitForm(values))}>
        <Flex justify='space-between' mb='xl' pos='fixed' top='48px' left='0' w='100%' bg='var(--mantine-color-default-hover)' style={{ zIndex: 201 }}>
          <Accordion w='100%'>
            <Accordion.Item key='meta' value='meta'>
              <Container size='responsive'>
                <AccordionControl style={{ paddingInline: 0 }} className='doctitle'>
                  <Title ta='left' order={5} textWrap='nowrap'>
                    {diagram.values.name}
                  </Title>
                </AccordionControl>
              </Container>
              <Accordion.Panel className={classes.diaform}>
                <Container size='responsive'>
                  <Flex gap='xs' wrap='wrap' pb='xs' justify='space-between'>
                    <Grid>
                      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <TextInput label='Name' placeholder='Name' required key={diagram.key('name')} {...diagram.getInputProps('name')} />
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SimpleGrid cols={{ base: 1, sm: 2 }}>
                          <Group wrap='nowrap'>
                            <TextInput label='Slug' placeholder='slug' required {...diagram.getInputProps('slug')} />
                            <Checkbox.Group label='Pin'>
                              <Checkbox size='xl' checked={pinned} onChange={(e) => switchPinned(!pinned)} />
                            </Checkbox.Group>
                          </Group>
                          <Group wrap='nowrap' align='top'>
                            <Select label='Status' data={['live', 'draft', 'private', 'archive', 'trash']} {...diagram.getInputProps(`status`)} />
                            <TextInput label='Topic' placeholder='Topic' disabled />
                          </Group>
                        </SimpleGrid>
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Textarea label='Description' placeholder='Description' {...diagram.getInputProps('description')} />
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Stack gap={2}>
                          <Text fw={500} size='sm' my={0}>
                            Graphic
                          </Text>
                          <Accordion chevronPosition='right' variant='contained'>
                            <Accordion.Item value='graphic' key='graphic'>
                              <Accordion.Control>
                                <Group wrap='nowrap' py={0}>
                                  <Avatar src={graphic} radius='xs' size='md' />
                                  <Stack gap={0}>
                                    <Text my={0} size='sm'>
                                      {diagram.values.graphic?.title || ''}
                                    </Text>
                                    <Text my={0} size='xs' c='dimmed' fw={400}>
                                      {diagram.values.graphic?.key || ''}
                                    </Text>
                                  </Stack>
                                </Group>
                              </Accordion.Control>
                              <Accordion.Panel>
                                <Stack p='xs'>
                                  <TextInput label='Title' placeholder='Title' {...diagram.getInputProps('graphic.title')} />
                                  <TextInput label='Alt' placeholder='Alt' {...diagram.getInputProps('graphic.alt')} />
                                  <TextInput label='Caption' placeholder='Caption' {...diagram.getInputProps('graphic.caption')} />
                                  <TextInput label='Description' placeholder='Description' {...diagram.getInputProps('graphic.description')} />
                                  <Tabs value={activeTab} onChange={setActiveTab}>
                                    <Tabs.List>
                                      <Tabs.Tab value='view' leftSection={<IconPhoto style={{ width: rem(12), height: rem(12) }} />}>
                                        View
                                      </Tabs.Tab>
                                      <Tabs.Tab value='upload' leftSection={<IconUpload style={{ width: rem(12), height: rem(12) }} />}>
                                        Upload
                                      </Tabs.Tab>
                                    </Tabs.List>
                                    <Tabs.Panel value='view' mah={240}>
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
                                  <TextInput label='S3 Key' placeholder='S3 Key' {...diagram.getInputProps('graphic.key')} />
                                  <TextInput label='URL' placeholder='Image URL' {...diagram.getInputProps('graphic.url')} />
                                </Stack>
                              </Accordion.Panel>
                            </Accordion.Item>
                          </Accordion>
                        </Stack>
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Accordion chevronPosition='right' variant='contained'>
                          <Accordion.Item value='graphic' key='graphic'>
                            <Accordion.Control px='xs'>
                              <Group wrap='nowrap'>
                                <IconDialpad color='var(--mantine-primary-color-filled)' />
                                <Title order={5}>Nodes</Title>
                              </Group>
                            </Accordion.Control>
                            <Accordion.Panel>
                              {diagram.values.nodes?.items?.map((item, index) => (
                                <Fieldset key={index} mb='sm' py='xs' px='6'>
                                  <Badge size='md' w='100%' variant='outline' radius='xs'>
                                    {item.id}
                                  </Badge>
                                  <TextInput label='Label' {...diagram.getInputProps(`nodes.items.${index}.data.label`)} size='xs' />
                                  <Textarea label='Description' {...diagram.getInputProps(`nodes.items.${index}.data.description`)} size='xs' />
                                  <SimpleGrid cols={2}>
                                    <Select label='Type' data={nodetypes} {...diagram.getInputProps(`nodes.items.${index}.type`)} size='xs' />
                                    <SimpleGrid cols={2}>
                                      <NumberInput label='X' allowDecimal={false} {...diagram.getInputProps(`nodes.items.${index}.position.x`)} size='xs' />
                                      <NumberInput label='Y' allowDecimal={false} {...diagram.getInputProps(`nodes.items.${index}.position.y`)} size='xs' />
                                    </SimpleGrid>
                                  </SimpleGrid>
                                  <Group justify='end'>
                                    <ActionIcon mt='xs' color='pink.9' onClick={() => startRemoveNode(item, index)}>
                                      <IconTrash size={18} color='white' />
                                    </ActionIcon>
                                    <ActionIcon mt='xs' color='green.9' onClick={() => saveNode(`diagram.values.nodes.items.${index}`, index)}>
                                      <IconDeviceFloppy size={18} color='white' />
                                    </ActionIcon>
                                  </Group>
                                </Fieldset>
                              ))}
                            </Accordion.Panel>
                          </Accordion.Item>
                        </Accordion>
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Accordion chevronPosition='right' variant='contained'>
                          <Accordion.Item value='graphic' key='graphic'>
                            <Accordion.Control px='xs'>
                              <Group wrap='nowrap'>
                                <IconLine color='var(--mantine-primary-color-filled)' />
                                <Title order={5}>Edges</Title>
                              </Group>
                            </Accordion.Control>
                            <Accordion.Panel>
                              {diagram.values.edges?.items?.map((item, index) => (
                                <Fieldset key={index} mb='sm' p='xs'>
                                  <Badge size='md' w='100%' variant='outline' radius='xs'>
                                    {item.id}
                                  </Badge>
                                  <SimpleGrid cols={2}>
                                    <TextInput label='Source' {...diagram.getInputProps(`edges.items.${index}.source`)} size='xs' />
                                    <TextInput label='Target' {...diagram.getInputProps(`edges.items.${index}.target`)} size='xs' />
                                  </SimpleGrid>
                                  <Group justify='end'>
                                    <ActionIcon mt='xs' color='pink.9' onClick={() => startRemoveEdge(item, index)}>
                                      <IconTrash size={18} color='white' />
                                    </ActionIcon>
                                    <ActionIcon mt='xs' color='green.9' disabled onClick={() => saveEdge(diagram.values, index)}>
                                      <IconDeviceFloppy size={18} color='white' />
                                    </ActionIcon>
                                  </Group>
                                </Fieldset>
                              ))}
                            </Accordion.Panel>
                          </Accordion.Item>
                        </Accordion>
                      </Grid.Col>
                    </Grid>
                    {!hideme && <PluginToggle />}
                  </Flex>
                </Container>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Flex>
      </form>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
        <Background color='#ccc' variant={BackgroundVariant.Dots} />
        <MiniMap zoomable pannable />
        <Controls />
      </ReactFlow>
    </React.Fragment>
  )
}

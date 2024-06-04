'use client'
import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import * as mutations from '@/graphql/mutations'
import { generateClient } from 'aws-amplify/api'
import { notifications } from '@mantine/notifications'
import {
  useMatches,
  Chip,
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
import { ReactFlow, useNodesState, useEdgesState, addEdge, getIncomers, getOutgoers, getConnectedEdges, Controls, MiniMap, Background, BackgroundVariant } from '@xyflow/react'
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
import { IconDataFlow, IconDatabaseFlow, IconDecisionFlow, IconDocumentFlow, IconInitFlow, IconInputFlow, IconOperateFlow, IconProcessFlow, IconSubroutineFlow, IconTerminalFlow } from '@/components/diagram/icons'
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
      slugify(values.name)
    },
  })
  const diagramid = props.diagram.id
  const [saved, setSaved] = useState(props.diagram)
  const [newgram, setNewgram] = useState(props.new)
  const [pinned, setPinned] = useState(props?.diagram?.pinned)
  const [graphic, setGraphic] = useState(props?.diagram?.graphic?.url)
  const [activeTab, setActiveTab] = useState('view')
  const [uploadProgress, setUploadProgress] = useState(0)
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
      id: '',
      data: { label: 'New Node', description: 'Node description.', id: '' },
      type: 'process',
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
        new: true,
        data: { label: values.data.label, description: values.data.description, id: nanoid(3) },
        type: values.type,
        position: {
          x: (Math.random() * window.innerWidth) / 2,
          y: (Math.random() * window.innerHeight) / 2,
        },
        diagramId: diagramid,
      }
      setNodes((nds) => nds.concat(newNode))
      addnode.initialize(values)
    },
    [setNodes]
  )

  const onEdgesDelete = useCallback(
    (deleted) => {
      const index = edges.findIndex(obj => obj.id === deleted[0].id)
      removeEdge(deleted[0], index)
    },
    [nodes, edges]
  )

  const onNodesDelete = useCallback(
    (deleted) => {
      setEdges(
        deleted.reduce((acc, node) => {
          const connectedEdges = getConnectedEdges([node], edges)
          console.log(connectedEdges)
          connectedEdges.forEach((edge, index) => {
            const i = nodes.findIndex(obj => obj.id === edge.id)
            removeEdge(edge, i)
          })
          const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge))
          return [...remainingEdges]
        }, edges)
      )
      const index = nodes.findIndex(obj => obj.id === deleted[0].id)
      removeNode(deleted[0], index)
    },
    [nodes, edges]
  )

  async function newDiagram(values) {
    let cleaned = _.omit(values, ['new', 'edges', 'nodes', 'content', 'topic', 'user', 'createdAt', 'updatedAt', '__typename'])
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
  }

  async function newEdge(theedgedata) {
    let cleaned = _.omit(theedgedata, ['new'])
    //console.log(cleaned)
    try {
      await client.graphql({ query: mutations.createEdge, variables: { input: cleaned } })
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
    //console.log(`updateEdge :`, theedgedata)
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
      await client.graphql({ query: mutations.deleteNode, variables: { input: { id: thenode.id } } })
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
    let cleaned = _.omit(thenode, ['new'])
    //console.log(`newNode :`, cleaned)
    try {
      await client.graphql({ query: mutations.createNode, variables: { input: cleaned } })
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

  async function updatetheNode(thenode) {
    let cleaned = _.omit(thenode, ['handles', 'ariaLabel', 'className', 'createdAt', 'updatedAt', '__typename', 'position.__typename', 'measured.__typename', 'data.__typename'])
    //console.log(`updateNode :`, cleaned)
    try {
      await client.graphql({ query: mutations.updateNode, variables: { input: cleaned } })
      notifications.show({
        title: `${thenode.data.label}`,
        message: 'The Node was updated',
      })
    } catch (error) {
      notifications.show({
        title: `There was an error updating the Node ${thenode.data.label}`,
        message: JSON.stringify(error),
      })
      console.log(`There was a problem updating the Node ${thenode.data.label}:`, error)
    }
  }

  function saveNode(thenode, index) {
    if (thenode.new) {
      newNode(thenode)
    } else {
      updatetheNode(thenode)
    }
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

  function updateView() {
    setNodes(diagram.values.nodes.items)
    setEdges(diagram.values.edges.items)
  }

  function pushtoForm() {
    //console.log(`view edges :`, edges)
    //console.log(`form edges :`, diagram.values.edges.items)
    nodes.forEach((node, index) => {
      diagram.setFieldValue(`nodes.items.${index}`, node)
    })
    edges.forEach((edge, index) => {
      const se = diagram.values.edges.items
      const exists = se.findIndex((obj) => obj.id === edge.id) > -1
      if (!exists) {
        edge.new = true
        //console.log(`${edge.id} is NEW`)
      }
      diagram.setFieldValue(`edges.items.${index}`, edge)
    })
  }

  async function submitForm(values) {
    //pushtoForm()
    const newnodes = values.nodes.items.filter((item) => item.new)
    const usednodes = values.nodes.items.filter((item) => !item.new)
    //console.log(`usednodes :`, usednodes)
    const updatednodes = usednodes.filter((o2) => {
      const index = saved.nodes.items.findIndex((o1) => o1.id === o2.id)
      if (index === -1) return true
      return JSON.stringify(o2) !== JSON.stringify(saved.nodes.items[index])
    })
    //console.log(`updatednodes :`, updatednodes)
    newnodes.forEach((node, index) => {
      newNode(node)
    })
    updatednodes.forEach((node, index) => {
      updatetheNode(node)
    })

    const newedges = values.edges.items.filter((item) => item.new)
    //console.log(`newedges :`, newedges)
    const usededges = values.edges.items.filter((item) => !item.new)
    //console.log(`usededges :`, usededges)
    const updatededges = usededges.filter((o2) => {
      const index = saved.edges.items.findIndex((o1) => o1.id === o2.id)
      if (index === -1) return true
      return JSON.stringify(o2) !== JSON.stringify(saved.edges.items[index])
    })
    //console.log(`updatededges :`, updatededges)
    newedges.forEach((edge, index) => {
      edge.diagramId = diagram.values.id
      newEdge(edge)
    })
    updatededges.forEach((edge, index) => {
      updatetheEdge(edge)
    })

    if (newgram) {
      newDiagram(values)
      setNewgram(false)
    } else {
      saveDiagram(values)
    }
    setSaved(values)
  }

  const NewNodeForm = () => {
    return (
      <form onSubmit={addnode.onSubmit((values) => onAdd(values))}>
        <Stack gap='xs'>
          <TextInput label='Label' placeholder='Label' size='xs' {...addnode.getInputProps('data.label')} />
          <Textarea label='Description' placeholder='Description' size='xs' {...addnode.getInputProps('data.description')} />
          <Stack gap={6}>
            <Text size='12' fw={500} lh={1}>
              Type
            </Text>
            <Fieldset p={0}>
              <Chip.Group {...addnode.getInputProps('type')}>
                <Group justify='start' p='xs' gap='xs'>
                  <Chip value='data'>
                    <Group wrap='nowrap' gap='xs'>
                      <IconDataFlow size='12' />
                      <Text size='11' tt='uppercase' fw={600} lh={1}>
                        Data Input/Output
                      </Text>
                    </Group>
                  </Chip>
                  <Chip value='database'>
                    <Group wrap='nowrap' gap='xs'>
                      <IconDatabaseFlow size='12' />
                      <Text size='11' tt='uppercase' fw={600} lh={1}>
                        Database
                      </Text>
                    </Group>
                  </Chip>
                  <Chip value='decision'>
                    <Group wrap='nowrap' gap='xs'>
                      <IconDecisionFlow size='12' />
                      <Text size='11' tt='uppercase' fw={600} lh={1}>
                        Decision
                      </Text>
                    </Group>
                  </Chip>
                  <Chip value='document'>
                    <Group wrap='nowrap' gap='xs'>
                      <IconDocumentFlow size='12' />
                      <Text size='11' tt='uppercase' fw={600} lh={1}>
                        Document
                      </Text>
                    </Group>
                  </Chip>
                  <Chip value='init'>
                    <Group wrap='nowrap' gap='xs'>
                      <IconInitFlow size='12' />
                      <Text size='11' tt='uppercase' fw={600} lh={1}>
                        Initialization
                      </Text>
                    </Group>
                  </Chip>
                  <Chip value='minput'>
                    <Group wrap='nowrap' gap='xs'>
                      <IconInputFlow size='12' />
                      <Text size='11' tt='uppercase' fw={600} lh={1}>
                        Manual Input
                      </Text>
                    </Group>
                  </Chip>
                  <Chip value='operate'>
                    <Group wrap='nowrap' gap='xs'>
                      <IconOperateFlow size='12' />
                      <Text size='11' tt='uppercase' fw={600} lh={1}>
                        Manual Operatation
                      </Text>
                    </Group>
                  </Chip>
                  <Chip value='process'>
                    <Group wrap='nowrap' gap='xs'>
                      <IconProcessFlow size='12' />
                      <Text size='11' tt='uppercase' fw={600} lh={1}>
                        Process
                      </Text>
                    </Group>
                  </Chip>
                  <Chip value='subroutine'>
                    <Group wrap='nowrap' gap='xs'>
                      <IconSubroutineFlow size='12' />
                      <Text size='11' tt='uppercase' fw={600} lh={1}>
                        Predefined Subroutine
                      </Text>
                    </Group>
                  </Chip>
                  <Chip value='terminal'>
                    <Group wrap='nowrap' gap='xs'>
                      <IconTerminalFlow size='12' />
                      <Text size='11' tt='uppercase' fw={600} lh={1}>
                        Terminator
                      </Text>
                    </Group>
                  </Chip>
                </Group>
              </Chip.Group>
            </Fieldset>
          </Stack>
          <Button type='submit'>Add Node</Button>
        </Stack>
      </form>
    )
  }

  function AccordionControl(props) {
    return (
      <Group gap={sizeme} wrap='nowrap' justify='space-between'>
        <Accordion.Control {...props} icon={<IconDatabaseEdit color='var(--mantine-primary-color-filled)' />} />
        <Tooltip label='Add Node'>
          <ActionIcon
            variant='outline'
            onClick={() => {
              modals.open({
                title: 'Add Node',
                children: <NewNodeForm />,
                size: 'lg',
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
        <ActionIcon.Group>
          <Tooltip label='Sync Form'>
            <ActionIcon variant='outline' onClick={pushtoForm}>
              <IconForms style={{ width: rem(20) }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label='Save Diagram'>
            <ActionIcon size='md' type='submit' variant='outline'>
              <IconDeviceFloppy size='1.25rem' />
            </ActionIcon>
          </Tooltip>
        </ActionIcon.Group>
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
                      <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
                        <TextInput label='Name' placeholder='Name' required key={diagram.key('name')} {...diagram.getInputProps('name')} />
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
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
                      <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
                        <Textarea label='Description' placeholder='Description' {...diagram.getInputProps('description')} />
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
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
                      <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
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
                                </Fieldset>
                              ))}
                            </Accordion.Panel>
                          </Accordion.Item>
                        </Accordion>
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
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
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onNodesDelete={onNodesDelete} onEdgesDelete={onEdgesDelete} onConnect={onConnect}>
        <Background color='#ccc' variant={BackgroundVariant.Dots} />
        <MiniMap zoomable pannable />
        <Controls />
      </ReactFlow>
    </React.Fragment>
  )
}

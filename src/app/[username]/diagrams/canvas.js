'use client'
import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import * as mutations from '@/graphql/mutations'
import { generateClient } from 'aws-amplify/api'
import { notifications } from '@mantine/notifications'
import { Stack, ActionIcon, NumberInput, Fieldset, Title, Avatar, Badge, TextInput, Grid, Button, Group, Textarea, Select, ScrollArea, Accordion, SimpleGrid } from '@mantine/core'
import { useForm } from '@mantine/form'
import { modals } from '@mantine/modals'
import { ReactFlow, useNodesState, useEdgesState, addEdge, Controls, MiniMap, Background, BackgroundVariant } from '@xyflow/react'
import { IconTrash, IconDeviceFloppy, IconRestore, IconDialpad, IconLine, IconRefresh, IconSquarePlus, IconBookmarkPlus, IconPencil, IconEyeX } from '@tabler/icons-react'
import { nanoid } from 'nanoid'
import '@xyflow/react/dist/style.css'
import classes from './diagrams.module.css'
import { nodetypes, nodeTypes } from '@/components/nodes'
var _ = require('lodash')

export default function DiagramCanvas(props) {
  //console.log(props)
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
  const [addnodem, setAddnodem] = useState(false)
  const [nodes, setNodes, onNodesChange] = useNodesState(props.diagram.nodes?.items)
  const [edges, setEdges, onEdgesChange] = useEdgesState(props.diagram.edges?.items)
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])
  const addnode = useForm({
    mode: 'uncontrolled',
    initialValues: {
      id: nanoid(),
      new: true,
      data: { label: 'New Node' },
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
        id: nanoid(),
        data: { label: values.data.label },
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

  function submitForm(values) {
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
        newEdge(edge)
      })
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
      saveDiagram(values)
    }
  }

  async function newDiagram(values) {
    let cleaned = _.omit(values, ['new', 'edges', 'nodes', 'content', 'createdAt', 'updatedAt', '__typename'])
    console.log(cleaned)
    try {
      const doc = await client.graphql({ query: mutations.createDiagram, variables: { input: cleaned } })
      //console.log(doc)
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
      console.log(`There was a problem updateing the Dia :`, error)
    }
  }

  async function saveDiagram(values) {
    let cleaned = _.omit(values, ['edges', 'nodes', 'content', 'createdAt', 'updatedAt', '__typename'])
    //console.log(cleaned)
    try {
      const doc = await client.graphql({ query: mutations.updateDiagram, variables: { input: cleaned } })
      //console.log(doc)
      notifications.show({
        title: `${values.name} was updated`,
        message: `The Diagram was updated. id: ${values.id}`,
      })
    } catch (error) {
      notifications.show({
        title: 'There was an error saving the document',
        message: JSON.stringify(error),
      })
      console.log(`There was a problem saving the Doc :`, error)
    }
  }

  function saveEdge(values, index) {
    const theedgedata = values.edges.items[index]
    newEdge(theedgedata)
    //console.log(`Save Edge : ${index} | Values : ${JSON.stringify(theedgedata)}`)
  }

  function saveNode(values, index) {
    const thenodedata = values.nodes.items[index]
    newNode(thenodedata)
    //console.log(`Save Node : ${index} | Values : ${JSON.stringify(thenodedata)}`)
  }

  async function newEdge(theedgedata) {
    console.log(`newEdge :`, theedgedata)
    try {
      const doc = await client.graphql({ query: mutations.createEdge, variables: { input: theedgedata } })
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

  async function newNode(thenodedata) {
    console.log(`newNode :`, thenodedata)
    try {
      const doc = await client.graphql({ query: mutations.createNode, variables: { input: thenodedata } })
      notifications.show({
        title: `${thenodedata.data.label}`,
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
    console.log(`updateNode :`, thenodedata)
    let cleaned = _.omit(thenodedata, ['ariaLabel', 'className', 'createdAt', 'updatedAt', '__typename', 'position.__typename', 'measured.__typename', 'data.__typename'])
    try {
      await client.graphql({ query: mutations.updateNode, variables: { input: cleaned } })
      notifications.show({
        title: `${thenodedata.data.label}`,
        message: 'The Node was updated',
      })
    } catch (error) {
      notifications.show({
        title: 'There was an error updating the Node',
        message: JSON.stringify(error),
      })
      console.log(`There was a problem updating the Node :`, error)
    }
  }

  async function updatetheEdge(theedgedata) {
    console.log(`updateEdge :`, theedgedata)
    try {
      await client.graphql({ query: mutations.updateEdge, variables: { input: theedgedata } })
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

  function pushtoForm() {
    //console.log(nodes)
    nodes.forEach((node, index) => {
      diagram.setFieldValue(`nodes.items.${index}`, node)
    })
    //console.log(edges)
    edges.forEach((edge, index) => {
      diagram.setFieldValue(`edges.items.${index}`, edge)
    })
  }

  function updateView() {
    setNodes(diagram.values.nodes.items)
    setEdges(diagram.values.edges.items)
  }

  function nodeHandles(thing, node) {
    const handles = diagram.values.nodes.items[node].handles?.items?.map((handle, index) => <TextInput label='Handle ID ' {...diagram.getInputProps(`item.nodes.items.${node}.handles.items.${index}.id`)} />)
    return handles
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

  const NewNodeForm = () => {
    return (
      <form onSubmit={addnode.onSubmit((values) => onAdd(values))}>
        <Stack>
          <TextInput label='Label' placeholder='Label' size='xs' {...addnode.getInputProps('data.label')} />
          <Select label='Type' placeholder='Pick value' size='xs' data={nodetypes} {...addnode.getInputProps('data.type')} />
          <Button type='submit'>Add Node</Button>{' '}
        </Stack>
      </form>
    )
  }

  return (
    <Grid>
      <Grid.Col span='auto'>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
          <Background color='#ccc' variant={BackgroundVariant.Dots} />
          <MiniMap zoomable pannable />
          <Controls />
        </ReactFlow>
      </Grid.Col>
      <Grid.Col span='content' className={classes.edge} p='0'>
        <ScrollArea h='100vh' pt='xl' px='0' scrollbars='y' offsetScrollbars='x'>
          <form onSubmit={diagram.onSubmit((values) => submitForm(values))}>
            <Stack w='200px' px='xs' gap='xs'>
              <TextInput {...diagram.getInputProps(`name`)} size='md' fw={600} c='var(--mantine-color-anchor)' rightSection={<IconPencil />} />
              <Group wrap='nowrap' gap='xs'>
                <TextInput {...diagram.getInputProps(`slug`)} size='xs' />
                <Select data={['live', 'draft', 'private', 'archive', 'trash']} {...diagram.getInputProps(`status`)} size='xs' />
              </Group>
              <Textarea label='Description' {...diagram.getInputProps(`description`)} size='xs' />
              <Button leftSection={<IconEyeX size={14} />} variant='outline' onClick={updateView}>
                Sync to View
              </Button>
              <Accordion chevronPosition='right' variant='contained'>
                <Accordion.Item value='graphic' key='graphic'>
                  <Accordion.Control px='xs'>
                    <Group wrap='nowrap'>
                      <IconDialpad color='var(--mantine-color-anchor)' />
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
                        <Select label='Type' data={nodetypes} {...diagram.getInputProps(`nodes.items.${index}.type`)} size='xs' />
                        <SimpleGrid cols={2}>
                          <NumberInput label='X' allowDecimal={false} {...diagram.getInputProps(`nodes.items.${index}.position.x`)} size='xs' />
                          <NumberInput label='Y' allowDecimal={false} {...diagram.getInputProps(`nodes.items.${index}.position.y`)} size='xs' />
                        </SimpleGrid>
                        <Group justify='end'>
                          <ActionIcon mt='xs' color='pink.9' onClick={() => diagram.removeListItem('nodes.items', index)}>
                            <IconTrash size={18} color='white' />
                          </ActionIcon>
                          <ActionIcon mt='xs' color='pink.9' onClick={() => saveNode(diagram.values, index)}>
                            <IconDeviceFloppy size={18} color='white' />
                          </ActionIcon>
                        </Group>
                      </Fieldset>
                    ))}
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
              <Button
                leftSection={<IconSquarePlus size={14} />}
                variant='outline'
                onClick={() => {
                  modals.open({
                    title: 'Add Node',
                    children: <NewNodeForm />,
                  })
                }}>
                Add Node
              </Button>
              <Accordion chevronPosition='right' variant='contained'>
                <Accordion.Item value='graphic' key='graphic'>
                  <Accordion.Control px='xs'>
                    <Group wrap='nowrap'>
                      <IconLine color='var(--mantine-color-anchor)' />
                      <Title order={5}>Edges</Title>
                    </Group>
                  </Accordion.Control>
                  <Accordion.Panel>
                    {diagram.values.edges?.items?.map((item, index) => (
                      <Fieldset key={index} mb='sm' p='xs'>
                        <Badge size='md' w='100%' variant='outline' radius='xs'>
                          {item.id}
                        </Badge>
                        <TextInput label='Source' {...diagram.getInputProps(`edges.items.${index}.source`)} size='xs' />
                        <TextInput label='Target' {...diagram.getInputProps(`edges.items.${index}.target`)} size='xs' />
                        <Group justify='end'>
                          <ActionIcon mt='xs' color='pink.9' onClick={() => diagram.removeListItem('edges.items', index)}>
                            <IconTrash size={18} color='white' />
                          </ActionIcon>
                          <ActionIcon mt='xs' color='pink.9' onClick={() => saveEdge(diagram.values, index)}>
                            <IconDeviceFloppy size={18} color='white' />
                          </ActionIcon>
                        </Group>
                      </Fieldset>
                    ))}
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
              <Button type='submit' fullWidth rightSection={<IconDeviceFloppy />}>
                Save Diagram
              </Button>
            </Stack>
          </form>
        </ScrollArea>
      </Grid.Col>
    </Grid>
  )
}

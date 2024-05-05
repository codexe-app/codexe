'use client'
import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import * as mutations from '@/graphql/mutations'
import { generateClient } from 'aws-amplify/api'
import { notifications } from '@mantine/notifications'
import { Stack, ActionIcon, NumberInput, Fieldset, Title, Avatar, Badge, TextInput, Grid, Button, Group, Textarea, Select, ScrollArea, Accordion, SimpleGrid } from '@mantine/core'
import { useForm } from '@mantine/form'
import { modals } from '@mantine/modals'
import { ReactFlow, ReactFlowProvider, useNodesState, useEdgesState, addEdge, useReactFlow, Panel, Controls, MiniMap, Background, BackgroundVariant } from '@xyflow/react'
import { IconTrash, IconDeviceFloppy, IconRestore, IconDialpad, IconLine, IconRefresh, IconSquarePlus, IconBookmarkPlus, IconPencil, IconEyeX } from '@tabler/icons-react'
import { nanoid } from 'nanoid'
import '@xyflow/react/dist/style.css'
import classes from './diagrams.module.css'
import { nodetypes, nodeTypes } from '@/components/nodes'
var _ = require('lodash')

export default function DiagramCanvas(props) {
  const client = generateClient()
  const router = useRouter()
  const diagram = useForm({
    mode: 'controlled',
    initialValues: props.diagram,
    onValuesChange: (values) => {
      console.log(values)
      slugify(values.name)
    },
  })
  const diagramid = props.diagram.id
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

  const addedge = useForm({
    mode: 'uncontrolled',
    initialValues: {
      id: nanoid(),
      source: '',
      target: '',
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
      }
      setNodes((nds) => nds.concat(newNode))
      setAddnodem(false)
    },
    [setNodes]
  )

  function submitForm(values) {
    //NEED SLUG DUPE CHECK
    if (props.new) {
      newDiagram(values)
    } else {
      //saveDiagram(values)
    }
  }

  async function newDiagram(values) {
    let cleaned = _.omit(values, ['edges', 'nodes'])
    try {
      const doc = await client.graphql({ query: mutations.createDiagram, variables: { input: cleaned } })
      notifications.show({
        title: `${values.name} was created`,
        message: `The Diagram was saved with the id: ${values.id}`,
      })
    } catch (error) {
      notifications.show({
        title: 'There was an error creating the document',
        message: JSON.stringify(error),
      })
      console.log(`There was a problem creating the Doc :`, error)
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

  function pushtoForm() {
    //console.log(nodes)
    nodes.forEach((node, index) => {
      diagram.setFieldValue(`nodes.items.${index}`, node)
    })
    //console.log(edges)
    nodes.forEach((edge, index) => {
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
              <Button type='submit' fullWidth rightSection={<IconDeviceFloppy />}>
                Save Diagram
              </Button>
              <Button leftSection={<IconBookmarkPlus size={14} />} variant='outline' onClick={pushtoForm}>
                Sync to Form
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
                          <NumberInput label='X' {...diagram.getInputProps(`nodes.items.${index}.position.x`)} size='xs' />
                          <NumberInput label='Y' {...diagram.getInputProps(`nodes.items.${index}.position.y`)} size='xs' />
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

              <Button leftSection={<IconEyeX size={14} />} variant='outline' onClick={updateView}>
                Sync to View
              </Button>
            </Stack>
          </form>
        </ScrollArea>
      </Grid.Col>
    </Grid>
  )
}

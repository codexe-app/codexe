'use client'
import React, { useState, useCallback } from 'react'
import { Stack, ActionIcon, NumberInput, Paper, TextInput, Grid, Button, Group, Popover, Select, ColorPicker } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { ReactFlow, ReactFlowProvider, useNodesState, useEdgesState, addEdge, useReactFlow, Panel, Controls, MiniMap, Background, BackgroundVariant } from '@xyflow/react'
import { IconTrash, IconDeviceFloppy, IconRestore, IconSquarePlus, IconBookmarkPlus } from '@tabler/icons-react'
import { nanoid } from 'nanoid'
import '@xyflow/react/dist/style.css'
import classes from './flow.module.css'

const getNodeId = () => `randomnode_${+new Date()}`

const nodetypes = ['input', 'output', 'default']

export default function Flowchart(props) {
  const form = useForm({
    initialValues: props.flow,
  })
  const [nodes, setNodes, onNodesChange] = useNodesState(props.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(props.edges)
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])
  const addnode = useForm({
    initialValues: {
      id: nanoid(),
      data: { label: 'New Node Added' },
      type: 'default',
      position: {
        x: (Math.random() * window.innerWidth) / 2,
        y: (Math.random() * window.innerHeight) / 2,
      },
    },
  })
  const [addnodem, setAddnodem] = useState(false)

  const onAdd = useCallback(
    (values) => {
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

  function pushtoForm() {
    console.log(nodes)
    form.setFieldValue('nodes.items', nodes)
  }

  return (
    <Grid gap={0}>
      <Grid.Col span='content'>
        <Stack className={classes.action}>
          <Popover width={300} opened={addnodem} onChange={setAddnodem} trapFocus position='bottom' withArrow shadow='md'>
            <Popover.Target>
              <ActionIcon variant='filled' size='lg' radius='xl' aria-label='Settings' onClick={() => setAddnodem((o) => !o)}>
                <IconSquarePlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown>
              <form onSubmit={addnode.onSubmit((values) => onAdd(values))}>
                <Stack>
                  <TextInput label='Label' placeholder='Label' size='xs' {...addnode.getInputProps('data.label')} />
                  <Select label='Type' placeholder='Pick value' size='xs' data={nodetypes} {...addnode.getInputProps('data.type')} />
                  <ColorPicker />
                  <Button type='submit'>Add Node</Button>{' '}
                </Stack>
              </form>
            </Popover.Dropdown>
          </Popover>
          <ActionIcon variant='filled' size='lg' radius='xl' aria-label='Settings' onClick={pushtoForm}>
            <IconBookmarkPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
        </Stack>
      </Grid.Col>
      <Grid.Col span='auto'>
        <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
          <Background color='#ccc' variant={BackgroundVariant.Dots} />
          <MiniMap zoomable pannable />
          <Controls />
        </ReactFlow>
      </Grid.Col>
      <Grid.Col span='content'>
        <Stack className={classes.data}>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            {form.values.nodes.items?.map((item, index) => (
              <Paper key={index} mt='xs' withBorder p='xs'>
                <TextInput label='Id' {...form.getInputProps(`nodes.items.${index}.id`)} size='xs' />
                <TextInput label='Label' {...form.getInputProps(`nodes.items.${index}.data.label`)} size='xs' />
                <Select label='Type' placeholder={item.data.type} data={nodetypes} {...form.getInputProps(`nodes.items.${index}.data.type`)} size='xs'/>

                  <Group>
                    <NumberInput label='X' {...form.getInputProps(`nodes.items.${index}.position.x`)} size='xs' />
                    <NumberInput label='Y' {...form.getInputProps(`nodes.items.${index}.position.y`)} size='xs' />
                  </Group>
                <ActionIcon mt='xs' color='pink.9' onClick={() => form.removeListItem('nodes', index)}>
                  <IconTrash size={18} />
                </ActionIcon>
              </Paper>
            ))}
            <Group justify='flex-end' mt='md'>
              <Button type='submit'>Submit</Button>
            </Group>
          </form>
        </Stack>
      </Grid.Col>
    </Grid>
  )
}

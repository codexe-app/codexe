'use client'
import React, { useState, useCallback } from 'react'
import { Stack, ActionIcon, Grid } from '@mantine/core'
import { ReactFlow, ReactFlowProvider, useNodesState, useEdgesState, addEdge, useReactFlow, Panel, Controls, MiniMap } from '@xyflow/react'
import { IconAdjustments, IconDeviceFloppy, IconRestore, IconSquarePlus } from '@tabler/icons-react'
import '@xyflow/react/dist/style.css'
import classes from './flow.module.css'

const flowKey = 'example-flow'

const getNodeId = () => `randomnode_${+new Date()}`

const initialNodes = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 200 } },
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

const SaveRestore = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [rfInstance, setRfInstance] = useState(null)
  const { setViewport } = useReactFlow()

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject()
      localStorage.setItem(flowKey, JSON.stringify(flow))
    }
  }, [rfInstance])

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey))

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport
        setNodes(flow.nodes || [])
        setEdges(flow.edges || [])
        setViewport({ x, y, zoom })
      }
    }

    restoreFlow()
  }, [setNodes, setViewport])

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: { label: 'Added node' },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight,
      },
    }
    setNodes((nds) => nds.concat(newNode))
  }, [setNodes])

  return (
    <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} onInit={setRfInstance}>
      <Panel position='top-left' className={classes.menu}>
        <Stack>
          <ActionIcon variant='filled' size='lg' radius='xl' aria-label='Settings' onClick={onSave}>
            <IconDeviceFloppy style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='filled' size='lg' radius='xl' aria-label='Settings' onClick={onRestore}>
            <IconRestore style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='filled' size='lg' radius='xl' aria-label='Settings' onClick={onAdd}>
            <IconSquarePlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
        </Stack>
      </Panel>
      <MiniMap zoomable pannable />
      <Controls />
    </ReactFlow>
  )
}

export default function Page() {
  return (
    <ReactFlowProvider>
      <SaveRestore />
    </ReactFlowProvider>
  )
}

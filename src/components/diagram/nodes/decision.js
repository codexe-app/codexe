import React, { memo } from 'react'
import { Handle, Position, NodeProps, NodeResizeControl } from '@xyflow/react'
import { Card, Box, Text, Stack, Badge, Group, ActionIcon, Container, BackgroundImage } from '@mantine/core'
import { IconResize, IconGrain } from '@tabler/icons-react'
import classes from './nodes.module.css'

const DEFAULT_HANDLE_STYLE = {
  width: 10,
  height: 10,
  bottom: 0,
}

const Shaped = () => {
  return (
    <svg width='161' height='160' viewBox='0 0 161 160' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect x='-0.414214' y='80' width='114.319' height='114.319' rx='5' transform='rotate(-45 -0.414214 80)' fill='var(--mantine-color-body)' stroke='var(--mantine-color-gray-3)' strokeWidth='2' />
    </svg>
  )
}

function DecisionlNode({ data, isConnectable }) {
  //console.log('node render :', data);
  return (
    <Box h={160} w={160}>
      <Box className={classes.shape}>
        <Shaped />
      </Box>
      <Box>
        <Stack align='center' py='xl' gap='xs'>
          <Badge radius='xs' size='lg'>
            {data.label}
          </Badge>
          <Text size='xs'>{data.description}</Text>
        </Stack>
        <Handle type='target' id={`t1${data.id}`} position={Position.Top} style={{ ...DEFAULT_HANDLE_STYLE, left: '50%', background: 'orange' }} isConnectable={isConnectable} />
        <Handle type='source' id={`s1${data.id}`} position={Position.Left} style={{ ...DEFAULT_HANDLE_STYLE, left: '0', background: 'purple' }} onConnect={(params) => console.log('handle onConnect', params)} isConnectable={isConnectable} />
        <Handle type='source' id={`s2${data.id}`} position={Position.Right} style={{ ...DEFAULT_HANDLE_STYLE, right: '0', background: 'purple' }} onConnect={(params) => console.log('handle onConnect', params)} isConnectable={isConnectable} />
        <Handle type='source' id={`s3${data.id}`} position={Position.Bottom} style={{ ...DEFAULT_HANDLE_STYLE, left: '50%', background: 'purple' }} onConnect={(params) => console.log('handle onConnect', params)} isConnectable={isConnectable} />
      </Box>
    </Box>
  )
}

export default memo(DecisionlNode)

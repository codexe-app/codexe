import React, { memo } from 'react'
import { Handle, Position, NodeProps, NodeResizeControl } from '@xyflow/react'
import { Card, Stack, Box, Text, Progress, Badge, Group, ActionIcon, Container, BackgroundImage } from '@mantine/core'
import { IconResize, IconGrain } from '@tabler/icons-react'
import classes from './nodes.module.css'

const DEFAULT_HANDLE_STYLE = {
  width: 10,
  height: 10,
  top: 0,
}

const Shaped = () => {
  return (
    <svg width='160' height='90' viewBox='0 0 160 90' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='160' height='90' rx='48' fill='var(--mantine-color-body)' stroke='var(--mantine-color-gray-3)' strokeWidth='2' />
    </svg>
  )
}

function StopNode({ data, isConnectable }) {
  //console.log('node render :', data);
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.shape}>
        <Shaped />
      </Box>
      <Box>
        <Stack align='center' py='xs' gap='xs'>
          <Badge radius='xs' size='lg'>
            {data.label}
          </Badge>
          <Text size='xs'>{data.description}</Text>
        </Stack>
        <Handle type='target' id='orange' position={Position.Top} style={{ ...DEFAULT_HANDLE_STYLE, left: 'calc(50% - 5px)', background: 'orange' }} isConnectable={isConnectable} />
      </Box>
    </Box>
  )
}

export default memo(StopNode)

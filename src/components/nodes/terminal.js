import React, { memo } from 'react'
import { Handle, Position, NodeProps, NodeResizeControl } from '@xyflow/react'
import { Card, Box, Text, Progress, Badge, Group, ActionIcon, Container, BackgroundImage } from '@mantine/core'
import { IconResize, IconGrain } from '@tabler/icons-react'
import classes from './nodes.module.css'

const DEFAULT_HANDLE_STYLE = {
  width: 10,
  height: 10,
  bottom: 0,
}

const Shaped = () => {
  return (
    <svg width='160' height='90' viewBox='0 0 160 90' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='160' height='90' rx='32' fill='var(--mantine-color-body)' stroke='var(--mantine-color-dark-4)' />
    </svg>
  )
}

function TerminalNode({ data, isConnectable }) {
  //console.log('node render :', data);
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.shape}>
        <Shaped />
      </Box>
      <Box>
        <Group justify='space-between'>
          <IconGrain />
          <Badge radius='xs' size='lg'>
            {data.label}
          </Badge>
        </Group>
        <Handle type='source' id='purple' position={Position.Bottom} style={{ ...DEFAULT_HANDLE_STYLE, left: '15%', background: 'purple' }} onConnect={(params) => console.log('handle onConnect', params)} isConnectable={isConnectable} />
        <Handle type='target' id='orange' position={Position.Top} style={{ ...DEFAULT_HANDLE_STYLE, left: '85%', background: 'orange' }} isConnectable={isConnectable} />
      </Box>
    </Box>
  )
}

export default memo(TerminalNode)

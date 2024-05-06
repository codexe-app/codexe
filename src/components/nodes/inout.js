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
    <svg width='164' height='93' viewBox='0 0 164 93' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M157.097 1H23.4972C21.1226 1 19.0755 2.67019 18.599 4.99648L2.00431 85.9965C1.36913 89.0969 3.73778 92 6.90257 92H140.503C142.877 92 144.924 90.3298 145.401 88.0035L161.996 7.00352C162.631 3.90313 160.262 1 157.097 1Z'
        fill='var(--mantine-color-body)'
        stroke='var(--mantine-color-gray-3)'
        strokeWidth='2'
      />
    </svg>
  )
}

function DecisionlNode({ data, isConnectable }) {
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

export default memo(DecisionlNode)

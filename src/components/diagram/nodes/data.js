import React, { memo } from 'react'
import { Handle, Position, NodeProps, NodeResizeControl } from '@xyflow/react'
import { Card, Box, Stack, Text, Progress, Badge, Group, ActionIcon, Container, BackgroundImage } from '@mantine/core'
import { IconResize, IconGrain } from '@tabler/icons-react'
import classes from './nodes.module.css'
import { nanoid } from 'nanoid'

const DEFAULT_HANDLE_STYLE = {
  width: 10,
  height: 10,
  bottom: 0,
}

const Shaped = () => {
  return (
    <svg width='160' height='90' viewBox='0 0 160 90' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M148,2c5.5,0,9.9,4.4,10,9.9l-10,65.9c-0.5,3.8-2.6,10.3-10,10.3H12c-5.5,0-9.9-4.4-10-9.9l10-65.8l0-0.1V12
				c0-5.5,4.5-10,10-10H148 M148,0H22c-6.6,0-12,5.4-12,12L0,78c0,6.6,5.4,12,12,12h126c7,0,11-5,12-12l10-66C160,5.4,154.6,0,148,0
				L148,0z'
        fill='var(--mantine-color-body)'
        stroke='var(--mantine-color-gray-3)'
        strokeWidth='2'
      />
    </svg>
  )
}

function DataNode({ data, isConnectable }) {
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
        <Handle
          type='source'
          id={`s1${data.id}`}
          position={Position.Bottom}
          style={{ ...DEFAULT_HANDLE_STYLE, left: '50%', background: 'purple' }}
          onConnect={(params) => console.log('handle onConnect', params)}
          isConnectable={isConnectable}
        />
        <Handle type='target' id={`t1${data.id}`} position={Position.Top} style={{ ...DEFAULT_HANDLE_STYLE, left: '50%', background: 'orange' }} isConnectable={isConnectable} />
      </Box>
    </Box>
  )
}

export default memo(DataNode)

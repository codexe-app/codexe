import React, { memo } from 'react'
import { Handle, Position } from '@xyflow/react'
import { Box, Stack, Text, Badge } from '@mantine/core'
import classes from './nodes.module.css'

const DEFAULT_HANDLE_STYLE = {
  width: 10,
  height: 10,
  bottom: 0,
}

const Shaped = () => {
  return (
    <svg width='160' height='120' viewBox='0 0 160 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M157.595 106.542C157.595 112.965 122.862 118.196 80 118.196C37.1377 118.196 2.40527 112.965 2.40527 106.542V13.4576C2.40527 6.99939 37.1377 1.80396 80 1.80396C122.862 1.80396 157.595 6.99939 157.595 13.4576V106.542Z'
        fill='var(--mantine-color-body)'
        stroke='var(--mantine-color-gray-3)'
        strokeWidth='2'
      />
      <path d='M157.595 14.6483C157.595 21.0704 122.862 26.3019 80 26.3019C37.1377 26.3019 2.40527 21.0704 2.40527 14.6483' stroke='var(--mantine-color-gray-3)' strokeWidth='2' />
    </svg>
  )
}

function DatabaseNode({ data, isConnectable }) {
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

export default memo(DatabaseNode)

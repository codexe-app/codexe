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
        d='M29.7881 7.43859C30.6118 5.90426 31.8647 4.61621 33.4086 3.71641C34.9524 2.81661 36.7274 2.34002 38.5377 2.33917H121.462C123.264 2.3486 125.029 2.82924 126.563 3.72857C128.098 4.6279 129.343 5.91131 130.163 7.43859L156.215 54.924C157.085 56.488 157.539 58.2306 157.539 60C157.539 61.7694 157.085 63.512 156.215 65.076L130.163 112.561C129.343 114.089 128.098 115.372 126.563 116.271C125.029 117.171 123.264 117.651 121.462 117.661H38.5377C36.7274 117.66 34.9524 117.183 33.4086 116.284C31.8647 115.384 30.6118 114.096 29.7881 112.561L3.78504 65.076C2.91558 63.512 2.46106 61.7694 2.46106 60C2.46106 58.2306 2.91558 56.488 3.78504 54.924L29.7881 7.43859Z'
        fill='var(--mantine-color-body)'
        stroke='var(--mantine-color-gray-3)'
        strokeWidth='2'
      />
    </svg>
  )
}

function InitNode({ data, isConnectable }) {
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

export default memo(InitNode)

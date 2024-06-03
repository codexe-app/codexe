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
        d='M2.66585 7.92764C2.41163 6.8108 2.59776 5.64536 3.18972 4.64747C3.78167 3.64957 4.73929 2.88693 5.88496 2.50098C6.26188 2.40442 6.65112 2.35679 7.04183 2.35942H152.908C154.126 2.3842 155.285 2.85899 156.133 3.68067C156.981 4.50235 157.448 5.60456 157.435 6.74793C157.487 7.13962 157.487 7.53596 157.435 7.92764L128.815 112.025C128.43 113.611 127.485 115.028 126.134 116.048C124.783 117.067 123.104 117.628 121.371 117.641H38.5791C36.8502 117.612 35.1806 117.044 33.833 116.028C32.4854 115.011 31.5362 113.603 31.1349 112.025L2.66585 7.92764Z'
        fill='var(--mantine-color-body)'
        stroke='var(--mantine-color-gray-3)'
        strokeWidth='2'
      />
    </svg>
  )
}

function OperateNode({ data, isConnectable }) {
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

export default memo(OperateNode)

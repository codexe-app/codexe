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
        d='M2.40375 8.10048C2.40369 6.58476 3.01505 5.13041 4.10464 4.05423C5.19424 2.97805 6.6738 2.36722 8.22105 2.3548H151.779C153.326 2.36722 154.806 2.97805 155.895 4.05423C156.985 5.13041 157.596 6.58476 157.596 8.10048V111.711C157.635 112.485 157.514 113.259 157.239 113.986C156.965 114.713 156.544 115.378 156 115.941C155.457 116.504 154.803 116.954 154.077 117.263C153.352 117.572 152.57 117.734 151.779 117.739H8.22105C7.4467 117.733 6.68124 117.577 5.96885 117.28C5.25646 116.982 4.61124 116.55 4.07042 116.007C3.52959 115.464 3.10387 114.821 2.81781 114.116C2.53175 113.411 2.39103 112.658 2.40375 111.9V8.10048Z'
        fill='var(--mantine-color-body)'
        stroke='var(--mantine-color-gray-3)'
        strokeWidth='2'
      />
      <path d='M17.9327 2.3548V117.739M142.115 2.3548V117.739' fill='var(--mantine-color-body)' stroke='var(--mantine-color-gray-3)' strokeWidth='2' />
    </svg>
  )
}

function SubroutineNode({ data, isConnectable }) {
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

export default memo(SubroutineNode)

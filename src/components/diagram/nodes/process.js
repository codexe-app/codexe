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
        d='M2.38594 8.12596C2.38594 6.59731 2.99929 5.13127 4.09107 4.05035C5.18284 2.96944 6.6636 2.36218 8.2076 2.36218H151.792C153.312 2.39918 154.756 3.02272 155.817 4.09966C156.878 5.17659 157.471 6.62156 157.471 8.12596V112.063C157.471 113.592 156.858 115.058 155.766 116.139C154.674 117.219 153.193 117.827 151.649 117.827H8.2076C7.42676 117.827 6.65381 117.672 5.93476 117.371C5.21571 117.069 4.56524 116.628 4.02208 116.072C3.47892 115.517 3.05416 114.859 2.77308 114.138C2.492 113.417 2.36034 112.647 2.38594 111.874V8.12596Z'
        fill='var(--mantine-color-body)'
        stroke='var(--mantine-color-gray-3)'
        strokeWidth='2'
      />
    </svg>
  )
}

function ProcessNode({ data, isConnectable }) {
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
        <Handle type='source' id={`s2${data.id}`} position={Position.Right} style={{ ...DEFAULT_HANDLE_STYLE, right: '0', background: 'blue' }} isConnectable={isConnectable} />
        <Handle type='target' id={`t1${data.id}`} position={Position.Top} style={{ ...DEFAULT_HANDLE_STYLE, left: '50%', background: 'orange' }} isConnectable={isConnectable} />
        <Handle type='target' id={`t2${data.id}`} position={Position.Left} style={{ ...DEFAULT_HANDLE_STYLE, left: '0', background: 'red' }} isConnectable={isConnectable} />
      </Box>
    </Box>
  )
}

export default memo(ProcessNode)

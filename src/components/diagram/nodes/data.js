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
        d='M31.1348 7.90642C31.5362 6.34199 32.4853 4.94606 33.8329 3.93823C35.1805 2.93041 36.8501 2.36789 38.579 2.33917H152.958C153.566 2.35133 154.165 2.47473 154.722 2.70234C155.278 2.92995 155.781 3.2573 156.201 3.66568C156.622 4.07407 156.951 4.5555 157.172 5.08245C157.392 5.60941 157.498 6.17158 157.485 6.73683C157.538 7.12516 157.538 7.5181 157.485 7.90642L128.815 112.281C128.43 113.853 127.485 115.258 126.134 116.269C124.783 117.279 123.104 117.836 121.371 117.848H7.04179C6.43406 117.836 5.83486 117.712 5.27842 117.485C4.72197 117.257 4.2192 116.93 3.79881 116.521C3.37842 116.113 3.04866 115.632 2.82837 115.105C2.60807 114.578 2.50156 114.016 2.51491 113.45C2.46231 113.062 2.46231 112.669 2.51491 112.281L31.1348 7.90642Z'
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

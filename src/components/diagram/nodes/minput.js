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
        d='M2.42126 26.7577C2.43077 25.163 3.01947 23.6256 4.07867 22.4293C5.13787 21.2329 6.59605 20.4586 8.18398 20.2491L151.816 2.45878C153.164 2.29516 154.522 2.67007 155.593 3.50142C156.664 4.33276 157.361 5.55278 157.53 6.8943C157.554 7.10253 157.554 7.31282 157.53 7.52106V111.804C157.53 113.338 156.918 114.81 155.828 115.895C154.738 116.98 153.26 117.589 151.719 117.589H8.2324C6.69119 117.589 5.21311 116.98 4.12331 115.895C3.03351 114.81 2.42126 113.338 2.42126 111.804V26.7577Z'
        fill='var(--mantine-color-body)'
        stroke='var(--mantine-color-gray-3)'
        strokeWidth='2'
      />
    </svg>
  )
}

function MinputNode({ data, isConnectable }) {
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

export default memo(MinputNode)

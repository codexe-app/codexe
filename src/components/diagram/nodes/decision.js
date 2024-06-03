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
        d='M75.1761 3.95607C76.5581 2.94662 78.2324 2.40173 79.9522 2.40173C81.6721 2.40173 83.3464 2.94662 84.7284 3.95607L155.797 56.5149C156.71 57.2615 157.309 58.3163 157.476 59.4742C157.644 60.632 157.369 61.8099 156.704 62.7787C156.451 63.122 156.145 63.4239 155.797 63.6735L84.8239 116.044C83.4419 117.053 81.7676 117.598 80.0478 117.598C78.3279 117.598 76.6536 117.053 75.2716 116.044L4.20297 63.5793C3.28997 62.8327 2.69134 61.7779 2.5236 60.6201C2.35586 59.4623 2.63102 58.2843 3.29551 57.3156C3.55598 57.0057 3.86182 56.7359 4.20297 56.5149L75.1761 3.95607Z'
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
    <Box w={160} h={120}>
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
        <Handle type='target' id={`t1${data.id}`} position={Position.Top} style={{ ...DEFAULT_HANDLE_STYLE, left: '50%', background: 'orange' }} isConnectable={isConnectable} />
        <Handle type='source' id={`s1${data.id}`} position={Position.Left} style={{ ...DEFAULT_HANDLE_STYLE, left: '0', background: 'purple' }} onConnect={(params) => console.log('handle onConnect', params)} isConnectable={isConnectable} />
        <Handle
          type='source'
          id={`s2${data.id}`}
          position={Position.Right}
          style={{ ...DEFAULT_HANDLE_STYLE, right: '0', background: 'purple' }}
          onConnect={(params) => console.log('handle onConnect', params)}
          isConnectable={isConnectable}
        />
        <Handle
          type='source'
          id={`s3${data.id}`}
          position={Position.Bottom}
          style={{ ...DEFAULT_HANDLE_STYLE, left: '50%', background: 'purple' }}
          onConnect={(params) => console.log('handle onConnect', params)}
          isConnectable={isConnectable}
        />
      </Box>
    </Box>
  )
}

export default memo(DecisionlNode)

import React, { memo } from 'react'
import { Handle, Position, NodeProps, NodeResizeControl } from '@xyflow/react'
import { Card, Avatar, Text, Stack, Badge, Group, ActionIcon, Container } from '@mantine/core'
import { IconResize, IconGrain } from '@tabler/icons-react'
import { nanoid } from 'nanoid'

const DEFAULT_HANDLE_STYLE = {
  width: 10,
  height: 10,
  bottom: 0,
}

function ProcessNode({ data, isConnectable }) {
  //console.log('node render :', data);
  return (
    <Card withBorder padding='lg' radius='md'>
      <Stack align='center' py='xs' gap='xs'>
        <Badge radius='xs' size='lg'>
          {data.label}
        </Badge>
        <Text size='xs'>{data.description}</Text>
      </Stack>
      <Handle type='source' id={`s1${data.id}`} position={Position.Bottom} style={{ ...DEFAULT_HANDLE_STYLE, left: '50%', background: 'purple' }} onConnect={(params) => console.log('handle onConnect', params)} isConnectable={isConnectable} />
      <Handle type='source' id={`s2${data.id}`} position={Position.Right} style={{ ...DEFAULT_HANDLE_STYLE, right: '0', background: 'blue' }} isConnectable={isConnectable} />
      <Handle type='target' id={`t1${data.id}`} position={Position.Top} style={{ ...DEFAULT_HANDLE_STYLE, left: '50%', background: 'orange' }} isConnectable={isConnectable} />
      <Handle type='target' id={`t2${data.id}`} position={Position.Left} style={{ ...DEFAULT_HANDLE_STYLE, left: '0', background: 'red' }} isConnectable={isConnectable} />
    </Card>
  )
}

export default memo(ProcessNode)

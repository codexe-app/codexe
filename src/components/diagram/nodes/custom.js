import React, { memo } from 'react'
import { Handle, Position, NodeProps, NodeResizeControl } from '@xyflow/react'
import { Card, Avatar, Text, Progress, Badge, Group, ActionIcon, Container } from '@mantine/core'
import { IconResize, IconGrain } from '@tabler/icons-react'

const DEFAULT_HANDLE_STYLE = {
  width: 10,
  height: 10,
  bottom: 0,
}

function CustomNode({ data, isConnectable }) {
  //console.log('node render :', data);
  return (
    <Card withBorder padding='lg' radius='md'>
      <Group justify='space-between'>
        <IconGrain />
        <Badge radius='xs' size='lg'>
          {data.label}
        </Badge>
      </Group>

      <Handle type='source' id='purple' position={Position.Bottom} style={{ ...DEFAULT_HANDLE_STYLE, left: '15%', background: 'purple' }} onConnect={(params) => console.log('handle onConnect', params)} isConnectable={isConnectable} />
      <Handle type='source' id='blue' position={Position.Bottom} style={{ ...DEFAULT_HANDLE_STYLE, left: '50%', background: 'blue' }} isConnectable={isConnectable} />
      <Handle type='target' id='orange' position={Position.Top} style={{ ...DEFAULT_HANDLE_STYLE, left: '85%', background: 'orange' }} isConnectable={isConnectable} />
    </Card>
  )
}

export default memo(CustomNode)

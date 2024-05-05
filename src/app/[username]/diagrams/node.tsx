import React, { memo } from 'react'
import { Handle, Position, NodeResizeControl } from '@xyflow/react'
import { IconResize } from '@tabler/icons-react'

const DEFAULT_HANDLE_STYLE = {
  width: 10,
  height: 10,
  bottom: -5,
}

export default memo(({ data, isConnectable }) => {
  //console.log('node render :', data);
  return (
    <div
      style={{
        background: '#DDD',
        padding: 25,
        height: '100%'
      }}>
      <NodeResizeControl style={{ background: 'transparent', border: 'none' }} minWidth={100} minHeight={50}>
        <IconResize style={{ position: 'absolute', bottom: 0, right: 0 }} color='white'/>
      </NodeResizeControl>
      <div>{data.label}</div>
      <Handle type='source' id='red' position={Position.Bottom} style={{ ...DEFAULT_HANDLE_STYLE, left: '15%', background: 'red' }} onConnect={(params) => console.log('handle onConnect', params)} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='blue' style={{ ...DEFAULT_HANDLE_STYLE, left: '50%', background: 'blue' }} isConnectable={isConnectable} />
      <Handle type='target' position={Position.Top} id='orange' style={{ ...DEFAULT_HANDLE_STYLE, left: '85%', background: 'orange' }} isConnectable={isConnectable} />
    </div>
  )
})

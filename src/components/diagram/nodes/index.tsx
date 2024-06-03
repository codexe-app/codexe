import CustomNode from './custom'
import TerminalNode from './terminal'
import StartNode from './start'
import StopNode from './stop'
import DecisionNode from './decision'
import DataNode from './data'
import ProcessNode from './process'
import InoutNode from './inout'

export const nodetypes = [
  { value: 'input', label: 'Input' },
  { value: 'output', label: 'Output' },
  { value: 'default', label: 'Default' },
  { value: 'custom', label: 'Custom' },
  { value: 'terminal', label: 'Terminal' },
  { value: 'start', label: 'Start' },
  { value: 'stop', label: 'Stop' },
  { value: 'decision', label: 'Decision' },
  { value: 'data', label: 'Data' },
  { value: 'process', label: 'Process' },
  { value: 'inout', label: 'In/Out' }
]

export const nodeTypes = {
  custom: CustomNode,
  terminal: TerminalNode,
  start: StartNode,
  stop: StopNode,
  decision: DecisionNode,
  data: DataNode,
  process: ProcessNode,
  inout: InoutNode,
}

export { default as CustomNode } from './custom'
export { default as TerminalNode } from './terminal'
export { default as StartNode } from './start'
export { default as StopNode } from './stop'
export { default as DecisionNode } from './decision'
export { default as DataNode } from './data'
export { default as ProcessNode } from './process'
export { default as InoutNode } from './inout'

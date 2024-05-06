import CustomNode from './custom'
import TerminalNode from './terminal'
import DecisionlNode from './decision'
import ProcessNode from './process'
import InoutNode from './inout'

export const nodetypes = ['input', 'output', 'default', 'custom', 'terminal', 'decision', 'process', 'inout']

export const nodeTypes = {
  custom: CustomNode,
  terminal: TerminalNode,
  decision: DecisionlNode,
  process: ProcessNode,
  inout: InoutNode,
}

export { default as CustomNode } from './custom'
export { default as TerminalNode } from './terminal'
export { default as DecisionlNode } from './decision'
export { default as ProcessNode } from './process'
export { default as InoutNode } from './inout'

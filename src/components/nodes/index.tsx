import CustomNode from './custom'
import TerminalNode from './terminal'

export const nodetypes = ['input', 'output', 'default', 'custom', 'terminal' ]

export const nodeTypes = {
  custom: CustomNode,
  terminal: TerminalNode,
}

export { default as CustomNode } from './custom'
export { default as TerminalNode } from './terminal'


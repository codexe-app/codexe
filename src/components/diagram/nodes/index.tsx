import DataNode from './data'
import DatabaseNode from './database'
import DecisionNode from './decision'
import DocumentNode from './document'
import InitNode from './init'
import MinputNode from './minput'
import OperateNode from './operate'
import ProcessNode from './process'
import SubroutineNode from './subroutine'
import TerminalNode from './terminal'

export const nodetypes = [
  { value: 'data', label: 'Data Input/Output' },
  { value: 'database', label: 'Database' },
  { value: 'decision', label: 'Decision' },
  { value: 'document', label: 'Document' },
  { value: 'init', label: ' Initialization' },
  { value: 'minput', label: 'Manual Input' },
  { value: 'operate', label: 'Manual Operation' },
  { value: 'process', label: 'Process' },
  { value: 'subroutine', label: 'Predefined Subroutine' },
  { value: 'terminal', label: 'Terminator' },
]

export const nodeTypes = {
  data: DataNode,
  database: DatabaseNode,
  decision: DecisionNode,
  document: DocumentNode,
  init: InitNode,
  minput: MinputNode,
  operate: OperateNode,
  process: ProcessNode,
  subroutine: SubroutineNode,
  terminal: TerminalNode,
}

export { default as DataNode } from './data'
export { default as DatabaseNode } from './database'
export { default as DecisionNode } from './decision'
export { default as DocumentNode } from './document'
export { default as InitNode } from './init'
export { default as MinputNode } from './minput'
export { default as OperateNode } from './operate'
export { default as ProcessNode } from './process'
export { default as SubroutineNode } from './subroutine'
export { default as TerminalNode } from './terminal'


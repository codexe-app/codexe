/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelDocumentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  topicId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDocumentFilterInput | null > | null,
  or?: Array< ModelDocumentFilterInput | null > | null,
  not?: ModelDocumentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export enum Status {
  live = "live",
  draft = "draft",
  private = "private",
  archive = "archive",
  trash = "trash",
}


export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelDocumentConnection = {
  __typename: "ModelDocumentConnection",
  items:  Array<Document | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Document = {
  __typename: "Document",
  id: string,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  status?: Status | null,
  topic?: Topic | null,
  topicId?: string | null,
  user?: User | null,
  userId: string,
  createdAt?: string | null,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Topic = {
  __typename: "Topic",
  id: string,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  documents?: ModelDocumentConnection | null,
  createdAt?: string | null,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type User = {
  __typename: "User",
  id: string,
  username?: string | null,
  avatar?: string | null,
  firstname?: string | null,
  lastname?: string | null,
  role?: string | null,
  email?: string | null,
  documents?: ModelDocumentConnection | null,
  flows?: ModelFlowConnection | null,
  cognitoid?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelFlowConnection = {
  __typename: "ModelFlowConnection",
  items:  Array<Flow | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Flow = {
  __typename: "Flow",
  id: string,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  nodes?: ModelNodeConnection | null,
  edges?: ModelEdgeConnection | null,
  user?: User | null,
  userId: string,
  createdAt?: string | null,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelNodeConnection = {
  __typename: "ModelNodeConnection",
  items:  Array<Node | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Node = {
  __typename: "Node",
  id: string,
  position?: XYPosition | null,
  data?: NodeData | null,
  type?: string | null,
  sourcePosition?: Position | null,
  targetPosition?: Position | null,
  hidden?: boolean | null,
  selected?: boolean | null,
  dragging?: boolean | null,
  draggable?: boolean | null,
  selectable?: boolean | null,
  connectable?: boolean | null,
  resizing?: boolean | null,
  deletable?: boolean | null,
  dragHandle?: string | null,
  width?: number | null,
  height?: number | null,
  parentId?: string | null,
  zIndex?: number | null,
  extent?: string | null,
  expandParent?: boolean | null,
  positionAbsolute?: XYPosition | null,
  ariaLabel?: string | null,
  focusable?: boolean | null,
  style?: string | null,
  className?: string | null,
  flow?: Flow | null,
  flowId: string,
  createdAt?: string | null,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type XYPosition = {
  __typename: "XYPosition",
  x?: number | null,
  y?: number | null,
};

export type NodeData = {
  __typename: "NodeData",
  label?: string | null,
};

export enum Position {
  left = "left",
  top = "top",
  right = "right",
  bottom = "bottom",
}


export type ModelEdgeConnection = {
  __typename: "ModelEdgeConnection",
  items:  Array<Edge | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Edge = {
  __typename: "Edge",
  id: string,
  type?: string | null,
  source?: string | null,
  target?: string | null,
  sourceHandle?: string | null,
  targetHandle?: string | null,
  style?: string | null,
  animated?: boolean | null,
  hidden?: boolean | null,
  deletable?: boolean | null,
  data?: EdgeData | null,
  className?: string | null,
  sourceNode?: string | null,
  targetNode?: string | null,
  selected?: boolean | null,
  markerStart?: EdgeMarker | null,
  markerEnd?: EdgeMarker | null,
  zIndex?: number | null,
  ariaLabel?: string | null,
  interactionWidth?: number | null,
  focusable?: boolean | null,
  updatable?: boolean | null,
  flow?: Flow | null,
  flowId: string,
  createdAt?: string | null,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type EdgeData = {
  __typename: "EdgeData",
  label?: string | null,
};

export type EdgeMarker = {
  __typename: "EdgeMarker",
  type?: MarkerType | null,
  color?: string | null,
  width?: number | null,
  height?: number | null,
  markerUnits?: string | null,
  orient?: string | null,
  strokeWidth?: number | null,
};

export enum MarkerType {
  arrow = "arrow",
  arrowclosed = "arrowclosed",
}


export type CreateDocumentInput = {
  id?: string | null,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  status?: Status | null,
  topicId?: string | null,
  userId: string,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelDocumentConditionInput = {
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  topicId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelDocumentConditionInput | null > | null,
  or?: Array< ModelDocumentConditionInput | null > | null,
  not?: ModelDocumentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateDocumentInput = {
  id: string,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  status?: Status | null,
  topicId?: string | null,
  userId?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteDocumentInput = {
  id: string,
  _version?: number | null,
};

export type CreateTopicInput = {
  id?: string | null,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelTopicConditionInput = {
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelTopicConditionInput | null > | null,
  or?: Array< ModelTopicConditionInput | null > | null,
  not?: ModelTopicConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTopicInput = {
  id: string,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteTopicInput = {
  id: string,
  _version?: number | null,
};

export type CreateFlowInput = {
  id?: string | null,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  userId: string,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelFlowConditionInput = {
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFlowConditionInput | null > | null,
  or?: Array< ModelFlowConditionInput | null > | null,
  not?: ModelFlowConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFlowInput = {
  id: string,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  userId?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteFlowInput = {
  id: string,
  _version?: number | null,
};

export type CreateNodeInput = {
  id?: string | null,
  position?: XYPositionInput | null,
  data?: NodeDataInput | null,
  type?: string | null,
  sourcePosition?: Position | null,
  targetPosition?: Position | null,
  hidden?: boolean | null,
  selected?: boolean | null,
  dragging?: boolean | null,
  draggable?: boolean | null,
  selectable?: boolean | null,
  connectable?: boolean | null,
  resizing?: boolean | null,
  deletable?: boolean | null,
  dragHandle?: string | null,
  width?: number | null,
  height?: number | null,
  parentId?: string | null,
  zIndex?: number | null,
  extent?: string | null,
  expandParent?: boolean | null,
  positionAbsolute?: XYPositionInput | null,
  ariaLabel?: string | null,
  focusable?: boolean | null,
  style?: string | null,
  className?: string | null,
  flowId: string,
  createdAt?: string | null,
  _version?: number | null,
};

export type XYPositionInput = {
  x?: number | null,
  y?: number | null,
};

export type NodeDataInput = {
  label?: string | null,
};

export type ModelNodeConditionInput = {
  type?: ModelStringInput | null,
  sourcePosition?: ModelPositionInput | null,
  targetPosition?: ModelPositionInput | null,
  hidden?: ModelBooleanInput | null,
  selected?: ModelBooleanInput | null,
  dragging?: ModelBooleanInput | null,
  draggable?: ModelBooleanInput | null,
  selectable?: ModelBooleanInput | null,
  connectable?: ModelBooleanInput | null,
  resizing?: ModelBooleanInput | null,
  deletable?: ModelBooleanInput | null,
  dragHandle?: ModelStringInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  parentId?: ModelStringInput | null,
  zIndex?: ModelIntInput | null,
  extent?: ModelStringInput | null,
  expandParent?: ModelBooleanInput | null,
  ariaLabel?: ModelStringInput | null,
  focusable?: ModelBooleanInput | null,
  style?: ModelStringInput | null,
  className?: ModelStringInput | null,
  flowId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNodeConditionInput | null > | null,
  or?: Array< ModelNodeConditionInput | null > | null,
  not?: ModelNodeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPositionInput = {
  eq?: Position | null,
  ne?: Position | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateNodeInput = {
  id: string,
  position?: XYPositionInput | null,
  data?: NodeDataInput | null,
  type?: string | null,
  sourcePosition?: Position | null,
  targetPosition?: Position | null,
  hidden?: boolean | null,
  selected?: boolean | null,
  dragging?: boolean | null,
  draggable?: boolean | null,
  selectable?: boolean | null,
  connectable?: boolean | null,
  resizing?: boolean | null,
  deletable?: boolean | null,
  dragHandle?: string | null,
  width?: number | null,
  height?: number | null,
  parentId?: string | null,
  zIndex?: number | null,
  extent?: string | null,
  expandParent?: boolean | null,
  positionAbsolute?: XYPositionInput | null,
  ariaLabel?: string | null,
  focusable?: boolean | null,
  style?: string | null,
  className?: string | null,
  flowId?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteNodeInput = {
  id: string,
  _version?: number | null,
};

export type CreateEdgeInput = {
  id?: string | null,
  type?: string | null,
  source?: string | null,
  target?: string | null,
  sourceHandle?: string | null,
  targetHandle?: string | null,
  style?: string | null,
  animated?: boolean | null,
  hidden?: boolean | null,
  deletable?: boolean | null,
  data?: EdgeDataInput | null,
  className?: string | null,
  sourceNode?: string | null,
  targetNode?: string | null,
  selected?: boolean | null,
  markerStart?: EdgeMarkerInput | null,
  markerEnd?: EdgeMarkerInput | null,
  zIndex?: number | null,
  ariaLabel?: string | null,
  interactionWidth?: number | null,
  focusable?: boolean | null,
  updatable?: boolean | null,
  flowId: string,
  createdAt?: string | null,
  _version?: number | null,
};

export type EdgeDataInput = {
  label?: string | null,
};

export type EdgeMarkerInput = {
  type?: MarkerType | null,
  color?: string | null,
  width?: number | null,
  height?: number | null,
  markerUnits?: string | null,
  orient?: string | null,
  strokeWidth?: number | null,
};

export type ModelEdgeConditionInput = {
  type?: ModelStringInput | null,
  source?: ModelStringInput | null,
  target?: ModelStringInput | null,
  sourceHandle?: ModelStringInput | null,
  targetHandle?: ModelStringInput | null,
  style?: ModelStringInput | null,
  animated?: ModelBooleanInput | null,
  hidden?: ModelBooleanInput | null,
  deletable?: ModelBooleanInput | null,
  className?: ModelStringInput | null,
  sourceNode?: ModelStringInput | null,
  targetNode?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  zIndex?: ModelIntInput | null,
  ariaLabel?: ModelStringInput | null,
  interactionWidth?: ModelIntInput | null,
  focusable?: ModelBooleanInput | null,
  updatable?: ModelBooleanInput | null,
  flowId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelEdgeConditionInput | null > | null,
  or?: Array< ModelEdgeConditionInput | null > | null,
  not?: ModelEdgeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateEdgeInput = {
  id: string,
  type?: string | null,
  source?: string | null,
  target?: string | null,
  sourceHandle?: string | null,
  targetHandle?: string | null,
  style?: string | null,
  animated?: boolean | null,
  hidden?: boolean | null,
  deletable?: boolean | null,
  data?: EdgeDataInput | null,
  className?: string | null,
  sourceNode?: string | null,
  targetNode?: string | null,
  selected?: boolean | null,
  markerStart?: EdgeMarkerInput | null,
  markerEnd?: EdgeMarkerInput | null,
  zIndex?: number | null,
  ariaLabel?: string | null,
  interactionWidth?: number | null,
  focusable?: boolean | null,
  updatable?: boolean | null,
  flowId?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteEdgeInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  username?: string | null,
  avatar?: string | null,
  firstname?: string | null,
  lastname?: string | null,
  role?: string | null,
  email?: string | null,
  cognitoid?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  role?: ModelStringInput | null,
  email?: ModelStringInput | null,
  cognitoid?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  avatar?: string | null,
  firstname?: string | null,
  lastname?: string | null,
  role?: string | null,
  email?: string | null,
  cognitoid?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTopicFilterInput | null > | null,
  or?: Array< ModelTopicFilterInput | null > | null,
  not?: ModelTopicFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTopicConnection = {
  __typename: "ModelTopicConnection",
  items:  Array<Topic | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelFlowFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFlowFilterInput | null > | null,
  or?: Array< ModelFlowFilterInput | null > | null,
  not?: ModelFlowFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelNodeFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  sourcePosition?: ModelPositionInput | null,
  targetPosition?: ModelPositionInput | null,
  hidden?: ModelBooleanInput | null,
  selected?: ModelBooleanInput | null,
  dragging?: ModelBooleanInput | null,
  draggable?: ModelBooleanInput | null,
  selectable?: ModelBooleanInput | null,
  connectable?: ModelBooleanInput | null,
  resizing?: ModelBooleanInput | null,
  deletable?: ModelBooleanInput | null,
  dragHandle?: ModelStringInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  parentId?: ModelStringInput | null,
  zIndex?: ModelIntInput | null,
  extent?: ModelStringInput | null,
  expandParent?: ModelBooleanInput | null,
  ariaLabel?: ModelStringInput | null,
  focusable?: ModelBooleanInput | null,
  style?: ModelStringInput | null,
  className?: ModelStringInput | null,
  flowId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelNodeFilterInput | null > | null,
  or?: Array< ModelNodeFilterInput | null > | null,
  not?: ModelNodeFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelEdgeFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  source?: ModelStringInput | null,
  target?: ModelStringInput | null,
  sourceHandle?: ModelStringInput | null,
  targetHandle?: ModelStringInput | null,
  style?: ModelStringInput | null,
  animated?: ModelBooleanInput | null,
  hidden?: ModelBooleanInput | null,
  deletable?: ModelBooleanInput | null,
  className?: ModelStringInput | null,
  sourceNode?: ModelStringInput | null,
  targetNode?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  zIndex?: ModelIntInput | null,
  ariaLabel?: ModelStringInput | null,
  interactionWidth?: ModelIntInput | null,
  focusable?: ModelBooleanInput | null,
  updatable?: ModelBooleanInput | null,
  flowId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEdgeFilterInput | null > | null,
  or?: Array< ModelEdgeFilterInput | null > | null,
  not?: ModelEdgeFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  role?: ModelStringInput | null,
  email?: ModelStringInput | null,
  cognitoid?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionDocumentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  topicId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDocumentFilterInput | null > | null,
  or?: Array< ModelSubscriptionDocumentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTopicFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTopicFilterInput | null > | null,
  or?: Array< ModelSubscriptionTopicFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionFlowFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFlowFilterInput | null > | null,
  or?: Array< ModelSubscriptionFlowFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionNodeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  sourcePosition?: ModelSubscriptionStringInput | null,
  targetPosition?: ModelSubscriptionStringInput | null,
  hidden?: ModelSubscriptionBooleanInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  dragging?: ModelSubscriptionBooleanInput | null,
  draggable?: ModelSubscriptionBooleanInput | null,
  selectable?: ModelSubscriptionBooleanInput | null,
  connectable?: ModelSubscriptionBooleanInput | null,
  resizing?: ModelSubscriptionBooleanInput | null,
  deletable?: ModelSubscriptionBooleanInput | null,
  dragHandle?: ModelSubscriptionStringInput | null,
  width?: ModelSubscriptionIntInput | null,
  height?: ModelSubscriptionIntInput | null,
  parentId?: ModelSubscriptionStringInput | null,
  zIndex?: ModelSubscriptionIntInput | null,
  extent?: ModelSubscriptionStringInput | null,
  expandParent?: ModelSubscriptionBooleanInput | null,
  ariaLabel?: ModelSubscriptionStringInput | null,
  focusable?: ModelSubscriptionBooleanInput | null,
  style?: ModelSubscriptionStringInput | null,
  className?: ModelSubscriptionStringInput | null,
  flowId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNodeFilterInput | null > | null,
  or?: Array< ModelSubscriptionNodeFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionEdgeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  target?: ModelSubscriptionStringInput | null,
  sourceHandle?: ModelSubscriptionStringInput | null,
  targetHandle?: ModelSubscriptionStringInput | null,
  style?: ModelSubscriptionStringInput | null,
  animated?: ModelSubscriptionBooleanInput | null,
  hidden?: ModelSubscriptionBooleanInput | null,
  deletable?: ModelSubscriptionBooleanInput | null,
  className?: ModelSubscriptionStringInput | null,
  sourceNode?: ModelSubscriptionStringInput | null,
  targetNode?: ModelSubscriptionStringInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  zIndex?: ModelSubscriptionIntInput | null,
  ariaLabel?: ModelSubscriptionStringInput | null,
  interactionWidth?: ModelSubscriptionIntInput | null,
  focusable?: ModelSubscriptionBooleanInput | null,
  updatable?: ModelSubscriptionBooleanInput | null,
  flowId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEdgeFilterInput | null > | null,
  or?: Array< ModelSubscriptionEdgeFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  avatar?: ModelSubscriptionStringInput | null,
  firstname?: ModelSubscriptionStringInput | null,
  lastname?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  cognitoid?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type FullDocumentsQueryVariables = {
  filter?: ModelDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FullDocumentsQuery = {
  listDocuments?:  {
    __typename: "ModelDocumentConnection",
    items:  Array< {
      __typename: "Document",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      topicId?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      topic?:  {
        __typename: "Topic",
        name?: string | null,
        description?: string | null,
      } | null,
      user?:  {
        __typename: "User",
        firstname?: string | null,
        lastname?: string | null,
        username?: string | null,
        email?: string | null,
        avatar?: string | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CreateDocumentMutationVariables = {
  input: CreateDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type CreateDocumentMutation = {
  createDocument?:  {
    __typename: "Document",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDocumentMutationVariables = {
  input: UpdateDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type UpdateDocumentMutation = {
  updateDocument?:  {
    __typename: "Document",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDocumentMutationVariables = {
  input: DeleteDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type DeleteDocumentMutation = {
  deleteDocument?:  {
    __typename: "Document",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTopicMutationVariables = {
  input: CreateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type CreateTopicMutation = {
  createTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTopicMutationVariables = {
  input: UpdateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type UpdateTopicMutation = {
  updateTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTopicMutationVariables = {
  input: DeleteTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type DeleteTopicMutation = {
  deleteTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateFlowMutationVariables = {
  input: CreateFlowInput,
  condition?: ModelFlowConditionInput | null,
};

export type CreateFlowMutation = {
  createFlow?:  {
    __typename: "Flow",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateFlowMutationVariables = {
  input: UpdateFlowInput,
  condition?: ModelFlowConditionInput | null,
};

export type UpdateFlowMutation = {
  updateFlow?:  {
    __typename: "Flow",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteFlowMutationVariables = {
  input: DeleteFlowInput,
  condition?: ModelFlowConditionInput | null,
};

export type DeleteFlowMutation = {
  deleteFlow?:  {
    __typename: "Flow",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateNodeMutationVariables = {
  input: CreateNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type CreateNodeMutation = {
  createNode?:  {
    __typename: "Node",
    id: string,
    position?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    data?:  {
      __typename: "NodeData",
      label?: string | null,
    } | null,
    type?: string | null,
    sourcePosition?: Position | null,
    targetPosition?: Position | null,
    hidden?: boolean | null,
    selected?: boolean | null,
    dragging?: boolean | null,
    draggable?: boolean | null,
    selectable?: boolean | null,
    connectable?: boolean | null,
    resizing?: boolean | null,
    deletable?: boolean | null,
    dragHandle?: string | null,
    width?: number | null,
    height?: number | null,
    parentId?: string | null,
    zIndex?: number | null,
    extent?: string | null,
    expandParent?: boolean | null,
    positionAbsolute?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    ariaLabel?: string | null,
    focusable?: boolean | null,
    style?: string | null,
    className?: string | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateNodeMutationVariables = {
  input: UpdateNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type UpdateNodeMutation = {
  updateNode?:  {
    __typename: "Node",
    id: string,
    position?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    data?:  {
      __typename: "NodeData",
      label?: string | null,
    } | null,
    type?: string | null,
    sourcePosition?: Position | null,
    targetPosition?: Position | null,
    hidden?: boolean | null,
    selected?: boolean | null,
    dragging?: boolean | null,
    draggable?: boolean | null,
    selectable?: boolean | null,
    connectable?: boolean | null,
    resizing?: boolean | null,
    deletable?: boolean | null,
    dragHandle?: string | null,
    width?: number | null,
    height?: number | null,
    parentId?: string | null,
    zIndex?: number | null,
    extent?: string | null,
    expandParent?: boolean | null,
    positionAbsolute?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    ariaLabel?: string | null,
    focusable?: boolean | null,
    style?: string | null,
    className?: string | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteNodeMutationVariables = {
  input: DeleteNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type DeleteNodeMutation = {
  deleteNode?:  {
    __typename: "Node",
    id: string,
    position?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    data?:  {
      __typename: "NodeData",
      label?: string | null,
    } | null,
    type?: string | null,
    sourcePosition?: Position | null,
    targetPosition?: Position | null,
    hidden?: boolean | null,
    selected?: boolean | null,
    dragging?: boolean | null,
    draggable?: boolean | null,
    selectable?: boolean | null,
    connectable?: boolean | null,
    resizing?: boolean | null,
    deletable?: boolean | null,
    dragHandle?: string | null,
    width?: number | null,
    height?: number | null,
    parentId?: string | null,
    zIndex?: number | null,
    extent?: string | null,
    expandParent?: boolean | null,
    positionAbsolute?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    ariaLabel?: string | null,
    focusable?: boolean | null,
    style?: string | null,
    className?: string | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEdgeMutationVariables = {
  input: CreateEdgeInput,
  condition?: ModelEdgeConditionInput | null,
};

export type CreateEdgeMutation = {
  createEdge?:  {
    __typename: "Edge",
    id: string,
    type?: string | null,
    source?: string | null,
    target?: string | null,
    sourceHandle?: string | null,
    targetHandle?: string | null,
    style?: string | null,
    animated?: boolean | null,
    hidden?: boolean | null,
    deletable?: boolean | null,
    data?:  {
      __typename: "EdgeData",
      label?: string | null,
    } | null,
    className?: string | null,
    sourceNode?: string | null,
    targetNode?: string | null,
    selected?: boolean | null,
    markerStart?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    markerEnd?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    zIndex?: number | null,
    ariaLabel?: string | null,
    interactionWidth?: number | null,
    focusable?: boolean | null,
    updatable?: boolean | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEdgeMutationVariables = {
  input: UpdateEdgeInput,
  condition?: ModelEdgeConditionInput | null,
};

export type UpdateEdgeMutation = {
  updateEdge?:  {
    __typename: "Edge",
    id: string,
    type?: string | null,
    source?: string | null,
    target?: string | null,
    sourceHandle?: string | null,
    targetHandle?: string | null,
    style?: string | null,
    animated?: boolean | null,
    hidden?: boolean | null,
    deletable?: boolean | null,
    data?:  {
      __typename: "EdgeData",
      label?: string | null,
    } | null,
    className?: string | null,
    sourceNode?: string | null,
    targetNode?: string | null,
    selected?: boolean | null,
    markerStart?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    markerEnd?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    zIndex?: number | null,
    ariaLabel?: string | null,
    interactionWidth?: number | null,
    focusable?: boolean | null,
    updatable?: boolean | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEdgeMutationVariables = {
  input: DeleteEdgeInput,
  condition?: ModelEdgeConditionInput | null,
};

export type DeleteEdgeMutation = {
  deleteEdge?:  {
    __typename: "Edge",
    id: string,
    type?: string | null,
    source?: string | null,
    target?: string | null,
    sourceHandle?: string | null,
    targetHandle?: string | null,
    style?: string | null,
    animated?: boolean | null,
    hidden?: boolean | null,
    deletable?: boolean | null,
    data?:  {
      __typename: "EdgeData",
      label?: string | null,
    } | null,
    className?: string | null,
    sourceNode?: string | null,
    targetNode?: string | null,
    selected?: boolean | null,
    markerStart?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    markerEnd?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    zIndex?: number | null,
    ariaLabel?: string | null,
    interactionWidth?: number | null,
    focusable?: boolean | null,
    updatable?: boolean | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    avatar?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    flows?:  {
      __typename: "ModelFlowConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    avatar?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    flows?:  {
      __typename: "ModelFlowConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    avatar?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    flows?:  {
      __typename: "ModelFlowConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetDocumentQueryVariables = {
  id: string,
};

export type GetDocumentQuery = {
  getDocument?:  {
    __typename: "Document",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDocumentsQueryVariables = {
  filter?: ModelDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDocumentsQuery = {
  listDocuments?:  {
    __typename: "ModelDocumentConnection",
    items:  Array< {
      __typename: "Document",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      topicId?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDocumentsQueryVariables = {
  filter?: ModelDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDocumentsQuery = {
  syncDocuments?:  {
    __typename: "ModelDocumentConnection",
    items:  Array< {
      __typename: "Document",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      topicId?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTopicQueryVariables = {
  id: string,
};

export type GetTopicQuery = {
  getTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTopicsQuery = {
  listTopics?:  {
    __typename: "ModelTopicConnection",
    items:  Array< {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTopicsQuery = {
  syncTopics?:  {
    __typename: "ModelTopicConnection",
    items:  Array< {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFlowQueryVariables = {
  id: string,
};

export type GetFlowQuery = {
  getFlow?:  {
    __typename: "Flow",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListFlowsQueryVariables = {
  filter?: ModelFlowFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFlowsQuery = {
  listFlows?:  {
    __typename: "ModelFlowConnection",
    items:  Array< {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFlowsQueryVariables = {
  filter?: ModelFlowFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFlowsQuery = {
  syncFlows?:  {
    __typename: "ModelFlowConnection",
    items:  Array< {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetNodeQueryVariables = {
  id: string,
};

export type GetNodeQuery = {
  getNode?:  {
    __typename: "Node",
    id: string,
    position?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    data?:  {
      __typename: "NodeData",
      label?: string | null,
    } | null,
    type?: string | null,
    sourcePosition?: Position | null,
    targetPosition?: Position | null,
    hidden?: boolean | null,
    selected?: boolean | null,
    dragging?: boolean | null,
    draggable?: boolean | null,
    selectable?: boolean | null,
    connectable?: boolean | null,
    resizing?: boolean | null,
    deletable?: boolean | null,
    dragHandle?: string | null,
    width?: number | null,
    height?: number | null,
    parentId?: string | null,
    zIndex?: number | null,
    extent?: string | null,
    expandParent?: boolean | null,
    positionAbsolute?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    ariaLabel?: string | null,
    focusable?: boolean | null,
    style?: string | null,
    className?: string | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListNodesQueryVariables = {
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNodesQuery = {
  listNodes?:  {
    __typename: "ModelNodeConnection",
    items:  Array< {
      __typename: "Node",
      id: string,
      type?: string | null,
      sourcePosition?: Position | null,
      targetPosition?: Position | null,
      hidden?: boolean | null,
      selected?: boolean | null,
      dragging?: boolean | null,
      draggable?: boolean | null,
      selectable?: boolean | null,
      connectable?: boolean | null,
      resizing?: boolean | null,
      deletable?: boolean | null,
      dragHandle?: string | null,
      width?: number | null,
      height?: number | null,
      parentId?: string | null,
      zIndex?: number | null,
      extent?: string | null,
      expandParent?: boolean | null,
      ariaLabel?: string | null,
      focusable?: boolean | null,
      style?: string | null,
      className?: string | null,
      flowId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNodesQueryVariables = {
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNodesQuery = {
  syncNodes?:  {
    __typename: "ModelNodeConnection",
    items:  Array< {
      __typename: "Node",
      id: string,
      type?: string | null,
      sourcePosition?: Position | null,
      targetPosition?: Position | null,
      hidden?: boolean | null,
      selected?: boolean | null,
      dragging?: boolean | null,
      draggable?: boolean | null,
      selectable?: boolean | null,
      connectable?: boolean | null,
      resizing?: boolean | null,
      deletable?: boolean | null,
      dragHandle?: string | null,
      width?: number | null,
      height?: number | null,
      parentId?: string | null,
      zIndex?: number | null,
      extent?: string | null,
      expandParent?: boolean | null,
      ariaLabel?: string | null,
      focusable?: boolean | null,
      style?: string | null,
      className?: string | null,
      flowId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEdgeQueryVariables = {
  id: string,
};

export type GetEdgeQuery = {
  getEdge?:  {
    __typename: "Edge",
    id: string,
    type?: string | null,
    source?: string | null,
    target?: string | null,
    sourceHandle?: string | null,
    targetHandle?: string | null,
    style?: string | null,
    animated?: boolean | null,
    hidden?: boolean | null,
    deletable?: boolean | null,
    data?:  {
      __typename: "EdgeData",
      label?: string | null,
    } | null,
    className?: string | null,
    sourceNode?: string | null,
    targetNode?: string | null,
    selected?: boolean | null,
    markerStart?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    markerEnd?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    zIndex?: number | null,
    ariaLabel?: string | null,
    interactionWidth?: number | null,
    focusable?: boolean | null,
    updatable?: boolean | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEdgesQueryVariables = {
  filter?: ModelEdgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEdgesQuery = {
  listEdges?:  {
    __typename: "ModelEdgeConnection",
    items:  Array< {
      __typename: "Edge",
      id: string,
      type?: string | null,
      source?: string | null,
      target?: string | null,
      sourceHandle?: string | null,
      targetHandle?: string | null,
      style?: string | null,
      animated?: boolean | null,
      hidden?: boolean | null,
      deletable?: boolean | null,
      className?: string | null,
      sourceNode?: string | null,
      targetNode?: string | null,
      selected?: boolean | null,
      zIndex?: number | null,
      ariaLabel?: string | null,
      interactionWidth?: number | null,
      focusable?: boolean | null,
      updatable?: boolean | null,
      flowId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEdgesQueryVariables = {
  filter?: ModelEdgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEdgesQuery = {
  syncEdges?:  {
    __typename: "ModelEdgeConnection",
    items:  Array< {
      __typename: "Edge",
      id: string,
      type?: string | null,
      source?: string | null,
      target?: string | null,
      sourceHandle?: string | null,
      targetHandle?: string | null,
      style?: string | null,
      animated?: boolean | null,
      hidden?: boolean | null,
      deletable?: boolean | null,
      className?: string | null,
      sourceNode?: string | null,
      targetNode?: string | null,
      selected?: boolean | null,
      zIndex?: number | null,
      ariaLabel?: string | null,
      interactionWidth?: number | null,
      focusable?: boolean | null,
      updatable?: boolean | null,
      flowId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    avatar?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    flows?:  {
      __typename: "ModelFlowConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type DocumentsByTopicIdAndCreatedAtQueryVariables = {
  topicId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DocumentsByTopicIdAndCreatedAtQuery = {
  documentsByTopicIdAndCreatedAt?:  {
    __typename: "ModelDocumentConnection",
    items:  Array< {
      __typename: "Document",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      topicId?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type DocumentsByUserIdAndCreatedAtQueryVariables = {
  userId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DocumentsByUserIdAndCreatedAtQuery = {
  documentsByUserIdAndCreatedAt?:  {
    __typename: "ModelDocumentConnection",
    items:  Array< {
      __typename: "Document",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      topicId?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type FlowsByUserIdAndCreatedAtQueryVariables = {
  userId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFlowFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FlowsByUserIdAndCreatedAtQuery = {
  flowsByUserIdAndCreatedAt?:  {
    __typename: "ModelFlowConnection",
    items:  Array< {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type NodesByFlowIdAndCreatedAtQueryVariables = {
  flowId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NodesByFlowIdAndCreatedAtQuery = {
  nodesByFlowIdAndCreatedAt?:  {
    __typename: "ModelNodeConnection",
    items:  Array< {
      __typename: "Node",
      id: string,
      type?: string | null,
      sourcePosition?: Position | null,
      targetPosition?: Position | null,
      hidden?: boolean | null,
      selected?: boolean | null,
      dragging?: boolean | null,
      draggable?: boolean | null,
      selectable?: boolean | null,
      connectable?: boolean | null,
      resizing?: boolean | null,
      deletable?: boolean | null,
      dragHandle?: string | null,
      width?: number | null,
      height?: number | null,
      parentId?: string | null,
      zIndex?: number | null,
      extent?: string | null,
      expandParent?: boolean | null,
      ariaLabel?: string | null,
      focusable?: boolean | null,
      style?: string | null,
      className?: string | null,
      flowId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type EdgesByFlowIdAndCreatedAtQueryVariables = {
  flowId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEdgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EdgesByFlowIdAndCreatedAtQuery = {
  edgesByFlowIdAndCreatedAt?:  {
    __typename: "ModelEdgeConnection",
    items:  Array< {
      __typename: "Edge",
      id: string,
      type?: string | null,
      source?: string | null,
      target?: string | null,
      sourceHandle?: string | null,
      targetHandle?: string | null,
      style?: string | null,
      animated?: boolean | null,
      hidden?: boolean | null,
      deletable?: boolean | null,
      className?: string | null,
      sourceNode?: string | null,
      targetNode?: string | null,
      selected?: boolean | null,
      zIndex?: number | null,
      ariaLabel?: string | null,
      interactionWidth?: number | null,
      focusable?: boolean | null,
      updatable?: boolean | null,
      flowId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionDocumentFilterInput | null,
};

export type OnCreateDocumentSubscription = {
  onCreateDocument?:  {
    __typename: "Document",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionDocumentFilterInput | null,
};

export type OnUpdateDocumentSubscription = {
  onUpdateDocument?:  {
    __typename: "Document",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionDocumentFilterInput | null,
};

export type OnDeleteDocumentSubscription = {
  onDeleteDocument?:  {
    __typename: "Document",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTopicSubscriptionVariables = {
  filter?: ModelSubscriptionTopicFilterInput | null,
};

export type OnCreateTopicSubscription = {
  onCreateTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTopicSubscriptionVariables = {
  filter?: ModelSubscriptionTopicFilterInput | null,
};

export type OnUpdateTopicSubscription = {
  onUpdateTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTopicSubscriptionVariables = {
  filter?: ModelSubscriptionTopicFilterInput | null,
};

export type OnDeleteTopicSubscription = {
  onDeleteTopic?:  {
    __typename: "Topic",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateFlowSubscriptionVariables = {
  filter?: ModelSubscriptionFlowFilterInput | null,
};

export type OnCreateFlowSubscription = {
  onCreateFlow?:  {
    __typename: "Flow",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateFlowSubscriptionVariables = {
  filter?: ModelSubscriptionFlowFilterInput | null,
};

export type OnUpdateFlowSubscription = {
  onUpdateFlow?:  {
    __typename: "Flow",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteFlowSubscriptionVariables = {
  filter?: ModelSubscriptionFlowFilterInput | null,
};

export type OnDeleteFlowSubscription = {
  onDeleteFlow?:  {
    __typename: "Flow",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      avatar?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateNodeSubscriptionVariables = {
  filter?: ModelSubscriptionNodeFilterInput | null,
};

export type OnCreateNodeSubscription = {
  onCreateNode?:  {
    __typename: "Node",
    id: string,
    position?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    data?:  {
      __typename: "NodeData",
      label?: string | null,
    } | null,
    type?: string | null,
    sourcePosition?: Position | null,
    targetPosition?: Position | null,
    hidden?: boolean | null,
    selected?: boolean | null,
    dragging?: boolean | null,
    draggable?: boolean | null,
    selectable?: boolean | null,
    connectable?: boolean | null,
    resizing?: boolean | null,
    deletable?: boolean | null,
    dragHandle?: string | null,
    width?: number | null,
    height?: number | null,
    parentId?: string | null,
    zIndex?: number | null,
    extent?: string | null,
    expandParent?: boolean | null,
    positionAbsolute?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    ariaLabel?: string | null,
    focusable?: boolean | null,
    style?: string | null,
    className?: string | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateNodeSubscriptionVariables = {
  filter?: ModelSubscriptionNodeFilterInput | null,
};

export type OnUpdateNodeSubscription = {
  onUpdateNode?:  {
    __typename: "Node",
    id: string,
    position?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    data?:  {
      __typename: "NodeData",
      label?: string | null,
    } | null,
    type?: string | null,
    sourcePosition?: Position | null,
    targetPosition?: Position | null,
    hidden?: boolean | null,
    selected?: boolean | null,
    dragging?: boolean | null,
    draggable?: boolean | null,
    selectable?: boolean | null,
    connectable?: boolean | null,
    resizing?: boolean | null,
    deletable?: boolean | null,
    dragHandle?: string | null,
    width?: number | null,
    height?: number | null,
    parentId?: string | null,
    zIndex?: number | null,
    extent?: string | null,
    expandParent?: boolean | null,
    positionAbsolute?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    ariaLabel?: string | null,
    focusable?: boolean | null,
    style?: string | null,
    className?: string | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteNodeSubscriptionVariables = {
  filter?: ModelSubscriptionNodeFilterInput | null,
};

export type OnDeleteNodeSubscription = {
  onDeleteNode?:  {
    __typename: "Node",
    id: string,
    position?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    data?:  {
      __typename: "NodeData",
      label?: string | null,
    } | null,
    type?: string | null,
    sourcePosition?: Position | null,
    targetPosition?: Position | null,
    hidden?: boolean | null,
    selected?: boolean | null,
    dragging?: boolean | null,
    draggable?: boolean | null,
    selectable?: boolean | null,
    connectable?: boolean | null,
    resizing?: boolean | null,
    deletable?: boolean | null,
    dragHandle?: string | null,
    width?: number | null,
    height?: number | null,
    parentId?: string | null,
    zIndex?: number | null,
    extent?: string | null,
    expandParent?: boolean | null,
    positionAbsolute?:  {
      __typename: "XYPosition",
      x?: number | null,
      y?: number | null,
    } | null,
    ariaLabel?: string | null,
    focusable?: boolean | null,
    style?: string | null,
    className?: string | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEdgeSubscriptionVariables = {
  filter?: ModelSubscriptionEdgeFilterInput | null,
};

export type OnCreateEdgeSubscription = {
  onCreateEdge?:  {
    __typename: "Edge",
    id: string,
    type?: string | null,
    source?: string | null,
    target?: string | null,
    sourceHandle?: string | null,
    targetHandle?: string | null,
    style?: string | null,
    animated?: boolean | null,
    hidden?: boolean | null,
    deletable?: boolean | null,
    data?:  {
      __typename: "EdgeData",
      label?: string | null,
    } | null,
    className?: string | null,
    sourceNode?: string | null,
    targetNode?: string | null,
    selected?: boolean | null,
    markerStart?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    markerEnd?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    zIndex?: number | null,
    ariaLabel?: string | null,
    interactionWidth?: number | null,
    focusable?: boolean | null,
    updatable?: boolean | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEdgeSubscriptionVariables = {
  filter?: ModelSubscriptionEdgeFilterInput | null,
};

export type OnUpdateEdgeSubscription = {
  onUpdateEdge?:  {
    __typename: "Edge",
    id: string,
    type?: string | null,
    source?: string | null,
    target?: string | null,
    sourceHandle?: string | null,
    targetHandle?: string | null,
    style?: string | null,
    animated?: boolean | null,
    hidden?: boolean | null,
    deletable?: boolean | null,
    data?:  {
      __typename: "EdgeData",
      label?: string | null,
    } | null,
    className?: string | null,
    sourceNode?: string | null,
    targetNode?: string | null,
    selected?: boolean | null,
    markerStart?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    markerEnd?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    zIndex?: number | null,
    ariaLabel?: string | null,
    interactionWidth?: number | null,
    focusable?: boolean | null,
    updatable?: boolean | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEdgeSubscriptionVariables = {
  filter?: ModelSubscriptionEdgeFilterInput | null,
};

export type OnDeleteEdgeSubscription = {
  onDeleteEdge?:  {
    __typename: "Edge",
    id: string,
    type?: string | null,
    source?: string | null,
    target?: string | null,
    sourceHandle?: string | null,
    targetHandle?: string | null,
    style?: string | null,
    animated?: boolean | null,
    hidden?: boolean | null,
    deletable?: boolean | null,
    data?:  {
      __typename: "EdgeData",
      label?: string | null,
    } | null,
    className?: string | null,
    sourceNode?: string | null,
    targetNode?: string | null,
    selected?: boolean | null,
    markerStart?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    markerEnd?:  {
      __typename: "EdgeMarker",
      type?: MarkerType | null,
      color?: string | null,
      width?: number | null,
      height?: number | null,
      markerUnits?: string | null,
      orient?: string | null,
      strokeWidth?: number | null,
    } | null,
    zIndex?: number | null,
    ariaLabel?: string | null,
    interactionWidth?: number | null,
    focusable?: boolean | null,
    updatable?: boolean | null,
    flow?:  {
      __typename: "Flow",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    flowId: string,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    avatar?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    flows?:  {
      __typename: "ModelFlowConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    avatar?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    flows?:  {
      __typename: "ModelFlowConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    avatar?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    flows?:  {
      __typename: "ModelFlowConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

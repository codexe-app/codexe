/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDocumentInput = {
  id?: string | null,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  status?: Status | null,
  graphic?: ImageFileInput | null,
  topicId?: string | null,
  userId: string,
  createdAt?: string | null,
};

export enum Status {
  live = "live",
  draft = "draft",
  private = "private",
  archive = "archive",
  trash = "trash",
}


export type ImageFileInput = {
  alt?: string | null,
  title?: string | null,
  caption?: string | null,
  description?: string | null,
  url?: string | null,
  key?: string | null,
  source?: string | null,
  thumbnail?: string | null,
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
  updatedAt?: ModelStringInput | null,
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

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
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

export type Document = {
  __typename: "Document",
  id: string,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  status?: Status | null,
  graphic?: ImageFile | null,
  topic?: Topic | null,
  topicId?: string | null,
  user?: User | null,
  userId: string,
  createdAt?: string | null,
  updatedAt: string,
};

export type ImageFile = {
  __typename: "ImageFile",
  alt?: string | null,
  title?: string | null,
  caption?: string | null,
  description?: string | null,
  url?: string | null,
  key?: string | null,
  source?: string | null,
  thumbnail?: string | null,
};

export type Topic = {
  __typename: "Topic",
  id: string,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  status?: Status | null,
  graphic?: ImageFile | null,
  documents?: ModelDocumentConnection | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type ModelDocumentConnection = {
  __typename: "ModelDocumentConnection",
  items:  Array<Document | null >,
  nextToken?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  username?: string | null,
  avatar?: ImageFile | null,
  firstname?: string | null,
  lastname?: string | null,
  role?: string | null,
  email?: string | null,
  documents?: ModelDocumentConnection | null,
  diagrams?: ModelDiagramConnection | null,
  cognitoid?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDiagramConnection = {
  __typename: "ModelDiagramConnection",
  items:  Array<Diagram | null >,
  nextToken?: string | null,
};

export type Diagram = {
  __typename: "Diagram",
  id: string,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  status?: Status | null,
  graphic?: ImageFile | null,
  nodes?: ModelNodeConnection | null,
  edges?: ModelEdgeConnection | null,
  user?: User | null,
  userId: string,
  createdAt?: string | null,
  updatedAt: string,
};

export type ModelNodeConnection = {
  __typename: "ModelNodeConnection",
  items:  Array<Node | null >,
  nextToken?: string | null,
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
  handles?: ModelHandleConnection | null,
  diagram?: Diagram | null,
  diagramId: string,
  createdAt?: string | null,
  updatedAt: string,
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


export type ModelHandleConnection = {
  __typename: "ModelHandleConnection",
  items:  Array<Handle | null >,
  nextToken?: string | null,
};

export type Handle = {
  __typename: "Handle",
  id: string,
  type?: HandleType | null,
  position?: Position | null,
  connectable?: boolean | null,
  connectstart?: boolean | null,
  connectend?: boolean | null,
  onconnect?: string | null,
  isvalid?: string | null,
  style?: string | null,
  node?: Node | null,
  nodeId?: string | null,
  createdAt?: string | null,
  updatedAt: string,
};

export enum HandleType {
  target = "target",
  source = "source",
}


export type ModelEdgeConnection = {
  __typename: "ModelEdgeConnection",
  items:  Array<Edge | null >,
  nextToken?: string | null,
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
  diagram?: Diagram | null,
  diagramId: string,
  createdAt?: string | null,
  updatedAt: string,
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


export type UpdateDocumentInput = {
  id: string,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  status?: Status | null,
  graphic?: ImageFileInput | null,
  topicId?: string | null,
  userId?: string | null,
  createdAt?: string | null,
};

export type DeleteDocumentInput = {
  id: string,
};

export type CreateTopicInput = {
  id?: string | null,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  status?: Status | null,
  graphic?: ImageFileInput | null,
  createdAt?: string | null,
};

export type ModelTopicConditionInput = {
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelTopicConditionInput | null > | null,
  or?: Array< ModelTopicConditionInput | null > | null,
  not?: ModelTopicConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTopicInput = {
  id: string,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  status?: Status | null,
  graphic?: ImageFileInput | null,
  createdAt?: string | null,
};

export type DeleteTopicInput = {
  id: string,
};

export type CreateDiagramInput = {
  id?: string | null,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  status?: Status | null,
  graphic?: ImageFileInput | null,
  userId: string,
  createdAt?: string | null,
};

export type ModelDiagramConditionInput = {
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelDiagramConditionInput | null > | null,
  or?: Array< ModelDiagramConditionInput | null > | null,
  not?: ModelDiagramConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateDiagramInput = {
  id: string,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  content?: string | null,
  status?: Status | null,
  graphic?: ImageFileInput | null,
  userId?: string | null,
  createdAt?: string | null,
};

export type DeleteDiagramInput = {
  id: string,
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
  diagramId: string,
  createdAt?: string | null,
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
  diagramId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNodeConditionInput | null > | null,
  or?: Array< ModelNodeConditionInput | null > | null,
  not?: ModelNodeConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPositionInput = {
  eq?: Position | null,
  ne?: Position | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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
  diagramId?: string | null,
  createdAt?: string | null,
};

export type DeleteNodeInput = {
  id: string,
};

export type CreateHandleInput = {
  id?: string | null,
  type?: HandleType | null,
  position?: Position | null,
  connectable?: boolean | null,
  connectstart?: boolean | null,
  connectend?: boolean | null,
  onconnect?: string | null,
  isvalid?: string | null,
  style?: string | null,
  nodeId?: string | null,
  createdAt?: string | null,
};

export type ModelHandleConditionInput = {
  type?: ModelHandleTypeInput | null,
  position?: ModelPositionInput | null,
  connectable?: ModelBooleanInput | null,
  connectstart?: ModelBooleanInput | null,
  connectend?: ModelBooleanInput | null,
  onconnect?: ModelStringInput | null,
  isvalid?: ModelStringInput | null,
  style?: ModelStringInput | null,
  nodeId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelHandleConditionInput | null > | null,
  or?: Array< ModelHandleConditionInput | null > | null,
  not?: ModelHandleConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelHandleTypeInput = {
  eq?: HandleType | null,
  ne?: HandleType | null,
};

export type UpdateHandleInput = {
  id: string,
  type?: HandleType | null,
  position?: Position | null,
  connectable?: boolean | null,
  connectstart?: boolean | null,
  connectend?: boolean | null,
  onconnect?: string | null,
  isvalid?: string | null,
  style?: string | null,
  nodeId?: string | null,
  createdAt?: string | null,
};

export type DeleteHandleInput = {
  id: string,
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
  diagramId: string,
  createdAt?: string | null,
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
  diagramId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelEdgeConditionInput | null > | null,
  or?: Array< ModelEdgeConditionInput | null > | null,
  not?: ModelEdgeConditionInput | null,
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
  diagramId?: string | null,
  createdAt?: string | null,
};

export type DeleteEdgeInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username?: string | null,
  avatar?: ImageFileInput | null,
  firstname?: string | null,
  lastname?: string | null,
  role?: string | null,
  email?: string | null,
  cognitoid?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  role?: ModelStringInput | null,
  email?: ModelStringInput | null,
  cognitoid?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  avatar?: ImageFileInput | null,
  firstname?: string | null,
  lastname?: string | null,
  role?: string | null,
  email?: string | null,
  cognitoid?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

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
};

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTopicFilterInput | null > | null,
  or?: Array< ModelTopicFilterInput | null > | null,
  not?: ModelTopicFilterInput | null,
};

export type ModelTopicConnection = {
  __typename: "ModelTopicConnection",
  items:  Array<Topic | null >,
  nextToken?: string | null,
};

export type ModelDiagramFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDiagramFilterInput | null > | null,
  or?: Array< ModelDiagramFilterInput | null > | null,
  not?: ModelDiagramFilterInput | null,
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
  diagramId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelNodeFilterInput | null > | null,
  or?: Array< ModelNodeFilterInput | null > | null,
  not?: ModelNodeFilterInput | null,
};

export type ModelHandleFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelHandleTypeInput | null,
  position?: ModelPositionInput | null,
  connectable?: ModelBooleanInput | null,
  connectstart?: ModelBooleanInput | null,
  connectend?: ModelBooleanInput | null,
  onconnect?: ModelStringInput | null,
  isvalid?: ModelStringInput | null,
  style?: ModelStringInput | null,
  nodeId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelHandleFilterInput | null > | null,
  or?: Array< ModelHandleFilterInput | null > | null,
  not?: ModelHandleFilterInput | null,
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
  diagramId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEdgeFilterInput | null > | null,
  or?: Array< ModelEdgeFilterInput | null > | null,
  not?: ModelEdgeFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
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
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
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
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTopicFilterInput | null > | null,
  or?: Array< ModelSubscriptionTopicFilterInput | null > | null,
};

export type ModelSubscriptionDiagramFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDiagramFilterInput | null > | null,
  or?: Array< ModelSubscriptionDiagramFilterInput | null > | null,
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
  diagramId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNodeFilterInput | null > | null,
  or?: Array< ModelSubscriptionNodeFilterInput | null > | null,
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

export type ModelSubscriptionHandleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  position?: ModelSubscriptionStringInput | null,
  connectable?: ModelSubscriptionBooleanInput | null,
  connectstart?: ModelSubscriptionBooleanInput | null,
  connectend?: ModelSubscriptionBooleanInput | null,
  onconnect?: ModelSubscriptionStringInput | null,
  isvalid?: ModelSubscriptionStringInput | null,
  style?: ModelSubscriptionStringInput | null,
  nodeId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHandleFilterInput | null > | null,
  or?: Array< ModelSubscriptionHandleFilterInput | null > | null,
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
  diagramId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEdgeFilterInput | null > | null,
  or?: Array< ModelSubscriptionEdgeFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  firstname?: ModelSubscriptionStringInput | null,
  lastname?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  cognitoid?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
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
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
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
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
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
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateDiagramMutationVariables = {
  input: CreateDiagramInput,
  condition?: ModelDiagramConditionInput | null,
};

export type CreateDiagramMutation = {
  createDiagram?:  {
    __typename: "Diagram",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateDiagramMutationVariables = {
  input: UpdateDiagramInput,
  condition?: ModelDiagramConditionInput | null,
};

export type UpdateDiagramMutation = {
  updateDiagram?:  {
    __typename: "Diagram",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteDiagramMutationVariables = {
  input: DeleteDiagramInput,
  condition?: ModelDiagramConditionInput | null,
};

export type DeleteDiagramMutation = {
  deleteDiagram?:  {
    __typename: "Diagram",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    handles?:  {
      __typename: "ModelHandleConnection",
      nextToken?: string | null,
    } | null,
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    handles?:  {
      __typename: "ModelHandleConnection",
      nextToken?: string | null,
    } | null,
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    handles?:  {
      __typename: "ModelHandleConnection",
      nextToken?: string | null,
    } | null,
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateHandleMutationVariables = {
  input: CreateHandleInput,
  condition?: ModelHandleConditionInput | null,
};

export type CreateHandleMutation = {
  createHandle?:  {
    __typename: "Handle",
    id: string,
    type?: HandleType | null,
    position?: Position | null,
    connectable?: boolean | null,
    connectstart?: boolean | null,
    connectend?: boolean | null,
    onconnect?: string | null,
    isvalid?: string | null,
    style?: string | null,
    node?:  {
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
      diagramId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    nodeId?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateHandleMutationVariables = {
  input: UpdateHandleInput,
  condition?: ModelHandleConditionInput | null,
};

export type UpdateHandleMutation = {
  updateHandle?:  {
    __typename: "Handle",
    id: string,
    type?: HandleType | null,
    position?: Position | null,
    connectable?: boolean | null,
    connectstart?: boolean | null,
    connectend?: boolean | null,
    onconnect?: string | null,
    isvalid?: string | null,
    style?: string | null,
    node?:  {
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
      diagramId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    nodeId?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteHandleMutationVariables = {
  input: DeleteHandleInput,
  condition?: ModelHandleConditionInput | null,
};

export type DeleteHandleMutation = {
  deleteHandle?:  {
    __typename: "Handle",
    id: string,
    type?: HandleType | null,
    position?: Position | null,
    connectable?: boolean | null,
    connectstart?: boolean | null,
    connectend?: boolean | null,
    onconnect?: string | null,
    isvalid?: string | null,
    style?: string | null,
    node?:  {
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
      diagramId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    nodeId?: string | null,
    createdAt?: string | null,
    updatedAt: string,
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
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    avatar?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    diagrams?:  {
      __typename: "ModelDiagramConnection",
      nextToken?: string | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
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
    avatar?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    diagrams?:  {
      __typename: "ModelDiagramConnection",
      nextToken?: string | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
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
    avatar?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    diagrams?:  {
      __typename: "ModelDiagramConnection",
      nextToken?: string | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
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
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    } | null >,
    nextToken?: string | null,
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
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
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
      status?: Status | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDiagramQueryVariables = {
  id: string,
};

export type GetDiagramQuery = {
  getDiagram?:  {
    __typename: "Diagram",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListDiagramsQueryVariables = {
  filter?: ModelDiagramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiagramsQuery = {
  listDiagrams?:  {
    __typename: "ModelDiagramConnection",
    items:  Array< {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    handles?:  {
      __typename: "ModelHandleConnection",
      nextToken?: string | null,
    } | null,
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
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
      diagramId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHandleQueryVariables = {
  id: string,
};

export type GetHandleQuery = {
  getHandle?:  {
    __typename: "Handle",
    id: string,
    type?: HandleType | null,
    position?: Position | null,
    connectable?: boolean | null,
    connectstart?: boolean | null,
    connectend?: boolean | null,
    onconnect?: string | null,
    isvalid?: string | null,
    style?: string | null,
    node?:  {
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
      diagramId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    nodeId?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListHandlesQueryVariables = {
  filter?: ModelHandleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHandlesQuery = {
  listHandles?:  {
    __typename: "ModelHandleConnection",
    items:  Array< {
      __typename: "Handle",
      id: string,
      type?: HandleType | null,
      position?: Position | null,
      connectable?: boolean | null,
      connectstart?: boolean | null,
      connectend?: boolean | null,
      onconnect?: string | null,
      isvalid?: string | null,
      style?: string | null,
      nodeId?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
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
      diagramId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    avatar?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    diagrams?:  {
      __typename: "ModelDiagramConnection",
      nextToken?: string | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
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
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    } | null >,
    nextToken?: string | null,
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
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DiagramsByUserIdAndCreatedAtQueryVariables = {
  userId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDiagramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DiagramsByUserIdAndCreatedAtQuery = {
  diagramsByUserIdAndCreatedAt?:  {
    __typename: "ModelDiagramConnection",
    items:  Array< {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NodesByDiagramIdAndCreatedAtQueryVariables = {
  diagramId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NodesByDiagramIdAndCreatedAtQuery = {
  nodesByDiagramIdAndCreatedAt?:  {
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
      diagramId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type HandlesByNodeIdAndCreatedAtQueryVariables = {
  nodeId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelHandleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type HandlesByNodeIdAndCreatedAtQuery = {
  handlesByNodeIdAndCreatedAt?:  {
    __typename: "ModelHandleConnection",
    items:  Array< {
      __typename: "Handle",
      id: string,
      type?: HandleType | null,
      position?: Position | null,
      connectable?: boolean | null,
      connectstart?: boolean | null,
      connectend?: boolean | null,
      onconnect?: string | null,
      isvalid?: string | null,
      style?: string | null,
      nodeId?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EdgesByDiagramIdAndCreatedAtQueryVariables = {
  diagramId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEdgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EdgesByDiagramIdAndCreatedAtQuery = {
  edgesByDiagramIdAndCreatedAt?:  {
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
      diagramId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    topic?:  {
      __typename: "Topic",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    topicId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
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
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
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
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateDiagramSubscriptionVariables = {
  filter?: ModelSubscriptionDiagramFilterInput | null,
};

export type OnCreateDiagramSubscription = {
  onCreateDiagram?:  {
    __typename: "Diagram",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateDiagramSubscriptionVariables = {
  filter?: ModelSubscriptionDiagramFilterInput | null,
};

export type OnUpdateDiagramSubscription = {
  onUpdateDiagram?:  {
    __typename: "Diagram",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteDiagramSubscriptionVariables = {
  filter?: ModelSubscriptionDiagramFilterInput | null,
};

export type OnDeleteDiagramSubscription = {
  onDeleteDiagram?:  {
    __typename: "Diagram",
    id: string,
    name?: string | null,
    slug?: string | null,
    description?: string | null,
    content?: string | null,
    status?: Status | null,
    graphic?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    nodes?:  {
      __typename: "ModelNodeConnection",
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      role?: string | null,
      email?: string | null,
      cognitoid?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    handles?:  {
      __typename: "ModelHandleConnection",
      nextToken?: string | null,
    } | null,
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    handles?:  {
      __typename: "ModelHandleConnection",
      nextToken?: string | null,
    } | null,
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    handles?:  {
      __typename: "ModelHandleConnection",
      nextToken?: string | null,
    } | null,
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateHandleSubscriptionVariables = {
  filter?: ModelSubscriptionHandleFilterInput | null,
};

export type OnCreateHandleSubscription = {
  onCreateHandle?:  {
    __typename: "Handle",
    id: string,
    type?: HandleType | null,
    position?: Position | null,
    connectable?: boolean | null,
    connectstart?: boolean | null,
    connectend?: boolean | null,
    onconnect?: string | null,
    isvalid?: string | null,
    style?: string | null,
    node?:  {
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
      diagramId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    nodeId?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateHandleSubscriptionVariables = {
  filter?: ModelSubscriptionHandleFilterInput | null,
};

export type OnUpdateHandleSubscription = {
  onUpdateHandle?:  {
    __typename: "Handle",
    id: string,
    type?: HandleType | null,
    position?: Position | null,
    connectable?: boolean | null,
    connectstart?: boolean | null,
    connectend?: boolean | null,
    onconnect?: string | null,
    isvalid?: string | null,
    style?: string | null,
    node?:  {
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
      diagramId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    nodeId?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteHandleSubscriptionVariables = {
  filter?: ModelSubscriptionHandleFilterInput | null,
};

export type OnDeleteHandleSubscription = {
  onDeleteHandle?:  {
    __typename: "Handle",
    id: string,
    type?: HandleType | null,
    position?: Position | null,
    connectable?: boolean | null,
    connectstart?: boolean | null,
    connectend?: boolean | null,
    onconnect?: string | null,
    isvalid?: string | null,
    style?: string | null,
    node?:  {
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
      diagramId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    nodeId?: string | null,
    createdAt?: string | null,
    updatedAt: string,
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
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    diagram?:  {
      __typename: "Diagram",
      id: string,
      name?: string | null,
      slug?: string | null,
      description?: string | null,
      content?: string | null,
      status?: Status | null,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    diagramId: string,
    createdAt?: string | null,
    updatedAt: string,
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
    avatar?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    diagrams?:  {
      __typename: "ModelDiagramConnection",
      nextToken?: string | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
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
    avatar?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    diagrams?:  {
      __typename: "ModelDiagramConnection",
      nextToken?: string | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
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
    avatar?:  {
      __typename: "ImageFile",
      alt?: string | null,
      title?: string | null,
      caption?: string | null,
      description?: string | null,
      url?: string | null,
      key?: string | null,
      source?: string | null,
      thumbnail?: string | null,
    } | null,
    firstname?: string | null,
    lastname?: string | null,
    role?: string | null,
    email?: string | null,
    documents?:  {
      __typename: "ModelDocumentConnection",
      nextToken?: string | null,
    } | null,
    diagrams?:  {
      __typename: "ModelDiagramConnection",
      nextToken?: string | null,
    } | null,
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

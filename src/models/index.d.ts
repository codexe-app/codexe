import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Status {
  LIVE = "live",
  DRAFT = "draft",
  PRIVATE = "private",
  ARCHIVE = "archive",
  TRASH = "trash"
}

export enum Position {
  LEFT = "left",
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom"
}

export enum MarkerType {
  ARROW = "arrow",
  ARROWCLOSED = "arrowclosed"
}

type EagerXYPosition = {
  readonly x?: number | null;
  readonly y?: number | null;
}

type LazyXYPosition = {
  readonly x?: number | null;
  readonly y?: number | null;
}

export declare type XYPosition = LazyLoading extends LazyLoadingDisabled ? EagerXYPosition : LazyXYPosition

export declare const XYPosition: (new (init: ModelInit<XYPosition>) => XYPosition)

type EagerNodeData = {
  readonly label?: string | null;
}

type LazyNodeData = {
  readonly label?: string | null;
}

export declare type NodeData = LazyLoading extends LazyLoadingDisabled ? EagerNodeData : LazyNodeData

export declare const NodeData: (new (init: ModelInit<NodeData>) => NodeData)

type EagerEdgeData = {
  readonly label?: string | null;
}

type LazyEdgeData = {
  readonly label?: string | null;
}

export declare type EdgeData = LazyLoading extends LazyLoadingDisabled ? EagerEdgeData : LazyEdgeData

export declare const EdgeData: (new (init: ModelInit<EdgeData>) => EdgeData)

type EagerEdgeMarker = {
  readonly type?: MarkerType | keyof typeof MarkerType | null;
  readonly color?: string | null;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly markerUnits?: string | null;
  readonly orient?: string | null;
  readonly strokeWidth?: number | null;
}

type LazyEdgeMarker = {
  readonly type?: MarkerType | keyof typeof MarkerType | null;
  readonly color?: string | null;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly markerUnits?: string | null;
  readonly orient?: string | null;
  readonly strokeWidth?: number | null;
}

export declare type EdgeMarker = LazyLoading extends LazyLoadingDisabled ? EagerEdgeMarker : LazyEdgeMarker

export declare const EdgeMarker: (new (init: ModelInit<EdgeMarker>) => EdgeMarker)

type EagerDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Document, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly topic?: Topic | null;
  readonly topicId?: string | null;
  readonly user?: User | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Document, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly topic: AsyncItem<Topic | undefined>;
  readonly topicId?: string | null;
  readonly user: AsyncItem<User | undefined>;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Document = LazyLoading extends LazyLoadingDisabled ? EagerDocument : LazyDocument

export declare const Document: (new (init: ModelInit<Document>) => Document) & {
  copyOf(source: Document, mutator: (draft: MutableModel<Document>) => MutableModel<Document> | void): Document;
}

type EagerTopic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Topic, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly documents?: (Document | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTopic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Topic, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly documents: AsyncCollection<Document>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Topic = LazyLoading extends LazyLoadingDisabled ? EagerTopic : LazyTopic

export declare const Topic: (new (init: ModelInit<Topic>) => Topic) & {
  copyOf(source: Topic, mutator: (draft: MutableModel<Topic>) => MutableModel<Topic> | void): Topic;
}

type EagerFlow = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Flow, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly description?: string | null;
  readonly nodes?: (Node | null)[] | null;
  readonly edges?: (Edge | null)[] | null;
  readonly user?: User | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFlow = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Flow, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly description?: string | null;
  readonly nodes: AsyncCollection<Node>;
  readonly edges: AsyncCollection<Edge>;
  readonly user: AsyncItem<User | undefined>;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Flow = LazyLoading extends LazyLoadingDisabled ? EagerFlow : LazyFlow

export declare const Flow: (new (init: ModelInit<Flow>) => Flow) & {
  copyOf(source: Flow, mutator: (draft: MutableModel<Flow>) => MutableModel<Flow> | void): Flow;
}

type EagerNode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Node, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly position?: XYPosition | null;
  readonly data?: NodeData | null;
  readonly type?: string | null;
  readonly sourcePosition?: Position | keyof typeof Position | null;
  readonly targetPosition?: Position | keyof typeof Position | null;
  readonly hidden?: boolean | null;
  readonly selected?: boolean | null;
  readonly dragging?: boolean | null;
  readonly draggable?: boolean | null;
  readonly selectable?: boolean | null;
  readonly connectable?: boolean | null;
  readonly resizing?: boolean | null;
  readonly deletable?: boolean | null;
  readonly dragHandle?: string | null;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly parentId?: string | null;
  readonly zIndex?: number | null;
  readonly extent?: string | null;
  readonly expandParent?: boolean | null;
  readonly positionAbsolute?: XYPosition | null;
  readonly ariaLabel?: string | null;
  readonly focusable?: boolean | null;
  readonly style?: string | null;
  readonly className?: string | null;
  readonly flow?: Flow | null;
  readonly flowId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Node, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly position?: XYPosition | null;
  readonly data?: NodeData | null;
  readonly type?: string | null;
  readonly sourcePosition?: Position | keyof typeof Position | null;
  readonly targetPosition?: Position | keyof typeof Position | null;
  readonly hidden?: boolean | null;
  readonly selected?: boolean | null;
  readonly dragging?: boolean | null;
  readonly draggable?: boolean | null;
  readonly selectable?: boolean | null;
  readonly connectable?: boolean | null;
  readonly resizing?: boolean | null;
  readonly deletable?: boolean | null;
  readonly dragHandle?: string | null;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly parentId?: string | null;
  readonly zIndex?: number | null;
  readonly extent?: string | null;
  readonly expandParent?: boolean | null;
  readonly positionAbsolute?: XYPosition | null;
  readonly ariaLabel?: string | null;
  readonly focusable?: boolean | null;
  readonly style?: string | null;
  readonly className?: string | null;
  readonly flow: AsyncItem<Flow | undefined>;
  readonly flowId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Node = LazyLoading extends LazyLoadingDisabled ? EagerNode : LazyNode

export declare const Node: (new (init: ModelInit<Node>) => Node) & {
  copyOf(source: Node, mutator: (draft: MutableModel<Node>) => MutableModel<Node> | void): Node;
}

type EagerEdge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Edge, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly source?: string | null;
  readonly target?: string | null;
  readonly sourceHandle?: string | null;
  readonly targetHandle?: string | null;
  readonly style?: string | null;
  readonly animated?: boolean | null;
  readonly hidden?: boolean | null;
  readonly deletable?: boolean | null;
  readonly data?: EdgeData | null;
  readonly className?: string | null;
  readonly sourceNode?: string | null;
  readonly targetNode?: string | null;
  readonly selected?: boolean | null;
  readonly markerStart?: EdgeMarker | null;
  readonly markerEnd?: EdgeMarker | null;
  readonly zIndex?: number | null;
  readonly ariaLabel?: string | null;
  readonly interactionWidth?: number | null;
  readonly focusable?: boolean | null;
  readonly updatable?: boolean | null;
  readonly flow?: Flow | null;
  readonly flowId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEdge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Edge, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly source?: string | null;
  readonly target?: string | null;
  readonly sourceHandle?: string | null;
  readonly targetHandle?: string | null;
  readonly style?: string | null;
  readonly animated?: boolean | null;
  readonly hidden?: boolean | null;
  readonly deletable?: boolean | null;
  readonly data?: EdgeData | null;
  readonly className?: string | null;
  readonly sourceNode?: string | null;
  readonly targetNode?: string | null;
  readonly selected?: boolean | null;
  readonly markerStart?: EdgeMarker | null;
  readonly markerEnd?: EdgeMarker | null;
  readonly zIndex?: number | null;
  readonly ariaLabel?: string | null;
  readonly interactionWidth?: number | null;
  readonly focusable?: boolean | null;
  readonly updatable?: boolean | null;
  readonly flow: AsyncItem<Flow | undefined>;
  readonly flowId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Edge = LazyLoading extends LazyLoadingDisabled ? EagerEdge : LazyEdge

export declare const Edge: (new (init: ModelInit<Edge>) => Edge) & {
  copyOf(source: Edge, mutator: (draft: MutableModel<Edge>) => MutableModel<Edge> | void): Edge;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly avatar?: string | null;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly role?: string | null;
  readonly email?: string | null;
  readonly documents?: (Document | null)[] | null;
  readonly flows?: (Flow | null)[] | null;
  readonly cognitoid?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly avatar?: string | null;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly role?: string | null;
  readonly email?: string | null;
  readonly documents: AsyncCollection<Document>;
  readonly flows: AsyncCollection<Flow>;
  readonly cognitoid?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}
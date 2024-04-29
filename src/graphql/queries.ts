/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDocument = /* GraphQL */ `query GetDocument($id: ID!) {
  getDocument(id: $id) {
    id
    name
    slug
    description
    content
    status
    topic {
      id
      name
      slug
      description
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    topicId
    user {
      id
      username
      avatar
      firstname
      lastname
      role
      email
      cognitoid
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    userId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDocumentQueryVariables,
  APITypes.GetDocumentQuery
>;
export const listDocuments = /* GraphQL */ `query ListDocuments(
  $filter: ModelDocumentFilterInput
  $limit: Int
  $nextToken: String
) {
  listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      slug
      description
      content
      status
      topicId
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDocumentsQueryVariables,
  APITypes.ListDocumentsQuery
>;
export const syncDocuments = /* GraphQL */ `query SyncDocuments(
  $filter: ModelDocumentFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncDocuments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      slug
      description
      content
      status
      topicId
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncDocumentsQueryVariables,
  APITypes.SyncDocumentsQuery
>;
export const getTopic = /* GraphQL */ `query GetTopic($id: ID!) {
  getTopic(id: $id) {
    id
    name
    slug
    description
    content
    documents {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTopicQueryVariables, APITypes.GetTopicQuery>;
export const listTopics = /* GraphQL */ `query ListTopics(
  $filter: ModelTopicFilterInput
  $limit: Int
  $nextToken: String
) {
  listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      slug
      description
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTopicsQueryVariables,
  APITypes.ListTopicsQuery
>;
export const syncTopics = /* GraphQL */ `query SyncTopics(
  $filter: ModelTopicFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTopics(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      slug
      description
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncTopicsQueryVariables,
  APITypes.SyncTopicsQuery
>;
export const getFlow = /* GraphQL */ `query GetFlow($id: ID!) {
  getFlow(id: $id) {
    id
    name
    slug
    description
    nodes {
      nextToken
      startedAt
      __typename
    }
    edges {
      nextToken
      startedAt
      __typename
    }
    user {
      id
      username
      avatar
      firstname
      lastname
      role
      email
      cognitoid
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    userId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetFlowQueryVariables, APITypes.GetFlowQuery>;
export const listFlows = /* GraphQL */ `query ListFlows(
  $filter: ModelFlowFilterInput
  $limit: Int
  $nextToken: String
) {
  listFlows(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      slug
      description
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListFlowsQueryVariables, APITypes.ListFlowsQuery>;
export const syncFlows = /* GraphQL */ `query SyncFlows(
  $filter: ModelFlowFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncFlows(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      slug
      description
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncFlowsQueryVariables, APITypes.SyncFlowsQuery>;
export const getNode = /* GraphQL */ `query GetNode($id: ID!) {
  getNode(id: $id) {
    id
    position {
      x
      y
      __typename
    }
    data {
      label
      __typename
    }
    type
    sourcePosition
    targetPosition
    hidden
    selected
    dragging
    draggable
    selectable
    connectable
    resizing
    deletable
    dragHandle
    width
    height
    parentId
    zIndex
    extent
    expandParent
    positionAbsolute {
      x
      y
      __typename
    }
    ariaLabel
    focusable
    style
    className
    flow {
      id
      name
      slug
      description
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    flowId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetNodeQueryVariables, APITypes.GetNodeQuery>;
export const listNodes = /* GraphQL */ `query ListNodes(
  $filter: ModelNodeFilterInput
  $limit: Int
  $nextToken: String
) {
  listNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      sourcePosition
      targetPosition
      hidden
      selected
      dragging
      draggable
      selectable
      connectable
      resizing
      deletable
      dragHandle
      width
      height
      parentId
      zIndex
      extent
      expandParent
      ariaLabel
      focusable
      style
      className
      flowId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListNodesQueryVariables, APITypes.ListNodesQuery>;
export const syncNodes = /* GraphQL */ `query SyncNodes(
  $filter: ModelNodeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncNodes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      type
      sourcePosition
      targetPosition
      hidden
      selected
      dragging
      draggable
      selectable
      connectable
      resizing
      deletable
      dragHandle
      width
      height
      parentId
      zIndex
      extent
      expandParent
      ariaLabel
      focusable
      style
      className
      flowId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncNodesQueryVariables, APITypes.SyncNodesQuery>;
export const getEdge = /* GraphQL */ `query GetEdge($id: ID!) {
  getEdge(id: $id) {
    id
    type
    source
    target
    sourceHandle
    targetHandle
    style
    animated
    hidden
    deletable
    data {
      label
      __typename
    }
    className
    sourceNode
    targetNode
    selected
    markerStart {
      type
      color
      width
      height
      markerUnits
      orient
      strokeWidth
      __typename
    }
    markerEnd {
      type
      color
      width
      height
      markerUnits
      orient
      strokeWidth
      __typename
    }
    zIndex
    ariaLabel
    interactionWidth
    focusable
    updatable
    flow {
      id
      name
      slug
      description
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    flowId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetEdgeQueryVariables, APITypes.GetEdgeQuery>;
export const listEdges = /* GraphQL */ `query ListEdges(
  $filter: ModelEdgeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEdges(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      source
      target
      sourceHandle
      targetHandle
      style
      animated
      hidden
      deletable
      className
      sourceNode
      targetNode
      selected
      zIndex
      ariaLabel
      interactionWidth
      focusable
      updatable
      flowId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListEdgesQueryVariables, APITypes.ListEdgesQuery>;
export const syncEdges = /* GraphQL */ `query SyncEdges(
  $filter: ModelEdgeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncEdges(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      type
      source
      target
      sourceHandle
      targetHandle
      style
      animated
      hidden
      deletable
      className
      sourceNode
      targetNode
      selected
      zIndex
      ariaLabel
      interactionWidth
      focusable
      updatable
      flowId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncEdgesQueryVariables, APITypes.SyncEdgesQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    avatar
    firstname
    lastname
    role
    email
    documents {
      nextToken
      startedAt
      __typename
    }
    flows {
      nextToken
      startedAt
      __typename
    }
    cognitoid
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      avatar
      firstname
      lastname
      role
      email
      cognitoid
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      username
      avatar
      firstname
      lastname
      role
      email
      cognitoid
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const documentsByTopicIdAndCreatedAt = /* GraphQL */ `query DocumentsByTopicIdAndCreatedAt(
  $topicId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelDocumentFilterInput
  $limit: Int
  $nextToken: String
) {
  documentsByTopicIdAndCreatedAt(
    topicId: $topicId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      slug
      description
      content
      status
      topicId
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DocumentsByTopicIdAndCreatedAtQueryVariables,
  APITypes.DocumentsByTopicIdAndCreatedAtQuery
>;
export const documentsByUserIdAndCreatedAt = /* GraphQL */ `query DocumentsByUserIdAndCreatedAt(
  $userId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelDocumentFilterInput
  $limit: Int
  $nextToken: String
) {
  documentsByUserIdAndCreatedAt(
    userId: $userId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      slug
      description
      content
      status
      topicId
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DocumentsByUserIdAndCreatedAtQueryVariables,
  APITypes.DocumentsByUserIdAndCreatedAtQuery
>;
export const flowsByUserIdAndCreatedAt = /* GraphQL */ `query FlowsByUserIdAndCreatedAt(
  $userId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFlowFilterInput
  $limit: Int
  $nextToken: String
) {
  flowsByUserIdAndCreatedAt(
    userId: $userId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      slug
      description
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FlowsByUserIdAndCreatedAtQueryVariables,
  APITypes.FlowsByUserIdAndCreatedAtQuery
>;
export const nodesByFlowIdAndCreatedAt = /* GraphQL */ `query NodesByFlowIdAndCreatedAt(
  $flowId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelNodeFilterInput
  $limit: Int
  $nextToken: String
) {
  nodesByFlowIdAndCreatedAt(
    flowId: $flowId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      sourcePosition
      targetPosition
      hidden
      selected
      dragging
      draggable
      selectable
      connectable
      resizing
      deletable
      dragHandle
      width
      height
      parentId
      zIndex
      extent
      expandParent
      ariaLabel
      focusable
      style
      className
      flowId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NodesByFlowIdAndCreatedAtQueryVariables,
  APITypes.NodesByFlowIdAndCreatedAtQuery
>;
export const edgesByFlowIdAndCreatedAt = /* GraphQL */ `query EdgesByFlowIdAndCreatedAt(
  $flowId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEdgeFilterInput
  $limit: Int
  $nextToken: String
) {
  edgesByFlowIdAndCreatedAt(
    flowId: $flowId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      source
      target
      sourceHandle
      targetHandle
      style
      animated
      hidden
      deletable
      className
      sourceNode
      targetNode
      selected
      zIndex
      ariaLabel
      interactionWidth
      focusable
      updatable
      flowId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EdgesByFlowIdAndCreatedAtQueryVariables,
  APITypes.EdgesByFlowIdAndCreatedAtQuery
>;

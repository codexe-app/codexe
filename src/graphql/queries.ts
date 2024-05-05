/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
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
    graphic {
      alt
      title
      caption
      description
      url
      key
      source
      thumbnail
      __typename
    }
    topic {
      id
      name
      slug
      description
      content
      status
      createdAt
      updatedAt
      __typename
    }
    topicId
    user {
      id
      username
      firstname
      lastname
      role
      email
      cognitoid
      createdAt
      updatedAt
      __typename
    }
    userId
    createdAt
    updatedAt
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
      graphic {
        alt
        title
        caption
        description
        url
        key
        source
        thumbnail
      }
      topicId
      userId
      createdAt
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDocumentsQueryVariables,
  APITypes.ListDocumentsQuery
>;
export const getTopic = /* GraphQL */ `query GetTopic($id: ID!) {
  getTopic(id: $id) {
    id
    name
    slug
    description
    content
    status
    graphic {
      alt
      title
      caption
      description
      url
      key
      source
      thumbnail
      __typename
    }
    documents {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTopicsQueryVariables,
  APITypes.ListTopicsQuery
>;
export const getDiagram = /* GraphQL */ `query GetDiagram($id: ID!) {
  getDiagram(id: $id) {
    id
    name
    slug
    description
    content
    status
    graphic {
      alt
      title
      caption
      description
      url
      key
      source
      thumbnail
      __typename
    }
    nodes {
      nextToken
      __typename
    }
    edges {
      nextToken
      __typename
    }
    user {
      id
      username
      firstname
      lastname
      role
      email
      cognitoid
      createdAt
      updatedAt
      __typename
    }
    userId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDiagramQueryVariables,
  APITypes.GetDiagramQuery
>;
export const listDiagrams = /* GraphQL */ `query ListDiagrams(
  $filter: ModelDiagramFilterInput
  $limit: Int
  $nextToken: String
) {
  listDiagrams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      slug
      description
      content
      status
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDiagramsQueryVariables,
  APITypes.ListDiagramsQuery
>;
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
    handles {
      nextToken
      __typename
    }
    diagram {
      id
      name
      slug
      description
      content
      status
      userId
      createdAt
      updatedAt
      __typename
    }
    diagramId
    createdAt
    updatedAt
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
      diagramId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListNodesQueryVariables, APITypes.ListNodesQuery>;
export const getHandle = /* GraphQL */ `query GetHandle($id: ID!) {
  getHandle(id: $id) {
    id
    type
    position
    connectable
    connectstart
    connectend
    onconnect
    isvalid
    style
    node {
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
      diagramId
      createdAt
      updatedAt
      __typename
    }
    nodeId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetHandleQueryVariables, APITypes.GetHandleQuery>;
export const listHandles = /* GraphQL */ `query ListHandles(
  $filter: ModelHandleFilterInput
  $limit: Int
  $nextToken: String
) {
  listHandles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      position
      connectable
      connectstart
      connectend
      onconnect
      isvalid
      style
      nodeId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHandlesQueryVariables,
  APITypes.ListHandlesQuery
>;
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
    diagram {
      id
      name
      slug
      description
      content
      status
      userId
      createdAt
      updatedAt
      __typename
    }
    diagramId
    createdAt
    updatedAt
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
      diagramId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListEdgesQueryVariables, APITypes.ListEdgesQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    avatar {
      alt
      title
      caption
      description
      url
      key
      source
      thumbnail
      __typename
    }
    firstname
    lastname
    role
    email
    documents {
      items {
        id
        name
        slug
        graphic {
          alt
          title
          caption
          description
          url
          key
          source
          thumbnail
        }
        description
        content
        status
        topicId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    diagrams {
      items {
        id
        name
        slug
        description
        content
        status
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    cognitoid
    createdAt
    updatedAt
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
      firstname
      lastname
      role
      email
      cognitoid
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
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
      __typename
    }
    nextToken
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DocumentsByUserIdAndCreatedAtQueryVariables,
  APITypes.DocumentsByUserIdAndCreatedAtQuery
>;
export const diagramsByUserIdAndCreatedAt = /* GraphQL */ `query DiagramsByUserIdAndCreatedAt(
  $userId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelDiagramFilterInput
  $limit: Int
  $nextToken: String
) {
  diagramsByUserIdAndCreatedAt(
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
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DiagramsByUserIdAndCreatedAtQueryVariables,
  APITypes.DiagramsByUserIdAndCreatedAtQuery
>;
export const nodesByDiagramIdAndCreatedAt = /* GraphQL */ `query NodesByDiagramIdAndCreatedAt(
  $diagramId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelNodeFilterInput
  $limit: Int
  $nextToken: String
) {
  nodesByDiagramIdAndCreatedAt(
    diagramId: $diagramId
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
      diagramId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NodesByDiagramIdAndCreatedAtQueryVariables,
  APITypes.NodesByDiagramIdAndCreatedAtQuery
>;
export const handlesByNodeIdAndCreatedAt = /* GraphQL */ `query HandlesByNodeIdAndCreatedAt(
  $nodeId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelHandleFilterInput
  $limit: Int
  $nextToken: String
) {
  handlesByNodeIdAndCreatedAt(
    nodeId: $nodeId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      position
      connectable
      connectstart
      connectend
      onconnect
      isvalid
      style
      nodeId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.HandlesByNodeIdAndCreatedAtQueryVariables,
  APITypes.HandlesByNodeIdAndCreatedAtQuery
>;
export const edgesByDiagramIdAndCreatedAt = /* GraphQL */ `query EdgesByDiagramIdAndCreatedAt(
  $diagramId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEdgeFilterInput
  $limit: Int
  $nextToken: String
) {
  edgesByDiagramIdAndCreatedAt(
    diagramId: $diagramId
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
      diagramId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EdgesByDiagramIdAndCreatedAtQueryVariables,
  APITypes.EdgesByDiagramIdAndCreatedAtQuery
>;

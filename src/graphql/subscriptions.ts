/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDocument = /* GraphQL */ `subscription OnCreateDocument($filter: ModelSubscriptionDocumentFilterInput) {
  onCreateDocument(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDocumentSubscriptionVariables,
  APITypes.OnCreateDocumentSubscription
>;
export const onUpdateDocument = /* GraphQL */ `subscription OnUpdateDocument($filter: ModelSubscriptionDocumentFilterInput) {
  onUpdateDocument(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDocumentSubscriptionVariables,
  APITypes.OnUpdateDocumentSubscription
>;
export const onDeleteDocument = /* GraphQL */ `subscription OnDeleteDocument($filter: ModelSubscriptionDocumentFilterInput) {
  onDeleteDocument(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDocumentSubscriptionVariables,
  APITypes.OnDeleteDocumentSubscription
>;
export const onCreateTopic = /* GraphQL */ `subscription OnCreateTopic($filter: ModelSubscriptionTopicFilterInput) {
  onCreateTopic(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTopicSubscriptionVariables,
  APITypes.OnCreateTopicSubscription
>;
export const onUpdateTopic = /* GraphQL */ `subscription OnUpdateTopic($filter: ModelSubscriptionTopicFilterInput) {
  onUpdateTopic(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTopicSubscriptionVariables,
  APITypes.OnUpdateTopicSubscription
>;
export const onDeleteTopic = /* GraphQL */ `subscription OnDeleteTopic($filter: ModelSubscriptionTopicFilterInput) {
  onDeleteTopic(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTopicSubscriptionVariables,
  APITypes.OnDeleteTopicSubscription
>;
export const onCreateDiagram = /* GraphQL */ `subscription OnCreateDiagram($filter: ModelSubscriptionDiagramFilterInput) {
  onCreateDiagram(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDiagramSubscriptionVariables,
  APITypes.OnCreateDiagramSubscription
>;
export const onUpdateDiagram = /* GraphQL */ `subscription OnUpdateDiagram($filter: ModelSubscriptionDiagramFilterInput) {
  onUpdateDiagram(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDiagramSubscriptionVariables,
  APITypes.OnUpdateDiagramSubscription
>;
export const onDeleteDiagram = /* GraphQL */ `subscription OnDeleteDiagram($filter: ModelSubscriptionDiagramFilterInput) {
  onDeleteDiagram(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDiagramSubscriptionVariables,
  APITypes.OnDeleteDiagramSubscription
>;
export const onCreateNode = /* GraphQL */ `subscription OnCreateNode($filter: ModelSubscriptionNodeFilterInput) {
  onCreateNode(filter: $filter) {
    id
    position {
      x
      y
      __typename
    }
    measured {
      width
      height
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
` as GeneratedSubscription<
  APITypes.OnCreateNodeSubscriptionVariables,
  APITypes.OnCreateNodeSubscription
>;
export const onUpdateNode = /* GraphQL */ `subscription OnUpdateNode($filter: ModelSubscriptionNodeFilterInput) {
  onUpdateNode(filter: $filter) {
    id
    position {
      x
      y
      __typename
    }
    measured {
      width
      height
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
` as GeneratedSubscription<
  APITypes.OnUpdateNodeSubscriptionVariables,
  APITypes.OnUpdateNodeSubscription
>;
export const onDeleteNode = /* GraphQL */ `subscription OnDeleteNode($filter: ModelSubscriptionNodeFilterInput) {
  onDeleteNode(filter: $filter) {
    id
    position {
      x
      y
      __typename
    }
    measured {
      width
      height
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
` as GeneratedSubscription<
  APITypes.OnDeleteNodeSubscriptionVariables,
  APITypes.OnDeleteNodeSubscription
>;
export const onCreateHandle = /* GraphQL */ `subscription OnCreateHandle($filter: ModelSubscriptionHandleFilterInput) {
  onCreateHandle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateHandleSubscriptionVariables,
  APITypes.OnCreateHandleSubscription
>;
export const onUpdateHandle = /* GraphQL */ `subscription OnUpdateHandle($filter: ModelSubscriptionHandleFilterInput) {
  onUpdateHandle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateHandleSubscriptionVariables,
  APITypes.OnUpdateHandleSubscription
>;
export const onDeleteHandle = /* GraphQL */ `subscription OnDeleteHandle($filter: ModelSubscriptionHandleFilterInput) {
  onDeleteHandle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteHandleSubscriptionVariables,
  APITypes.OnDeleteHandleSubscription
>;
export const onCreateEdge = /* GraphQL */ `subscription OnCreateEdge($filter: ModelSubscriptionEdgeFilterInput) {
  onCreateEdge(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEdgeSubscriptionVariables,
  APITypes.OnCreateEdgeSubscription
>;
export const onUpdateEdge = /* GraphQL */ `subscription OnUpdateEdge($filter: ModelSubscriptionEdgeFilterInput) {
  onUpdateEdge(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEdgeSubscriptionVariables,
  APITypes.OnUpdateEdgeSubscription
>;
export const onDeleteEdge = /* GraphQL */ `subscription OnDeleteEdge($filter: ModelSubscriptionEdgeFilterInput) {
  onDeleteEdge(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEdgeSubscriptionVariables,
  APITypes.OnDeleteEdgeSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
      nextToken
      __typename
    }
    diagrams {
      nextToken
      __typename
    }
    cognitoid
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
      nextToken
      __typename
    }
    diagrams {
      nextToken
      __typename
    }
    cognitoid
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
      nextToken
      __typename
    }
    diagrams {
      nextToken
      __typename
    }
    cognitoid
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;

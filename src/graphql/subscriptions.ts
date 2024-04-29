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
` as GeneratedSubscription<
  APITypes.OnDeleteTopicSubscriptionVariables,
  APITypes.OnDeleteTopicSubscription
>;
export const onCreateFlow = /* GraphQL */ `subscription OnCreateFlow($filter: ModelSubscriptionFlowFilterInput) {
  onCreateFlow(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFlowSubscriptionVariables,
  APITypes.OnCreateFlowSubscription
>;
export const onUpdateFlow = /* GraphQL */ `subscription OnUpdateFlow($filter: ModelSubscriptionFlowFilterInput) {
  onUpdateFlow(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFlowSubscriptionVariables,
  APITypes.OnUpdateFlowSubscription
>;
export const onDeleteFlow = /* GraphQL */ `subscription OnDeleteFlow($filter: ModelSubscriptionFlowFilterInput) {
  onDeleteFlow(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFlowSubscriptionVariables,
  APITypes.OnDeleteFlowSubscription
>;
export const onCreateNode = /* GraphQL */ `subscription OnCreateNode($filter: ModelSubscriptionNodeFilterInput) {
  onCreateNode(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNodeSubscriptionVariables,
  APITypes.OnDeleteNodeSubscription
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
` as GeneratedSubscription<
  APITypes.OnDeleteEdgeSubscriptionVariables,
  APITypes.OnDeleteEdgeSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;

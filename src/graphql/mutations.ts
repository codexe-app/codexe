/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDocument = /* GraphQL */ `mutation CreateDocument(
  $input: CreateDocumentInput!
  $condition: ModelDocumentConditionInput
) {
  createDocument(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDocumentMutationVariables,
  APITypes.CreateDocumentMutation
>;
export const updateDocument = /* GraphQL */ `mutation UpdateDocument(
  $input: UpdateDocumentInput!
  $condition: ModelDocumentConditionInput
) {
  updateDocument(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDocumentMutationVariables,
  APITypes.UpdateDocumentMutation
>;
export const deleteDocument = /* GraphQL */ `mutation DeleteDocument(
  $input: DeleteDocumentInput!
  $condition: ModelDocumentConditionInput
) {
  deleteDocument(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDocumentMutationVariables,
  APITypes.DeleteDocumentMutation
>;
export const createTopic = /* GraphQL */ `mutation CreateTopic(
  $input: CreateTopicInput!
  $condition: ModelTopicConditionInput
) {
  createTopic(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTopicMutationVariables,
  APITypes.CreateTopicMutation
>;
export const updateTopic = /* GraphQL */ `mutation UpdateTopic(
  $input: UpdateTopicInput!
  $condition: ModelTopicConditionInput
) {
  updateTopic(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTopicMutationVariables,
  APITypes.UpdateTopicMutation
>;
export const deleteTopic = /* GraphQL */ `mutation DeleteTopic(
  $input: DeleteTopicInput!
  $condition: ModelTopicConditionInput
) {
  deleteTopic(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTopicMutationVariables,
  APITypes.DeleteTopicMutation
>;
export const createFlow = /* GraphQL */ `mutation CreateFlow(
  $input: CreateFlowInput!
  $condition: ModelFlowConditionInput
) {
  createFlow(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFlowMutationVariables,
  APITypes.CreateFlowMutation
>;
export const updateFlow = /* GraphQL */ `mutation UpdateFlow(
  $input: UpdateFlowInput!
  $condition: ModelFlowConditionInput
) {
  updateFlow(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFlowMutationVariables,
  APITypes.UpdateFlowMutation
>;
export const deleteFlow = /* GraphQL */ `mutation DeleteFlow(
  $input: DeleteFlowInput!
  $condition: ModelFlowConditionInput
) {
  deleteFlow(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFlowMutationVariables,
  APITypes.DeleteFlowMutation
>;
export const createNode = /* GraphQL */ `mutation CreateNode(
  $input: CreateNodeInput!
  $condition: ModelNodeConditionInput
) {
  createNode(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNodeMutationVariables,
  APITypes.CreateNodeMutation
>;
export const updateNode = /* GraphQL */ `mutation UpdateNode(
  $input: UpdateNodeInput!
  $condition: ModelNodeConditionInput
) {
  updateNode(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNodeMutationVariables,
  APITypes.UpdateNodeMutation
>;
export const deleteNode = /* GraphQL */ `mutation DeleteNode(
  $input: DeleteNodeInput!
  $condition: ModelNodeConditionInput
) {
  deleteNode(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNodeMutationVariables,
  APITypes.DeleteNodeMutation
>;
export const createEdge = /* GraphQL */ `mutation CreateEdge(
  $input: CreateEdgeInput!
  $condition: ModelEdgeConditionInput
) {
  createEdge(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEdgeMutationVariables,
  APITypes.CreateEdgeMutation
>;
export const updateEdge = /* GraphQL */ `mutation UpdateEdge(
  $input: UpdateEdgeInput!
  $condition: ModelEdgeConditionInput
) {
  updateEdge(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEdgeMutationVariables,
  APITypes.UpdateEdgeMutation
>;
export const deleteEdge = /* GraphQL */ `mutation DeleteEdge(
  $input: DeleteEdgeInput!
  $condition: ModelEdgeConditionInput
) {
  deleteEdge(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEdgeMutationVariables,
  APITypes.DeleteEdgeMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;

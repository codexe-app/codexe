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
      __typename
    }
    userId
    createdAt
    updatedAt
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
      __typename
    }
    userId
    createdAt
    updatedAt
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
      __typename
    }
    userId
    createdAt
    updatedAt
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
      __typename
    }
    createdAt
    updatedAt
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
      __typename
    }
    createdAt
    updatedAt
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTopicMutationVariables,
  APITypes.DeleteTopicMutation
>;
export const createDiagram = /* GraphQL */ `mutation CreateDiagram(
  $input: CreateDiagramInput!
  $condition: ModelDiagramConditionInput
) {
  createDiagram(input: $input, condition: $condition) {
    id
    name
    slug
    description
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
      avatar
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
` as GeneratedMutation<
  APITypes.CreateDiagramMutationVariables,
  APITypes.CreateDiagramMutation
>;
export const updateDiagram = /* GraphQL */ `mutation UpdateDiagram(
  $input: UpdateDiagramInput!
  $condition: ModelDiagramConditionInput
) {
  updateDiagram(input: $input, condition: $condition) {
    id
    name
    slug
    description
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
      avatar
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
` as GeneratedMutation<
  APITypes.UpdateDiagramMutationVariables,
  APITypes.UpdateDiagramMutation
>;
export const deleteDiagram = /* GraphQL */ `mutation DeleteDiagram(
  $input: DeleteDiagramInput!
  $condition: ModelDiagramConditionInput
) {
  deleteDiagram(input: $input, condition: $condition) {
    id
    name
    slug
    description
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
      avatar
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
` as GeneratedMutation<
  APITypes.DeleteDiagramMutationVariables,
  APITypes.DeleteDiagramMutation
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
    handles {
      nextToken
      __typename
    }
    diagram {
      id
      name
      slug
      description
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
    handles {
      nextToken
      __typename
    }
    diagram {
      id
      name
      slug
      description
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
    handles {
      nextToken
      __typename
    }
    diagram {
      id
      name
      slug
      description
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
` as GeneratedMutation<
  APITypes.DeleteNodeMutationVariables,
  APITypes.DeleteNodeMutation
>;
export const createHandle = /* GraphQL */ `mutation CreateHandle(
  $input: CreateHandleInput!
  $condition: ModelHandleConditionInput
) {
  createHandle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateHandleMutationVariables,
  APITypes.CreateHandleMutation
>;
export const updateHandle = /* GraphQL */ `mutation UpdateHandle(
  $input: UpdateHandleInput!
  $condition: ModelHandleConditionInput
) {
  updateHandle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateHandleMutationVariables,
  APITypes.UpdateHandleMutation
>;
export const deleteHandle = /* GraphQL */ `mutation DeleteHandle(
  $input: DeleteHandleInput!
  $condition: ModelHandleConditionInput
) {
  deleteHandle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteHandleMutationVariables,
  APITypes.DeleteHandleMutation
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
    diagram {
      id
      name
      slug
      description
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
    diagram {
      id
      name
      slug
      description
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
    diagram {
      id
      name
      slug
      description
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;

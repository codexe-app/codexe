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
    source
    content
    status
    pinned
    public
    icon
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
      pinned
      icon
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    topicId
    user {
      id
      username
      icon
      firstname
      lastname
      role
      email
      spotlightId
      createdAt
      updatedAt
      __typename
    }
    userId
    createdAt
    spotlightId
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
    source
    content
    status
    pinned
    public
    icon
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
      pinned
      icon
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    topicId
    user {
      id
      username
      icon
      firstname
      lastname
      role
      email
      spotlightId
      createdAt
      updatedAt
      __typename
    }
    userId
    createdAt
    spotlightId
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
    source
    content
    status
    pinned
    public
    icon
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
      pinned
      icon
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    topicId
    user {
      id
      username
      icon
      firstname
      lastname
      role
      email
      spotlightId
      createdAt
      updatedAt
      __typename
    }
    userId
    createdAt
    spotlightId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDocumentMutationVariables,
  APITypes.DeleteDocumentMutation
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
    content
    status
    pinned
    icon
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
    topic {
      id
      name
      slug
      description
      content
      status
      pinned
      icon
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    topicId
    user {
      id
      username
      icon
      firstname
      lastname
      role
      email
      spotlightId
      createdAt
      updatedAt
      __typename
    }
    userId
    createdAt
    spotlightId
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
    content
    status
    pinned
    icon
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
    topic {
      id
      name
      slug
      description
      content
      status
      pinned
      icon
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    topicId
    user {
      id
      username
      icon
      firstname
      lastname
      role
      email
      spotlightId
      createdAt
      updatedAt
      __typename
    }
    userId
    createdAt
    spotlightId
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
    content
    status
    pinned
    icon
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
    topic {
      id
      name
      slug
      description
      content
      status
      pinned
      icon
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    topicId
    user {
      id
      username
      icon
      firstname
      lastname
      role
      email
      spotlightId
      createdAt
      updatedAt
      __typename
    }
    userId
    createdAt
    spotlightId
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
      pinned
      icon
      topicId
      userId
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    diagramId
    createdAt
    spotlightId
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
      pinned
      icon
      topicId
      userId
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    diagramId
    createdAt
    spotlightId
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
      pinned
      icon
      topicId
      userId
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    diagramId
    createdAt
    spotlightId
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
      spotlightId
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
      spotlightId
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
      spotlightId
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
      content
      status
      pinned
      icon
      topicId
      userId
      createdAt
      spotlightId
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
      content
      status
      pinned
      icon
      topicId
      userId
      createdAt
      spotlightId
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
      content
      status
      pinned
      icon
      topicId
      userId
      createdAt
      spotlightId
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
export const createChat = /* GraphQL */ `mutation CreateChat(
  $input: CreateChatInput!
  $condition: ModelChatConditionInput
) {
  createChat(input: $input, condition: $condition) {
    id
    name
    slug
    description
    content
    status
    pinned
    icon
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
    path
    sharePath
    topic {
      id
      name
      slug
      description
      content
      status
      pinned
      icon
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    topicId
    messages {
      nextToken
      __typename
    }
    user {
      id
      username
      icon
      firstname
      lastname
      role
      email
      spotlightId
      createdAt
      updatedAt
      __typename
    }
    userId
    createdAt
    spotlightId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChatMutationVariables,
  APITypes.CreateChatMutation
>;
export const updateChat = /* GraphQL */ `mutation UpdateChat(
  $input: UpdateChatInput!
  $condition: ModelChatConditionInput
) {
  updateChat(input: $input, condition: $condition) {
    id
    name
    slug
    description
    content
    status
    pinned
    icon
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
    path
    sharePath
    topic {
      id
      name
      slug
      description
      content
      status
      pinned
      icon
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    topicId
    messages {
      nextToken
      __typename
    }
    user {
      id
      username
      icon
      firstname
      lastname
      role
      email
      spotlightId
      createdAt
      updatedAt
      __typename
    }
    userId
    createdAt
    spotlightId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChatMutationVariables,
  APITypes.UpdateChatMutation
>;
export const deleteChat = /* GraphQL */ `mutation DeleteChat(
  $input: DeleteChatInput!
  $condition: ModelChatConditionInput
) {
  deleteChat(input: $input, condition: $condition) {
    id
    name
    slug
    description
    content
    status
    pinned
    icon
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
    path
    sharePath
    topic {
      id
      name
      slug
      description
      content
      status
      pinned
      icon
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    topicId
    messages {
      nextToken
      __typename
    }
    user {
      id
      username
      icon
      firstname
      lastname
      role
      email
      spotlightId
      createdAt
      updatedAt
      __typename
    }
    userId
    createdAt
    spotlightId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatMutationVariables,
  APITypes.DeleteChatMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    content
    role
    ui
    data
    functioncall
    name
    chat {
      id
      name
      slug
      description
      content
      status
      pinned
      icon
      path
      sharePath
      topicId
      userId
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    chatId
    createdAt
    spotlightId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    content
    role
    ui
    data
    functioncall
    name
    chat {
      id
      name
      slug
      description
      content
      status
      pinned
      icon
      path
      sharePath
      topicId
      userId
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    chatId
    createdAt
    spotlightId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    content
    role
    ui
    data
    functioncall
    name
    chat {
      id
      name
      slug
      description
      content
      status
      pinned
      icon
      path
      sharePath
      topicId
      userId
      createdAt
      spotlightId
      updatedAt
      __typename
    }
    chatId
    createdAt
    spotlightId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
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
    status
    pinned
    icon
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
    diagrams {
      nextToken
      __typename
    }
    documents {
      nextToken
      __typename
    }
    chats {
      nextToken
      __typename
    }
    createdAt
    spotlightId
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
    status
    pinned
    icon
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
    diagrams {
      nextToken
      __typename
    }
    documents {
      nextToken
      __typename
    }
    chats {
      nextToken
      __typename
    }
    createdAt
    spotlightId
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
    status
    pinned
    icon
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
    diagrams {
      nextToken
      __typename
    }
    documents {
      nextToken
      __typename
    }
    chats {
      nextToken
      __typename
    }
    createdAt
    spotlightId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTopicMutationVariables,
  APITypes.DeleteTopicMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    icon
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
    theme {
      config
      palette
      primary
      font
      heading
      mono
      __typename
    }
    chats {
      nextToken
      __typename
    }
    documents {
      nextToken
      __typename
    }
    diagrams {
      nextToken
      __typename
    }
    feeds {
      nextToken
      __typename
    }
    spotlightId
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
    icon
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
    theme {
      config
      palette
      primary
      font
      heading
      mono
      __typename
    }
    chats {
      nextToken
      __typename
    }
    documents {
      nextToken
      __typename
    }
    diagrams {
      nextToken
      __typename
    }
    feeds {
      nextToken
      __typename
    }
    spotlightId
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
    icon
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
    theme {
      config
      palette
      primary
      font
      heading
      mono
      __typename
    }
    chats {
      nextToken
      __typename
    }
    documents {
      nextToken
      __typename
    }
    diagrams {
      nextToken
      __typename
    }
    feeds {
      nextToken
      __typename
    }
    spotlightId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createFeed = /* GraphQL */ `mutation CreateFeed(
  $input: CreateFeedInput!
  $condition: ModelFeedConditionInput
) {
  createFeed(input: $input, condition: $condition) {
    id
    name
    url
    status
    user {
      id
      username
      icon
      firstname
      lastname
      role
      email
      spotlightId
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
  APITypes.CreateFeedMutationVariables,
  APITypes.CreateFeedMutation
>;
export const updateFeed = /* GraphQL */ `mutation UpdateFeed(
  $input: UpdateFeedInput!
  $condition: ModelFeedConditionInput
) {
  updateFeed(input: $input, condition: $condition) {
    id
    name
    url
    status
    user {
      id
      username
      icon
      firstname
      lastname
      role
      email
      spotlightId
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
  APITypes.UpdateFeedMutationVariables,
  APITypes.UpdateFeedMutation
>;
export const deleteFeed = /* GraphQL */ `mutation DeleteFeed(
  $input: DeleteFeedInput!
  $condition: ModelFeedConditionInput
) {
  deleteFeed(input: $input, condition: $condition) {
    id
    name
    url
    status
    user {
      id
      username
      icon
      firstname
      lastname
      role
      email
      spotlightId
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
  APITypes.DeleteFeedMutationVariables,
  APITypes.DeleteFeedMutation
>;
export const createSpotlight = /* GraphQL */ `mutation CreateSpotlight(
  $input: CreateSpotlightInput!
  $condition: ModelSpotlightConditionInput
) {
  createSpotlight(input: $input, condition: $condition) {
    id
    active
    label
    description
    leftSection
    rightSection
    children
    dimmedSections
    highlightQuery
    highlightColor
    closeSpotlightOnTrigger
    keywords
    name
    icon
    model
    modelId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSpotlightMutationVariables,
  APITypes.CreateSpotlightMutation
>;
export const updateSpotlight = /* GraphQL */ `mutation UpdateSpotlight(
  $input: UpdateSpotlightInput!
  $condition: ModelSpotlightConditionInput
) {
  updateSpotlight(input: $input, condition: $condition) {
    id
    active
    label
    description
    leftSection
    rightSection
    children
    dimmedSections
    highlightQuery
    highlightColor
    closeSpotlightOnTrigger
    keywords
    name
    icon
    model
    modelId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSpotlightMutationVariables,
  APITypes.UpdateSpotlightMutation
>;
export const deleteSpotlight = /* GraphQL */ `mutation DeleteSpotlight(
  $input: DeleteSpotlightInput!
  $condition: ModelSpotlightConditionInput
) {
  deleteSpotlight(input: $input, condition: $condition) {
    id
    active
    label
    description
    leftSection
    rightSection
    children
    dimmedSections
    highlightQuery
    highlightColor
    closeSpotlightOnTrigger
    keywords
    name
    icon
    model
    modelId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSpotlightMutationVariables,
  APITypes.DeleteSpotlightMutation
>;

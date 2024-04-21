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
  topicId?: string | null,
  userId: string,
  createdAt?: string | null,
  _version?: number | null,
};

export enum Status {
  live = "live",
  draft = "draft",
  private = "private",
  archive = "archive",
  trash = "trash",
}


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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type ModelDocumentConnection = {
  __typename: "ModelDocumentConnection",
  items:  Array<Document | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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
  cognitoid?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
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
    cognitoid?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

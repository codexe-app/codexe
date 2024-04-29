import * as APITypes from './API'
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType
  __generatedQueryOutput: OutputType
}

export const fullDocuments = /* GraphQL */ `query FullDocuments(
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
        topic {
          name
          description
        }
        user {
          firstname
          lastname
          username
          email
          avatar
          }
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
  ` as GeneratedQuery<APITypes.ListDocumentsQueryVariables, APITypes.ListDocumentsQuery>

export const fullFlows = /* GraphQL */ `query FullFlows(
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
        nodes {
          items {
            id
            data {
              label
            }
            position {
              x
              y
            }
          }
        }
        edges {
          items {
            id
            source
            target
            data {
              label
            }
            
          }
        }
        updatedAt
        userId
      }
    }
  }
  ` as GeneratedQuery<APITypes.ListFlowsQueryVariables, APITypes.ListFlowsQuery>

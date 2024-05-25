const GRAPHQL_ENDPOINT = process.env.API_CODEXEAPI_GRAPHQLAPIENDPOINTOUTPUT
const GRAPHQL_API_KEY = process.env.API_CODEXEAPI_GRAPHQLAPIKEYOUTPUT

/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */
exports.handler = async (event) => {
  console.log(`create user :`, event)

  let statusCode = 200

  var query = /* GraphQL */ `
    mutation CREATE_USER($input: CreateUserInput!) {
      createUser(input: $input) {
        id
        username
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
        }
      }
    }
  `

  var variables = {
    input: {
      id: event.request.userAttributes.sub,
      username: event.userName,
      firstname: event.request.userAttributes.given_name,
      lastname: event.request.userAttributes.family_name,
      role: 'Guest',
      email: event.request.userAttributes.email,
      theme: {
        palette: 'tachyon',
        font: 'var(--font-dinpro)',
        heading: 'var(--font-dinpro)',
        mono: 'var(--font-mononoki)',
      },
    },
  }

  var options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  }

  var request = new Request(GRAPHQL_ENDPOINT, options)

  try {
    response = await fetch(request)
    body = await response.json()
    console.log(`USER CREATED: `, JSON.stringify(body))
    return {
      statusCode,
      body: `The User ${event.userName} was Created`,
    }
  } catch (error) {
    console.log(`There was an error creating the user: `, error)
  }

  return event
}

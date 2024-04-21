import { ListUsersCommand, AdminListGroupsForUserCommand, CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider'
import { Title, Container, Flex } from '@mantine/core'
import UsersTable from './userstable'

export default async function Page() {
  const config = {
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
    region: process.env.AWS_REGION,
  }
  const client = new CognitoIdentityProviderClient(config)
  const command = new ListUsersCommand({
    UserPoolId: process.env.USER_POOL_ID,
  })
  const response = await client.send(command)
  const userlist = transformJSON(response.Users)

  function transformJSON(json) {
    let transformed = []

    json.forEach((obj) => {
      let transformedObj = {}

      obj.Attributes.forEach((attr) => {
        transformedObj[attr.Name] = attr.Value
      })

      transformedObj.Enabled = obj.Enabled
      transformedObj.UserCreateDate = obj.UserCreateDate
      transformedObj.UserLastModifiedDate = obj.UserLastModifiedDate
      transformedObj.UserStatus = obj.UserStatus
      transformedObj.Username = obj.Username

      transformed.push(transformedObj)
    })

    return transformed
  }

  async function userGroups(username) {
    console.log(username)
    try {
      const command = new AdminListGroupsForUserCommand({
        Username: username,
        UserPoolId: process.env.USER_POOL_ID,
      })
      const response = await client.send(command)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container size='responsive'>
      <Flex align='end' justify='start'>
        <Title order={2}>Users</Title>
      </Flex>
      <UsersTable userlist={userlist} />
    </Container>
  )
}

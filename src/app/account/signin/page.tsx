'use client'
import { useState, useEffect } from 'react'
import { TextInput, PasswordInput, Anchor, Stack, Paper, Title, Text, Container, Box, Button, Alert } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { getCurrentUser, signIn, signOut } from 'aws-amplify/auth'
import { IconAlertCircle } from '@tabler/icons-react'

export default function Page() {
  const [signedin, setSignedin] = useState(false)
  const [apierror, setApierror] = useState({ active: false, code: '', message: '' })
  const [user, setUser] = useState({ username: '', password: '' })
  const [loading, { toggle }] = useDisclosure()

  const login = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      password: (value) => (value.length < 8 ? 'Password must have at least 8 characters' : null),
    },
  })

  async function currentAuthenticatedUser() {
    try {
      const usercheck = await getCurrentUser()
      //@ts-ignore
      setUser(usercheck)
      setSignedin(true)
    } catch (error) {
      setSignedin(false)
      //console.log(error)
    }
  }

  async function handleSignIn(values: typeof login.values) {
    toggle
    try {
      await signIn({
        username: values.username,
        password: values.password,
      })
      setSignedin(true)
      setApierror({ active: false, code: 'No Error', message: 'No Message' })
    } catch (error) {
      //@ts-ignore
      setApierror({ active: true, code: error.name, message: error.message })
      console.log('error signing in: ', error)
    }
    toggle
  }

  async function handleSignOut() {
    toggle
    try {
      await signOut()
      login.reset()
      //@ts-ignore
      setUser({})
      setSignedin(false)
      setApierror({ active: false, code: 'No Error', message: 'No Message' })
    } catch (error) {
      //@ts-ignore
      setApierror({ active: true, code: error.name, message: error.message })
      console.log('error signing out: ', error)
    }
    toggle
  }

  useEffect(() => {
    currentAuthenticatedUser()
  }, [signedin])

  return (
    <Container size='responsive'>
      <Box mb='xl'>
        <Title ta='center' order={2} c='indigo'>
          Welcome back
        </Title>
        <Text c='dimmed' size='sm' ta='center' mt={5}>
          Need to create an account?{' '}
          <Anchor size='sm' component={Link} href='/account/signup'>
            Sign Up
          </Anchor>
        </Text>
      </Box>
      <Container size={420} my={40}>
        <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
          {signedin ? (
            <Box mb='xl'>
              <Title ta='center' order={4}>
                You are signed in as {user.username}
              </Title>
              <Text c='dimmed' size='sm' ta='center' mt={5}>
                Need to make some changes?{' '}
                <Anchor size='sm' component={Link} href={`/profile/${user.username}`}>
                  Profile
                </Anchor>
              </Text>
              {apierror.active ? (
                <Alert variant='light' color='red' icon={<IconAlertCircle />} title={apierror.code}>
                  {apierror.message}
                </Alert>
              ) : null}
              <Button fullWidth mt='xl' onClick={handleSignOut} loading={loading}>
                Sign Out
              </Button>
            </Box>
          ) : (
            <form
              onSubmit={login.onSubmit(
                (values, event) => {
                  handleSignIn(values)
                },
                (validationErrors, values, event) => {
                  console.log(
                    validationErrors, // <- form.errors at the moment of submit
                    values, // <- form.getValues() at the moment of submit
                    event // <- form element submit event
                  )
                }
              )}>
              {' '}
              <Stack>
                <TextInput label='Username' placeholder='username' required {...login.getInputProps('username')} />
                <PasswordInput label='Password' placeholder='password' required {...login.getInputProps('password')} />
                {apierror.active ? (
                  <Alert variant='light' color='red' icon={<IconAlertCircle />} title={apierror.code}>
                    {apierror.message}
                  </Alert>
                ) : null}
                <Button fullWidth mt='xl' type='submit' loading={loading}>
                  Sign In
                </Button>
              </Stack>
            </form>
          )}
        </Paper>
      </Container>
    </Container>
  )
}

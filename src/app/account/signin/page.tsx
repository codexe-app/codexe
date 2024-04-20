'use client'
import { useState, useEffect } from 'react'
import { TextInput, PasswordInput, PinInput, Anchor, Stepper, Paper, Title, Text, Container, Box, Group, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { getCurrentUser, signIn, signOut } from 'aws-amplify/auth'

export default function Page() {
  const [signedin, setSignedin] = useState(false)
  const [user, setUser] = useState({})
  const [loading, { toggle }] = useDisclosure();

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
      console.log(usercheck)
      setUser(usercheck)
      setSignedin(true)
    } catch (error) {
      //console.log(error)
    }
  }

  async function handleSignIn(values: typeof login.values) {
    try {
      toggle
      const { isSignedIn, nextStep } = await signIn({
        username: values.username,
        password: values.password,
      })
      console.log('isSignedIn', isSignedIn)
      console.log('nextStep', nextStep)
      setSignedin(true)
      toggle  
    } catch (error) {
      console.log('error signing in: ', error)
    }
  }

  async function handleSignOut() {
    try {
      toggle
      await signOut()
      setUser({})
      setSignedin(false)
      toggle
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  useEffect(() => {
    currentAuthenticatedUser()
  }, [signedin])

  return (
    <Container size='responsive'>
      <Box mb='xl'>
        <Title ta='center' order={2}>
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
                <Anchor size='sm' component={Link} href={`/account/${user.username}`}>
                  Profile
                </Anchor>
              </Text>
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
              <TextInput label='Username' placeholder='username' required {...login.getInputProps('username')} />
              <PasswordInput label='Password' placeholder='Your password' required {...login.getInputProps('password')} />
              <Button fullWidth mt='xl' type='submit' loading={loading}>
                Sign In
              </Button>
            </form>
          )}
        </Paper>
      </Container>
    </Container>
  )
}

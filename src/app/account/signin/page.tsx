'use client'
import { Link } from '@/utils/router-events'
import { useState, useEffect } from 'react'
import { TextInput, PasswordInput, Anchor, Stack, Paper, Title, Text, BackgroundImage, Container, Box, Button, Alert } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { useRouter } from 'next/navigation'
import { getCurrentUser, signIn, signOut, resetPassword, type ResetPasswordOutput } from 'aws-amplify/auth'
import { IconAlertCircle } from '@tabler/icons-react'

export default function Page() {
  const [signedin, setSignedin] = useState(false)
  const [apierror, setApierror] = useState({ active: false, code: '', message: '' })
  const [user, setUser] = useState({ username: '', password: '' })
  const [loading, { toggle }] = useDisclosure()

  const router = useRouter()
  const login = useForm({
    mode: 'uncontrolled',
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
      router.push(`/${usercheck.username}`)
    } catch (error) {
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
      router.push(`/${values.username}`)
    } catch (error) {
      //@ts-ignore
      setApierror({ active: true, code: error.name, message: error.message })
      console.log('error signing in: ', error)
    }
    toggle
  }

  useEffect(() => {
    currentAuthenticatedUser()
  }, [signedin])

  async function handleResetPassword() {
    if (login.values.username.length < 1) {
      setApierror({ active: true, code: 'No User', message: 'You must enter a username to recieve your confirmation code.' })
      return
    }
    try {
      const output = await resetPassword({ username: login.values.username })
      handleResetPasswordNextSteps(output)
    } catch (error) {
      console.log(error)
    }
  }

  function handleResetPasswordNextSteps(output: ResetPasswordOutput) {
    const { nextStep } = output
    switch (nextStep.resetPasswordStep) {
      case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
        const codeDeliveryDetails = nextStep.codeDeliveryDetails
        console.log(`Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`)
        setApierror({ active: true, code: 'Code Sent', message: `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}` })
        router.push(`/account/recovery?username=${login.values.username}`)
        break
      case 'DONE':
        console.log('Successfully reset password.')
        break
    }
  }

  function Content() {
    return (
      <Container size='xl'>
        <Box mb='xl'>
          <Title ta='center' order={2}>
            Welcome back
          </Title>
          <Text c='dimmed' size='sm' ta='center' mt={5}>
            Need to create an account?&nbsp;
            <Anchor size='sm' component={Link} href='/account/signup'>
              Sign Up
            </Anchor>
          </Text>
        </Box>
        <Container size={420} my={40}>
          <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
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
              <Stack>
                <TextInput label='Username' placeholder='username' required {...login.getInputProps('username')} />
                <PasswordInput label='Password' placeholder='password' required {...login.getInputProps('password')} />
                <Text c='dimmed' size='md' ta='center' mt='md'>
                  Forgot your password?
                </Text>
                <Text c='dimmed' size='sm' ta='center'>
                  Enter your username, then&nbsp;
                  <Anchor size='sm' onClick={handleResetPassword}>
                    Reset
                  </Anchor>
                </Text>
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
          </Paper>
        </Container>
      </Container>
    )
  }

  return (
    <Container size='responsive' p={0}>
      <BackgroundImage src='/images/dots-dark.svg' lightHidden h='calc(100vh - 48px)'>
        <Content />
      </BackgroundImage>
      <BackgroundImage src='/images/dots-light.svg' darkHidden h='calc(100vh - 48px)'>
        <Content />
      </BackgroundImage>
    </Container>
  )
}

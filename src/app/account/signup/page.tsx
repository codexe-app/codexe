'use client'
import { Link } from '@/utils/router-events'
import { useState } from 'react'
import { signUp, confirmSignUp, autoSignIn } from 'aws-amplify/auth'
import { useForm } from '@mantine/form'
import { TextInput, PasswordInput, PinInput, Anchor, Stepper, Paper, Title, Text, Container, BackgroundImage, Group, Button, Alert, Stack } from '@mantine/core'
import { IconForms, IconMailOpened, IconKey, IconAlertCircle } from '@tabler/icons-react'

export default function Page() {
  const [active, setActive] = useState(0)
  const [account, setAccount] = useState(false)
  const [verify, setVerify] = useState(false)
  const [signin, setSignin] = useState(false)
  const [apierror, setApierror] = useState({ active: false, code: '', message: '' })

  const signup = useForm({
    initialValues: {
      username: '',
      password: '',
      given_name: '',
      family_name: '',
      email: '',
    },
    validate: {
      username: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      password: (value) => (value.length < 8 ? 'Password must have at least 8 characters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  async function handleSignUp(values: typeof signup.values) {
    setAccount(true)
    try {
      await signUp({
        username: values.username,
        password: values.password,
        options: {
          userAttributes: {
            given_name: values.given_name,
            family_name: values.family_name,
            email: values.email,
          },
          autoSignIn: true,
        },
      })
      setActive(1)
    } catch (error) {
      //@ts-ignore
      setApierror({ active: true, code: error.name, message: error.message })
      console.log('error verifying code', error)
    }
    setAccount(false)
  }

  async function verifyEmail(value: any) {
    setVerify(true)
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username: signup.values.username,
        confirmationCode: value,
      })
      if (isSignUpComplete) {
        setActive(2)
        setApierror({ active: false, code: 'No Error', message: 'No Message' })
        console.log('isSignUpComplete', nextStep)
        handleAutoSignIn()
      }
    } catch (error) {
      //@ts-ignore
      setApierror({ active: true, code: error.name, message: error.message })
      console.log('error verifying code', error)
    }
    setVerify(false)
  }

  async function handleAutoSignIn() {
    setSignin(true)
    try {
      const { isSignedIn, nextStep } = await autoSignIn()
      if (isSignedIn) {
        setActive(3)
        setApierror({ active: false, code: 'No Error', message: 'No Message' })
        console.log('isSignedIn', nextStep)
      }
    } catch (error) {
      //@ts-ignore
      setApierror({ active: true, code: error.name, message: error.message })
      console.log('There was an error is AutoSignIn :', error)
    }
    setSignin(false)
  }

  return (
    <Container size='responsive' px={0}>
      <BackgroundImage src='/dots.svg'>
        <Container size='lg' py='xl'>
          <Stepper active={active}>
            <Stepper.Step icon={<IconForms />} label='Create an account' description='Fill out the form below' loading={account}>
              <Container size={420} my={40}>
                <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
                  <form
                    onSubmit={signup.onSubmit(
                      (values, event) => {
                        handleSignUp(values)
                      },
                      (validationErrors, values, event) => {
                        console.log(
                          validationErrors, // <- form.errors at the moment of submit
                          values, // <- form.getValues() at the moment of submit
                          event // <- form element submit event
                        )
                      }
                    )}>
                    <Stack gap='xs'>
                      <Title ta='center' order={4} mb='xs'>
                        Create an Account
                      </Title>
                      <TextInput label='Username' placeholder='username' required {...signup.getInputProps('username')} size='xs' radius='xs' />
                      <PasswordInput label='Password' placeholder='password' required {...signup.getInputProps('password')} size='xs' radius='xs' />
                      <TextInput label='First Name' placeholder='First Name' required {...signup.getInputProps('given_name')} size='xs' radius='xs' />
                      <TextInput label='Last Name' placeholder='Last Name' required {...signup.getInputProps('family_name')} size='xs' radius='xs' />
                      <TextInput label='Email' placeholder='you@codexe.info' required {...signup.getInputProps('email')} size='xs' radius='xs' />
                      {apierror.active ? (
                        <Alert variant='light' color='red' icon={<IconAlertCircle />} title={apierror.code}>
                          {apierror.message}
                        </Alert>
                      ) : null}
                      <Button fullWidth mt='md' type='submit'>
                        Sign Up
                      </Button>
                    </Stack>
                  </form>
                </Paper>
              </Container>
            </Stepper.Step>
            <Stepper.Step icon={<IconMailOpened />} label='Check your email' description='Then enter the code below' loading={verify}>
              <Container size={420} my={40}>
                <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
                  <Stack align='center'>
                    <Title ta='center' order={4} mb='sm'>
                      Enter your verification code
                    </Title>
                    <PinInput length={6} type='number' onComplete={(value) => verifyEmail(value)} />
                    {apierror.active ? (
                      <Alert variant='light' color='red' icon={<IconAlertCircle />} title={apierror.code}>
                        {apierror.message}
                      </Alert>
                    ) : null}
                  </Stack>
                </Paper>
              </Container>
            </Stepper.Step>
            <Stepper.Step icon={<IconKey />} label='Auto Login' description='And you should now be logged in.' loading={signin}>
              <Container size={420} my={40}>
                <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
                  <Stack align='center'>
                    <Title ta='center' order={4} mb='sm'>
                      Code is ok, signing you in
                    </Title>
                  </Stack>
                </Paper>
              </Container>
            </Stepper.Step>
            <Stepper.Completed>
              <Container size={420} my={40}>
                <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
                  <Stack align='center'>
                    <Title ta='center' order={3}>
                      Thanks for signing up {signup.values.username}
                    </Title>
                  </Stack>
                  <Group justify='center' mt='xl'>
                    <Button variant='default' component={Link} href={`/profile/${signup.values.username}`}>
                      Profile
                    </Button>
                    <Button component={Link} href={`/${signup.values.username}`}>
                      Dashboard
                    </Button>
                  </Group>
                </Paper>
              </Container>
            </Stepper.Completed>
          </Stepper>
        </Container>
      </BackgroundImage>
    </Container>
  )
}

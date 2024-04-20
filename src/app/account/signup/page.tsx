'use client'
import { useState } from 'react'
import Link from 'next/link'
import { signUp, confirmSignUp, autoSignIn, signIn, type ConfirmSignUpInput } from 'aws-amplify/auth'
import { useForm } from '@mantine/form'
import { TextInput, PasswordInput, PinInput, Anchor, Stepper, Paper, Title, Text, Container, Box, Group, Button, Flex, Stack } from '@mantine/core'
import { IconForms, IconUserCheck, IconMailOpened, IconKey, IconCircleCheck } from '@tabler/icons-react'

export default function Page() {
  const [active, setActive] = useState(0)
  const [account, setAccount] = useState(false)
  const [signin, setSignin] = useState(false)
  const [verify, setVerify] = useState(false)
  const [pinerror, setPinerror] = useState(false)
  const [errormsg, setErrormsg] = useState('')

  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current))
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

  const form = useForm({
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

  async function handleSignUp(values: typeof form.values) {
    try {
      setAccount(true)
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
      setAccount(false)
      setActive(1)
    } catch (e) {
      console.log(e)
    }
  }

  async function verifyEmail(value: any) {
    setVerify(true)
    try {
      setPinerror(false)
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username: form.values.username,
        confirmationCode: value,
      })
      console.log('isSignUpComplete', nextStep)
      setActive(2)
      handleAutoSignIn()
    } catch (error) {
      console.log('error confirming sign up', error)
      setPinerror(true)
      setErrormsg(`There was problem with the code ${JSON.stringify(error.name)}`)
    }
    setVerify(false)
  }

  async function handleAutoSignIn() {
    try {
      const { isSignedIn, nextStep } = await autoSignIn()
      if (isSignedIn) {
        setActive(3)
        console.log('isSignedIn', nextStep)
      }
    } catch (error) {
      console.log(error)
      console.log('There was an error is AutoSignIn :', error)
    }
  }

  return (
    <Container size='responsive'>
      <Box mb='xl'>
        <Title ta='center' order={2} c='indigo'>
          Account Create
        </Title>
        <Text c='dimmed' size='sm' ta='center' mt={5}>
          Already have an account?{' '}
          <Anchor size='sm' component={Link} href='/account/signin'>
            Sign In
          </Anchor>
        </Text>
      </Box>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step icon={<IconForms />} label='Create an account' description='Fill out the form below' loading={account}>
          <Container size={420} my={40}>
            <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
              <form
                onSubmit={form.onSubmit(
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
                <Stack>
                  <Title ta='center' order={4} c='indigo' mb='sm'>
                    Enter your information
                  </Title>
                  <TextInput label='Username' placeholder='username' required {...form.getInputProps('username')} />
                  <PasswordInput label='Password' placeholder='Your password' required {...form.getInputProps('password')} />
                  <TextInput label='First Name' placeholder='First' required {...form.getInputProps('given_name')} />
                  <TextInput label='Last Name' placeholder='Last' required {...form.getInputProps('family_name')} />
                  <TextInput label='Email' placeholder='you@codexe.info' required {...form.getInputProps('email')} />
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
                <Title ta='center' order={4} c='indigo' mb='sm'>
                  Enter your verification code{' '}
                </Title>
                <PinInput length={6} type='number' onComplete={(value) => verifyEmail(value)} />
                <Text ta='center' c='red'>
                  {errormsg}
                </Text>
              </Stack>
            </Paper>
          </Container>
        </Stepper.Step>
        <Stepper.Step icon={<IconKey />} label='Auto Login' description='And you should now be logged in.' loading={signin}>
          <Container size={420} my={40}>
            <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
              <Stack align='center'>
                <Title ta='center' order={4} c='indigo' mb='sm'>
                  Code is ok, signing you in
                </Title>
              </Stack>
            </Paper>
          </Container>
        </Stepper.Step>
        <Stepper.Completed>
          {' '}
          <Container size={420} my={40}>
            <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
              <Stack align='center'>
                <Title ta='center' order={3} c='indigo'>
                  Thanks for signing up {form.values.username}
                </Title>{' '}
              </Stack>
            
            <Group justify='center' mt='xl'>
              <Button variant='default'>
                Profile
              </Button>
              <Button>Dashboard</Button>
            </Group>
            </Paper>
          </Container>
        </Stepper.Completed>
      </Stepper>
      <Group justify='center' mt='xl'>
        <Button variant='default' onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </Container>
  )
}

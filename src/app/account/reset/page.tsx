'use client'
import Link from 'next/link'
import { useState } from 'react'
import { updatePassword } from 'aws-amplify/auth'
import { useForm } from '@mantine/form'
import { PasswordInput, Anchor, Paper, Title, Text, Container, Box, Button, Alert, Stack } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'

export default function Page() {
  const [apierror, setApierror] = useState({ active: false, code: '', message: '' })

  const reset = useForm({
    initialValues: {
      oldPassword: '',
      newPassword: '',
    },
    validate: {
      oldPassword: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      newPassword: (value) => (value.length < 8 ? 'Password must have at least 8 characters' : null),
    },
  })

  async function handleUpdatePassword(values: typeof reset.values) {
    try {
      await updatePassword({ oldPassword: values.oldPassword, newPassword: values.newPassword })
    } catch (error) {
      //@ts-ignore
      setApierror({ active: true, code: error.name, message: error.message })
      console.log('error updating password: ', error)
    }
  }
  return (
    <Container size='responsive'>
      <Box mb='xl'>
        <Title ta='center' order={2} c='indigo'>
          Password Reset
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
          <form
            onSubmit={reset.onSubmit(
              (values) => {
                handleUpdatePassword(values)
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
              <PasswordInput label='Old Password' placeholder='password' required {...reset.getInputProps('oldPassword')} />
              <PasswordInput label='New Password' placeholder='password' required {...reset.getInputProps('newPassword')} />
              {apierror.active ? (
                <Alert variant='light' color='red' icon={<IconAlertCircle />} title={apierror.code}>
                  {apierror.message}
                </Alert>
              ) : null}
              <Button fullWidth mt='md' type='submit'>
                Update Password
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Container>
  )
}

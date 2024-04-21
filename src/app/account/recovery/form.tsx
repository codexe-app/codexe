'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { confirmResetPassword, type ConfirmResetPasswordInput } from 'aws-amplify/auth'
import { useForm } from '@mantine/form'
import { TextInput, PasswordInput, PinInput, Anchor, Stepper, Paper, Title, Text, Container, Box, Fieldset, Button, Alert, Stack } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'

export default function RecoveryForm() {
  const [apierror, setApierror] = useState({ active: false, code: '', message: '' })
  const searchParams = useSearchParams()
 
  const username = searchParams.get('username')

  const reset = useForm({
    initialValues: {
      username: username,
      confirmationCode: '',
      newPassword: '',
    },
    validate: {
      //@ts-ignore
      username: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      newPassword: (value) => (value.length < 8 ? 'Password must have at least 8 characters' : null),
    },
  })

  async function handleConfirmResetPassword(values: ConfirmResetPasswordInput) {
    try {
      await confirmResetPassword({ username: values.username, confirmationCode: values.confirmationCode, newPassword: values.newPassword })
    } catch (error) {
      //@ts-ignore
      setApierror({ active: true, code: error.name, message: error.message })
      console.log('error reseting password', error)
    }
  }

  return (
    <Container size='responsive'>
      <Box mb='xl'>
        <Title ta='center' order={2} >
          Password Reset
        </Title>
        <Text c='dimmed' size='sm' ta='center' mt={5}>
          Need to create an account?
          <Anchor size='sm' component={Link} href='/account/signup'>
            Sign Up
          </Anchor>
        </Text>
      </Box>
      <Container size={420} my={40}>
        <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
          <form
            onSubmit={reset.onSubmit(
              (values, event) => {
                //@ts-ignore
                handleConfirmResetPassword(values)
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
              <TextInput label='Username' placeholder='username' required {...reset.getInputProps('username')} />
              <PasswordInput label=' New Password' placeholder='password' required {...reset.getInputProps('newPassword')} />
              <Fieldset legend='Confirmation Code'>
                <PinInput length={6} type='number' onComplete={(value) => reset.setFieldValue('confirmationCode', value)} />
              </Fieldset>
              {apierror.active ? (
                <Alert variant='light' color='red' icon={<IconAlertCircle />} title={apierror.code}>
                  {apierror.message}
                </Alert>
              ) : null}
              <Button fullWidth mt='md' type='submit'>
                RESET PASSWORD
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Container>
  )
}

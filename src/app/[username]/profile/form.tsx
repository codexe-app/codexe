'use client'
import React, { useState } from 'react'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import { uploadData } from 'aws-amplify/storage'
import { TextInput, ColorSwatch, SimpleGrid, useCombobox, Combobox, InputBase, Input, Image, Paper, Title, Text, Group, Stack, Button, Progress, rem, Badge, DEFAULT_THEME, ColorPicker } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useForm } from '@mantine/form'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react'
import { createCookie } from '@/app/actions'
import dayjs from 'dayjs'

interface Item {
  color: string
  value: string
  description: string
}

export default function UserForm(props: any) {
  const client = generateClient()
  const [uploadProgress, setUploadProgress] = useState(0)
  const form = useForm({
    initialValues: props.user,
  })
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })
  const [value, setValue] = useState<string | null>(props.user.theme.primary)
  const themecolors: Item[] = [
    { color: 'red', value: 'red', description: 'Red' },
    { color: 'pink', value: 'pink', description: 'Pink' },
    { color: 'grape', value: 'grape', description: 'Grape' },
    { color: 'violet', value: 'violet', description: 'Violet' },
    { color: 'indigo', value: 'indigo', description: 'Indigo' },
    { color: 'blue', value: 'blue', description: 'Blue' },
    { color: 'cyan', value: 'cyan', description: 'Cyan' },
    { color: 'teal', value: 'teal', description: 'Teal' },
    { color: 'green', value: 'green', description: 'Green' },
    { color: 'lime', value: 'lime', description: 'Lime' },
    { color: 'yellow', value: 'yellow', description: 'Yellow' },
    { color: 'orange', value: 'orange', description: 'Orange' },
  ]

  function SelectOption({ color, value, description }: Item) {
    return (
      <Group>
        <ColorSwatch color={`var(--mantine-color-${color}-filled)`} />
        <Text fz='xs' opacity={0.6}>
          {description} / {value}
        </Text>
      </Group>
    )
  }
  const selectedOption = themecolors.find((item) => item.value === value)

  const options = themecolors.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      <SelectOption {...item} />
    </Combobox.Option>
  ))

  async function saveUser(values: any) {
    values.theme.primary = value
    createCookie(value)
    try {
      const doc = await client.graphql({ query: mutations.updateUser, variables: { input: values } })
      notifications.show({
        title: `${values.username}`,
        message: `Your profile has been updated`,
      })
    } catch (error) {
      notifications.show({
        title: 'There was an error updating the document',
        message: JSON.stringify(error),
      })
      console.log(`There was a problem updating the Doc :`, error)
    }
  }

  async function uploadMedia(file: any) {
    const thepath = `public/${dayjs().format('YYYY/MM/DD')}/${file.name}`
    try {
      const result = uploadData({
        path: thepath,
        data: file,
        options: {
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              setUploadProgress(Math.round((transferredBytes / totalBytes) * 100))
              console.log(`Upload progress ${Math.round((transferredBytes / totalBytes) * 100)} %`)
            }
          },
        },
      }).result
      //GET THIS OUT OF HERE
      const theurl = 'https://codexemedia212a4-dev.s3.us-west-2.amazonaws.com/' + thepath
      form.setFieldValue('avatar.key', thepath)
      form.setFieldValue('avatar.url', theurl)
      notifications.show({
        title: 'Your file has been uploaded',
        message: thepath,
      })
    } catch (error) {
      console.log('Error : ', error)
      notifications.show({
        title: 'There was an error uploading your file',
        message: JSON.stringify(error),
      })
    }
  }

  return (
    <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
      <form
        onSubmit={form.onSubmit(
          (values, event) => {
            saveUser(values)
          },
          (validationErrors, values, event) => {
            console.log(
              validationErrors, // <- form.errors at the moment of submit
              values, // <- form.getValues() at the moment of submit
              event // <- form element submit event
            )
          }
        )}>
        <SimpleGrid cols={2}>
          <Stack gap='xs'>
            <Title ta='center' order={4} mb='xs'>
              Your Profile
            </Title>
            <TextInput label='Username' placeholder='username' {...form.getInputProps('username')} size='xs' radius='xs' disabled />
            <TextInput label='First Name' placeholder='First Name' {...form.getInputProps('firstname')} size='xs' radius='xs' />
            <TextInput label='Last Name' placeholder='Last Name' {...form.getInputProps('lastname')} size='xs' radius='xs' />
            <TextInput label='Email' placeholder='you@codexe.info' {...form.getInputProps('email')} size='xs' radius='xs' />
            <Badge>{form.values.role}</Badge>
            <Badge>{form.values.id}</Badge>
         
          </Stack>
          <Stack gap='xs'>
          <Title ta='center' order={6} mb='xs'>
              Primary Theme Color
            </Title>
            <Combobox
              store={combobox}
              withinPortal={false}
              onOptionSubmit={(val) => {
                setValue(val)
                combobox.closeDropdown()
              }}>
              <Combobox.Target>
                <InputBase component='button' type='button' pointer rightSection={<Combobox.Chevron />} onClick={() => combobox.toggleDropdown()} rightSectionPointerEvents='none' multiline>
                  {selectedOption ? <SelectOption {...selectedOption} /> : <Input.Placeholder>Pick value</Input.Placeholder>}
                </InputBase>
              </Combobox.Target>
              <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
            <Image src={form.values.avatar.url} />
            <Dropzone onDrop={(files) => uploadMedia(files[0])} onReject={(files) => console.log('rejected files', files)} maxFiles={1} maxSize={10 * 1024 ** 2} accept={IMAGE_MIME_TYPE}>
              <Group justify='center' gap='xl' mih={220} style={{ pointerEvents: 'none' }}>
                <Dropzone.Accept>
                  <IconUpload style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }} stroke={1.5} />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }} stroke={1.5} />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconPhoto style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }} stroke={1.5} />
                </Dropzone.Idle>
                <div>
                  <Text size='xl' inline>
                    Drag images here or click to select files
                  </Text>
                  <Text size='sm' c='dimmed' inline mt={7}>
                    Attach as many files as you like, each file should not exceed 5mb
                  </Text>
                </div>
              </Group>
              <Progress value={uploadProgress} />
            </Dropzone>
            <TextInput label='Title' placeholder='Title' {...form.getInputProps('avatar.title')} />
            <TextInput label='Alt' placeholder='Alt' {...form.getInputProps('avatar.alt')} />
            <TextInput label='Caption' placeholder='Caption' {...form.getInputProps('avatar.caption')} />
            <TextInput label='Description' placeholder='Description' {...form.getInputProps('avatar.description')} />
          </Stack>
        </SimpleGrid>
        <Button fullWidth mt='md' type='submit'>
          Update
        </Button>
      </form>
    </Paper>
  )
}

'use client'
import React, { useState } from 'react'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import { uploadData } from 'aws-amplify/storage'
import { TextInput, Box, ColorSwatch, SimpleGrid, Select, useCombobox, Combobox, InputBase, Input, Image, Paper, Title, Text, Group, Stack, Button, Progress, rem, Badge, DEFAULT_THEME, ColorPicker } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useForm } from '@mantine/form'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { IconUpload, IconPhoto, IconX, IconCookieOff, IconCookie } from '@tabler/icons-react'
import { createCookie } from '@/app/actions'
import dayjs from 'dayjs'

interface Item {
  text: string
  body: string
  anchor: string
  value: string
  description: string
}

export default function UserForm(props: any) {
  //console.log(`Profile Form Props :`, props)
  const client = generateClient()
  const [uploadProgress, setUploadProgress] = useState(0)
  const form = useForm({
    initialValues: props.user,
  })
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })
  const [palette, setPalette] = useState<string | null>(props.user.theme.primary)
  const [font, setFont] = useState<string | null>(props.user.theme.font)
  const [heading, setHeading] = useState<string | null>(props.user.theme.heading)
  const [mono, setMono] = useState<string | null>(props.user.theme.mono)

  const themecolors: Item[] = [
    { text: '', body: '#', anchor: '', value: 'tachyon', description: 'Tachyon' },
    { text: '#1f2937', body: '#ffffff', anchor: '#222244', value: 'bumblebee', description: 'Bumblebee' },
    { text: '#291334', body: '#faf7f5', anchor: '#2e163b', value: 'cupcake', description: 'Cupcake' },
    { text: '#282425', body: '#e4d8b4', anchor: '#83785d', value: 'retro', description: 'Retro' },
    { text: '#785cd6', body: '#382182', anchor: '#222244', value: 'synthwave', description: 'Synthwave' },
    { text: '#7476aa', body: '#363859', anchor: '#94a0db', value: 'moonlight', description: 'Moonlight' },
  ]

  function SelectOption({ text, body, anchor, value, description }: Item) {
    return (
      <Group>
        <ColorSwatch color={anchor} />
        <ColorSwatch color={text} />
        <ColorSwatch color={body} />
        <Text fz='sm'>{description}</Text>
        <Box hidden>{value}</Box>
      </Group>
    )
  }
  const selectedOption = themecolors.find((item) => item.value === palette)
  //console.log(selectedOption)

  const options = themecolors.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      <SelectOption {...item} />
    </Combobox.Option>
  ))

  async function saveUser(values: any) {
    values.theme.palette = palette
    values.theme.font = font
    values.theme.heading = heading
    values.theme.mono = mono
    createCookie('theme', JSON.stringify(values.theme))
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

  function refreshCookie() {
    createCookie('theme', JSON.stringify(form.values.theme))
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
        <SimpleGrid cols={{ base: 1, xs: 1, sm: 2 }}>
          <Stack gap='xs'>
            <Title ta='center' order={4} mb='xs'>
              Your Profile
            </Title>
            <Badge>{form.values.role}</Badge>
            <Badge>{form.values.id}</Badge>
            <TextInput label='Username' placeholder='username' {...form.getInputProps('username')} size='xs' radius='xs' disabled />
            <TextInput label='First Name' placeholder='First Name' {...form.getInputProps('firstname')} size='xs' radius='xs' />
            <TextInput label='Last Name' placeholder='Last Name' {...form.getInputProps('lastname')} size='xs' radius='xs' />
            <TextInput label='Email' placeholder='you@codexe.info' {...form.getInputProps('email')} size='xs' radius='xs' />
            <SimpleGrid cols={{ base: 1, sm: 1, md: 2 }}>
              <Stack>
                <Image src={form.values.avatar?.url} /> <TextInput label='Title' placeholder='Title' {...form.getInputProps('avatar.title')} />
                <TextInput label='Alt' placeholder='Alt' {...form.getInputProps('avatar.alt')} />
              </Stack>
              <Stack>
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
                        Drag image here or click to select file
                      </Text>
                      <Text size='sm' c='dimmed' inline mt={7}>
                        File should not exceed 5mb
                      </Text>
                    </div>
                  </Group>
                  <Progress value={uploadProgress} />
                </Dropzone>
                <TextInput label='Caption' placeholder='Caption' {...form.getInputProps('avatar.caption')} />
                <TextInput label='Description' placeholder='Description' {...form.getInputProps('avatar.description')} />
              </Stack>
            </SimpleGrid>
          </Stack>
          <Stack gap='xs'>
            <Title ta='center' order={4} mb='xs'>
              Your Theme
            </Title>

            <Box>
              <Combobox
                store={combobox}
                withinPortal={false}
                onOptionSubmit={(val) => {
                  setPalette(val)
                  combobox.closeDropdown()
                }}>
                <Combobox.Target>
                  <InputBase component='button' type='button' pointer rightSection={<Combobox.Chevron />} onClick={() => combobox.toggleDropdown()} rightSectionPointerEvents='none' multiline>
                    {selectedOption ? (
                      <SelectOption {...selectedOption} />
                    ) : (
                      <Input.Placeholder>
                        <Text>CURRENT : {form.values.theme.palette}</Text>
                      </Input.Placeholder>
                    )}
                  </InputBase>
                </Combobox.Target>
                <Combobox.Dropdown>
                  <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
              </Combobox>
            </Box>
            <Text>BODY FONT</Text>
            <Select placeholder={form.values.theme.font} data={['var(--font-dinpro)', 'var(--font-roboto)', 'var(--font-mononoki)']} value={font} onChange={setFont} />
            <Text>HEADING FONT</Text>
            <Select placeholder={form.values.theme.heading} data={['var(--font-dinpro)', 'var(--font-roboto)', 'var(--font-mononoki)']} value={heading} onChange={setHeading} />
            <Text>MONO FONT</Text>
            <Select placeholder={form.values.theme.mono} data={['var(--font-dinpro)', 'var(--font-roboto)', 'var(--font-mononoki)']} value={mono} onChange={setMono} />
            <Paper p='sm' withBorder>
              <Text c='dimmed' size='sm'>
                The ability to customize the theme is currently implemented through cookies. If the theme doesn't match your settings, your cookie was probably cleared for some reason. You can create it again here.
              </Text>
              <Group justify='space-between' mt='sm'>
                <Button size='xs' leftSection={<IconCookieOff size={14} />}>
                  Delete Cookie
                </Button>
                <Button size='xs' rightSection={<IconCookie size={14} />} onClick={() => refreshCookie()}>
                  Create Cookie
                </Button>
              </Group>
            </Paper>
            <Button fullWidth mt='md' type='submit'>
              Update Profile
            </Button>
          </Stack>
        </SimpleGrid>
      </form>
    </Paper>
  )
}

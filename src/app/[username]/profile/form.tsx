'use client'
import React, { useState, useEffect } from 'react'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import { uploadData } from 'aws-amplify/storage'
import {
  TextInput,
  Box,
  Flex,
  Code,
  ColorSwatch,
  SimpleGrid,
  Select,
  useCombobox,
  Combobox,
  InputBase,
  Input,
  Image,
  Paper,
  Title,
  Text,
  Group,
  Stack,
  Button,
  Progress,
  rem,
  Badge,
  DEFAULT_THEME,
  ColorPicker,
  Textarea,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useForm } from '@mantine/form'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { IconUpload, IconPhoto, IconX, IconCookieOff, IconCookie } from '@tabler/icons-react'
import { createCookie } from '@/app/actions'
import dayjs from 'dayjs'

interface Item {
  mode: string
  primary: string
  text: string
  body: string
  anchor: string
  value: string
  description: string
}

export default function UserForm(props: any) {
  console.log(`Profile Form Props :`, props)
  const client = generateClient()
  const [palette, setPalette] = useState<string | null>(props.user.theme.palette)
  const [font, setFont] = useState<string | null>(props.user.theme.font)
  const [heading, setHeading] = useState<string | null>(props.user.theme.heading)
  const [mono, setMono] = useState<string | null>(props.user.theme.mono)
  const [image, setImage] = useState<string | null>(props.user.avatar.url)
  const [uploadProgress, setUploadProgress] = useState(0)
  const form = useForm({ initialValues: props.user })
  const combobox = useCombobox({ onDropdownClose: () => combobox.resetSelectedOption() })

  const themecolors: Item[] = [
    { mode: 'LIGHT', primary: '#465682', text: '#2e3440', body: '#ECEFF4', anchor: '#465682', value: 'tachyon', description: 'Tachyon' },
    { mode: 'LIGHT', primary: '#5e81ac', text: '#2E3440', body: '#ECEFF4', anchor: '#5e81ac', value: 'nord', description: 'Nord' },
    { mode: 'LIGHT', primary: '#222244', text: '#1f2937', body: '#ffffff', anchor: '#222244', value: 'bumblebee', description: 'Bumblebee' },
    { mode: 'LIGHT', primary: '#211452', text: '#291334', body: '#faf7f5', anchor: '#2e163b', value: 'cupcake', description: 'Cupcake' },
    { mode: 'LIGHT', primary: '#83785d', text: '#282425', body: '#e4d8b4', anchor: '#83785d', value: 'retro', description: 'Retro' },
    { mode: 'DARK', primary: '#211452', text: '#785cd6', body: '#382182', anchor: '#222244', value: 'synthwave', description: 'Synthwave' },
    { mode: 'DARK', primary: '#5769c7', text: '#7476aa', body: '#363859', anchor: '#94a0db', value: 'moonlight', description: 'Moonlight' },
    { mode: 'DARK', primary: '#ff79c6', text: '#c9c9c9', body: '#242424', anchor: '#ff98d3', value: 'dracula', description: 'Dracula' },
  ]

  const fontlist = [
    { label: 'DIN Pro', value: 'var(--font-dinpro)' },
    { label: 'Roboto', value: 'var(--font-roboto)' },
    { label: 'Mononoki', value: 'var(--font-mononoki)' },
    { label: 'Lexend', value: 'var(--font-lexend)' },
  ]

  function SelectOption({ mode, primary, text, body, anchor, value, description }: Item) {
    return (
      <Group justify='space-between'>
        <Group>
          <Badge>{mode}</Badge>
          <Text fz='md' fw='500'>
            {description}
          </Text>
        </Group>
        <Group>
          <ColorSwatch color={primary} />
          <ColorSwatch color={anchor} />
          <ColorSwatch color={text} />
          <ColorSwatch color={body} />
          <Box hidden>{value}</Box>
        </Group>
      </Group>
    )
  }
  const selectedOption = themecolors.find((item) => item.value === palette)
  //console.log(selectedOption)

  const options = themecolors.map((item) => (
    <Combobox.Option value={item.value} key={item.value} active={item.value === palette}>
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
        <SimpleGrid cols={{ base: 1, xs: 1, sm: 2 }} spacing='xl'>
          <Stack gap='xs'>
            <SimpleGrid cols={{ base: 1, xs: 1, sm: 2 }}>
              <Stack gap='0'>
                <Title ta='left' order={2} mb='0'>
                  {form.values.username}
                </Title>
                <Badge>{form.values.role}</Badge>
              </Stack>
              <Stack justify='end'>
                <Code p='xs' ta='center'>
                  {form.values.id}
                </Code>
              </Stack>
            </SimpleGrid>
            <SimpleGrid cols={{ base: 1, xs: 1, sm: 2 }}>
              <TextInput label='First Name' placeholder='First Name' {...form.getInputProps('firstname')} radius='xs' />
              <TextInput label='Last Name' placeholder='Last Name' {...form.getInputProps('lastname')} radius='xs' />
            </SimpleGrid>
            <TextInput label='Email' placeholder='you@codexe.info' {...form.getInputProps('email')} radius='xs' />
            <SimpleGrid cols={{ base: 1, sm: 1, md: 2 }}>
              <Flex align='center'>
                {image != '' ? (
                  <Image src={form.values.avatar?.url} />
                ) : (
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
                )}
              </Flex>
              <Stack gap='0'>
                <TextInput label='Title' placeholder='Title' {...form.getInputProps('avatar.title')} size='xs' radius='xs' />
                <TextInput label='Alt' placeholder='Alt' {...form.getInputProps('avatar.alt')} size='xs' radius='xs' />
                <TextInput label='Caption' placeholder='Caption' {...form.getInputProps('avatar.caption')} size='xs' radius='xs' />
                <TextInput label='Description' placeholder='Description' {...form.getInputProps('avatar.description')} size='xs' radius='xs' />
                <TextInput label='S3 Key' placeholder='Key' {...form.getInputProps('avatar.key')} size='xs' radius='xs' />
                <Textarea label='URL' placeholder='URL' {...form.getInputProps('avatar.url')} size='xs' radius='xs' />
              </Stack>
            </SimpleGrid>
          </Stack>
          <Stack gap='4'>
            <Box>
              <Group justify='space-between' mb='4'>
                <Group>
                  <Text size='sm' fw='500'>
                    Color Scheme
                  </Text>
                </Group>
                <Group pr='xl'>
                  <Text size='sm' fw='500'>
                    Primary | Anchor | Text | Body{' '}
                  </Text>
                </Group>
              </Group>
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
            <Text size='sm' fw='500' mb='0'>
              Body Font
            </Text>
            <Select placeholder={form.values.theme.font} data={fontlist} value={font} onChange={setFont} />
            <Text size='sm' fw='500' mb='4'>
              Heading Font
            </Text>
            <Select placeholder={form.values.theme.heading} data={fontlist} value={heading} onChange={setHeading} />
            <Text size='sm' fw='500' mb='4'>
              Monospace Font
            </Text>
            <Select placeholder={form.values.theme.mono} data={fontlist} value={mono} onChange={setMono} />
            <Paper p='sm' withBorder mt='xs'>
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

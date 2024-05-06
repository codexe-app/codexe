'use client'
import React from 'react'
import { Affix, Dialog, AppShell, Switch, Group, ActionIcon, Stack, NavLink, Avatar, Image, Menu, Text, UnstyledButton, Flex, rem, useMantineColorScheme, useComputedColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconRobot } from '@tabler/icons-react'
import ChatWrapper from '@/components/chatbot'
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'

export default function Chatbot(props: any) {
  const [opened, { toggle, close }] = useDisclosure(false)
  const chat = {
    new: true,
    id: nanoid(),
    name: 'New Chat Session',
    path: '',
    userId: props.user.id,
    createdAt: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
    updatedAt: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
    __typename: 'Chat',
  }
  return (
    <React.Fragment>
      <Dialog opened={opened} withCloseButton onClose={close} size='lg' radius='md'>
        <ChatWrapper id='new' chat={chat} />
      </Dialog>
      <Affix position={{ bottom: 20, right: 20 }} zIndex={999}>
        <ActionIcon variant='filled' size='xl' radius='xl' aria-label='Settings' onClick={toggle}>
          <IconRobot style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </Affix>
    </React.Fragment>
  )
}

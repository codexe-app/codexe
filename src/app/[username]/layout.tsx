'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { generateClient } from 'aws-amplify/api'
import { getUser, listSpotlights } from '@/graphql/queries'
import type { User, Spotlight as SpotlightEntry } from '@/graphql/API'
import { redirect, useRouter } from 'next/navigation'
import { getCurrentUser, signOut } from 'aws-amplify/auth'
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight'
import { useDisclosure } from '@mantine/hooks'
import ChatBot from '@/components/chatbot'
import { AppShell, Dialog, Group, ActionIcon, Stack, NavLink, Avatar, Menu, Text, rem,useMantineColorScheme, useComputedColorScheme } from '@mantine/core'
import { IconRosette, IconMessage, IconMoon, IconSun, IconHierarchy2, IconLayoutSidebarLeftExpand, IconLogout, IconIdBadge2, IconFiles, IconInfoCircle, IconDashboard, IconFileText, IconSearch } from '@tabler/icons-react'
import { HorizontalLogo } from '@/app/logo'
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'
import '@mantine/spotlight/styles.css'

export default function Layout({ children }: { children: any }) {
  const [chat, setChat] = useState({
    new: true,
    id: nanoid(),
    name: 'New Chat Session',
    path: '',
    userId: '',
    messages: [],
    createdAt: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
    updatedAt: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
    __typename: 'Chat',
  })
  const [spotlist, setSpotlist] =useState<SpotlightEntry[]>()
  const [theuser, setTheuser] = useState<User>()
  const router = useRouter()
  const [nav, setNav] = useState(false)
  const [checked, setChecked] = useState(true)
  const [opened, { toggle, close }] = useDisclosure(false)
  const client = generateClient()
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })

  const actions: SpotlightActionData[] = [
    {
      id: 'info',
      label: 'Spotlight not implemented yet',
      description: 'I am still deciding on the best way to do this',
      onClick: () => console.log('Spotlight not implemented yet'),
      leftSection: <IconInfoCircle style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
    },
  ]

  async function handleSignOut() {
    try {
      await signOut()
      router.push(`/`)
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  async function AuthGetCurrentUser() {
    try {
      const { userId } = await getCurrentUser()
      const response = (await client.graphql({
        query: getUser,
        variables: {
          id: userId,
        },
      })) as {
        data: {
          getUser: User
        }
      }
      setChat({ ...chat, userId: userId })
      setTheuser(response.data.getUser)
    } catch (error) {
      console.error(error)
      redirect('/')
    }
  }

  async function loadSpotlight() {
    try {
      const response = (await client.graphql({
        query: listSpotlights,
      })) as {
        data: {
          listSpotlights: { items: SpotlightEntry[] }
        }
      }
      const thespotlist =response.data.listSpotlights.items
      setSpotlist(thespotlist)
      console.log(`Dashboard layout thespotlist :`, thespotlist)
    } catch (error) {
      console.error(error)
      redirect('/')
    }
  }

  function switchScheme() {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
    setChecked(!checked)
  }

  useEffect(() => {
    AuthGetCurrentUser()
    //loadSpotlight()
  }, [])

  return (
    <AppShell header={{ height: 48 }} navbar={{ width: 200, breakpoint: 'sm', collapsed: { desktop: !nav, mobile: !nav } }}>
      <AppShell.Header>
        <Group h='100%' px='sm'>
          <Group justify='space-between' style={{ flex: 1 }}>
            <Link href='/' style={{ lineHeight: 1 }}>
              <HorizontalLogo size={32} color='var(--mantine-primary-color-filled)' />
            </Link>
            <Group ml='xl' gap='xs'>
              <ActionIcon variant='gradient.9' size={32} radius='xl' aria-label='Settings' onClick={toggle}>
                {opened ? <IconMessage size={16} stroke={2} /> : <IconMessage size={20} stroke={2} />}
              </ActionIcon>
              <Dialog opened={opened} position={{ top: 34, right: 4 }} size='xl' p={0} radius={8} zIndex={202}>
                <ChatBot id={chat.id} chat={chat} initialMessages={null} user={theuser} close={close} />
              </Dialog>
              <Menu shadow='md' width={200}>
                <Menu.Target>
                  <Avatar src={theuser?.avatar?.url} radius='xl' size={32} style={{ cursor: 'pointer' }} />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    onClick={spotlight.open}
                    leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
                    rightSection={
                      <Text size='xs' c='dimmed'>
                        ⌘F
                      </Text>
                    }>
                    Search
                  </Menu.Item>
                  <Menu.Label>Welcome {theuser?.username}</Menu.Label>
                  <Menu.Item leftSection={<IconDashboard style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${theuser?.username}`}>
                    Dashboard
                  </Menu.Item>
                  <Menu.Item leftSection={<IconIdBadge2 style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${theuser?.username}/profile`}>
                    Profile
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Label>Stuff</Menu.Label>
                  <Menu.Item leftSection={<IconFiles style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${theuser?.username}/documents`}>
                    Documents
                  </Menu.Item>
                  <Menu.Item leftSection={<IconHierarchy2 style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${theuser?.username}/diagrams`}>
                    Diagrams
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Label>Toggle</Menu.Label> 
                  <Menu.Item color='green' leftSection={checked ? <IconMoon style={{ width: rem(14), height: rem(14) }} /> : <IconSun style={{ width: rem(14), height: rem(14) }} />} onClick={() => switchScheme()} fw='600'>
                    Scheme
                  </Menu.Item>
                  <Menu.Item color='green' leftSection={<IconLayoutSidebarLeftExpand style={{ width: rem(14), height: rem(14) }} />} onClick={() => setNav(!nav)} fw='600'>
                    Sidebar
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item color='red' leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />} onClick={handleSignOut} fw='600'>
                    Log Out
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py='md'>
        <Stack h='calc(100vh - 48px)' justify='space-between'>
          <Stack w='100%' gap='xs'>
            <NavLink href={`/${theuser?.username}`} label='Dashboard' leftSection={<IconDashboard size='1rem' stroke={1.5} />} />
            <NavLink href='#' label='Documents' leftSection={<IconFiles size='1rem' stroke={1.5} />} childrenOffset={28}>
              <NavLink label='All Documents' href={`/${theuser?.username}/documents`} />
              <NavLink label='New Document' href={`/${theuser?.username}/documents/new`} />
            </NavLink>
            <NavLink href='#' label='Diagrams' leftSection={<IconHierarchy2 size='1rem' stroke={1.5} />} childrenOffset={28}>
              <NavLink label='All Diagrams' href={`/${theuser?.username}/diagrams`} />
              <NavLink label='New Diagram' href={`/${theuser?.username}/diagrams/new`} />
            </NavLink>
            <NavLink href='#' label='Entries' leftSection={<IconRosette size='1rem' stroke={1.5} />} childrenOffset={28}>
              <NavLink href='#' label='Coming Soon' />
              <NavLink label='Nested' childrenOffset={28} href='#'>
                <NavLink label='Child' href='#' />
              </NavLink>
            </NavLink>
          </Stack>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      <Spotlight
        actions={actions}
        shortcut={['mod + F', '/']}
        nothingFound='Nothing found...'
        highlightQuery
        searchProps={{
          leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </AppShell>
  )
}

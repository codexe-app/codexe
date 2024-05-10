'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight'
import { AppShell, Dialog, Group, ActionIcon, Stack, NavLink, Avatar, Menu, Text, rem, useMantineColorScheme, useComputedColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { signOut } from 'aws-amplify/auth'
import { IconRosette, IconMessage, IconMoon, IconHierarchy2, IconLayoutSidebarLeftExpand, IconLogout, IconIdBadge2, IconFiles, IconInfoCircle, IconDashboard, IconFileText, IconSearch } from '@tabler/icons-react'
import { HorizontalLogo } from '@/app/logo'
import ChatBot from '@/components/chatbot'
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'
import '@mantine/spotlight/styles.css'


export default function Shell(props: any) {
  const router = useRouter()
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })
  const [nav, setNav] = useState(false)
  const [checked, setChecked] = useState(true)
  const [user, setUser] = useState(props.user)
  const [opened, { toggle, close }] = useDisclosure(false)
  const cid = nanoid()

  const chat = {
    new: true,
    id: cid,
    name: 'New Chat Session',
    path: '',
    userId: props.user.id,
    createdAt: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
    updatedAt: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
    __typename: 'Chat',
  }

  const actions: SpotlightActionData[] = [
    {
      id: 'info',
      label: 'Spotlight not implemented yet',
      description: 'I am still deciding on the best way to do this',
      onClick: () => console.log('Spotlight not implemented yet'),
      leftSection: <IconInfoCircle style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
    }
  ]

  async function handleSignOut() {
    try {
      await signOut()
      router.push(`/`)
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  function switchScheme() {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
    setChecked(!checked)
  }

  return (
    <AppShell header={{ height: 48 }} navbar={{ width: 200, breakpoint: 'sm', collapsed: { desktop: !nav, mobile: !nav } }}>
      <AppShell.Header>
        <Group h='100%' px='sm'>
          <Group justify='space-between' style={{ flex: 1 }}>
            <Link href='/' style={{ lineHeight: 1 }}>
              <HorizontalLogo size={32} color='var(--mantine-primary-color-filled)' />
            </Link>
            <Group ml='xl' gap='xs'>
              <ActionIcon variant='gradient' size={32} radius='xl' aria-label='Settings' onClick={toggle}>
                {opened ? <IconMessage size={16} stroke={2} /> : <IconMessage size={20} stroke={2} />}
              </ActionIcon>
              <Dialog opened={opened} position={{ top: 34, right: 4 }} size='xl' p={0} radius={8}>
                <ChatBot id={cid} chat={chat} user={user} close={close} />
              </Dialog>
              <Menu shadow='md' width={200}>
                <Menu.Target>
                  <Avatar src={user.avatar.url} radius='xl' size={32} style={{ cursor: 'pointer' }} />
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
                  <Menu.Label>Welcome {user.username}</Menu.Label>
                  <Menu.Item leftSection={<IconDashboard style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${user.username}`}>
                    Dashboard
                  </Menu.Item>
                  <Menu.Item leftSection={<IconIdBadge2 style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${user.username}/profile`}>
                    Profile
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Label>Stuff</Menu.Label>
                  <Menu.Item leftSection={<IconFiles style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${user.username}/documents`}>
                    Documents
                  </Menu.Item>
                  <Menu.Item leftSection={<IconHierarchy2 style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${user.username}/diagrams`}>
                    Diagrams
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Label>Toggle</Menu.Label>
                  <Menu.Item color='primary' leftSection={<IconLayoutSidebarLeftExpand style={{ width: rem(14), height: rem(14) }} />} onClick={() => setNav(!nav)} fw='600'>
                    Sidebar
                  </Menu.Item>
                  <Menu.Item color='primary' leftSection={<IconMoon style={{ width: rem(14), height: rem(14) }} />} onClick={() => switchScheme()} fw='600'>
                    Scheme
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
            <NavLink href={`/${user.username}`} label='Dashboard' leftSection={<IconDashboard size='1rem' stroke={1.5} />} />
            <NavLink href='#' label='Documents' leftSection={<IconFiles size='1rem' stroke={1.5} />} childrenOffset={28}>
              <NavLink label='All Documents' href={`/${user.username}/documents`} />
              <NavLink label='New Document' href={`/${user.username}/documents/new`} />
            </NavLink>
            <NavLink href='#' label='Diagrams' leftSection={<IconHierarchy2 size='1rem' stroke={1.5} />} childrenOffset={28}>
              <NavLink label='All Diagrams' href={`/${user.username}/diagrams`} />
              <NavLink label='New Diagram' href={`/${user.username}/diagrams/new`} />
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
      <AppShell.Main>{props.children}</AppShell.Main>
      <Spotlight
        actions={actions}
        shortcut={['mod + F','/']}
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

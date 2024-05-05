'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AppShell, Switch, Group, Box, ActionIcon, Stack, NavLink, Button, Avatar, Image, Menu, Text, UnstyledButton, Flex, rem, useMantineColorScheme, useComputedColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useLocalStorage } from '@mantine/hooks'
import { signOut } from 'aws-amplify/auth'
import { IconLogout, IconSearch, IconLayoutSidebarLeftCollapse, IconMoon, IconSun, IconHierarchy2, IconMarkdown, IconLayoutSidebarLeftExpand, IconIdBadge2, IconFilePlus, IconFiles, IconDashboard } from '@tabler/icons-react'
import UserMenu from './menu'
import cx from 'clsx'
import classes from './dash.module.css'

export default function Shell(props: any) {
  const router = useRouter()
  const pathname = usePathname()
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })
  const [nav, setNav] = useState(false)
  const [checked, setChecked] = useState(true)
  const [user, setUser] = useState(props.user)
  const [opened, { toggle }] = useDisclosure(false)
  const [userdata, setUserdata] = useLocalStorage({
    key: 'userId',
    defaultValue: props.user.userId,
  })

  async function handleSignOut() {
    try {
      await signOut()
      setUser({})
      setUserdata('')
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
    <AppShell header={{ height: 60 }} navbar={{ width: 200, breakpoint: 'sm', collapsed: { desktop: nav, mobile: !opened } }}>
      <AppShell.Header>
        <Group h='100%' px='sm'>
          <Group justify='space-between' style={{ flex: 1 }}>
            <Link href='/'>
              <Image src='/logo.svg' height={36} />
            </Link>
            <Group ml='xl' gap='xs'>
              <Group>
                <Switch
                  onChange={() => setNav(!nav)}
                  size='md'
                  color='dark.4'
                  onLabel={<IconLayoutSidebarLeftExpand style={{ width: rem(16), height: rem(16) }} stroke={2.5} />}
                  offLabel={<IconLayoutSidebarLeftCollapse style={{ width: rem(16), height: rem(16) }} stroke={2.5} />}
                  visibleFrom='sm'
                />
                <ActionIcon onClick={() => switchScheme()} variant='default' size='lg' aria-label='Toggle color scheme'>
                  <IconSun className={cx(classes.icon, classes.light)} stroke={2} />
                  <IconMoon className={cx(classes.icon, classes.dark)} stroke={2} />
                </ActionIcon>
              </Group>
              <Menu shadow='md' width={200}>
                <Menu.Target>
                  <Avatar src={user.avatar.url} radius='xl' hiddenFrom='sm' />
                </Menu.Target>
                <UserMenu user={user} handleSignOut={handleSignOut} />
              </Menu>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py='md'>
        <Stack h='calc(100vh - 60px)' justify='space-between'>
          <Stack w='100%' gap='xs'>
            <NavLink href={`/${user.username}`} label='Dashboard' leftSection={<IconDashboard size='1rem' stroke={1.5} />} />
            <NavLink href='#' label='Entries' leftSection={<IconFiles size='1rem' stroke={1.5} />} childrenOffset={28}>
              <NavLink href='#' label='Coming Soon' />
              <NavLink label='Nested' childrenOffset={28} href='#'>
                <NavLink label='Child' href='#' />
              </NavLink>
            </NavLink>
            <NavLink href='#' label='Documents' leftSection={<IconMarkdown size='1rem' stroke={1.5} />} childrenOffset={28}>
              <NavLink label='All Documents' href={`/${user.username}/documents`} />
              <NavLink label='New Document' href={`/${user.username}/documents/new`} />
            </NavLink>
            <NavLink href='#' label='Diagrams' leftSection={<IconHierarchy2 size='1rem' stroke={1.5} />} childrenOffset={28}>
              <NavLink label='All Diagrams' href={`/${user.username}/diagrams`} />
              <NavLink label='New Diagram' href={`/${user.username}/diagrams/new`} />
            </NavLink>
          </Stack>
          <Menu shadow='md' width={200}>
            <Menu.Target>
              <UnstyledButton className={classes.user}>
                <Flex direction='row' gap={8}>
                  <Avatar src={user.avatar.url} radius='xl' />
                  <div style={{ flex: 1 }}>
                    <Text size='sm' w={500}>
                      {user.username}
                    </Text>
                    <Text c='dimmed' size='xs'>
                      {user.email}
                    </Text>
                  </div>
                </Flex>
              </UnstyledButton>
            </Menu.Target>
            <UserMenu user={user} handleSignOut={handleSignOut} />
          </Menu>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  )
}

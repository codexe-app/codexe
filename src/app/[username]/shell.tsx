'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AppShell, Switch, Group, Stack, NavLink, Button, Avatar, Image, Menu, Text, UnstyledButton, Flex, rem, useMantineColorScheme, useComputedColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useLocalStorage } from '@mantine/hooks'
import { Hub } from 'aws-amplify/utils'
import { signOut } from 'aws-amplify/auth'
import { IconLogout, IconSearch, IconMoonStars, IconSun, IconHierarchy2, IconMarkdown, IconUsersGroup, IconIdBadge2, IconFilePlus, IconFiles, IconDashboard } from '@tabler/icons-react'
import classes from './dash.module.css'

export default function Shell(props: any) {
  const router = useRouter()
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });  const [checked, setChecked] = useState(true)
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

  function switchIt(event : any){
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
    setChecked(!checked)
  }

  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 220, breakpoint: 'sm', collapsed: { desktop: opened, mobile: !opened } }}>
      <AppShell.Header>
        <Group h='100%' px='sm'>
          <Group justify='space-between' style={{ flex: 1 }}>
            <Link href='/'>
              <Image src='/logo.svg' height={36} />
            </Link>
            <Group ml='xl' gap={0}>
              <Switch
                checked={checked}
                onChange={(event) => switchIt(event.currentTarget.checked)}
                size='md'
                color='dark.4'
                onLabel={<IconSun style={{ width: rem(16), height: rem(16) }} stroke={2.5} />}
                offLabel={<IconMoonStars style={{ width: rem(16), height: rem(16) }} stroke={2.5} />}
              />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py='md'>
        <Stack h='calc(100vh - 60px)' justify='space-between'>
          <Stack w='100%'>
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
            <Menu.Dropdown>
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
              <Menu.Item leftSection={<IconFilePlus style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${user.username}/diagrams`}>
                Diagrams
              </Menu.Item>
              <Menu.Divider />
              <Menu.Label>Admin</Menu.Label>
              <Menu.Item leftSection={<IconUsersGroup style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/admin/users`}>
                Users
              </Menu.Item>
              <Menu.Item
                leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
                rightSection={
                  <Text size='xs' c='dimmed'>
                    ⌘K
                  </Text>
                }>
                Search
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item color='red' leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />} onClick={handleSignOut}>
                Log Out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  )
}

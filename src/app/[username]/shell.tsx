'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AppShell, Burger, Group, Stack, NavLink, Button, Avatar, Image, Menu, Text, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useLocalStorage } from '@mantine/hooks';
import { Hub } from 'aws-amplify/utils'
import { signOut } from 'aws-amplify/auth'
import { IconLogout, IconSearch, IconGauge, IconHierarchy2, IconMarkdown, IconUsersGroup, IconIdBadge2, IconFilePlus, IconFiles, IconDashboard } from '@tabler/icons-react'

export default function Shell(props : any) {
  const router = useRouter()
  const [user, setUser] = useState(props.user)
  const [signedin, setSignedin] = useState(true)
  const [opened, { toggle }] = useDisclosure(false)
  const [userdata, setUserdata] = useLocalStorage({
    key: 'userId',
    defaultValue: props.user.userId,
  });

  async function handleSignOut() {
    try {
      await signOut()
      setUser({})
      setUserdata('')
      setSignedin(false)
      router.push(`/`)
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  useEffect(() => {
    Hub.listen('auth', ({ payload }) => {
      //@ts-ignore
      if (payload.data) {
        //@ts-ignore
        var data = payload.data
      }
      switch (payload.event) {
        case 'signedIn':
          console.log('user have been signedIn successfully.')
          setSignedin(true)
          setUser(data)
          break
        case 'signedOut':
          console.log('user have been signedOut successfully.')
          setSignedin(false)
          break
      }
    })
  }, [])


  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 220, breakpoint: 'sm', collapsed: { desktop: opened, mobile: !opened } }}>
      <AppShell.Header>
        <Group h='100%' px='sm'>
          <Group justify='space-between' style={{ flex: 1 }}>
            <Link href='/'>
              <Image src='/logo.svg' height={36} />
            </Link>
            <Group ml='xl' gap={0}>
                <Menu shadow='md' width={200}>
                  <Menu.Target>
                    <Avatar radius='xl' />
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Welcome {user.username}</Menu.Label>
                    <Menu.Item leftSection={<IconDashboard style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${user.username}`}>
                      Dashboard
                    </Menu.Item>
                    <Menu.Item leftSection={<IconIdBadge2 style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/account/profile/${user.username}`}>
                      Profile
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Label>Stuff</Menu.Label>
                    <Menu.Item leftSection={<IconFiles style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/docs`}>
                      Docs
                    </Menu.Item>
                    <Menu.Item leftSection={<IconFilePlus style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/flow`}>
                      Flowcharts
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
                    <Menu.Label>Danger Zone</Menu.Label>
                    <Menu.Item color='red' leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />} onClick={handleSignOut}>
                      Log Out
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p='md'>
        <NavLink href={`/${user.username}`} label='Dashboard' leftSection={<IconDashboard size='1rem' stroke={1.5} />} />
        <NavLink href='#' label='Entries' leftSection={<IconFiles size='1rem' stroke={1.5} />} childrenOffset={28}>
          <NavLink href='#' label='Coming Soon' />
          <NavLink label='Nested' childrenOffset={28} href='#'>
            <NavLink label='Child' href='#' />
          </NavLink>
        </NavLink>
        <NavLink href='#'  label='Documents' leftSection={<IconMarkdown size='1rem' stroke={1.5} />} childrenOffset={28}>
          <NavLink label='All Documents' href={`/${user.username}/documents`} />
          <NavLink label='New Document' href={`/${user.username}/documents/new`} />
        </NavLink>
        <NavLink href='#' label='Diagrams' leftSection={<IconHierarchy2 size='1rem' stroke={1.5} />} childrenOffset={28}>
          <NavLink label='All Diagrams' href={`/${user.username}/diagrams`}  />
          <NavLink label='New Diagram' href={`/${user.username}/diagrams/new`} />
        </NavLink>
      </AppShell.Navbar>
      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  )
}

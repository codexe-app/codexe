'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AppShell, Burger, Group, Stack, NavLink, Button, Avatar, Image, Menu, Text, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Hub } from 'aws-amplify/utils'
import { signOut } from 'aws-amplify/auth'
import { IconLogout, IconSearch, IconGauge, IconFingerprint, IconUsersGroup, IconIdBadge2, IconFilePlus, IconFiles, IconDashboard } from '@tabler/icons-react'

export default function Shell(props : any) {
  //console.log(`shell props :`, props)
  const [user, setUser] = useState(props.user)
  const [signedin, setSignedin] = useState(true)
  const [opened, { toggle }] = useDisclosure(false)
  const router = useRouter()
  const pathname = usePathname()

  async function handleSignOut() {
    try {
      await signOut()
      //@ts-ignore
      setUser({})
      setSignedin(false)
      router.push(`/`)
    } catch (error) {
      //@ts-ignore
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
    <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: opened, mobile: !opened } }}>
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
        <NavLink href='#required-for-focus' label='Pages' leftSection={<IconGauge size='1rem' stroke={1.5} />} childrenOffset={28}>
          <NavLink href='#required-for-focus' label='First child link' />
          <NavLink label='Second child link' href='#required-for-focus' />
          <NavLink label='Nested parent link' childrenOffset={28} href='#required-for-focus'>
            <NavLink label='First child link' href='#required-for-focus' />
            <NavLink label='Second child link' href='#required-for-focus' />
            <NavLink label='Third child link' href='#required-for-focus' />
          </NavLink>
        </NavLink>
        <NavLink href='#required-for-focus' label='Documents' leftSection={<IconFingerprint size='1rem' stroke={1.5} />} childrenOffset={28}>
          <NavLink label='First child link' href='#required-for-focus' />
          <NavLink label='Second child link' href='#required-for-focus' />
          <NavLink label='Third child link' href='#required-for-focus' />
        </NavLink>
        <NavLink href='#required-for-focus' label='Diagrams' leftSection={<IconFingerprint size='1rem' stroke={1.5} />} childrenOffset={28}>
          <NavLink label='First child link' href='#required-for-focus' />
          <NavLink label='Second child link' href='#required-for-focus' />
          <NavLink label='Third child link' href='#required-for-focus' />
        </NavLink>
      </AppShell.Navbar>

      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  )
}

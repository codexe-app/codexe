'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AppShell, Burger, Group, Stack, Button, Avatar, Image, Menu, Text, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Hub } from 'aws-amplify/utils'
import { getCurrentUser, signOut } from 'aws-amplify/auth'
import { IconLogout, IconSearch, IconUsersGroup, IconIdBadge2, IconFilePlus, IconFiles, IconDashboard } from '@tabler/icons-react'

export default function Navigation({ children }: { children: any }) {
  const [user, setUser] = useState({
    username: '',
    userId: '',
    signInDetails: {
      loginId: '',
      authFlowType: '',
    },
  })
  const [signedin, setSignedin] = useState(false)
  const [opened, { toggle }] = useDisclosure()
  const router = useRouter()

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

  async function currentAuthenticatedUser() {
    try {
      const data = await getCurrentUser()
      console.log(`Navigation get current user :`, data)
      setSignedin(true)
      //@ts-ignore
      setUser(data)
    } catch (err) {
      console.log(err)
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

  useEffect(() => {
    currentAuthenticatedUser()
  }, [])

  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }} padding='md'>
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Group justify='space-between' style={{ flex: 1 }}>
            <Link href='/'>
              <Image src='/logo.svg' height={36} />
            </Link>
            <Group ml='xl' gap={0}>
              {signedin ? (
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
                    <Menu.Label>Documents</Menu.Label>
                    <Menu.Item leftSection={<IconFiles style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/docs`}>
                      Docs
                    </Menu.Item>
                    <Menu.Item leftSection={<IconFilePlus style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/docs/new`}>
                      New
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
              ) : (
                <Button variant='transparent' component={Link} href='/account/signin'>
                  SIGN IN
                </Button>
              )}
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

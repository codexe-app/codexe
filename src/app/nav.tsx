'use client'
import { useState, useEffect } from 'react'
import { AppShell, Burger, Group, Stack, Button, Avatar, Image, Menu, Text, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { Hub } from 'aws-amplify/utils'
import { getCurrentUser, signOut } from 'aws-amplify/auth'
import { IconLogout, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight, IconIdBadge2 } from '@tabler/icons-react'

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

  async function handleSignOut() {
    try {
      await signOut()
      //@ts-ignore
      setUser({})
      setSignedin(false)
    } catch (error) {
      //@ts-ignore
      console.log('error signing out: ', error)
    }
  }

  async function currentAuthenticatedUser() {
    try {
      const data = await getCurrentUser()
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
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Group justify='space-between' style={{ flex: 1 }}>
            <Link href='/'>
              <Image src='/logo.svg' height={36} />
            </Link>
            <Group ml='xl' gap={0} visibleFrom='sm'>
              {signedin ? (
                <Menu shadow='md' width={200}>
                  <Menu.Target>
                    <Avatar radius='xl' />
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Welcome {user.username}</Menu.Label>
                    <Menu.Item leftSection={<IconIdBadge2 style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/account/profile/${user.username}`}>
                      Profile
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
      <AppShell.Navbar py='md' px={4}>
        <Stack gap='sm'>
          <Button>HOME</Button>
          <Button>ABOUT</Button>
          <Button>LOGIN</Button>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

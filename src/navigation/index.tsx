'use client'
import { signOut } from 'aws-amplify/auth';
import { AppShell, Burger, Group, Stack, Button, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'

export default function Navigation({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure()

  async function handleSignOut() {
    try {
      const logout = await signOut({ global: true });
      console.log(`logout :`, logout)
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }} padding='md'>
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Group justify='space-between' style={{ flex: 1 }}>
            <Image src='/logo.svg' height={36} />
            <Group ml='xl' gap={0} visibleFrom='sm'>
              <Button variant='transparent' component={Link} href='/'>HOME</Button>
              <Button variant='transparent' component={Link} href='/admin'>ADMIN</Button>
              <Button variant='transparent' component={Link} href='/account/signin'>LOGIN</Button>
              <Button variant='transparent' onClick={handleSignOut}>LOGOUT</Button>
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

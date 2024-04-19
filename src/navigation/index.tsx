'use client'
import { AppShell, Burger, Group, Stack, Button, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function Navigation({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }} padding='md'>
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Group justify='space-between' style={{ flex: 1 }}>
            <Image src='brand/logo.svg' height={36} />
            <Group ml='xl' gap={0} visibleFrom='sm'>
              <Button variant='transparent'>HOME</Button>
              <Button variant='transparent'>CONTACT</Button>
              <Button variant='transparent'>SUPPORT</Button>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py='md' px={4}>
        <Stack gap='sm'>
        <Button>HOME</Button>
        <Button>CONTACT</Button>
        <Button>SUPPORT</Button>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

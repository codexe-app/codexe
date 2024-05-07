'use client'
import Link from 'next/link'
import { AppShell, Group, Button } from '@mantine/core'
import { HorizontalLogo } from '@/app/logo'

export default function Shell({ children }: { children: any }): JSX.Element {

  return (
    <AppShell header={{ height: 48 }}>
      <AppShell.Header>
        <Group h='100%' px='sm'>
          <Group justify='space-between' style={{ flex: 1 }}>
            <Link href='/' style={{ lineHeight: 1 }}>
              <HorizontalLogo size={32} color='var(--mantine-primary-color-filled)'/>
            </Link>
            <Group ml='xl' gap={0}>
              <Button variant='transparent' component={Link} href='/account/signin'>
                SIGN IN
              </Button>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

'use client'
import Link from 'next/link'
import { AppShell, Group, Button, Image } from '@mantine/core'

export default function Shell({ children }: { children: any }) { 

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Group h='100%' px='sm'>
          <Group justify='space-between' style={{ flex: 1 }}>
            <Link href='/'>
              <Image src='/logo.svg' height={36} />
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

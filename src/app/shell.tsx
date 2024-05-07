'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AppShell, Group, Button, Switch, rem, useMantineColorScheme, useComputedColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { HorizontalLogo } from '@/app/logo'

export default function Shell({ children }: { children: any }): JSX.Element {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })
  const [checked, setChecked] = useState(true)

  function switchScheme() {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
    setChecked(!checked)
  }

  return (
    <AppShell header={{ height: 60 }}>
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
              <Switch
                checked={checked}
                onChange={() => switchScheme()}
                size='md'
                color='dark.4'
                onLabel={<IconSun style={{ width: rem(16), height: rem(16) }} stroke={2.5} />}
                offLabel={<IconMoonStars style={{ width: rem(16), height: rem(16) }} stroke={2.5} />}
              />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AppShell, Group, Button, Image, Switch, rem, useMantineColorScheme, useComputedColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'

export default function Shell({ children }: { children: any }) {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })
  const [checked, setChecked] = useState(true)

  function switchIt() {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
    setChecked(!checked)
  }

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
              <Switch
                checked={checked}
                onChange={() => switchIt()}
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

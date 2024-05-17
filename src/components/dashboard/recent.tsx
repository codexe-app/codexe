'use client'
import Link from 'next/link'
import { Paper, Group, Title, Tabs, rem, useMatches } from '@mantine/core'
import { IconCarouselHorizontal, IconListDetails, IconClock,IconTableShortcut } from '@tabler/icons-react'
import DocumentsTable from './table'
import RecentCarousel from './carousel'
import classes from './dash.module.scss'

export default function RecentActivity(props: any) {
  const { data, user } = props
  const iconStyle = { width: rem(18), height: rem(18) }
  const sizeme = useMatches({
    base: 'sm',
    sm: 'xs',
    lg: 'md',
  })
  return (
    <Paper withBorder p={sizeme}>
      <Tabs defaultValue='carousel' classNames={classes}>
        <Tabs.List justify='space-between' mb='xs'>
          <Group justify='start' wrap='nowrap' gap='xs'>
            <IconClock color='var(--mantine-primary-color-filled)' />
            <Title order={5} c='var(--mantine-primary-color-filled)'>
              Recent Activity
            </Title>
          </Group>
          <Group gap={0} mb={0}>
            <Tabs.Tab value='carousel'>
              <IconCarouselHorizontal style={iconStyle} />
            </Tabs.Tab>
            <Tabs.Tab value='table'>
              <IconListDetails style={iconStyle} />
            </Tabs.Tab>
          </Group>
        </Tabs.List>
        <Tabs.Panel value='carousel'>
          <RecentCarousel data={data} />
        </Tabs.Panel>
        <Tabs.Panel value='table'>
          <DocumentsTable data={data} />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  )
}

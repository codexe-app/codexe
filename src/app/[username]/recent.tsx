'use client'
import { Paper, Badge, Image, Group, Container, Flex, SimpleGrid, ActionIcon, Card, Title, Stack, Tabs, rem } from '@mantine/core'
import { IconCarouselHorizontal, IconListDetails, IconPhoto, IconMessageCircle, IconSettings, IconAlertCircle, IconClock } from '@tabler/icons-react'
import DocumentsTable from './table'
import RecentCarousel from './carousel'
import classes from './recent.module.css'

export default function RecentActivity(props: any) {
  const { data } = props
  const iconStyle = { width: rem(18), height: rem(18) }

  return (
    <Paper withBorder p='lg'>
      <Tabs defaultValue='carousel' classNames={classes}>
        <Tabs.List justify='space-between' mb='xs'>
          <Group gap={4} mb={0}>
            <IconClock color='var(--mantine-color-primary-filled)' />
            <Title order={5}>Recent Activity</Title>
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

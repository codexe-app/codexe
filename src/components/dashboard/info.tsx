'use client'
import { Avatar, Button, Group, Text, UnstyledButton, Box, Paper, ScrollArea, Title, Stack, rem } from '@mantine/core'
import { modals } from '@mantine/modals'
import { IconEye, IconInfoCircle } from '@tabler/icons-react'
import DocumentView from './view'
import classes from './dash.module.scss'

var _ = require('lodash')

export default function CodexeInfo(props: any) {
  const { docs } = props

  const rows = docs.map((item: any) => (
    <UnstyledButton
      className={classes.codox}
      key={item.id}
      w='100%'
      onClick={() => {
        modals.open({
          title: `${item.name} - ${item.updatedAt}`,
          size: 'xl',
          padding: 'md',
          fullScreen: true,
          centered: true,
          zIndex: 1000,
          children: <DocumentView content={item.content} />,
        })
      }}>
      <Group justify='space-between' w='100%' wrap='nowrap'>
        <Group justify='start' wrap='nowrap' gap='xs'>
          <Avatar src={item.graphic?.url} radius='xl' size='md' />
          <Stack gap={2}>
            <Title order={5} lh={1}>
              {item.name}
            </Title>
            <Text fz='sm' lh={1.1}>
              {item.description}
            </Text>
          </Stack>
        </Group>
        <IconEye style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
  ))

  return (
    <Paper withBorder py='xs' style={{ overflow: 'hidden' }} h='360px'>
      <Group justify='start' wrap='nowrap' gap='xs' pb='xs' pl='xs' className={classes.header}>
        <IconInfoCircle color='var(--mantine-primary-color-filled)' />
        <Title order={5} c='var(--mantine-primary-color-filled)'>
          Documentation
        </Title>
      </Group>
      <ScrollArea bg='var(--mantine-color-dark-outline-hover)'>
        <Box pb='xl'>{rows}</Box>
      </ScrollArea>
    </Paper>
  )
}

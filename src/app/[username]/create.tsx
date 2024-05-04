'use client'
import Link from 'next/link'
import { modals } from '@mantine/modals'
import { Card, Overlay, Button, Text, Title, Group, Stack } from '@mantine/core'
import classes from './action.module.css'
import NewDocument from './documents/new'

export default function CreateCard(props : any) {
  const user = props.user
  return (
    <Card radius='md' className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />
      <div className={classes.content}>
        <Stack>
        <Title order={3} fw={700} className={classes.title}>
          Create Item
        </Title>
        <Text size='sm' className={classes.description}>
          It all starts with some kind of information.
        </Text>
        <Group>
        <Button component={Link} href={`/${user.username}/documents/new`}>
          Create Document
        </Button>     
        <Button component={Link} href={`/${user.username}/diagrams/new`}>
          Create Diagram
        </Button>
        </Group>
   
        </Stack>
      </div>
    </Card>
  )
}

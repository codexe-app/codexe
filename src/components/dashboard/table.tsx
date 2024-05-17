'use client'
import { Link } from '@/utils/router-events'
import { usePathname, useRouter } from 'next/navigation'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import { Avatar, Badge, Table, Group, Text, ActionIcon, Card, Title, Stack, rem } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { modals } from '@mantine/modals'
import { IconPencil, IconEye, IconTrash, IconAlertCircle } from '@tabler/icons-react'
import dayjs from 'dayjs'
import DocumentView from './view'

export default function DocumentsTable(props: any) {
  const itemlist = props.data
  const client = generateClient()
  const pathname = usePathname()
  const router = useRouter()

  async function trashDocument(item: any) {
    try {
      await client.graphql({ query: mutations.deleteDocument, variables: { input: { id: item.id } } })
      notifications.show({
        title: item.name,
        message: 'This document was deleted.',
      })
      router.refresh()
    } catch (error) {
      notifications.show({
        title: `There was an error deleting ${item.name}`,
        message: JSON.stringify(error),
      })
      console.log(`There was a problem deleting the Doc :`, error)
    }
  }

  function getPath(type: any) {
    return type.toLowerCase() + 's'
  }

  const rows = itemlist.map((item: any) => (
    <Table.Tr key={item.id}>
      <Table.Td>
        <Stack gap={0} align='center'>
          <Title order={6} tt='uppercase' lh={1}>
            {dayjs(item.updatedAt).format('MMMM')}
          </Title>
          <Title order={3} lh={1}>
            {dayjs(item.updatedAt).format('D')}
          </Title>
        </Stack>
      </Table.Td>
      <Table.Td pos='relative'>
        <Avatar src={item.graphic.url} radius='xs' size='lg' />
        <Badge pos='absolute' bottom='0' w='58'>
          {item.status}
        </Badge>
      </Table.Td>
      <Table.Td>
      <Title order={5} lh={1}>
          {item.name}
        </Title>
      </Table.Td>
      <Table.Td>
        <Text fz='sm'>{item.description}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz='sm' fw={500}>
          {item.slug}
        </Text>
      </Table.Td>
      <Table.Td>
        <Badge variant='light'>{item.__typename}</Badge>
      </Table.Td>
      <Table.Td>
        <ActionIcon.Group>
          <ActionIcon
            variant='outline'
            color='gray'
            onClick={() => {
              modals.openConfirmModal({
                title: (
                  <Group>
                    <IconAlertCircle />
                    <Title order={4}>{item.name}</Title>
                  </Group>
                ),
                children: <Text size='sm'>Are you sure you would like to delete this document?</Text>,
                labels: { confirm: 'Delete', cancel: 'Cancel' },
                confirmProps: { color: 'red' },
                onCancel: () => console.log(`Canceled Delete`),
                onConfirm: () => trashDocument(item),
              })
            }}>
            <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='outline' color='gray' component={Link} href={`${pathname}/${getPath(item.__typename)}/${item.slug}`}>
            <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            variant='outline'
            color='gray'
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
            <IconEye style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </ActionIcon.Group>
      </Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
  ))

  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Table.ScrollContainer minWidth={320}>
        <Table verticalSpacing='sm'>
          <Table.Thead>
            <Table.Tr>
              <Table.Th></Table.Th>
              <Table.Th>Modified</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Slug</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Card>
  )
}

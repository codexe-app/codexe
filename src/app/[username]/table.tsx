'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import { Avatar, Badge, Table, Group, Text, ActionIcon, Card, Title, Stack, rem } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { modals } from '@mantine/modals'
import Markdown from 'react-markdown'
import { IconPencil, IconEye, IconTrash, IconAlertCircle } from '@tabler/icons-react'
import dayjs from 'dayjs'

export default function DocumentsTable(props: any) {
  const doclist = props.data
  const client = generateClient()
  const pathname = usePathname()
  const router = useRouter()

  async function trashDocument(doc: any) {
    try {
      await client.graphql({ query: mutations.deleteDocument, variables: { input: { id: doc.id } } })
      notifications.show({
        title: doc.name,
        message: 'This document was deleted.',
      })
      router.refresh()
    } catch (error) {
      notifications.show({
        title: `There was an error deleting ${doc.name}`,
        message: JSON.stringify(error),
      })
      console.log(`There was a problem deleting the Doc :`, error)
    }
  }

  function getPath(type: any) {
    return type.toLowerCase() + 's'
  }

  const rows = doclist.map((doc: any) => (
    <Table.Tr key={doc.id}>
      <Table.Td>
        <Stack gap={0} align='center'>
          <Title order={6} tt='uppercase' lh={1}>
            {dayjs(doc.updatedAt).format('MMMM')}
          </Title>
          <Title order={3} lh={1}>
            {dayjs(doc.updatedAt).format('D')}
          </Title>
        </Stack>
      </Table.Td>
      <Table.Td pos='relative'>
        <Avatar src={doc.graphic.url} radius='xs' size='lg' />
        <Badge pos='absolute' bottom='0' w='58'>
          {doc.status}
        </Badge>
      </Table.Td>
      <Table.Td>
      <Title order={5} lh={1}>
          {doc.name}
        </Title>
      </Table.Td>
      <Table.Td>
        <Text fz='sm'>{doc.description}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz='sm' fw={500}>
          {doc.slug}
        </Text>
      </Table.Td>
      <Table.Td>
        <Badge variant='light'>{doc.__typename}</Badge>
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
                    <Title order={4}>{doc.name}</Title>
                  </Group>
                ),
                children: <Text size='sm'>Are you sure you would like to delete this document?</Text>,
                labels: { confirm: 'Delete', cancel: 'Cancel' },
                confirmProps: { color: 'red' },
                onCancel: () => console.log(`Canceled Delete`),
                onConfirm: () => trashDocument(doc),
              })
            }}>
            <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='outline' color='gray' component={Link} href={`${pathname}/${getPath(doc.__typename)}/${doc.slug}`}>
            <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            variant='outline'
            color='gray'
            onClick={() => {
              modals.open({
                title: doc.name,
                size: 'xl',
                padding: 'md',
                centered: true,
                zIndex: 1000,
                children: <Markdown>{doc.content}</Markdown>,
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

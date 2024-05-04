'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import { Avatar, Badge, Table, Group, Text, ActionIcon, Anchor, Title, Box, Container, rem } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { modals } from '@mantine/modals'
import Markdown from 'react-markdown'
import { IconPencil, IconEye, IconTrash, IconAlertCircle } from '@tabler/icons-react'
import dayjs from 'dayjs'

export default function DocumentsTable(data : any) {
  console.log(data)
  const doclist = data.data
  const client = generateClient()
  const pathname = usePathname()
  console.log(pathname)
  
  async function trashDocument(doc : any) {
    try {
      await client.graphql({ query: mutations.deleteDocument, variables: { input: { id : doc.id } } })
      notifications.show({
        title: doc.name,
        message: 'This document was deleted.',
      })
    } catch (error) {
      notifications.show({
        title: `There was an error deleting ${doc.name}`,
        message: JSON.stringify(error),
      })
      console.log(`There was a problem deleting the Doc :`, error)
    }
  }

  const rows = doclist.map((doc : any) => (
    <Table.Tr key={doc.id}>
      <Table.Td>
        <Text fz='sm'> {dayjs(doc.updatedAt).format('MMMM D, YYYY')}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz='sm' fw={500}>
          {doc.name}
        </Text>
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
        <Badge variant='light'>{doc.status}</Badge>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify='flex-end'>
        <ActionIcon
            variant='subtle'
            color='gray'
            onClick={() => {
              modals.openConfirmModal({
                title: <Group><IconAlertCircle /><Title order={4}>{doc.name}</Title></Group>,
                children: <Text size='sm'>Are you sure you would like to delete this document?</Text>,
                labels: { confirm: 'Delete', cancel: 'Cancel' },
                confirmProps: { color: 'red' },
                onCancel: () => console.log(`Canceled Delete`),
                onConfirm: () => trashDocument(doc),
              })
            }}>
            <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            variant='subtle'
            color='gray'
            component={Link}
            href={`${pathname}/documents/${doc.slug}`}>
            <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            variant='subtle'
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
        </Group>
      </Table.Td>
    </Table.Tr>
  ))

  return (
    <Table verticalSpacing='sm'>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Modified</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>Slug</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th />
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

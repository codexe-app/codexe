'use client'
import { Link } from '@/utils/router-events'
import { usePathname, useRouter } from 'next/navigation'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import { Avatar, Badge, Table, Group, Text, ActionIcon, Card, Title, rem } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { modals } from '@mantine/modals'
import { IconPencil, IconEye, IconTrash, IconAlertCircle } from '@tabler/icons-react'
import dayjs from 'dayjs'

export default function DiagramsTable(props: any) {
  const doclist = props.data
  const client = generateClient()
  const pathname = usePathname()
  const router = useRouter()

  function trashDiagram(diagram: any) {
    diagram.nodes.items.forEach((node: any, index: number) => {
      deletetheNode(node.id)
    })
    diagram.edges.items.forEach((edge: any, index: number) => {
      deletetheEdge(edge.id)
    })
    deletetheDiagram(diagram)
    router.refresh()
  }

  async function deletetheNode(nodeid: any) {
    try {
      await client.graphql({ query: mutations.deleteNode, variables: { input: { id: nodeid } } })
      notifications.show({
        title: nodeid,
        message: 'This Node was deleted.',
      })
    } catch (error) {
      notifications.show({
        title: `There was an error deleting ${nodeid}`,
        message: JSON.stringify(error),
      })
      console.log(`There was a problem deleting the Node :`, error)
    }
  }

  async function deletetheEdge(edgeid: any) {
    try {
      await client.graphql({ query: mutations.deleteEdge, variables: { input: { id: edgeid } } })
      notifications.show({
        title: edgeid,
        message: 'This Edge was deleted.',
      })
    } catch (error) {
      notifications.show({
        title: `There was an error deleting ${edgeid}`,
        message: JSON.stringify(error),
      })
      console.log(`There was a problem deleting the Edge :`, error)
    }
  }

  async function deletetheDiagram(diagram: any) {
    try {
      await client.graphql({ query: mutations.deleteDiagram, variables: { input: { id: diagram.id } } })
      notifications.show({
        title: diagram.name,
        message: 'This Diagram was deleted.',
      })
    } catch (error) {
      notifications.show({
        title: `There was an error deleting ${diagram.name}`,
        message: JSON.stringify(error),
      })
      console.log(`There was a problem deleting the Diagram :`, error)
    }
  }

  const rows = doclist.map((doc: any) => (
    <Table.Tr key={doc.id}>
      <Table.Td>
        <Avatar src={doc.graphic?.url} radius='xs' size='lg' />
      </Table.Td>
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
                title: (
                  <Group>
                    <IconAlertCircle />
                    <Title order={4}>{doc.name}</Title>
                  </Group>
                ),
                children: <Text size='sm'>Are you sure you would like to delete this diagram?</Text>,
                labels: { confirm: 'Delete', cancel: 'Cancel' },
                confirmProps: { color: 'red' },
                onCancel: () => console.log(`Canceled Delete`),
                onConfirm: () => trashDiagram(doc),
              })
            }}>
            <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='subtle' color='gray' component={Link} href={`${pathname}/${doc.slug}`}>
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
                children: <Text>I will have a Image Preview here soon</Text>,
              })
            }}>
            <IconEye style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ))

  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Table verticalSpacing='sm'>
        <Table.Thead>
          <Table.Tr>
            <Table.Th></Table.Th>
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
    </Card>
  )
}

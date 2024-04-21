'use client'
import Link from 'next/link'
import { Avatar, Badge, Table, Group, Text, ActionIcon, Anchor, Title, Box, Container, rem } from '@mantine/core'
import { IconPencil, IconTrash } from '@tabler/icons-react'

export default function Page(userlist) {

  const rows = userlist.userlist.map((item) => (
    <Table.Tr key={item.Username}>
      <Table.Td>
        <Group gap='sm'>
          <Avatar size={30} src={item.avatar} radius={30} />
          <Text fz='sm' fw={500}>
            {item.Username}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>
        <Badge variant='light'>{item.UserStatus}</Badge>
      </Table.Td>
      <Table.Td>
        <Anchor component='button' size='sm'>
          {item.email}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Text fz='sm'>{item.given_name}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz='sm'>{item.family_name}</Text>
      </Table.Td>
      <Table.Td></Table.Td>
      <Table.Td>
        <Group gap={0} justify='flex-end'>
          <ActionIcon variant='subtle' color='gray'>
            <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ))

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing='sm'>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Username</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>First Name</Table.Th>
            <Table.Th>Last Name</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  )
}

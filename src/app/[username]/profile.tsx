'use client'
import { ActionIcon, Avatar, Button, Card, Flex, Group, Menu, Space, Stack, Text, Title } from '@mantine/core'
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react'

const sectionStyle = {
  padding: 'var(--mantine-spacing-md)',
  borderTop: '1px solid lightdark(var(--mantine-colors-gray-3), var(--mantine-colors-dark-4))',
}

export default function ProfileCard(props: any) {
  const user = props.user

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section style={sectionStyle}>
        <Group justify='space-between'>
          <Avatar radius='xl'></Avatar>
          <Menu withinPortal position='bottom-end' shadow='sm'>
            <Menu.Target>
              <ActionIcon variant='subtle'>
                <IconDots size='1rem' />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item leftSection={<IconFileZip size={14} />}>Action One</Menu.Item>
              <Menu.Item leftSection={<IconEye size={14} />}>Action Two</Menu.Item>
              <Menu.Item leftSection={<IconTrash size={14} />} color='red'>
                Action Three
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
        <Space h='md' />
        <Flex direction='column'>
          <Title order={5}>
            {user.firstname} {user.lastname}
          </Title>
          <Space h='xs' />
          <Text fz='sm' c='dimmed' fw='500'>
            {user.email}
          </Text>
          <Space h='4' />
          <Text fz='lg' c='dimmed' fw='500'>
            {user.username}
          </Text>
        </Flex>
      </Card.Section>
    </Card>
  )
}

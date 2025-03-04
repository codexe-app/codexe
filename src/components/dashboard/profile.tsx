'use client'
import { Link } from '@/utils/router-events'
import { ActionIcon, Avatar, Card, Flex, Group, Menu, Space, Text, Title } from '@mantine/core'
import { IconDots, IconEdit } from '@tabler/icons-react'

const sectionStyle = {
  padding: 'var(--mantine-spacing-md)',
  borderTop: '1px solid lightdark(var(--mantine-colors-gray-3), var(--mantine-colors-dark-4))',
}

export default function ProfileCard(props: any) {
  const user = props.user

  return (
    <Card shadow='xs' padding='lg' withBorder w='100%' h='100%'>
      <Card.Section style={sectionStyle}>
        <Group justify='space-between'>
          <Avatar radius='xl' size='lg' src={user?.avatar?.url}></Avatar>
          <Menu withinPortal position='bottom-end' shadow='sm'>
            <Menu.Target>
              <ActionIcon variant='subtle'>
                <IconDots size='1rem' />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item leftSection={<IconEdit size={14} />} color='red' component={Link} href={`/${user.username}/profile`}>
                Edit Profile
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

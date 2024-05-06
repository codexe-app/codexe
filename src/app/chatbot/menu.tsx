import Link from 'next/link'
import { Menu, Text, rem} from '@mantine/core'
import { IconLogout, IconSearch, IconUsersGroup, IconIdBadge2, IconFilePlus, IconFiles, IconDashboard } from '@tabler/icons-react'

export default function UserMenu(props: any) {
  return (
    <Menu.Dropdown>
      <Menu.Label>Welcome {props.user.username}</Menu.Label>
      <Menu.Item leftSection={<IconDashboard style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${props.user.username}`}>
        Dashboard
      </Menu.Item>
      <Menu.Item leftSection={<IconIdBadge2 style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${props.user.username}/profile`}>
        Profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Label>Stuff</Menu.Label>
      <Menu.Item leftSection={<IconFiles style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${props.user.username}/documents`}>
        Documents
      </Menu.Item>
      <Menu.Item leftSection={<IconFilePlus style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/${props.user.username}/diagrams`}>
        Diagrams
      </Menu.Item>
      <Menu.Divider />
      <Menu.Label>Admin</Menu.Label>
      <Menu.Item leftSection={<IconUsersGroup style={{ width: rem(14), height: rem(14) }} />} component={Link} href={`/admin/users`}>
        Users
      </Menu.Item>
      <Menu.Item
        leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
        rightSection={
          <Text size='xs' c='dimmed'>
            ⌘K
          </Text>
        }>
        Search
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item color='red' leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />} onClick={props.handleSignOut}>
        Log Out
      </Menu.Item>
    </Menu.Dropdown>
  )
}

import { Stack, Flex, SimpleGrid } from '@mantine/core'
import ProfileCard from './profile'
import CreateCard from './create'
import RecentActivity from './recent'

export default async function Dashboard(props: any) {
  const { user, data } = props

  return (
    <Stack>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing='md' my='md'>
        <ProfileCard user={user} />
        <CreateCard user={user} />
      </SimpleGrid>
      <Flex direction='column' h='100%' justify='space-between' gap='md'>
        <RecentActivity data={data} user={user}/>
      </Flex>
    </Stack>
  )
}

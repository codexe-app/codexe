import { Stack, Flex, SimpleGrid, Grid, GridCol } from '@mantine/core'
import ProfileCard from './profile'
import PinnedCard from './pinned'
import CreateCard from './create'
import RecentActivity from './recent'

export default async function Dashboard(props: any) {
  const { user, data } = props

  return (
    <Stack>
      <Grid mt='md'>
        <GridCol span='auto'>
          <ProfileCard user={user} />
        </GridCol>
        <GridCol span='auto'>
          <PinnedCard />
        </GridCol>
        <GridCol span={{ base: 12, sm: 12, lg: 6 }}>
          <CreateCard user={user} />
        </GridCol>
      </Grid>
      <Flex direction='column' h='100%' justify='space-between' gap='md'>
        <RecentActivity data={data} user={user} />
      </Flex>
    </Stack>
  )
}

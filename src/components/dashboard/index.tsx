import { Stack, Flex, SimpleGrid, Grid, GridCol } from '@mantine/core'
import ProfileCard from './profile'
import PinnedCard from './pinned'
import StartCard from './start'
import RecentActivity from './recent'

export default async function Dashboard(props: any) {
  //console.log(`dashboard props: `, props)

  return (
    <Stack>
      <Grid mt='md'>
        <GridCol span='auto'>
          <ProfileCard user={props.user} />
        </GridCol>
        <GridCol span='auto'>
          <PinnedCard user={props.user} pinned={props.pinned}/>
        </GridCol>
        <GridCol span={{ base: 12, sm: 12, lg: 6 }}>
          <StartCard user={props.user} />
        </GridCol>
      </Grid>
      <Flex direction='column' h='100%' justify='space-between' gap='md'>
        <RecentActivity data={props.carousel} user={props.user} />
      </Flex>
    </Stack>
  )
}

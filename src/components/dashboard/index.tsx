import { Grid, GridCol } from '@mantine/core'
import ProfileCard from './profile'
import StartCard from './start'
import RecentActivity from './recent'
import CodexeInfo from './info'
import PinnedCard from './pinned'

export default async function Dashboard(props: any) {

  return (
    <Grid mt='md'>
      <GridCol span={{ base: 12, sm: 6, lg: 3 }} order={{ base: 1, sm: 1, md: 1, lg: 1 }}>
        <ProfileCard user={props.user} />
      </GridCol>
      <GridCol span={{ base: 12, sm: 12, lg: 6 }} order={{ base: 2, sm: 3, md: 3, lg: 2 }}>
        <StartCard user={props.user} />
      </GridCol>
      <GridCol span={{ base: 12, sm: 6, lg: 3 }} order={{ base: 3, sm: 2, md: 2, lg: 3 }}>
        <CodexeInfo user={props.user} docs={props.docs} />
      </GridCol>
      <GridCol span={{ base: 12, sm: 12, lg: 12 }} order={{ base: 4 }}>
        <RecentActivity data={props.carousel} user={props.user} />
      </GridCol>
    </Grid>
  )
}

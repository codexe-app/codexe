import Link from 'next/link'
import { Title, Text, Button, Container } from '@mantine/core'
import classes from './page.module.css'

export default function Page() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          Welcome
          <Text component='span' className={classes.highlight} inherit>
            to
          </Text>
          Admin
        </Title>

        <Container p={0} size={600}>
          <Text size='lg' c='dimmed' className={classes.description}>
            This is just to test user levels.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size='lg' variant='default' color='gray' component={Link} href='account/signin'>
            Sign In
          </Button>
          <Button className={classes.control} size='lg' component={Link} href='account/signup'>
            Sign Up
          </Button>
        </div>
      </div>
    </Container>
  )
}

import Link from 'next/link'
import { Title, Text, Button, Container } from '@mantine/core'
import { Dots } from '@/components/dots'
import classes from './page.module.css'

export default function HomePage() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <div className={classes.inner}>
        <Title className={classes.title}>
          What&nbsp;
          <Text component='span' className={classes.highlight} inherit>
            is&nbsp;
          </Text>
          CODEXE?
        </Title>
        <Container p={0} size={600}>
          <Text size='lg' c='dimmed' className={classes.description}>
            After over twenty years of looking for that one app that will help me organize my life, I have decided to create it. Wanna come along for the ride?
          </Text>
        </Container>
        <div className={classes.controls}>
          <Button className={classes.control} size='lg' component={Link} href='account/signin' variant='default' color='gray'>
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

import { Link } from '@/utils/router-events'
import { Title, Text, Button, Container, BackgroundImage, Flex, Stack } from '@mantine/core'
import Shell from '@/app/shell'
import classes from './page.module.css'

export default function HomePage() {

  function Content() {
    return (
      <Flex justify='space-around' align='center' className={classes.inner}>
        <Stack>
          <Title className={classes.title}>
            Welcome&nbsp;
            <Text component='span' className={classes.highlight} inherit>
              to&nbsp;
            </Text>
            CODEXE
          </Title>
          <Container p={0} size={600}>
            <Text size='lg' c='dimmed' className={classes.description}>
              21st Century Journaling
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
        </Stack>
      </Flex>
    )
  }

  return (
    <Shell>
      <Container className={classes.wrapper} size='responsive' px={0}>
        <BackgroundImage src='/images/dots-dark.svg' lightHidden>
          <Content />
        </BackgroundImage>
        <BackgroundImage src='/images/dots-light.svg' darkHidden>
          <Content />
        </BackgroundImage>
      </Container>
    </Shell>
  )
}

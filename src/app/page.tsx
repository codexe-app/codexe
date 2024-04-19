import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from '@/components/dots';
import classes from './page.module.css';

export default function HomePage() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Next{' '}
          <Text component="span" className={classes.highlight} inherit>
            and
          </Text>{' '}
          Mantine
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Next and Mantine have been installed.  This is just an example homepage to test before committing the code.  The next step will be adding Amplify and getting it deployed.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
            Click Me
          </Button>
          <Button className={classes.control} size="lg">
            No, Click Me
          </Button>
        </div>
      </div>
    </Container>
  );
}
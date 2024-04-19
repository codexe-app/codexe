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
          Welcome{' '}
          <Text component="span" className={classes.highlight} inherit>
            to
          </Text>{' '}
          Codexe
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Next React App has been created.  Amplify App has been deployed.  Mantine is set up with AppShell.
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
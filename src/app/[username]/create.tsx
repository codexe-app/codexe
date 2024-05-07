import Link from 'next/link'
import { BackgroundImage, Button, Text, Title, Group, Stack } from '@mantine/core'
import classes from './dash.module.css'

export default async function CreateCard(props: any) {
  const user = props.user
  const image = await getData()

  if ( image.media_type != 'image') {
    image.url = 'https://apod.nasa.gov/apod/image/2405/BhShredder_NASA_1080.jpg'
  }

  async function getData() {
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  return (
    <BackgroundImage src={image.url} h='100%' p='xl' radius='md'>
      <Stack>
        <Title order={3} fw={700} className={classes.title}>
          Create Item
        </Title>
        <Text size='sm' className={classes.description}>
          It all starts with some kind of information.
        </Text>
        <Group>
          <Button component={Link} href={`/${user.username}/documents/new`}>
            Create Document
          </Button>
          <Button component={Link} href={`/${user.username}/diagrams/new`}>
            Create Diagram
          </Button>
        </Group>
      </Stack>
    </BackgroundImage>
  )
}

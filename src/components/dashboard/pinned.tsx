import Link from 'next/link'
import { Paper, Button, Text, Title, Group, Stack } from '@mantine/core'
import { IconHierarchy2, IconFiles } from '@tabler/icons-react'

export default async function PinnedCard(props: any) {
  const user = props.user
  var imageurl
  const image = await getData()

  if ( image.media_type != 'image') {
   imageurl = 'https://apod.nasa.gov/apod/image/2405/BhShredder_NASA_1080.jpg'
  } else {
    imageurl = image.url
  }

  async function getData() {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`)
    if (!res.ok) {
      return 'https://apod.nasa.gov/apod/image/2405/BhShredder_NASA_1080.jpg'
    }
    return res.json()
  }

  return (
    <Paper h='100%' p='xl' radius='md' bg='var(--mantine-color-primary-2)'>
      <Stack>
        <Title order={3} fw={700} c='var(--mantine-color-primary-9)'>
          Pinned Item
        </Title>
        <Text size='sm' c='var(--mantine-color-primary-7)'>
          Will go here
        </Text>
        <Group>
        </Group>
      </Stack>
    </Paper>
  )
}

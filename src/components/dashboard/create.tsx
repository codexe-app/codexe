import Link from 'next/link'
import { BackgroundImage, Button, Text, Title, Group, Stack } from '@mantine/core'
import { IconHierarchy2, IconFiles } from '@tabler/icons-react'

export default async function CreateCard(props: any) {
  const user = props.user
  var imageurl
  //const image = await getData()

  //if ( image.media_type != 'image') {
  //  imageurl = 'https://apod.nasa.gov/apod/image/2405/BhShredder_NASA_1080.jpg'
  //} else {
  //  imageurl = image.url
  //}

  async function getData() {
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    if (!res.ok) {
      return 'https://apod.nasa.gov/apod/image/2405/BhShredder_NASA_1080.jpg'
    }
    return res.json()
  }

  imageurl = 'https://apod.nasa.gov/apod/image/2405/BhShredder_NASA_1080.jpg'

  return (
    <BackgroundImage src={imageurl} h='100%' p='xl' radius='md'>
      <Stack>
        <Title order={3} fw={700} c='var(--mantine-color-primary-2)'>
          Create Item
        </Title>
        <Text size='sm' c='var(--mantine-color-primary-1)'>
          It all starts with some kind of information.
        </Text>
        <Group>
          <Button rightSection={<IconFiles size={14} />} component={Link} href={`/tekfunkdub/documents/new`}>
            Create Document
          </Button>
          <Button rightSection={<IconHierarchy2 size={14} />} component={Link} href={`/tekfunkdub/diagrams/new`}>
            Create Diagram
          </Button>
        </Group>
      </Stack>
    </BackgroundImage>
  )
}

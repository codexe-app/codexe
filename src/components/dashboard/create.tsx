import Link from 'next/link'
import { BackgroundImage, Button, Text, Title, Group, Stack, Popover, Box } from '@mantine/core'
import { IconHierarchy2, IconFiles, IconRocket } from '@tabler/icons-react'
import APODcredit from './apod'

export default async function CreateCard(props: any) {
  const user = props.user
  var imageurl
  const image = await getData()

  if (image.media_type != 'image') {
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
    <BackgroundImage src={imageurl} h='100%' p='xl' pos='relative'> 
      <Stack>
        <Group justify='start' wrap='nowrap' gap='xs'>
          <IconRocket size='2rem' color='var(--mantine-color-primary-2)' />
          <Title order={3} c='var(--mantine-color-primary-2)'>
            Start Something New
          </Title>
        </Group>
        <Text size='sm' c='var(--mantine-color-primary-2)'>
          Get down an idea or store that information...
        </Text>
        <Group>
          <Button rightSection={<IconFiles size={14} />} component={Link} href={`/${user.username}/documents/new`}>
            New Document
          </Button>
          <Button rightSection={<IconHierarchy2 size={14} />} component={Link} href={`/${user.username}/diagrams/new`}>
            New Diagram
          </Button>
        </Group>
      </Stack>
      <APODcredit image={image} />
    </BackgroundImage>
  )
}

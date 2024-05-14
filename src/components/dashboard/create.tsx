import Link from 'next/link'
import { BackgroundImage, Button, Text, Title, Group, Stack, Popover, Box } from '@mantine/core'
import { IconHierarchy2, IconFiles, IconRocket } from '@tabler/icons-react'
import APODcredit from './apod'

export default async function CreateCard(props: any) {
  const user = props.user

  var image = await getData()

  if (image.media_type != 'image') {
    image = {
      title: 'Ta Prohm',
      explanation: 'Way back in 2004 we took a trip to Thailand and Cambodia. Part of it was spent at Angkor, and one of the more impressive templates we visited was Ta Phrohm, the one in which they left to the jungle.',
      copyright: 'Rex Wesley Reyes',
      hdurl: 'https://media.casadereyes.net/2004/05/17/IMG_0813-scaled.jpg',
      url: 'https://media.casadereyes.net/2004/05/17/IMG_0813.jpg',
    }
  }

  async function getData() {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`)
    if (!res.ok) {
      return ''
    }
    return res.json()
  }

  return (
    <BackgroundImage src={image.url} h='100%' p='xl' pos='relative'>
      <Stack>
        <Group justify='start' wrap='nowrap' gap='xs'>
          <IconRocket size='2rem' color='var(--mantine-primary-color-2)' />
          <Title order={3} c='var(--mantine-primary-color-2)'>
            Start Something New
          </Title>
        </Group>
        <Text size='sm' c='var(--mantine-primary-color-2)'>
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

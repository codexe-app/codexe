import { Link } from '@/utils/router-events'
import { BackgroundImage, Button, Text, Title, Group, Stack, Flex, Overlay } from '@mantine/core'
import { IconHierarchy2, IconFiles, IconRocket } from '@tabler/icons-react'
import APODcredit from './apod'
import classes from './dash.module.scss'

interface ImageData {
  title: string | ''
  explanation: string | ''
  media_type: string | ''
  copyright: string | ''
  hdurl: string | ''
  url: string | ''
}

export default async function StartCard(props: any) {
  //console.log(`StartCard Props : `, props)
  const user = props.user
  
  var image: ImageData = { title: '', explanation: '', media_type: '', copyright: '', hdurl: '', url: '' }
  image = await getData()
  if (image.media_type != 'image') {
    image = {
      title: 'Ta Prohm',
      explanation: 'Way back in 2004 we took a trip to Thailand and Cambodia. Part of it was spent at Angkor, and one of the more impressive templates we visited was Ta Phrohm, the one in which they left to the jungle.',
      copyright: 'Rex Wesley Reyes',
      hdurl: 'https://media.casadereyes.net/2004/05/17/IMG_0813-scaled.jpg',
      url: 'https://media.casadereyes.net/2004/05/17/IMG_0813.jpg',
      media_type: 'fallback',
    }
  }

  async function getData() {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`, {
        signal: AbortSignal.timeout(5000),
      })
      //console.log(response)
      return response.json()
    } catch (error) {
      console.log(`There was an error connecting to the NASA API :`, error)
      return ''
    }
  }

  return (
    <BackgroundImage src={image.url} h='100%' p='xl' pos='relative'>
      <Overlay color='#000' backgroundOpacity={0.5} zIndex={0} />
      <Stack className={classes.hero}>
        <Flex justify='start' wrap='nowrap' gap='xs'>
          <IconRocket size='2rem' color='var(--mantine-primary-color-1)' />
          <Title order={3} c='var(--mantine-primary-color-1)'>
            Start Something New
          </Title>
        </Flex>
        <Text size='sm' fw='600' c='var(--mantine-primary-color-1)'>
          Get down an idea. Store that info.
        </Text>
        <Group>
          <Button rightSection={<IconFiles size={14} />} component={Link} href={`/${user.username}/documents/new`}>
            New Document
          </Button>
          <Button variant='outline' color='var(--mantine-primary-color-4)' rightSection={<IconHierarchy2 size={14} />} component={Link} href={`/${user.username}/diagrams/new`}>
            New Diagram
          </Button>
        </Group>
      </Stack>
      <APODcredit image={image} />
    </BackgroundImage>
  )
}

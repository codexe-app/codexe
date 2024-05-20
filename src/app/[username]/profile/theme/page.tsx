'use client'
import { useEffect, useState } from 'react'
import { Container, BackgroundImage, ComboboxItem, Select, Stack, Group, Code, Paper, ColorInput, Overlay, SimpleGrid, Box, Card, Title, Text, Flex, Button, Slider } from '@mantine/core'
import { IconHierarchy2, IconFiles, IconRocket } from '@tabler/icons-react'
import { generateClient } from 'aws-amplify/api'
import { getCurrentUser, signOut } from 'aws-amplify/auth'
import { getUser, listSpotlights } from '@/graphql/queries'
import type { User, Spotlight as SpotlightEntry } from '@/graphql/API'
import CopytoClipboard from '@/components/clipboard'

const tachyon = ['#D2EDEE', '#C3E7E9', '#B4E2E4', '#A5DCDF', '#96D6D9', '#87D0D4', '#78CACE', '#69C4C9', '#5ABEC4', '#4BB8BE']
const earth = ['#fef5e8', '#f3ead9', '#e5d3b6', '#d5bb8e', '#c9a66e', '#c19958', '#be924b', '#a77f3c', '#957032', '#826026']
const cupcake = ['#8943B1', '#7E3EA3', '#673285', '#673285', '#5B2D76', '#502768', '#452259', '#3A1C4A', '#2E163B', '#23112D']
const aurora = ['#BF616A', '#D08770', '#EBCB8B', '#A3BE8C', '#B48EAD', '#BF616A', '#D08770', '#EBCB8B', '#A3BE8C', '#B48EAD']

export default function Page() {
  const [value, setValue] = useState<ComboboxItem | null>(null)
  const [theuser, setTheuser] = useState<User>()
  const [colourwheel, setColourwheel] = useState(aurora)
  const [primaryShadeLight, setPrimaryShadeLight] = useState<number>(8)
  const [primaryShadeDark, setPrimaryShadeDark] = useState<number>(1)
  const [white, setWhite] = useState('#ffffff')
  const [black, setBlack] = useState('#000000')
  const [primary0, setPrimary0] = useState('#D2EDEE')
  const [primary1, setPrimary1] = useState('#C3E7E9')
  const [primary2, setPrimary2] = useState('#B4E2E4')
  const [primary3, setPrimary3] = useState('#A5DCDF')
  const [primary4, setPrimary4] = useState('#96D6D9')
  const [primary5, setPrimary5] = useState('#87D0D4')
  const [primary6, setPrimary6] = useState('#78CACE')
  const [primary7, setPrimary7] = useState('#69C4C9')
  const [primary8, setPrimary8] = useState('#5ABEC4')
  const [primary9, setPrimary9] = useState('#C3E7E9')
  const client = generateClient()

  function loadShades() {
    setPrimary0(colourwheel[0])
    setPrimary1(colourwheel[1])
    setPrimary2(colourwheel[2])
    setPrimary3(colourwheel[3])
    setPrimary4(colourwheel[4])
    setPrimary5(colourwheel[5])
    setPrimary6(colourwheel[6])
    setPrimary7(colourwheel[7])
    setPrimary8(colourwheel[8])
    setPrimary9(colourwheel[9])
  }

  function newShades() {
    const newwheel = [primary0, primary1, primary2, primary3, primary4, primary5, primary6, primary7, primary8, primary9]
    setColourwheel(newwheel)
  }

  function getFilledLightColor() {
    const thecolor = colourwheel[primaryShadeLight]
    return thecolor
  }

  function getFilledDarkColor() {
    const thecolor = colourwheel[primaryShadeDark]
    return thecolor
  }

  async function AuthGetCurrentUser() {
    try {
      const { userId } = await getCurrentUser()
      const response = (await client.graphql({
        query: getUser,
        variables: {
          id: userId,
        },
      })) as {
        data: {
          getUser: User
        }
      }
      setTheuser(response.data.getUser)
      console.log(response.data.getUser)
    } catch (error) {
      console.error(error)
    }
  }

  function chooseTheme(value: any) {
    setColourwheel(value)
    setValue(value)
  }

  useEffect(() => {
    AuthGetCurrentUser()
    loadShades()
  }, [])

  return (
    <Container size='responsive' p='lg'>
      <Stack>
        <Title order={3} c={getFilledLightColor()}>
          Choose Your Palette
        </Title>
        <Paper withBorder p='lg'>
          <Flex mb='xs' justify='space-between'>
            <Group gap={0}>
              <Code>{JSON.stringify(colourwheel)}</Code>
              <CopytoClipboard />
            </Group>
            <Button onClick={newShades} variant='filled' color={getFilledLightColor()}>
              LOAD COLORS
            </Button>
          </Flex>
          <Group wrap='nowrap'>
            <Group wrap='nowrap'>
              <Stack>
                <Box bg={primary0} h={120}></Box>
                <ColorInput value={primary0} onChange={setPrimary0} />
                <Code>primary-0</Code>
              </Stack>
              <Stack>
                <Box bg={primary1} h={120}></Box>
                <ColorInput value={primary1} onChange={setPrimary1} />
                <Code>primary-1</Code>
              </Stack>
              <Stack>
                <Box bg={primary2} h={120}></Box>
                <ColorInput value={primary2} onChange={setPrimary2} />
                <Code>primary-2</Code>
              </Stack>
              <Stack>
                <Box bg={primary3} h={120}></Box>
                <ColorInput value={primary3} onChange={setPrimary3} />
                <Code>primary-3</Code>
              </Stack>
              <Stack>
                <Box bg={primary4} h={120}></Box>
                <ColorInput value={primary4} onChange={setPrimary4} />
                <Code>primary-4</Code>
              </Stack>
              <Stack>
                <Box bg={primary5} h={120}></Box>
                <ColorInput value={primary5} onChange={setPrimary5} />
                <Code>primary-5</Code>
              </Stack>
              <Stack>
                <Box bg={primary6} h={120}></Box>
                <ColorInput value={primary6} onChange={setPrimary6} />
                <Code>primary-6</Code>
              </Stack>
              <Stack>
                <Box bg={primary7} h={120}></Box>
                <ColorInput value={primary7} onChange={setPrimary7} />
                <Code>primary-7</Code>
              </Stack>
              <Stack>
                <Box bg={primary8} h={120}></Box>
                <ColorInput value={primary8} onChange={setPrimary8} />
                <Code>primary-8</Code>
              </Stack>
              <Stack>
                <Box bg={primary9} h={120}></Box>
                <ColorInput value={primary9} onChange={setPrimary9} />
                <Code>primary-9</Code>
              </Stack>
            </Group>
            <Group wrap='nowrap'>
              <Stack>
                <Box bg={black} h={120}></Box>
                <ColorInput value={black} onChange={setBlack} />
                <Code>black</Code>
              </Stack>
              <Stack>
                <Box bg={white} h={120}></Box>
                <ColorInput value={white} onChange={setWhite} />
                <Code>white</Code>
              </Stack>
            </Group>
          </Group>
        </Paper>
        <Paper withBorder p='lg' bg={white}>
          <Title order={1} c={getFilledLightColor()}>
            Light Mode
          </Title>
          <SimpleGrid cols={3}>
            <Stack>
              <Text c={black}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </Stack>
            <Card withBorder>
              <Title order={4} c={getFilledLightColor()}>
                Primary Shade Light
              </Title>
              <Slider
                w='100%'
                mb='xl'
                min={0}
                max={9}
                color={getFilledLightColor()}
                value={primaryShadeLight}
                onChange={setPrimaryShadeLight}
                marks={[
                  { value: 0, label: '0' },
                  { value: 1, label: '1' },
                  { value: 2, label: '2' },
                  { value: 3, label: '3' },
                  { value: 4, label: '4' },
                  { value: 5, label: '5' },
                  { value: 6, label: '6' },
                  { value: 7, label: '7' },
                  { value: 8, label: '8' },
                  { value: 9, label: '9' },
                ]}
              />
            </Card>
            <Card withBorder p='xs'></Card>
          </SimpleGrid>
          <SimpleGrid cols={3}>
            <BackgroundImage src='https://media.casadereyes.net/2004/05/17/IMG_0813.jpg' h='100%' p='xl' pos='relative'>
              <Overlay color='#000' backgroundOpacity={0.5} zIndex={0} />
              <Stack style={{ position: 'relative', zIndex: 1 }}>
                <Flex justify='start' wrap='nowrap' gap='xs'>
                  <IconRocket size='2rem' color={primary0} />
                  <Title order={3} c={primary0}>
                    Start Something New
                  </Title>
                </Flex>
                <Text size='sm' fw='600' c={primary0}>
                  Get down an idea. Store that info.
                </Text>
                <Group>
                  <Button rightSection={<IconFiles size={14} />}>New Document</Button>
                  <Button color={getFilledLightColor()} rightSection={<IconHierarchy2 size={14} />}>
                    New Diagram
                  </Button>
                </Group>
              </Stack>
            </BackgroundImage>
          </SimpleGrid>
        </Paper>
        <Paper withBorder p='lg' bg={black}>
          <Title order={1} c={getFilledDarkColor()}>
            Dark Mode
          </Title>
          <SimpleGrid cols={3}>
            <Stack>
              <Text c={white}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </Stack>
            <Card withBorder bg={black}>
              <Title order={4} c={getFilledDarkColor()}>
                Primary Shade Dark
              </Title>
              <Slider
                w='100%'
                mb='xl'
                min={0}
                max={9}
                color={getFilledDarkColor()}
                value={primaryShadeDark}
                onChange={setPrimaryShadeDark}
                marks={[
                  { value: 0, label: '0' },
                  { value: 1, label: '1' },
                  { value: 2, label: '2' },
                  { value: 3, label: '3' },
                  { value: 4, label: '4' },
                  { value: 5, label: '5' },
                  { value: 6, label: '6' },
                  { value: 7, label: '7' },
                  { value: 8, label: '8' },
                  { value: 9, label: '9' },
                ]}
              />
            </Card>
            <Card withBorder p='xs' bg={black}></Card>
          </SimpleGrid>
          <SimpleGrid cols={3}></SimpleGrid>
        </Paper>
      </Stack>
    </Container>
  )
}

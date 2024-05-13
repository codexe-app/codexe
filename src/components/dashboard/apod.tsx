'use client'
import { ScrollArea, ActionIcon, Text, Title, Group, Paper, Stack, Popover, Box, rem } from '@mantine/core'
import { IconCopyright } from '@tabler/icons-react'

export default function APODcredit(props: any) {
  const { image } = props
  var header

  if (image.copyright == 'Rex Wesley Reyes') {
    header = 'Random Travel Image'
  } else {
    header = 'NASA Astronomy Picture of the Day'
  }
  
  return (
    <Box pos='absolute' right='4px' bottom='0'>
      <Popover width={300} position='left' withArrow shadow='md'>
        <Popover.Target>
          <ActionIcon variant='transparent' color='white'>
            <IconCopyright style={{ width: rem(32), height: rem(32) }} stroke={2} />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <Stack style={{ overflow: 'hidden' }} gap='xs'>
            <Text c='dimmed' fw='600' size='xs'>
              {header}
            </Text>
            <Title order={4}>{image.title}</Title>
            <Text size='xs' c='dimmed' w='300px' style={{ textOverflow: 'ellipsis' }}>
              {image.hdurl}
            </Text>
            <Paper withBorder bg='var(--mantine-color-gray-light-hover)'>
              <ScrollArea h={140} p='xs'>
                <Text size='xs' c='dimmed'>
                  {image.explanation}
                </Text>
              </ScrollArea>
            </Paper>
            <Group align='center' justify='start' gap='xs'>
              <IconCopyright color='var(--mantine-color-dimmed)' />
              <Text c='dimmed' fw='600' size='xs' lh='1'>
                {image.copyright}
              </Text>
            </Group>
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </Box>
  )
}

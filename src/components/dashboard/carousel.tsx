'use client'
import { Link } from '@/utils/router-events'
import { usePathname, useRouter } from 'next/navigation'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import { notifications } from '@mantine/notifications'
import { Carousel } from '@mantine/carousel'
import { modals } from '@mantine/modals'
import { Flex, Badge, Group, Code, Text, ActionIcon, Card, Title, Stack, AspectRatio, Image, rem } from '@mantine/core'
import { IconPencil, IconEye, IconTrash, IconAlertCircle } from '@tabler/icons-react'
import dayjs from 'dayjs'
import DocumentView from './view'
import '@mantine/carousel/styles.css'
import classes from './dash.module.scss'

export default function RecentCarousel(props: any) {
  const client = generateClient()
  const router = useRouter()
  const items = props.data
  const pathname = usePathname()

  function getPath(type: any) {
    return type.toLowerCase() + 's'
  }

  async function trashDocument(doc: any) {
    try {
      await client.graphql({ query: mutations.deleteDocument, variables: { input: { id: doc.id } } })
      notifications.show({
        title: doc.name,
        message: 'This document was deleted.',
      })
      router.refresh()
    } catch (error) {
      notifications.show({
        title: `There was an error deleting ${doc.name}`,
        message: JSON.stringify(error),
      })
      console.log(`There was a problem deleting the Doc :`, error)
    }
  }

  return (
    <Carousel slideSize={{ base: '100%', xs: '50%', sm: '33.333%', md: '16.67%' }} slideGap='md' loop align='start' slidesToScroll={2} controlsOffset={0} classNames={classes}>
      {items.map((item: any) => (
        <Carousel.Slide key={item.id}>
          <Card withBorder>
            <Card.Section pos='relative'>
              <Group pos='absolute' justify='space-between' wrap='nowrap' w='100%'>
                <Badge radius='xs'>{item.__typename}</Badge>
                <Badge color='var(--mantine-primary-color-4)'  radius='xs'>{item.status}</Badge>
              </Group>
              <AspectRatio ratio={16 / 9}>
                <Image src={item.graphic.url} />
              </AspectRatio>
            </Card.Section>
            <Card.Section>
              <Group gap='xs' m='xs' wrap='nowrap' align='start'>
                <Stack gap={0} align='center'>
                  <Text tt='uppercase' lh={1} fz='10px' fw='600' c='var(--mantine-primary-color-6)'>
                    {dayjs(item.updatedAt).format('MMMM')}
                  </Text>
                  <Title order={4} lh={0.75} c='var(--mantine-primary-color-6)'>
                    {dayjs(item.updatedAt).format('D')}
                  </Title>
                </Stack>
                <Title order={6} lh={1}>
                  {item.name}
                </Title>
              </Group>
            </Card.Section>
            <Card.Section flex={1}>
              <Flex align='start' p='xs'>
                <Text fz='xs' lh={1.25} c='gray.6'>
                  {item.description}
                </Text>
              </Flex>
            </Card.Section>
            <Card.Section>
              <Flex justify='end' mr='4' mb='4'>
                <ActionIcon.Group>
                  <ActionIcon
                    variant='outline'
                    color='orange'
                    onClick={() => {
                      modals.openConfirmModal({
                        title: (
                          <Group>
                            <IconAlertCircle />
                            <Title order={4}>{item.name}</Title>
                          </Group>
                        ),
                        children: <Text size='sm'>Are you sure you would like to delete this document?</Text>,
                        labels: { confirm: 'Delete', cancel: 'Cancel' },
                        confirmProps: { color: 'red' },
                        onCancel: () => console.log(`Canceled Delete`),
                        onConfirm: () => trashDocument(item),
                      })
                    }}>
                    <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                  </ActionIcon>
                  <ActionIcon variant='outline' color='var(--mantine-primary-color-4)' component={Link} href={`${pathname}/${getPath(item.__typename)}/${item.slug}`}>
                    <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                  </ActionIcon>
                  <ActionIcon
                    variant='outline'
                    color='purple'
                    onClick={() => {
                      modals.open({
                        title: <Code>`${item.name} - ${item.updatedAt}`</Code>,
                        size: 'xl',
                        padding: 'md',
                        fullScreen: true,
                        centered: true,
                        zIndex: 1000,
                        children: <DocumentView content={item.content} />,
                      })
                    }}>
                    <IconEye style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                  </ActionIcon>
                </ActionIcon.Group>
              </Flex>
            </Card.Section>
          </Card>
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}

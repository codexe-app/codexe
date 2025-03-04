'use client'
import React, { useState, useEffect } from 'react'
import { Link } from '@/utils/router-events'
import { usePathname, useRouter } from 'next/navigation'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import { notifications } from '@mantine/notifications'
import { Flex, Badge, Group, Text, Overlay, BackgroundImage, Button, ActionIcon, Card, Title, Stack, AspectRatio, Image, rem, SimpleGrid } from '@mantine/core'
import { IconPencil, IconEye, IconFiles, IconTrash, IconPinned, IconAlertCircle } from '@tabler/icons-react'
import { modals } from '@mantine/modals'
import dayjs from 'dayjs'
import DocumentView from './view'
import classes from './dash.module.scss'

export default function PinnedCard(props: any) {
  //console.log(`PinnedCard Props: `, props)
  const client = generateClient()
  const router = useRouter()
  const { user, pinned } = props
  const [haspinned, setHaspinned] = useState(false)

  function getPath(type: any) {
    return type?.toLowerCase() + 's'
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

  useEffect(() => {
    if (pinned.length > 0) {
      setHaspinned(true)
    }
  }, [])

  return (
    <Card shadow='xs' padding='sm' withBorder w='100%'>
      {haspinned ? (
        <React.Fragment>
          <Group justify='start' wrap='nowrap' gap='xs' mb='xs'>
            <IconPinned color='var(--mantine-primary-color-filled)' />
            <Title order={5}>Pinned Items</Title>
          </Group>
          <SimpleGrid cols={{ base: 1, sm: 3 }}>
            {pinned.map((item: any) => (
              <AspectRatio ratio={1 / 1} key={item.id}>
                <BackgroundImage src={item?.graphic?.url} radius='0' pos='relative'>
                  <Stack align='center' className={classes.content} pt='xs' gap='xs'>
                    <Badge>{item?.__typename}</Badge>
                    <Stack align='center' gap={2}>
                      <Text tt='uppercase' lh={1} fz='.7rem' fw='600' c='var(--mantine-color-gray-0)'>
                        {dayjs(item?.createdAt).format('MMMM')}
                      </Text>
                      <Title order={4} lh={0.75} c='var(--mantine-color-gray-0)'>
                        {dayjs(item?.createdAt).format('D')}
                      </Title>
                    </Stack>
                    <Title order={4} lh={1} c='var(--mantine-color-gray-0)' ta='center' px='xs'>
                      {item?.name}
                    </Title>
                    <Text fz='xs' fw={500} lh={1.25} c='var(--mantine-color-gray-0)' ta='center' px='xs'>
                      {item?.description}
                    </Text>
                    <Flex justify='center' mr='4' mb='4' pos='absolute' bottom={2} w='100%' px='xl'>
                      <ActionIcon.Group>
                        <ActionIcon
                          variant='outline'
                          color='white'
                          onClick={() => {
                            modals.openConfirmModal({
                              title: (
                                <Group>
                                  <IconAlertCircle />
                                  <Title order={4}>{item?.name}</Title>
                                </Group>
                              ),
                              children: <Text size='sm'>Are you sure you would like to delete this document?</Text>,
                              labels: { confirm: 'Delete', cancel: 'Cancel' },
                              confirmProps: { color: 'red' },
                              onCancel: () => console.log(`Canceled Delete`),
                              onConfirm: () => trashDocument(pinned),
                            })
                          }}>
                          <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon variant='outline' color='white' component={Link} href={`${user.username}/${getPath(item?.__typename)}/${item?.slug}`}>
                          <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon
                          variant='outline'
                          color='white'
                          onClick={() => {
                            modals.open({
                              title: `${item?.name} - ${item?.updatedAt}`,
                              size: 'xl',
                              padding: 'md',
                              fullScreen: true,
                              centered: true,
                              zIndex: 1000,
                              children: <DocumentView content={item?.content} />,
                            })
                          }}>
                          <IconEye style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                        </ActionIcon>
                      </ActionIcon.Group>
                    </Flex>
                  </Stack>
                  <Overlay gradient='linear-gradient(20deg, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0) 100%)' opacity={0.95} zIndex={0} />
                </BackgroundImage>
              </AspectRatio>
            ))}
          </SimpleGrid>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Group justify='start' wrap='nowrap' gap='xs'>
            <IconPinned color='var(--mantine-primary-color-filled)' />
            <Title order={5}>Pinned Items</Title>
          </Group>
          <Stack align='start'>
            <Title order={4} mt='xs'>
              You have no Pinned Content
            </Title>
            <Text size='sm' c='dimmed'>
              Goto your Documents list and Pin some items
            </Text>
            <Button leftSection={<IconFiles size={14} />} component={Link} href={`/${user.username}/documents`}>
              Documents
            </Button>
          </Stack>
        </React.Fragment>
      )}
    </Card>
  )
}

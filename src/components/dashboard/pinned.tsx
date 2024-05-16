'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import { notifications } from '@mantine/notifications'
import { Flex, Badge, Group, Text, Box, ActionIcon, Card, Title, Stack, AspectRatio, Image, rem } from '@mantine/core'
import { IconPencil, IconEye, IconTrash, IconPinned, IconAlertCircle } from '@tabler/icons-react'
import { modals } from '@mantine/modals'
import dayjs from 'dayjs'
import DocumentView from './view'

export default function PinnedCard(props: any) {
  //console.log(`PinnedCard Props: `, props)
  const client = generateClient()
  const router = useRouter()
  const { user, pinned } = props

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

  return (
    <Card shadow='xs' padding='sm' withBorder w='100%' h='240px'>
      <Box pos='absolute' top='-4px' right='0'>
        <Badge radius='sm'>{pinned?.status}</Badge>
      </Box>
      <Group justify='start' wrap='nowrap' gap='xs'>
        <IconPinned color='var(--mantine-primary-color-filled)' />
        <Title order={5}>Revisit</Title>
      </Group>
      <Card.Section flex='1'>
        <Group justify='start' wrap='nowrap' mt='sm'>
          <AspectRatio ratio={1 / 1} w='140px'>
            <Image src={pinned?.graphic?.url} />
          </AspectRatio>
          <Stack align='start'>
            <Group>
              <Stack gap={0} align='center'>
                <Text tt='uppercase' lh={1} fz='.9rem' fw='600' c='var(--mantine-primary-color-filled)'>
                  {dayjs(pinned?.updatedAt).format('MMMM')}
                </Text>
                <Title order={3} lh={0.75} c='var(--mantine-primary-color-filled)'>
                  {dayjs(pinned?.updatedAt).format('D')}
                </Title>
              </Stack>
              <Title order={5} lh={1}>
                {pinned?.name}
              </Title>
            </Group>
            <Text fz='xs' lh={1.25} c='gray.6'>
              {pinned?.description}
            </Text>
            <Badge>{pinned?.__typename}</Badge>
          </Stack>
        </Group>
      </Card.Section>
      <Card.Section>
        <Flex justify='end' mr='4' mb='4'>
          <ActionIcon.Group>
            <ActionIcon
              variant='outline'
              color='var(--mantine-color-red-4)'
              onClick={() => {
                modals.openConfirmModal({
                  title: (
                    <Group>
                      <IconAlertCircle />
                      <Title order={4}>{pinned?.name}</Title>
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
            <ActionIcon variant='outline' component={Link} href={`${user.username}/${getPath(pinned?.__typename)}/${pinned?.slug}`} color='var(--mantine-primary-color-6)'>
              <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              variant='outline'
              onClick={() => {
                modals.open({
                  title: `${pinned?.name} - ${pinned?.updatedAt}`,
                  size: 'xl',
                  padding: 'md',
                  fullScreen: true,
                  centered: true,
                  zIndex: 1000,
                  children: <DocumentView content={pinned?.content} />,
                })
              }}>
              <IconEye style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            </ActionIcon>
          </ActionIcon.Group>
        </Flex>
      </Card.Section>
    </Card>
  )
}

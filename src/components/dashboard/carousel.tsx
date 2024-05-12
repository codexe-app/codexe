'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Carousel } from '@mantine/carousel'
import { modals } from '@mantine/modals'
import { Flex, Badge, Group, Text, ActionIcon, Card, Title, Stack, AspectRatio, Image, rem } from '@mantine/core'
import { IconPencil, IconEye, IconTrash, IconAlertCircle } from '@tabler/icons-react'
import dayjs from 'dayjs'
import DocumentView from './view'
import '@mantine/carousel/styles.css'
import classes from './recent.module.css'
import S3Media from '@/utils/s3signedurl'

export default function RecentCarousel(props: any) {
  const items = props.data
  const pathname = usePathname()

  function getPath(type: any) {
    return type.toLowerCase() + 's'
  }


  return (
    <Carousel height={260} slideSize={{ base: '100%', xs: '50%', sm: '33.333%', md: '16.67%' }}slideGap='md' loop align='start' slidesToScroll={6} controlsOffset={0} classNames={classes}>
      {items.map((item: any) => (
        <Carousel.Slide key={item.id}>
          <Card withBorder h={260}>
            <Card.Section bg='primary'>
              <Group justify='space-between' wrap='nowrap'>
                <Badge>{item.__typename}</Badge>
                <Badge>{item.status}</Badge>
              </Group>
            </Card.Section>
            <Card.Section pos='relative'>
            <AspectRatio ratio={16 / 9}>
              <Image src={item.graphic.url} />
              </AspectRatio>
            </Card.Section>
            <Card.Section>
              <Group gap='xs' m='xs' wrap='nowrap' align='start'>
                <Stack gap={0} align='center'>
                  <Text tt='uppercase' lh={1} fz='10px' fw='600' c='primary'>
                    {dayjs(item.updatedAt).format('MMMM')}
                  </Text>
                  <Title order={4} lh={0.75}>
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
              <Flex justify='end'>
                <ActionIcon.Group>
                  <ActionIcon
                    variant='filled'
                    onClick={() => {
                      modals.openConfirmModal({
                        title: (
                          <Group>
                            <IconAlertCircle />
                            <Title order={4}>{item.name}</Title>
                          </Group>
                        ),
                        children: <Text size='sm'>(NOT IMPLEMENTED)Are you sure you would like to delete this document?</Text>,
                        labels: { confirm: 'Delete', cancel: 'Cancel' },
                        confirmProps: { color: 'red' },
                        onCancel: () => console.log(`Canceled Delete`),
                        onConfirm: () => console.log(`Not Implemented`),
                      })
                    }}>
                    <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                  </ActionIcon>
                  <ActionIcon variant='filled' component={Link} href={`${pathname}/${getPath(item.__typename)}/${item.slug}`}>
                    <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                  </ActionIcon>
                  <ActionIcon
                    variant='filled'
                    onClick={() => {
                      modals.open({
                        title: `${item.name} - ${item.updatedAt}`,
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

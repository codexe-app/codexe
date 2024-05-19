import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Link } from '@/utils/router-events'
import { ActionIcon, Group, Stack, Anchor, Code, Flex, Menu, LoadingOverlay, Title, Avatar, Badge, ScrollArea, Text } from '@mantine/core'
import { Logo } from '@/app/logo'

type TBreadCrumbProps = {
  homeElement: ReactNode
  containerClasses?: string
  listClasses?: string
  activeClasses?: string
  capitalizeLinks?: boolean
}

const NextBreadcrumb = ({ homeElement, containerClasses, listClasses, activeClasses, capitalizeLinks }: TBreadCrumbProps) => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)

  return (
    <div>
      <Group c='var(--mantine-color-gray-6)' fs='xl' gap='xs' align='center'>
        <Logo size={32} color='var(--mantine-color-gray-6)' />
        {pathNames.length > 0 && <Title order={3} c='var(--mantine-color-gray-6)'>{'>'}</Title>}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`
          let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
          let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
          return (
            <React.Fragment key={index}>
              <Title order={3} lh={1} td='none'>
                <Anchor href={href} c='var(--mantine-color-gray-6)' fw={600}>
                  {itemLink}
                </Anchor>
              </Title>
              {pathNames.length !== index + 1 && <Title order={3} c='var(--mantine-color-gray-6)'>{'>'}</Title>}
            </React.Fragment>
          )
        })}
      </Group>
    </div>
  )
}

export default NextBreadcrumb

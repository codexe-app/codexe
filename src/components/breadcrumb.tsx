import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Link } from '@/utils/router-events'
import { ActionIcon, Group, Stack, Anchor, Code, Flex, Menu, LoadingOverlay, Title, Avatar, Badge, ScrollArea, Text } from '@mantine/core'
import { Logo } from '@/app/logo'

type TBreadCrumbProps = {
  homeElement: ReactNode
  separator: ReactNode
  containerClasses?: string
  listClasses?: string
  activeClasses?: string
  capitalizeLinks?: boolean
}

const NextBreadcrumb = ({ homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks }: TBreadCrumbProps) => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)

  return (
    <div>
      <Group>
        <Link href={'/'}>
          <Logo size={32} color='var(--mantine-color-gray-6)' />
        </Link>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`
          let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
          let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
          return (
            <React.Fragment key={index}>
              <Title order={3} ff='monospace' c='var(--mantine-color-gray-6)' lh={1} td='none'>
                <Anchor href={href}>{itemLink}</Anchor>
              </Title>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          )
        })}
      </Group>
    </div>
  )
}

export default NextBreadcrumb

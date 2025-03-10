'use client'
import { Link } from '@/utils/router-events'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useMemo } from 'react'
import { MantineReactTable, useMantineReactTable, type MRT_TableOptions, MRT_ColumnDef, MRT_GlobalFilterTextInput, MRT_ToggleFiltersButton } from 'mantine-react-table'
import { ActionIcon, Group, Stack, Box, Code, Flex, Menu, LoadingOverlay, Title, Avatar, Badge, ScrollArea, Text } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { modals } from '@mantine/modals'
import { type Document } from '@/graphql/API'
import CopytoClipboard from '@/components/clipboard'
import { IconEdit, IconEye, IconUserCircle, IconTrash, IconDotsCircleHorizontal, IconDots, IconAlertCircle, IconPin, IconPinned, IconPinnedOff, IconExternalLink } from '@tabler/icons-react'
import NextBreadcrumb from '@/components/breadcrumb'
import 'mantine-react-table/styles.css'
import './documents.css'
var _ = require('lodash')

export default function DataTable(props: any) {
  //console.log(`datatable props : `, props)
  const [validationErrors, setValidationErrors] = useState<Record<string, string | undefined>>({})
  const client = generateClient()
  const pathname = usePathname()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const { data } = props
  const columns = useMemo<MRT_ColumnDef<Document>[]>(
    () => [
      {
        accessorKey: 'pinned',
        size: 60,
        header: '',
        Cell: ({ cell, row }) => (
          <Box>
            {row.original.pinned ? (
              <ActionIcon variant='filled' aria-label='Settings'>
                <IconPin style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            ) : (
              <ActionIcon variant='subtle' color='var(--mantine-color-gray-light-color)' aria-label='Settings'>
                <IconPinnedOff style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            )}
          </Box>
        ),
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 220,
        filterVariant: 'autocomplete',
        Cell: ({ renderedCellValue, row }) => (
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
            <Avatar size='md' src={row.original?.graphic?.thumbnail ? row.original.graphic.thumbnail : row.original?.graphic?.url} />
            <Title order={6}>{renderedCellValue}</Title>
          </Box>
        ),
      },
      {
        accessorKey: 'topicId',
        header: 'Topic',
        size: 160,
        editVariant: 'select',
        mantineEditSelectProps: {
          data: [
            {
              value: '',
              label: 'No Topic',
            },
            {
              value: '63410a6f-0500-40bc-b25a-daf64f63eede',
              label: 'Codexe',
            },
            {
              value: 'e494bb87-978c-47e6-a001-3826ebc0be7f',
              label: 'Misc',
            },
          ],
        },
        //custom conditional format and styling
        Cell: ({ renderedCellValue, row }) => (
          <Stack gap={0}>
            <Title order={6} lh={1}>
              {row.original?.topic?.name}
            </Title>
            <Group wrap='nowrap' gap={0}>
              <Code c='dimmed' h={20} py={0} pl={0} w={120}>
                {renderedCellValue}
              </Code>
              {renderedCellValue && <CopytoClipboard clipboard={renderedCellValue} />}
            </Group>
          </Stack>
        ),
      },
      {
        accessorKey: 'slug',
        header: 'Slug',
      },
      {
        accessorKey: 'description',
        header: 'Description',
        size: 350,
      },
      {
        accessorKey: 'content',
        header: 'Content',
        size: 220,
        enableHiding: true,
        Cell: ({ renderedCellValue, row }) => <ScrollArea mah={40}>{renderedCellValue}</ScrollArea>,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 120,
        editVariant: 'select',
        mantineEditSelectProps: {
          data: [
            {
              value: 'draft',
              label: 'Draft',
            },
            {
              value: 'live',
              label: 'Live',
            },
            {
              value: 'private',
              label: 'Private',
            },
            {
              value: 'archive',
              label: 'Archive',
            },
          ],
        },
        //custom conditional format and styling
        Cell: ({ cell, row }) => (
          <Box>
            {cell.getValue() == 'draft' ? (
              <Badge>draft</Badge>
            ) : cell.getValue() == 'live' ? (
              <Badge color='green'>live</Badge>
            ) : cell.getValue() == 'private' ? (
              <Badge color='purple'>private</Badge>
            ) : (
              cell.getValue() == 'archive' && <Badge color='yellow'>archive</Badge>
            )}
          </Box>
        ),
      },
      {
        accessorFn: (row) => {
          if (!row.createdAt) {
            return null
          }
          const sDay = new Date(row.createdAt)
          sDay.setHours(0, 0, 0, 0)
          return sDay
        },
        id: 'createdAt',
        header: 'Created',
        width: 80,
        filterVariant: 'date-range',
        sortingFn: 'datetime',
        enableEditing: false,
        enableColumnFilterModes: false, //keep this as only date-range filter with between inclusive filterFn
        Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(), //render Date as a string
        Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
      },
      {
        accessorFn: (row) => {
          //convert to Date for sorting and filtering
          const sDay = new Date(row.updatedAt)
          sDay.setHours(0, 0, 0, 0)
          return sDay
        },
        id: 'updatedAt',
        header: 'Updated',
        width: 80,
        filterVariant: 'date-range',
        sortingFn: 'datetime',
        enableEditing: false,
        enableColumnFilterModes: false, //keep this as only date-range filter with between inclusive filterFn
        Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(), //render Date as a string
        Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
      },
      {
        accessorKey: 'id',
        header: 'ID',
        enableEditing: false,
        Cell: ({ renderedCellValue, row }) => (
          <Group wrap='nowrap' gap={0}>
            <Code c='dimmed' h={20} py={0} pl={0} w={120}>
              {renderedCellValue}
            </Code>
            <CopytoClipboard clipboard={renderedCellValue} />
          </Group>
        ),
      },
      {
        accessorKey: 'graphic.url',
        header: 'Graphic URL',
        enableEditing: true,
        enableResizing: true,
        width: 180,
        Cell: ({ renderedCellValue, row }) => (
          <Group wrap='nowrap' gap={0}>
            <Code c='dimmed' h={20} py={0} pl={0} w={120}>
              {renderedCellValue}
            </Code>
            <CopytoClipboard clipboard={renderedCellValue} />
          </Group>
        ),
      },
      {
        accessorKey: 'graphic.thumbnail',
        header: 'Thumbnail',
        enableEditing: true,
        enableResizing: true,
        width: 180,
        Cell: ({ renderedCellValue, row }) => (
          <Group wrap='nowrap' gap={0}>
            <Code c='dimmed' h={20} py={0} pl={0} w={120}>
              {renderedCellValue}
            </Code>
            <CopytoClipboard clipboard={renderedCellValue} />
          </Group>
        ),
      },
      {
        accessorKey: 'graphic.alt',
        header: 'Alt Text',
      },
      {
        accessorKey: 'graphic.title',
        header: 'Title',
      },
      {
        accessorKey: 'graphic.caption',
        header: 'Caption',
      },
      {
        accessorKey: 'graphic.description',
        header: 'Description',
      },
      {
        accessorKey: 'graphic.key',
        header: 'S3 Key',
      },
      {
        accessorKey: 'graphic.source',
        id:'graphicsource',
        header: 'Source',
      },
    ],
    [validationErrors]
  )

  const handleSaveDocument: MRT_TableOptions<Document>['onEditingRowSave'] = async ({ values, table }) => {
    const fixed = fixDocument(values)
    let cleaned = _.omit(fixed, ['graphic.alt', 'graphic.caption', 'graphic.description', 'graphic.key', 'graphic.title', 'graphic.thumbnail', 'graphic.url', 'createdAt', 'updatedAt'])
    // console.log(cleaned)
    updatetheDocument(cleaned)
    table.setEditingRow(null)
    return
  }

  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    autoResetPageIndex: false,
    enableColumnFilterModes: true,
    enableColumnOrdering: false,
    enableColumnDragging: false,
    enableColumnResizing: true,
    enableFacetedValues: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableRowActions: true,
    enableRowSelection: false,
    createDisplayMode: 'row', // ('modal', and 'custom' are also available)
    editDisplayMode: 'row', // ('modal', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    initialState: {
      columnVisibility: {
        content: false,
        graphicsource: false,
        createdAt: false
      },
      showColumnFilters: false,
      showGlobalFilter: true,
      columnPinning: {
        right: ['mrt-row-actions'],
      },
      sorting: [
        {
          id: 'pinned',
          desc: true, // sort by name in descending order by default
        },
      ],
    },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    mantinePaginationProps: {
      radius: 'xl',
      size: 'lg',
    },
    mantineSearchTextInputProps: {
      placeholder: 'Search',
    },
    onEditingRowSave: handleSaveDocument,
    renderRowActions: ({ row, table }) => (
      <Group justify='center'>
        <Menu withArrow>
          <Menu.Target>
            <ActionIcon variant='transparent' size='xl'>
              <IconDotsCircleHorizontal size={24} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>{table.options.renderRowActionMenuItems && table.options.renderRowActionMenuItems({ row, table })}</Menu.Dropdown>
        </Menu>
      </Group>
    ),
    renderRowActionMenuItems: ({ row }) => (
      <>
        <Menu.Item leftSection={<IconEdit />} onClick={() => table.setEditingRow(row)}>
          <Text fw='600' size='sm'>
            Inline Edit
          </Text>
        </Menu.Item>
        <Menu.Item leftSection={<IconExternalLink />} component={Link} href={`./documents/${row.original.slug}`}>
          Full Page Edit
        </Menu.Item>
        <Menu.Item
          leftSection={<IconEye />}
          color='purple'
          onClick={() => {
            modals.open({
              title: (
                <Group>
                  <IconAlertCircle />
                  <Title order={4}>{row.original.name}</Title>
                </Group>
              ),
              fullScreen: true,
              children: <Markdown remarkPlugins={[remarkGfm]}>{row.original.content}</Markdown>,
            })
          }}>
          <Text fw='600' size='sm'>
            Quick View
          </Text>
        </Menu.Item>
        <Menu.Item
          leftSection={<IconTrash />}
          color='red'
          onClick={() => {
            modals.openConfirmModal({
              title: (
                <Group>
                  <IconAlertCircle />
                  <Title order={4}>{row.original.name}</Title>
                </Group>
              ),
              children: <Text size='sm'>Are you sure you would like to delete this document?</Text>,
              labels: { confirm: 'Delete', cancel: 'Cancel' },
              confirmProps: { color: 'red' },
              onCancel: () => console.log(`Canceled Delete`),
              onConfirm: () => trashDocument(row.original),
            })
          }}>
          <Text fw='600' size='sm'>
            Delete
          </Text>
        </Menu.Item>
      </>
    ),
    renderTopToolbar: ({ table }) => {
      return (
        <Flex p='md' justify='space-between' className='m_b23fa0ef' style={{ borderBottom: '1px solid var(--table-border-color)' }}>
          <Group gap='xs'>
            <NextBreadcrumb homeElement='Home' containerClasses='breadcrumbs' listClasses='breadcrumb-item' activeClasses='active' capitalizeLinks={true} />
          </Group>
          <Group gap='xs'>
            <MRT_GlobalFilterTextInput table={table} />
            <MRT_ToggleFiltersButton table={table} />
          </Group>
        </Flex>
      )
    },
  })

  function fixDocument(doc: any) {
    return _.merge({}, doc, {
      graphic: {
        url: doc['graphic.url'],
        thumbnail: doc['graphic.thumbnail'],
        alt: doc['graphic.alt'],
        caption: doc['graphic.caption'],
        title: doc['graphic.title'],
        key: doc['graphic.key'],
      },
    })
  }

  async function updatetheDocument(doc: any) {
    //console.log(doc)
    try {
      await client.graphql({ query: mutations.updateDocument, variables: { input: doc } })
      notifications.show({
        title: `The Document ${doc.name} was updated`,
        message: `${doc.id}`,
      })
      router.refresh()
    } catch (error) {
      notifications.show({
        title: `There was an error updating ${doc.name}`,
        message: JSON.stringify(error),
      })
      console.log(`There was a problem updating the Doc :`, error)
    }
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
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return (
    <>
      {isMounted && (
        <Box>
          <MantineReactTable table={table} /> <LoadingOverlay visible={!isMounted} zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />
        </Box>
      )}
    </>
  )
}

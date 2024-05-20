'use client'
import { Link } from '@/utils/router-events'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { generateClient } from 'aws-amplify/api'
import * as mutations from '@/graphql/mutations'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'mantine-react-table/styles.css' //make sure MRT styles were imported in your app root (once)
import { useMemo } from 'react'
import { MantineReactTable, useMantineReactTable, type MRT_TableOptions, MRT_ColumnDef, MRT_GlobalFilterTextInput, MRT_ToggleFiltersButton } from 'mantine-react-table'
import { ActionIcon, Group, Stack, Box, Code, Flex, Menu, LoadingOverlay, Title, Avatar, Badge, Text } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { modals } from '@mantine/modals'
import CopytoClipboard from '@/components/clipboard'
import { type Document } from '@/graphql/API'
import { IconEdit, IconEye, IconTrash, IconDotsCircleHorizontal, IconAlertCircle, IconPin, IconPinnedOff, IconExternalLink } from '@tabler/icons-react'
import NextBreadcrumb from '@/components/breadcrumb'

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
        accessorKey: 'slug', //hey a simple column for once
        header: 'Slug',
      },
      {
        accessorKey: 'description', //hey a simple column for once
        header: 'Description',
        size: 350,
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
        accessorKey: 'graphic.url', //hey a simple column for once
        header: 'Graphic URL',
        enableEditing: true,
        enableClickToCopy: true,
      },
      {
        accessorKey: 'graphic.thumbnail', //hey a simple column for once
        header: 'Thumbnail',
        enableEditing: true,
        enableClickToCopy: true,
      },
      {
        accessorKey: 'id', //hey a simple column for once
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
    ],
    [validationErrors]
  )

  const handleSaveDocument: MRT_TableOptions<Document>['onEditingRowSave'] = async ({ values, table }) => {
    const fixed = fixDocument(values)
    let cleaned = _.omit(fixed, ['graphic.thumbnail', 'graphic.url', 'createdAt', 'updatedAt'])
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
    enableFacetedValues: true,
    enableGrouping: false,
    enableColumnPinning: true,
    enableRowActions: true,
    enableRowSelection: false,
    createDisplayMode: 'row', // ('modal', and 'custom' are also available)
    editDisplayMode: 'row', // ('modal', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    initialState: {
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
        <Menu.Item color='green' leftSection={<IconEdit />} onClick={() => table.setEditingRow(row)}>
          <Text fw='600' size='sm'>
            Inline Edit
          </Text>
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
        <Menu.Item color='green' leftSection={<IconExternalLink />} component={Link} href={`./documents/${row.original.slug}`}>
          Full Page Edit
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
        <Flex p='md' justify='space-between' bg='var(--mantine-color-gray-1)'>
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
      },
    })
  }

  async function updatetheDocument(doc: any) {
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

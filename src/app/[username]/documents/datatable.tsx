'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import 'mantine-react-table/styles.css' //make sure MRT styles were imported in your app root (once)
import './documents.css'
import { useMemo } from 'react'
import { MantineReactTable, useMantineReactTable, type MRT_ColumnDef, MRT_GlobalFilterTextInput, MRT_ToggleFiltersButton } from 'mantine-react-table'
import { ActionIcon, Group, Stack, Box, Button, Flex, Menu, LoadingOverlay, Title, Avatar, Badge, ScrollArea } from '@mantine/core'
import { type Document } from '@/graphql/API'
import { IconEdit, IconUserCircle, IconTrash, IconDotsCircleHorizontal, IconDots, IconSend, IconPin, IconPinned, IconPinnedOff, IconExternalLink } from '@tabler/icons-react'

export default function DataTable(props: any) {
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
            <Avatar size='md' src={row.original.graphic?.url} />
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
        accessorKey: 'content', //hey a simple column for once
        header: 'Content',
        size: 80,
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
    ],
    []
  )

  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    autoResetPageIndex: false,
    enableColumnFilterModes: true,
    enableColumnOrdering: false,
    enableColumnDragging: false,
    enableFacetedValues: true,
    enableGrouping: true,
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
    renderDetailPanel: ({ row }) => (
      <Group wrap='nowrap' align='start'>
        <Avatar size='xl' src={row.original.graphic?.url} />
        <Stack>
          <Title order={3}>{row.original.name}</Title>
          <ScrollArea mah={120}>{row.original.content}</ScrollArea>
        </Stack>
      </Group>
    ),
    renderRowActions: ({ row, table }) => (
      <Group justify='center'>
        <Menu withArrow>
          <Menu.Target>
            <ActionIcon variant='transparent'>
              <IconDots />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>{table.options.renderRowActionMenuItems && table.options.renderRowActionMenuItems({ row, table })}</Menu.Dropdown>
        </Menu>
      </Group>
    ),
    renderRowActionMenuItems: ({ row }) => (
      <>
        <Menu.Item leftSection={<IconEdit />} onClick={() => table.setEditingRow(row)}>
          Inline Edit
        </Menu.Item>
        <Menu.Item leftSection={<IconExternalLink />} component={Link} href={`./documents/${row.original.slug}`}>
          Full Page Edit
        </Menu.Item>
        <Menu.Item leftSection={<IconTrash />} color='red'>
          Delete{' '}
        </Menu.Item>
      </>
    ),
    renderTopToolbar: ({ table }) => {
      return (
        <Flex p='md' justify='end' bg='var(--mantine-color-gray-1)'>
          <MRT_GlobalFilterTextInput table={table} />
          <MRT_ToggleFiltersButton table={table} />
        </Flex>
      )
    },
  })

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return (
    <>
      {isMounted && (
        <Box>
          {' '}
          <MantineReactTable table={table} /> <LoadingOverlay visible={!isMounted} zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />
        </Box>
      )}
    </>
  )
}

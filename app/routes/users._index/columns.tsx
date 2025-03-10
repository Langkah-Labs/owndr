import { type ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { useNavigate, Form, href } from 'react-router'

import { Button } from '~/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { Checkbox } from '~/components/ui/checkbox'
import { DataTableColumnHeader } from '~/components/data-table-column-header'
import { Badge } from '~/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from '~/components/ui/dialog'
import { userSelectSchema } from 'db/schema'
import { z } from 'zod'

export const columns: ColumnDef<z.infer<typeof userSelectSchema>>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        className="bg-white"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="bg-white"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'firstName',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="First Name" />
    },
    cell: ({ row }) => {
      const firstName = row.getValue('firstName') as string

      const me = row.original.me
      if (me) {
        return (
          <span className="flex gap-2 items-center">
            {firstName}
            <Badge className="bg-lime-500 text-black text-xs font-light">
              Me
            </Badge>
          </span>
        )
      }

      return firstName
    },
  },
  {
    accessorKey: 'lastName',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Last Name" />
    },
    cell: ({ row }) => {
      const lastName = row.getValue('lastName')

      if (lastName === '') {
        return '-'
      } else {
        return lastName
      }
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Email" />
    },
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Created At" />
    },
    cell: ({ row }) => {
      const createdAt = new Date(row.getValue('createdAt'))

      return new Intl.DateTimeFormat('en-US').format(createdAt)
    },
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Updated At" />
    },
    cell: ({ row }) => {
      const updatedAt = new Date(row.getValue('updatedAt'))

      return new Intl.DateTimeFormat('en-US').format(updatedAt)
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const user = row.original

      const id = user.id?.toString()
      const me = user.me

      const navigate = useNavigate()

      if (me) {
        return null
      }

      return (
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => navigate(href('/users/:id', { id }))}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DialogTrigger asChild>
                <DropdownMenuItem className="text-red-500">
                  Delete
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure to delete this data?</DialogTitle>
              <DialogDescription>
                This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Form method="DELETE" action={href('/users/:id', { id })}>
                  <Button type="submit">Confirm</Button>
                </Form>
              </DialogClose>

              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    },
  },
]

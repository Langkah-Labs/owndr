import type { Route } from './+types/index'
import * as React from 'react'
import { Await, Link, href, useOutletContext } from 'react-router'
import { DataTable } from '~/components/data-table'
import { Button } from '~/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { columns } from '~/app/users/columns'
import { authenticate } from '~/app/.server/session'
import { getUsers } from '~/app/users/.server/get-users'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Users | Owndr' },
    { name: 'description', content: 'Manage users in the Owndr application' },
  ]
}

/**
 * This loader function runs on the server. It's safe to call any server actions here,
 * such as calling authenticate function like in the body function below.
 */
export async function loader({ context, params, request }: Route.LoaderArgs) {
  // This is necessary data because we use the value immediately after authenticate function called.
  // Since this is HIGH PRIORITY data, me must mark it with await to make sure the data was returned and
  // can be used in the further processing.
  const currentUser = await authenticate(request)

  // This line of code doesn't mark with await, because it's less priority data.
  // We can defer this data in this loader and show it lazily.
  // React Suspense component helps us to lazily load this data and show the loading component to the client-side.
  const users = getUsers(context, currentUser)

  return {
    currentUser,
    users,
  }
}

function TableAction() {
  return (
    <Button asChild className="h-8">
      <Link to={href('/users/new')}>
        <PlusIcon />
        New User
      </Link>
    </Button>
  )
}

export default function Page({ loaderData }: Route.ComponentProps) {
  // call this hooks if you need global context across the module
  // i.e. accessing authenticated user data
  const ctx = useOutletContext()

  return (
    <div className="container mx-auto flex flex-col mt-8 gap-4">
      <header>
        <h1 className="font-bold text-2xl text-gray-700">Users</h1>
        <h2 className="font-normal text-lg text-gray-400">
          Effortlessly manage users and permissions.
        </h2>
      </header>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Await resolve={loaderData.users}>
          {(value) => (
            <DataTable
              columns={columns}
              data={value}
              actions={<TableAction />}
            />
          )}
        </Await>
      </React.Suspense>
    </div>
  )
}

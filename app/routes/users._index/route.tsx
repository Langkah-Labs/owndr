import type { Route } from './+types/route'
import * as React from 'react'
import { Await, Link, href, useOutletContext } from 'react-router'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Users | Owndr' },
    { name: 'description', content: 'Manage users in the Owndr application' },
  ]
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
    </div>
  )
}

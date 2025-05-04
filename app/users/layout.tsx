import type { Route } from './+types/layout'
import { Outlet } from 'react-router'
import { Navbar } from '~/components/navbar'
import { type SessionUser } from '~/lib/.server/auth/session'
import { authenticate } from '~/app/.server/session'

export type Context = {
  currentUser: SessionUser | undefined
}

export async function loader({ request }: Route.LoaderArgs) {
  const user = await authenticate(request)

  return {
    currentUser: user,
  }
}

export default function UserLayout({ loaderData }: Route.ComponentProps) {
  const { currentUser } = loaderData

  const ctx: Context = {
    currentUser,
  }

  return (
    <>
      <Navbar user={currentUser} />

      <Outlet context={ctx} />
    </>
  )
}

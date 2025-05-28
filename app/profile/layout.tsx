import type { Route } from './+types/layout'
import { Outlet } from 'react-router'

export default function ProfileLayout({ loaderData }: Route.ComponentProps) {
  return <Outlet />
}

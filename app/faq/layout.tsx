import type { Route } from './+types/layout'
import { Outlet } from 'react-router'

export default function FaQLayout({ loaderData }: Route.ComponentProps) {
  return <Outlet />
}

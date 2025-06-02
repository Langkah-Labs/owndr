import type { Route } from './+types/layout'
import { Outlet } from 'react-router'

export default function LandingLayout({ loaderData }: Route.ComponentProps) {
  return <Outlet />
}

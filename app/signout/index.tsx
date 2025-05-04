import type { Route } from './+types/index'
import { redirect } from 'react-router'

export async function action({ request, context }: Route.ActionArgs) {
  const headers = await context.cookie.delete(request)

  return redirect('/signin', { headers })
}

import type { Route } from './+types/route'
import { redirect } from 'react-router'
import { deleteSession } from '~/lib/auth.server'

export async function action({ request }: Route.ActionArgs) {
  const headers = await deleteSession(request)

  return redirect('/signin', { headers })
}

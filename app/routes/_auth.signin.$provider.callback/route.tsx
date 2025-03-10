import type { Route } from './+types/route'
import { redirect } from 'react-router'
import { authenticator, saveSession, GOOGLE_STRATEGY } from '~/lib/auth.server'

export async function loader({ request }: Route.LoaderArgs) {
  const user = await authenticator.authenticate(GOOGLE_STRATEGY, request)
  const headers = await saveSession(request, user)

  return redirect('/', { headers })
}

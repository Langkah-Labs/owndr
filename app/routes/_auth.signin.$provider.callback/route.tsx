import type { Route } from './+types/route'
import { redirect } from 'react-router'
import { authenticator, saveSession } from '~/lib/auth.server'

export async function loader({ request, params }: Route.LoaderArgs) {
  const user = await authenticator.authenticate(params.provider, request)

  // TODO: do some db insertion after getting user data from the providers
  const headers = await saveSession(request, user)

  return redirect('/', { headers })
}

import type { Route } from './+types/route'
import { authenticator } from '~/lib/auth.server'

export async function loader({ request, params }: Route.LoaderArgs) {
  return await authenticator.authenticate(params.provider, request)
}

import type { Route } from './+types/route'
import { authenticator, GOOGLE_STRATEGY } from '~/lib/auth.server'

export async function loader({ request }: Route.LoaderArgs) {
  return await authenticator.authenticate(GOOGLE_STRATEGY, request)
}

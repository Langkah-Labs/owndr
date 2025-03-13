import type { Route } from './+types/route'
import { redirect } from 'react-router'
import { authenticator, saveSession } from '~/lib/auth.server'
import saveUser from './save-user.server'

export async function loader({ request, params, context }: Route.LoaderArgs) {
  const user = await authenticator.authenticate(params.provider, request)

  const savedUser = await saveUser(context, user)

  if (!savedUser) throw new Response('Unauthorized', { status: 401 })

  const headers = await saveSession(request, {
    id: savedUser.id,
    email: savedUser.email,
    displayName: savedUser.firstName,
    pictureUrl: savedUser.avatar ?? '',
  })

  return redirect('/', { headers })
}

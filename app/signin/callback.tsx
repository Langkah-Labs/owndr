import type { Route } from './+types/callback'
import { redirect } from 'react-router'
import { users, sessions } from '~/db/schema'
import { eq } from 'drizzle-orm'
import { SessionToken } from '~/lib/.server/auth/token'
import { v7 as uuidv7 } from 'uuid'
import { SESSION_KEY } from '~/lib/.server/auth/session'

export async function action({ request, params, context }: Route.ActionArgs) {
  const { provider } = params
  const formData = await request.formData()

  const user = await context.authentication.authenticate(provider, formData)

  const email = user.email
  const candidateUsers = await context.db
    .select({
      id: users.id,
    })
    .from(users)
    .where(eq(users.email, email))
    .limit(1)

  let userId: string | null = null
  if (candidateUsers.length < 1) {
    userId = uuidv7()
    const newUser = {
      id: userId,
      firstName: user.name ?? '',
      email: user.email ?? '',
      avatar: user.picture ?? null,
      createdAt: new Date(Date.now()),
    }

    await context.db.insert(users).values(newUser)
  } else {
    const candidateUser = candidateUsers[0]
    userId = candidateUser.id
  }

  const token = SessionToken.generate()
  const sessionId = token.encode()

  const session = {
    id: sessionId,
    userId,
    expiresAt: token.getExpiresAt(),
    createdAt: new Date(Date.now()),
  }
  await context.db.insert(sessions).values(session)

  const headers = await context.cookie.save(request, SESSION_KEY, token)
  return redirect('/', { headers })
}

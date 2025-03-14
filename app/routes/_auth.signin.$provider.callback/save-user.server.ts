import { eq } from 'drizzle-orm'
import type { AppLoadContext } from 'react-router'
import type { SessionUser } from '~/lib/auth.server'
import { users } from '~/db/schema'
import { ulid } from 'ulid'

export default async function saveUser(
  context: AppLoadContext,
  user: SessionUser
) {
  const existingUsers = await context.db
    .select({
      id: users.id,
      firstName: users.firstName,
      email: users.email,
      avatar: users.avatar,
    })
    .from(users)
    .where(eq(users.email, user.email))
    .limit(1)

  if (existingUsers.length === 0) {
    const id = ulid()

    return context.db
      .insert(users)
      .values({
        id,
        firstName: user.displayName,
        email: user.email,
        avatar: user.pictureUrl,
      })
      .returning({
        id: users.id,
        firstName: users.firstName,
        email: users.email,
        avatar: users.avatar,
      })
      .get()
  }

  return existingUsers[0]
}

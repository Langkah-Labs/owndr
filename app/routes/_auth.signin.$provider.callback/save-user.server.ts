import type { AppLoadContext } from 'react-router'
import type { SessionUser } from '~/lib/auth.server'
import { users } from '~/db/schema'

export default async function saveUser(
  context: AppLoadContext,
  user: SessionUser
) {
  const existingUser = await context.db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, user.email),
  })

  if (!existingUser) {
    const id = Bun.randomUUIDv7()

    const insertedUser = await context.db
      .insert(users)
      .values({
        id,
        firstName: user.displayName,
        email: user.email,
        avatar: user.pictureUrl,
      })
      .returning()

    if (insertedUser.length === 0) return null

    return insertedUser[0]
  }

  return existingUser
}

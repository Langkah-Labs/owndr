import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { userSelectSchema, users } from 'db/schema'
import UserNotFoundException from '~/exceptions/user-not-found'
import type { AppLoadContext } from 'react-router'

export default async function getUserById(
  context: AppLoadContext,
  id: string
): Promise<z.infer<typeof userSelectSchema>> {
  const allUsers = await context.db
    .select()
    .from(users)
    .where(eq(users.id, id))
    .limit(1)

  if (allUsers.length === 0) throw new UserNotFoundException('User not found')

  return userSelectSchema.parse(allUsers[0])
}

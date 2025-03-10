import { eq } from 'drizzle-orm'
import { users } from 'db/schema'
import type { AppLoadContext } from 'react-router'

export default async function deleteUser(
  context: AppLoadContext,
  id: string
): Promise<void> {
  // TODO: ensure the avatar also deleted from the storage

  await context.db.delete(users).where(eq(users.id, id))
}

import { eq } from 'drizzle-orm'
import { users } from '~/db/schema'
import type { AppLoadContext } from 'react-router'

export default async function updateUser(
  context: AppLoadContext,
  id: string,
  params: any
): Promise<void> {
  await context.db.update(users).set(params).where(eq(users.id, id))
}

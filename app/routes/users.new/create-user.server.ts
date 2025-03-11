import { z } from 'zod'
import { userInsertSchema, users } from '~/db/schema'
import { type AppLoadContext } from 'react-router'

export default async function createUser(
  context: AppLoadContext,
  params: z.infer<typeof userInsertSchema>
): Promise<void> {
  await context.db.insert(users).values(params)
}

import { users } from '~/db/schema'
import { type AppLoadContext } from 'react-router'

export default async function createUser(
  context: AppLoadContext,
  params: any
): Promise<void> {
  await context.db.insert(users).values(params)
}

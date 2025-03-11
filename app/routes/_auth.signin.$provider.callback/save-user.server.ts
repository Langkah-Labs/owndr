import type { AppLoadContext } from 'react-router'
import type { SessionUser } from '~/lib/auth.server'
import { users, userInsertSchema } from '~/db/schema'

export default async function saveUser(
  context: AppLoadContext,
  user: SessionUser
) {}

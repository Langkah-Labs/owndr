import type { SessionUser } from '~/lib/auth.server'
import { users } from 'db/schema'
import type { AppLoadContext } from 'react-router'

function isMe(userId: string | undefined, currentUserId: string): boolean {
  return userId === currentUserId
}

export async function getUsers(
  context: AppLoadContext,
  currentUser: SessionUser
) {
  const allUsers = await context.db.select().from(users)

  return allUsers.map((user) => {
    const currentId = currentUser.id

    return {
      ...user,
      me: isMe(user.id?.toString(), currentId),
    }
  })
}

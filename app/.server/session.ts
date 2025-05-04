import { eq, and, isNull, sql } from 'drizzle-orm'
import { redirect, href, type AppLoadContext } from 'react-router'
import { SESSION_KEY } from '~/lib/.server/auth/session'
import { users, sessions } from '~/db/schema'

export async function authenticate(context: AppLoadContext, request: Request) {
  try {
    const token = await context.cookie.getValue(request, SESSION_KEY)
    const sessionId = token?.sessionId
    if (!sessionId) {
      const headers = await context.cookie.delete(request)

      throw redirect('/signin', { headers })
    }

    const result = await context.db
      .select({
        user: {
          id: users.id,
          firstName: users.firstName,
          lastName: users.lastName,
          email: users.email,
          avatar: users.avatar,
        },
        session: {
          id: sessions.id,
          expiresAt: sessions.expiresAt,
        },
      })
      .from(sessions)
      .innerJoin(users, eq(sessions.userId, users.id))
      .where(and(eq(sessions.id, sessionId), isNull(sessions.deletedAt)))
      .limit(1)

    if (result.length < 1) {
      const headers = await context.cookie.delete(request)

      throw redirect(href('/signin'), { headers })
    }

    const { user, session } = result[0]
    if (Date.now() >= session.expiresAt.getTime()) {
      await context.db
        .update(sessions)
        .set({
          deletedAt: new Date(Date.now()),
        })
        .where(eq(sessions.id, session.id))

      const headers = await context.cookie.delete(request)

      throw redirect(href('/signin'), { headers })
    }

    const sessionUser: SessionUser = {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`.trim(),
      email: user.email,
      avatar: user.avatar,
    }

    return sessionUser
  } catch (err) {
    // TODO: change with proper logging library
    console.log({ error: err })

    const headers = await context.cookie.delete(request)

    throw redirect('/signin', { headers })
  }
}

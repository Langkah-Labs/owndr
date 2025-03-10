import { createCookieSessionStorage, redirect, href } from 'react-router'

export type SessionUser = {
  id: string
  email: string
  displayName: string
  pictureUrl: string
}

const SESSION_KEY = 'user'

export const sessionStorage = createCookieSessionStorage<{
  [SESSION_KEY]: SessionUser
}>({
  cookie: {
    name: '__session',
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secrets: [process.env.SESSION_SECRET!],
    secure: process.env.NODE_ENV === 'production',
  },
})

export const getSession = async (request: Request) => {
  return await sessionStorage.getSession(request.headers.get('Cookie'))
}

export const getSessionUser = async (request: Request) => {
  const session = await getSession(request)
  return session?.get(SESSION_KEY)
}

export const saveSession = async (request: Request, user: SessionUser) => {
  const session = await getSession(request)
  session.set(SESSION_KEY, user)
  return new Headers({
    'Set-Cookie': await sessionStorage.commitSession(session),
  })
}

export const deleteSession = async (request: Request) => {
  const session = await getSession(request)

  return new Headers({
    'Set-Cookie': await sessionStorage.destroySession(session),
  })
}

export async function authenticate(request: Request) {
  const user = await getSessionUser(request)

  // TODO: doing some database checks
  if (user) return user

  throw redirect(href('/signin'), {
    headers: await deleteSession(request),
  })
}

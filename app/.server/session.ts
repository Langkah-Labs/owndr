import { type SessionUser } from '~/lib/.server/auth/session'

// TODO: refactor this to be more flexible
export async function authenticate(request: Request) {
  return {} as SessionUser
}

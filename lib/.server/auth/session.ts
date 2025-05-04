import { createCookieSessionStorage, type SessionStorage } from 'react-router'
import { THIRTY_DAYS } from './token'

export type SessionUser = {
  id: string
  email: string
  name: string
  avatar: string
}

export const SESSION_KEY = 'user'

export interface Storage {
  get(request: Request): any
  getValue(request: Request, key: string): any
  save(request: Request, key: string, data: any): any
  delete(request: Request): any
}

// TODO: this cookie storage class should be freed from infrastructure and framework helpers
export class SessionCookieStorage implements Storage {
  private env: CloudflareEnvironment
  private storage: SessionStorage | null = null

  constructor(env: CloudflareEnvironment) {
    this.env = env
  }

  async get(request: Request) {
    if (!this.storage) return null

    return await this.storage.getSession(request.headers.get('Cookie'))
  }

  async getValue(request: Request, key: string) {
    const session = await this.get(request)

    if (!session) return null

    return session.get(key)
  }

  async save(request: Request, key: string, data: any) {
    const session = await this.get(request)

    if (!session) return null

    if (!this.storage) return null

    session.set(key, data)

    return new Headers({
      'Set-Cookie': await this.storage.commitSession(session),
    })
  }

  async delete(request: Request) {
    const session = await this.get(request)

    if (!session) return null

    if (!this.storage) return null

    return new Headers({
      'Set-Cookie': await this.storage.destroySession(session),
    })
  }

  create() {
    if (this.storage) {
      return this.storage
    }

    this.storage = createCookieSessionStorage<{
      [SESSION_KEY]: SessionUser
    }>({
      cookie: {
        name: '__session',
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secrets: [this.env.SESSION_SECRET!],
        secure: this.env.ENVIRONMENT === 'production',
        expires: THIRTY_DAYS,
      },
    })

    return this.storage
  }
}

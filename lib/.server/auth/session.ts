import { createCookieSessionStorage, type SessionStorage } from 'react-router'

export const SESSION_KEY = 'user'

export interface Storage {
  get(request: Request): any
  getValue(request: Request, key: string): any
  save(request: Request, key: string, data: any): any
  delete(request: Request): any
}

// TODO: this cookie storage class should be freed from infrastructure and framework helpers
export class SessionCookieStorage implements Storage {
  constructor(private readonly storage: SessionStorage | null) {}

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

  static create(env: CloudflareEnvironment): SessionCookieStorage {
    const storage = createCookieSessionStorage<{
      [SESSION_KEY]: SessionUser
    }>({
      cookie: {
        name: '__session',
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secrets: [env.SESSION_SECRET!],
        secure: env.ENVIRONMENT === 'production',
      },
    })

    return new SessionCookieStorage(storage)
  }
}

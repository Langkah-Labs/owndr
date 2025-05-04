import { createRequestHandler } from 'react-router'
import { drizzle, type DrizzleD1Database } from 'drizzle-orm/d1'
import * as schema from '~/db/schema'
import type { ExecutionContext } from '@cloudflare/workers-types'
import { type AppLoadContext } from 'react-router'
import { SessionCookieStorage, type Storage } from '~/lib/.server/auth/session'
import Authentication from '~/lib/.server/auth'

declare global {
  interface CloudflareEnvironment extends Env {}

  export interface SessionUser {
    id: string
    email: string
    name: string
    avatar: string | null
  }
}

declare module 'react-router' {
  export interface AppLoadContext {
    cloudflare: {
      env: CloudflareEnvironment
      ctx: Omit<ExecutionContext, 'props'>
    }
    db: DrizzleD1Database<typeof schema>
    cookie: Storage
    authentication: Authentication.Context
  }
}

type GetLoadContextArgs = {
  request: Request
  context: Pick<AppLoadContext, 'cloudflare'>
}

export function getAuthentication({ context }: GetLoadContextArgs) {
  const env = context.cloudflare.env

  const authentication = new Authentication.Context()
  const google = new Authentication.Google({
    clientId: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
  })
  authentication.setStrategy(Authentication.GOOGLE_STRATEGY_NAME, google)

  return {
    authentication,
  }
}

export function getLoadContext({ context }: GetLoadContextArgs) {
  const db = drizzle(context.cloudflare.env.DB, { schema })
  const cookie = SessionCookieStorage.create(context.cloudflare.env)

  return {
    cloudflare: context.cloudflare,
    db,
    cookie,
  }
}

const requestHandler = createRequestHandler(
  () => import('virtual:react-router/server-build'),
  import.meta.env.MODE
)

export default {
  fetch(request, env, ctx) {
    const opts = {
      request,
      context: {
        cloudflare: {
          env,
          ctx,
        },
      },
    }

    const appContext = getLoadContext(opts)
    const authContext = getAuthentication(opts)

    return requestHandler(request, {
      ...appContext,
      ...authContext,
    })
  },
} satisfies ExportedHandler<CloudflareEnvironment>

import { Authenticator } from 'remix-auth'
import {
  type SessionUser,
  sessionStorage,
  getSession,
  getSessionUser,
  saveSession,
  deleteSession,
  authenticate,
  SESSION_KEY,
} from './session'
import {
  GoogleStrategyDefaultName,
  GoogleStrategy,
} from '~/lib/auth.server/providers/google'
import { type OAuth2Strategy } from 'remix-auth-oauth2'
import { env } from 'node:process'

const googleStrategy = new GoogleStrategy<SessionUser>(
  {
    clientId: env.GOOGLE_CLIENT_ID!,
    clientSecret: env.GOOGLE_CLIENT_SECRET!,
    redirectURI: env.GOOGLE_REDIRECT_URI!,
  },
  async ({ tokens }: OAuth2Strategy.VerifyOptions): Promise<SessionUser> => {
    const profile = await GoogleStrategy.userProfile(tokens)

    return {
      displayName: profile.displayName,
      email: profile.email,
      id: profile.id,
      pictureUrl: profile.photo,
    }
  }
)

export const authenticator = new Authenticator<SessionUser>()
authenticator.use(googleStrategy)

export {
  type SessionUser,
  sessionStorage,
  getSession,
  saveSession,
  deleteSession,
  getSessionUser,
  authenticate,
  GoogleStrategyDefaultName,
  SESSION_KEY,
}

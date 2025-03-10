import { Authenticator } from 'remix-auth'
import {
  type SessionUser,
  sessionStorage,
  getSession,
  getSessionUser,
  saveSession,
  deleteSession,
  authenticate,
} from './session'
import {
  GoogleStrategyDefaultName,
  GoogleStrategy,
} from '~/lib/auth.server/providers/google'
import { type OAuth2Strategy } from 'remix-auth-oauth2'

const googleStrategy = new GoogleStrategy<SessionUser>(
  {
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    redirectURI: process.env.GOOGLE_REDIRECT_URI!,
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
}

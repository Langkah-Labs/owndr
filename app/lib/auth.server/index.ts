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

export const GOOGLE_STRATEGY = 'google'

// TODO: register all authentication strategy here
export const authenticator = new Authenticator<SessionUser>()

export {
  type SessionUser,
  sessionStorage,
  getSession,
  saveSession,
  deleteSession,
  getSessionUser,
  authenticate,
}

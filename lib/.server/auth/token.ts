import {
  encodeBase32LowerCaseNoPadding,
  encodeHexLowerCase,
} from '@oslojs/encoding'
import { sha256 } from '@oslojs/crypto/sha2'

export const THIRTY_DAYS = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)

export class SessionToken {
  private sessionId?: string

  constructor(
    private readonly value: string,
    private readonly expiresAt: Date = THIRTY_DAYS
  ) {}

  static generate(): SessionToken {
    const bytes = new Uint8Array(20)
    crypto.getRandomValues(bytes)
    const token = encodeBase32LowerCaseNoPadding(bytes)

    return new SessionToken(token)
  }

  encode(): string {
    this.sessionId = encodeHexLowerCase(
      sha256(new TextEncoder().encode(this.value))
    )

    return this.sessionId
  }

  getExpiresAt(): Date {
    return this.expiresAt
  }
}

namespace Authentication {
  type User = {
    name?: string
    email: string
    email_verified?: string
    picture?: string
  }

  type OAuthToken = Record<string, any>

  type Options = {
    clientId?: string
    clientSecret?: string
    grantType?: string
  }

  class NoStrategyException extends Error {
    constructor(message: string = 'No generic auth implementation') {
      super(message)
    }
  }

  class AuthorizationException extends Error {
    constructor(message: string) {
      super(message)
    }
  }

  export const GOOGLE_STRATEGY_NAME = 'google'

  export interface Strategy {
    execute(data: FormData): Promise<User>
  }

  export class Google implements Strategy {
    private tokenUrl = 'https://oauth2.googleapis.com/token'
    private profileUrl = 'https://www.googleapis.com/userinfo/v2/me'

    constructor(private opts: Options = {}) {}

    private async getProfile(token: string): Promise<User> {
      const headers = {
        Authorization: token,
        'Content-Type': 'application/json',
      }
      const response = await fetch(this.profileUrl, {
        headers,
      })

      if (response.status !== 200) {
        // TODO: change to proper logging
        const body = await response.json()
        console.log({
          message: 'Error when fetching user profile',
          data: body,
        })

        throw new AuthorizationException('Error when fetching user profile')
      }

      const json = (await response.json()) as User

      return json
    }

    async execute(data: FormData): Promise<User> {
      const code = data.get('code')
      if (!code) throw new Error('code is required')

      const clientId = this.opts.clientId
      if (!clientId) throw new Error('client_id is required')

      const clientSecret = this.opts.clientSecret
      if (!clientSecret) throw new Error('client_secret is required')

      const grantType = this.opts.grantType || 'authorization_code'

      const params = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code: code.toString(),
        grant_type: grantType,
        redirect_uri: 'postmessage',
      })

      const response = await fetch(this.tokenUrl, {
        method: 'POST',
        body: params.toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })

      if (response.status !== 200) {
        // TODO: replace with proper logging
        const body = await response.json()
        console.log({
          message: 'Error when fetching data to Google APIs',
          data: body,
        })

        throw new AuthorizationException(
          'Error when fetching data to Google APIs'
        )
      }

      const json = (await response.json()) as OAuthToken
      const token = `${json['token_type']} ${json['access_token']}`

      return await this.getProfile(token)
    }
  }

  export class Context {
    private strategies: Record<string, Strategy> = {}

    setStrategy(name: string, strategy: Strategy) {
      this.strategies = {
        ...this.strategies,
        [name]: strategy,
      }
    }

    async authenticate(name: string, data: FormData): Promise<User> {
      const strategy = this.strategies[name]
      if (!strategy)
        throw new NoStrategyException(`No auth implementation of ${name}`)

      return await this.strategies[name].execute(data)
    }
  }
}

export default Authentication

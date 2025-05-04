import type { Config } from 'drizzle-kit'
import fs from 'fs'
import path from 'path'

function getLocalDatabase() {
  try {
    const basePath = path.resolve('.wrangler')
    const dbFile = fs
      .readdirSync(basePath, { encoding: 'utf-8', recursive: true })
      .find((f) => f.endsWith('.sqlite'))

    if (!dbFile) {
      throw new Error(`.sqlite file not found in ${basePath}`)
    }

    const url = path.resolve(basePath, dbFile)
    return url
  } catch (err) {
    console.log(`Error ${err.message}`)
  }
}

export default {
  out: './db/migrate',
  schema: './db/schema',
  dialect: 'sqlite',
  ...(process.env.NODE_ENV === 'production'
    ? {
        driver: 'd1-http',
        dbCredentials: {
          accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
          databaseId: '682da9b9-584c-4c5d-afce-4c6823e605e3',
          token: process.env.CLOUDFLARE_TOKEN,
        },
      }
    : {
        dbCredentials: {
          url: getLocalDatabase(),
        },
      }),
} satisfies Config

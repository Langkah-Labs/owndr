import type { Config } from "drizzle-kit";

export default {
  out: "./db/migrate",
  schema: "./db/schema.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    databaseId: "682da9b9-584c-4c5d-afce-4c6823e605e3",
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    token: process.env.CLOUDFLARE_TOKEN!,
  },
} satisfies Config;

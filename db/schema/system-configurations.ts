import { sql } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const systemConfigurations = sqliteTable('system_configurations', {
  id: text().primaryKey(),
  key: text().notNull().unique(),
  description: text(),
  value: text().notNull(),
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text(),
  deletedAt: text(),
})

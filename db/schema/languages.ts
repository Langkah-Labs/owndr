import { sql } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const languages = sqliteTable('languages', {
  id: text().primaryKey(),
  name: text().notNull(),
  code: text().notNull(),
  flag: text().notNull(),
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text(),
  deleteAt: text(),
})

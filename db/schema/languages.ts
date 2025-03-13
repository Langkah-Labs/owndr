import { sql, relations } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { postTranslations } from './posts'
import { users } from './users'

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

export const languagesRelations = relations(languages, ({ many }) => ({
  postTranslations: many(postTranslations),
  users: many(users),
}))

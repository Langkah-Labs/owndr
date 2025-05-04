import { sql, relations, type InferSelectModel } from 'drizzle-orm'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { postTranslations } from './posts'
import { users } from './users'

export const languages = sqliteTable('languages', {
  id: text('id').primaryKey().notNull(),
  name: text('name').notNull(),
  code: text('code').notNull(),
  flag: text('flag').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  deletedAt: integer('deleted_at', { mode: 'timestamp' }),
})

export const languagesRelations = relations(languages, ({ many }) => ({
  postTranslations: many(postTranslations),
  users: many(users),
}))

export type Language = InferSelectModel<typeof languages>

import { sql, relations, type InferSelectModel } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { postTranslations } from './posts'
import { users } from './users'

export const languages = sqliteTable('languages', {
  id: text('id').primaryKey().notNull(),
  name: text('name').notNull(),
  code: text('code').notNull(),
  flag: text('flag').notNull(),
  createdAt: text('created_at').default(sql`(current_timestamp)`),
  updatedAt: text('updated_at'),
  deleteAt: text('deleted_at'),
})

export const languagesRelations = relations(languages, ({ many }) => ({
  postTranslations: many(postTranslations),
  users: many(users),
}))

export type Language = InferSelectModel<typeof languages>

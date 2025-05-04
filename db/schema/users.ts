import { sql, relations, type InferSelectModel } from 'drizzle-orm'
import { blob, integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { languages } from './languages'

export const users = sqliteTable('users', {
  id: text('id').primaryKey().notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name'),
  email: text('email').notNull().unique(),
  avatar: text('avatar'),
  location: text('location'),
  totalPosts: integer('total_posts').default(0),
  totalReactions: blob('total_reactions', { mode: 'bigint' }).default(sql`(0)`),
  profileScore: real('profile_score').default(0),
  preferredLanguageId: text('preferred_language_id'), // relation to languages table
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  deletedAt: integer('deleted_at', { mode: 'timestamp' }),
})

export const usersRelations = relations(users, ({ one }) => ({
  preferredLanguage: one(languages, {
    fields: [users.preferredLanguageId],
    references: [languages.id],
  }),
}))

export const sessions = sqliteTable('sessions', {
  id: text('id').primaryKey().notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  expiresAt: integer('expires_at', {
    mode: 'timestamp',
  }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  deletedAt: integer('deleted_at', { mode: 'timestamp' }),
})

export type User = InferSelectModel<typeof users>
export type Session = InferSelectModel<typeof sessions>

import { sql, relations } from 'drizzle-orm'
import { blob, integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from 'drizzle-zod'
import { z } from 'zod'
import { languages } from './languages'

export const users = sqliteTable('users', {
  id: text().primaryKey(),
  firstName: text().notNull(),
  lastName: text(),
  email: text().notNull().unique(),
  avatar: text(),
  location: text(),
  totalPosts: integer().default(0),
  totalReactions: blob({ mode: 'bigint' }).default(sql`(0)`),
  profileScore: real().default(0),
  preferredLanguageId: text(), // relation to languages table
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text(),
  deletedAt: text(),
})

export const usersRelations = relations(users, ({ one }) => ({
  preferredLanguage: one(languages, {
    fields: [users.preferredLanguageId],
    references: [languages.id],
  }),
}))

export const userSelectSchema = createSelectSchema(users).merge(
  z.object({
    me: z.boolean().optional().default(false),
  })
)

export const userInsertSchema = createInsertSchema(users, {
  firstName: (schema) => {
    return schema.min(2, {
      message: 'First name must be at least 2 characters.',
    })
  },
  email: (schema) => {
    return schema.email({
      message: 'Please enter a valid email address.',
    })
  },
})

export const userUpdateSchema = createUpdateSchema(users)

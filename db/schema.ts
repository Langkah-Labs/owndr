import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from 'drizzle-zod'
import { z } from 'zod'

export const users = sqliteTable('users', {
  id: text().primaryKey(),
  firstName: text().notNull(),
  lastName: text(),
  email: text().notNull().unique(),
  avatar: text(),
  location: text(),
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text(),
})

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

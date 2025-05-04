import { sql, type InferSelectModel } from 'drizzle-orm'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const systemConfigurations = sqliteTable('system_configurations', {
  id: text('id').primaryKey().notNull(),
  key: text('key').notNull().unique(),
  description: text('description'),
  value: text('value').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  deletedAt: integer('deleted_at', { mode: 'timestamp' }),
})

export type SystemConfiguration = InferSelectModel<typeof systemConfigurations>

import { sql, type InferSelectModel } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const systemConfigurations = sqliteTable('system_configurations', {
  id: text('id').primaryKey().notNull(),
  key: text('key').notNull().unique(),
  description: text('description'),
  value: text('value').notNull(),
  createdAt: text('created_at').default(sql`(current_timestamp)`),
  updatedAt: text('updated_at'),
  deletedAt: text('deleted_at'),
})

export type SystemConfiguration = InferSelectModel<typeof systemConfigurations>

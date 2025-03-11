import { sql } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const destinations = sqliteTable('destinations', {
  id: text().primaryKey(),
  name: text(),
  thumbnail: text(),
  categoryId: text(),
  latitude: text(),
  longitude: text(),
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text(),
  deletedAt: text(),
})

export const destinationCategories = sqliteTable('destination_categories', {
  id: text().primaryKey(),
  name: text().notNull(),
  icon: text(),
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text(),
  deletedAt: text(),
})

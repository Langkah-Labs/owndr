import { sql, relations, type InferSelectModel } from 'drizzle-orm'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const destinations = sqliteTable('destinations', {
  id: text('id').primaryKey().notNull(),
  name: text('name'),
  thumbnail: text('thumbnail'),
  categoryId: text('categoryId'),
  latitude: text('latitude'),
  longitude: text('longitude'),
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  deletedAt: integer('deleted_at', { mode: 'timestamp' }),
})

export const destinationsRelations = relations(destinations, ({ one }) => ({
  categories: one(destinationCategories, {
    fields: [destinations.categoryId],
    references: [destinationCategories.id],
  }),
}))

export const destinationCategories = sqliteTable('destination_categories', {
  id: text('id').primaryKey().notNull(),
  name: text('name').notNull(),
  icon: text('icon'),
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  deletedAt: integer('deleted_at', { mode: 'timestamp' }),
})

export const destinationsCategoriesRelations = relations(
  destinationCategories,
  ({ many }) => ({
    destinations: many(destinations),
  })
)

export type Destination = InferSelectModel<typeof destinations>
export type DestinationCategory = InferSelectModel<typeof destinationCategories>

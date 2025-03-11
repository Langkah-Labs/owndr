import { sql } from 'drizzle-orm'
import { blob, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const posts = sqliteTable('posts', {
  id: text().primaryKey(),
  title: text(),
  body: text(),
  informationScore: real().default(0),
  totalReactions: blob({ mode: 'bigint' }).default(sql`(0)`),
  totalThumbsUp: blob({ mode: 'bigint' }).default(sql`(0)`),
  totalThumbsDown: blob({ mode: 'bigint' }).default(sql`(0)`),
  slug: text(),
  userId: text().notNull(),
  destinationId: blob({ mode: 'bigint' }).notNull(),
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text(),
  deletedAt: text(),
})

export const postAttachments = sqliteTable('post_attachments', {
  id: text().primaryKey(),
  filename: text(),
  contentType: text(),
  size: blob({ mode: 'bigint' }),
  postId: text(),
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text(),
  deletedAt: text(),
})

export const postTranslations = sqliteTable('post_translations', {
  id: text().primaryKey(),
  title: text(),
  body: text(),
  postId: text().notNull(),
  languageId: text().notNull(),
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text(),
  deletedAt: text(),
})

export const postReactions = sqliteTable('post_reactions', {
  id: text().primaryKey(),
  postId: text().notNull(),
  userId: text().notNull(),
  type: text(),
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text(),
  deletedAt: text(),
})

export const comments = sqliteTable('comments', {
  id: text().primaryKey(),
  body: text(),
  userId: text().notNull(),
  postId: text().notNull(),
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text(),
  deletedAt: text(),
})

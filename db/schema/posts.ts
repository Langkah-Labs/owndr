import { sql, relations, type InferSelectModel } from 'drizzle-orm'
import { blob, real, sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { destinations } from './destinations'
import { users } from './users'
import { languages } from './languages'

export const posts = sqliteTable('posts', {
  id: text('id').primaryKey().notNull(),
  title: text('title'),
  body: text('body'),
  informationScore: real('information_score').default(0),
  totalReactions: blob('total_reactions', { mode: 'bigint' }).default(sql`(0)`),
  totalThumbsUp: blob('total_thumbs_up', { mode: 'bigint' }).default(sql`(0)`),
  totalThumbsDown: blob('total_thumbs_down', { mode: 'bigint' }).default(
    sql`(0)`
  ),
  slug: text('slug'),
  userId: text('user_id').notNull(),
  destinationId: text('destination_id').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  deletedAt: integer('deleted_at', { mode: 'timestamp' }),
})

export const postsRelations = relations(posts, ({ one, many }) => ({
  destination: one(destinations, {
    fields: [posts.destinationId],
    references: [destinations.id],
  }),
  user: one(users, {
    fields: [posts.userId],
    references: [users.id],
  }),
  attachments: many(postAttachments),
  translations: many(postTranslations),
  reactions: many(postReactions),
  comments: many(comments),
}))

export const postAttachments = sqliteTable('post_attachments', {
  id: text('id').primaryKey().notNull(),
  filename: text('filename'),
  contentType: text('content_type'),
  size: blob('size', { mode: 'bigint' }),
  postId: text('post_id'),
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  deletedAt: integer('deleted_at', { mode: 'timestamp' }),
})

export const postAttachmentsRelations = relations(
  postAttachments,
  ({ one }) => ({
    post: one(posts, {
      fields: [postAttachments.postId],
      references: [posts.id],
    }),
  })
)

export const postTranslations = sqliteTable('post_translations', {
  id: text('id').primaryKey().notNull(),
  title: text('title'),
  body: text('body'),
  postId: text('post_id').notNull(),
  languageId: text('language_id').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  deletedAt: integer('deleted_at', { mode: 'timestamp' }),
})

export const postTranslationsRelations = relations(
  postTranslations,
  ({ one }) => ({
    post: one(posts, {
      fields: [postTranslations.postId],
      references: [posts.id],
    }),
    languages: one(languages, {
      fields: [postTranslations.languageId],
      references: [languages.id],
    }),
  })
)

export const postReactions = sqliteTable('post_reactions', {
  id: text('id').primaryKey().notNull(),
  postId: text('post_id').notNull(),
  userId: text('user_id').notNull(),
  type: text('type'),
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  deletedAt: integer('deleted_at', { mode: 'timestamp' }),
})

export const postReactionsRelations = relations(postReactions, ({ one }) => ({
  post: one(posts, {
    fields: [postReactions.postId],
    references: [posts.id],
  }),
  user: one(users, {
    fields: [postReactions.userId],
    references: [users.id],
  }),
}))

export const comments = sqliteTable('comments', {
  id: text('id').primaryKey().notNull(),
  body: text('body'),
  userId: text('user_id').notNull(),
  postId: text('post_id').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  deletedAt: integer('deleted_at', { mode: 'timestamp' }),
})

export const commentsRelations = relations(comments, ({ one }) => ({
  post: one(posts, {
    fields: [comments.postId],
    references: [posts.id],
  }),
  user: one(users, {
    fields: [comments.userId],
    references: [users.id],
  }),
}))

export type Post = InferSelectModel<typeof posts>
export type PostAttachment = InferSelectModel<typeof postAttachments>
export type PostTranslation = InferSelectModel<typeof postTranslations>
export type PostReaction = InferSelectModel<typeof postReactions>
export type Comment = InferSelectModel<typeof comments>

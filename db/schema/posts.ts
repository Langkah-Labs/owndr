import { sql, relations } from 'drizzle-orm'
import { blob, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { destinations } from './destinations'
import { users } from './users'
import { languages } from './languages'

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
  destinationId: text().notNull(),
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text(),
  deletedAt: text(),
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

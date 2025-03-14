PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_destinations` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`thumbnail` text,
	`categoryId` text,
	`latitude` text,
	`longitude` text,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text,
	FOREIGN KEY (`categoryId`) REFERENCES `destination_categories`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_destinations`("id", "name", "thumbnail", "categoryId", "latitude", "longitude", "createdAt", "updatedAt", "deletedAt") SELECT "id", "name", "thumbnail", "categoryId", "latitude", "longitude", "createdAt", "updatedAt", "deletedAt" FROM `destinations`;--> statement-breakpoint
DROP TABLE `destinations`;--> statement-breakpoint
ALTER TABLE `__new_destinations` RENAME TO `destinations`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_users` (
	`id` text PRIMARY KEY NOT NULL,
	`firstName` text NOT NULL,
	`lastName` text,
	`email` text NOT NULL,
	`avatar` text,
	`location` text,
	`totalPosts` integer DEFAULT 0,
	`totalReactions` blob DEFAULT (0),
	`profileScore` real DEFAULT 0,
	`preferredLanguageId` text,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text,
	FOREIGN KEY (`preferredLanguageId`) REFERENCES `languages`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_users`("id", "firstName", "lastName", "email", "avatar", "location", "totalPosts", "totalReactions", "profileScore", "preferredLanguageId", "createdAt", "updatedAt", "deletedAt") SELECT "id", "firstName", "lastName", "email", "avatar", "location", "totalPosts", "totalReactions", "profileScore", "preferredLanguageId", "createdAt", "updatedAt", "deletedAt" FROM `users`;--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
ALTER TABLE `__new_users` RENAME TO `users`;--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE TABLE `__new_comments` (
	`id` text PRIMARY KEY NOT NULL,
	`body` text,
	`userId` text NOT NULL,
	`postId` text NOT NULL,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_comments`("id", "body", "userId", "postId", "createdAt", "updatedAt", "deletedAt") SELECT "id", "body", "userId", "postId", "createdAt", "updatedAt", "deletedAt" FROM `comments`;--> statement-breakpoint
DROP TABLE `comments`;--> statement-breakpoint
ALTER TABLE `__new_comments` RENAME TO `comments`;--> statement-breakpoint
CREATE TABLE `__new_post_attachments` (
	`id` text PRIMARY KEY NOT NULL,
	`filename` text,
	`contentType` text,
	`size` blob,
	`postId` text,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text,
	FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_post_attachments`("id", "filename", "contentType", "size", "postId", "createdAt", "updatedAt", "deletedAt") SELECT "id", "filename", "contentType", "size", "postId", "createdAt", "updatedAt", "deletedAt" FROM `post_attachments`;--> statement-breakpoint
DROP TABLE `post_attachments`;--> statement-breakpoint
ALTER TABLE `__new_post_attachments` RENAME TO `post_attachments`;--> statement-breakpoint
CREATE TABLE `__new_post_reactions` (
	`id` text PRIMARY KEY NOT NULL,
	`postId` text NOT NULL,
	`userId` text NOT NULL,
	`type` text,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text,
	FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_post_reactions`("id", "postId", "userId", "type", "createdAt", "updatedAt", "deletedAt") SELECT "id", "postId", "userId", "type", "createdAt", "updatedAt", "deletedAt" FROM `post_reactions`;--> statement-breakpoint
DROP TABLE `post_reactions`;--> statement-breakpoint
ALTER TABLE `__new_post_reactions` RENAME TO `post_reactions`;--> statement-breakpoint
CREATE TABLE `__new_post_translations` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text,
	`body` text,
	`postId` text NOT NULL,
	`languageId` text NOT NULL,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text,
	FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`languageId`) REFERENCES `languages`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_post_translations`("id", "title", "body", "postId", "languageId", "createdAt", "updatedAt", "deletedAt") SELECT "id", "title", "body", "postId", "languageId", "createdAt", "updatedAt", "deletedAt" FROM `post_translations`;--> statement-breakpoint
DROP TABLE `post_translations`;--> statement-breakpoint
ALTER TABLE `__new_post_translations` RENAME TO `post_translations`;--> statement-breakpoint
CREATE TABLE `__new_posts` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text,
	`body` text,
	`informationScore` real DEFAULT 0,
	`totalReactions` blob DEFAULT (0),
	`totalThumbsUp` blob DEFAULT (0),
	`totalThumbsDown` blob DEFAULT (0),
	`slug` text,
	`userId` text NOT NULL,
	`destinationId` text NOT NULL,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_posts`("id", "title", "body", "informationScore", "totalReactions", "totalThumbsUp", "totalThumbsDown", "slug", "userId", "destinationId", "createdAt", "updatedAt", "deletedAt") SELECT "id", "title", "body", "informationScore", "totalReactions", "totalThumbsUp", "totalThumbsDown", "slug", "userId", "destinationId", "createdAt", "updatedAt", "deletedAt" FROM `posts`;--> statement-breakpoint
DROP TABLE `posts`;--> statement-breakpoint
ALTER TABLE `__new_posts` RENAME TO `posts`;
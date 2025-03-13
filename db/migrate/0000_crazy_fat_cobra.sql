CREATE TABLE `destination_categories` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`icon` text,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text
);
--> statement-breakpoint
CREATE TABLE `destinations` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`thumbnail` text,
	`categoryId` text,
	`latitude` text,
	`longitude` text,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text
);
--> statement-breakpoint
CREATE TABLE `system_configurations` (
	`id` text PRIMARY KEY NOT NULL,
	`key` text NOT NULL,
	`description` text,
	`value` text NOT NULL,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `system_configurations_key_unique` ON `system_configurations` (`key`);--> statement-breakpoint
CREATE TABLE `users` (
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
	`deletedAt` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE TABLE `languages` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`code` text NOT NULL,
	`flag` text NOT NULL,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deleteAt` text
);
--> statement-breakpoint
CREATE TABLE `comments` (
	`id` text PRIMARY KEY NOT NULL,
	`body` text,
	`userId` text NOT NULL,
	`postId` text NOT NULL,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text
);
--> statement-breakpoint
CREATE TABLE `post_attachments` (
	`id` text PRIMARY KEY NOT NULL,
	`filename` text,
	`contentType` text,
	`size` blob,
	`postId` text,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text
);
--> statement-breakpoint
CREATE TABLE `post_reactions` (
	`id` text PRIMARY KEY NOT NULL,
	`postId` text NOT NULL,
	`userId` text NOT NULL,
	`type` text,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text
);
--> statement-breakpoint
CREATE TABLE `post_translations` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text,
	`body` text,
	`postId` text NOT NULL,
	`languageId` text NOT NULL,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text,
	`deletedAt` text
);
--> statement-breakpoint
CREATE TABLE `posts` (
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
	`deletedAt` text
);

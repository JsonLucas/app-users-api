-- DROP DATABASE IF EXISTS app_users;
-- CREATE DATABASE app_users;
CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"picture" TEXT,
	"createdAt" DATE DEFAULT(now()),
	"updatedAt" DATE
);
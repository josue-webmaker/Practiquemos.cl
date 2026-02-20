import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email"),
  fullName: text("full_name"),
  role: text("role").notNull().default("user"),
  plan: text("plan").notNull().default("free"),
  planExpiry: timestamp("plan_expiry"),
  licenseType: text("license_type").default("clase_b"),
  createdAt: timestamp("created_at").defaultNow(),
  lastLogin: timestamp("last_login"),
});

export const examResults = pgTable("exam_results", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  examMode: text("exam_mode").notNull(),
  licenseType: text("license_type").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  correctAnswers: integer("correct_answers").notNull(),
  score: integer("score").notNull(),
  passed: boolean("passed").notNull(),
  timeSpent: integer("time_spent"),
  categoryBreakdown: jsonb("category_breakdown"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const favorites = pgTable("favorites", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  questionId: integer("question_id").notNull(),
  licenseType: text("license_type").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const categoryProgress = pgTable("category_progress", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  licenseType: text("license_type").notNull(),
  category: text("category").notNull(),
  totalAnswered: integer("total_answered").notNull().default(0),
  totalCorrect: integer("total_correct").notNull().default(0),
  lastPracticed: timestamp("last_practiced"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  fullName: true,
});

export const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const adminCreateUserSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(4),
  email: z.string().email().optional(),
  fullName: z.string().optional(),
  plan: z.enum(["free", "premium_10", "premium_30"]).default("free"),
  role: z.enum(["user", "admin"]).default("user"),
});

export const adminUpdateUserSchema = z.object({
  plan: z.enum(["free", "premium_10", "premium_30"]).optional(),
  password: z.string().min(4).optional(),
  email: z.string().email().optional(),
  fullName: z.string().optional(),
  role: z.enum(["user", "admin"]).optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ExamResult = typeof examResults.$inferSelect;
export type Favorite = typeof favorites.$inferSelect;
export type CategoryProgress = typeof categoryProgress.$inferSelect;

import { eq, and, desc } from "drizzle-orm";
import { db } from "./db";
import {
  users,
  examResults,
  favorites,
  categoryProgress,
  type User,
  type InsertUser,
  type ExamResult,
  type Favorite,
  type CategoryProgress,
} from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: any): Promise<User>;
  updateUser(id: string, data: Partial<User>): Promise<User | undefined>;
  deleteUser(id: string): Promise<void>;
  getAllUsers(): Promise<User[]>;
  getExamResults(userId: string): Promise<ExamResult[]>;
  createExamResult(result: any): Promise<ExamResult>;
  getFavorites(userId: string, licenseType: string): Promise<Favorite[]>;
  addFavorite(userId: string, questionId: number, licenseType: string): Promise<Favorite>;
  removeFavorite(userId: string, questionId: number, licenseType: string): Promise<void>;
  getCategoryProgress(userId: string, licenseType: string): Promise<CategoryProgress[]>;
  updateCategoryProgress(userId: string, licenseType: string, category: string, correct: boolean): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(userData: any): Promise<User> {
    const [user] = await db.insert(users).values(userData).returning();
    return user;
  }

  async updateUser(id: string, data: Partial<User>): Promise<User | undefined> {
    const [user] = await db.update(users).set(data).where(eq(users.id, id)).returning();
    return user;
  }

  async deleteUser(id: string): Promise<void> {
    await db.delete(favorites).where(eq(favorites.userId, id));
    await db.delete(categoryProgress).where(eq(categoryProgress.userId, id));
    await db.delete(examResults).where(eq(examResults.userId, id));
    await db.delete(users).where(eq(users.id, id));
  }

  async getAllUsers(): Promise<User[]> {
    return db.select().from(users).orderBy(desc(users.createdAt));
  }

  async getExamResults(userId: string): Promise<ExamResult[]> {
    return db.select().from(examResults).where(eq(examResults.userId, userId)).orderBy(desc(examResults.createdAt));
  }

  async createExamResult(result: any): Promise<ExamResult> {
    const [examResult] = await db.insert(examResults).values(result).returning();
    return examResult;
  }

  async getFavorites(userId: string, licenseType: string): Promise<Favorite[]> {
    return db.select().from(favorites).where(
      and(eq(favorites.userId, userId), eq(favorites.licenseType, licenseType))
    );
  }

  async addFavorite(userId: string, questionId: number, licenseType: string): Promise<Favorite> {
    const [fav] = await db.insert(favorites).values({ userId, questionId, licenseType }).returning();
    return fav;
  }

  async removeFavorite(userId: string, questionId: number, licenseType: string): Promise<void> {
    await db.delete(favorites).where(
      and(
        eq(favorites.userId, userId),
        eq(favorites.questionId, questionId),
        eq(favorites.licenseType, licenseType)
      )
    );
  }

  async getCategoryProgress(userId: string, licenseType: string): Promise<CategoryProgress[]> {
    return db.select().from(categoryProgress).where(
      and(eq(categoryProgress.userId, userId), eq(categoryProgress.licenseType, licenseType))
    );
  }

  async updateCategoryProgress(userId: string, licenseType: string, category: string, correct: boolean): Promise<void> {
    const existing = await db.select().from(categoryProgress).where(
      and(
        eq(categoryProgress.userId, userId),
        eq(categoryProgress.licenseType, licenseType),
        eq(categoryProgress.category, category)
      )
    );

    if (existing.length > 0) {
      await db.update(categoryProgress).set({
        totalAnswered: existing[0].totalAnswered + 1,
        totalCorrect: existing[0].totalCorrect + (correct ? 1 : 0),
        lastPracticed: new Date(),
      }).where(eq(categoryProgress.id, existing[0].id));
    } else {
      await db.insert(categoryProgress).values({
        userId,
        licenseType,
        category,
        totalAnswered: 1,
        totalCorrect: correct ? 1 : 0,
        lastPracticed: new Date(),
      });
    }
  }
}

export const storage = new DatabaseStorage();

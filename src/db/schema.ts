import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const tutorialsTable = pgTable("tutorials", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar().notNull(),
  titleImage: varchar().notNull(),
  description: varchar().notNull(),
  imageOne: varchar().notNull(),
  imageTwo: varchar().notNull(),
  imageThree: varchar().notNull(),
  imageFour: varchar().notNull(),
  textOne: varchar().notNull(),
  textTwo: varchar().notNull(),
  textThree: varchar().notNull(),
  keywords: varchar().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  link1: varchar(),
  link2: varchar(),
});

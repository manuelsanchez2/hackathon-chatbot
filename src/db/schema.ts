import { InferSelectModel } from "drizzle-orm"
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core"

export const chatbots = pgTable("chatbots", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  url: text("url"),
  userId: varchar("user_id"),
})

export type Chatbot = InferSelectModel<typeof chatbots>

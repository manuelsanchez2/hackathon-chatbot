"use server"

import { db } from "@/db"
import { chatbots } from "@/db/schema"
import { auth } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"

type UpdateChatbotParams = {
  id: string
  name: string
  description: string
  url: string
}

export async function updateChatbot({
  id,
  name,
  description,
  url,
}: UpdateChatbotParams) {
  const { userId } = auth()

  if (!userId) {
    throw new Error("User not authenticated")
  }
  const chatbot = {
    name,
    description,
    url,
    userId,
  }

  console.log("Updating chatbot:", { id, ...chatbot })

  // Update the chatbot in the database
  const [existingChatbot] = await db
    .update(chatbots)
    .set(chatbot)
    .where(eq(chatbots.id, Number(id)))
    .returning()

  if (!existingChatbot) {
    throw new Error("Chatbot not found")
  }

  return existingChatbot
}

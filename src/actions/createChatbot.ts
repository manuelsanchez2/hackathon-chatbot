"use server"

import { db } from "@/db"
import { auth } from "@clerk/nextjs/server"
import { chatbots } from "@/db/schema"
import { redirect } from "next/navigation"

export async function createChatbot(formData: FormData) {
  const { userId } = auth()

  const chatbot = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    url: formData.get("url") as string,
    userId,
  }

  const [newChatbot] = await db
    .insert(chatbots)
    .values(chatbot)
    .returning({ insertedId: chatbots.id })

  redirect(`/chatbots/${newChatbot.insertedId}/instructions`)
}

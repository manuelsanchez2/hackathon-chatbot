"use server"

import { auth } from "@clerk/nextjs/server"
import { chatbots } from "@/db/schema"
import { db } from "@/db"
import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"

export async function deleteChatbot(id: string) {
  const { userId } = auth()

  if (!userId) {
    throw new Error("User not authenticated")
  }

  await db.delete(chatbots).where(eq(chatbots.id, Number(id)))

  redirect(`/dashboard`)
}

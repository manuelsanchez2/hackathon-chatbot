import { db } from "@/db"
import { chatbots } from "@/db/schema"
import { eq } from "drizzle-orm"
import { auth } from "@clerk/nextjs/server"
import ChatbotList from "@/components/chatbot-list"
import NewChatbotButton from "@/components/new-chatbot-button"
import Chat from "@/components/chat/Chat"

export default async function Page() {
  const { userId } = auth()
  if (!userId) {
    return null
  }

  const userChatbots = await db
    .select()
    .from(chatbots)
    .where(eq(chatbots.userId, userId))

  // const subscribed = await getSubscription({ userId })

  return (
    <div>
      <Chat description="You are an LLM specialized in League of Legends knowledge"/>

      <div className="max-w-5xl mx-auto w-full px-5">
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-3xl font-bold text-center my-4">Your Chatbots</h1>
          <NewChatbotButton />
        </div>
        <ChatbotList chatbots={userChatbots} subscribed={false} />
      </div>
    </div>
  )
}

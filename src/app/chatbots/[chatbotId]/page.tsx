import { db } from "@/db"
import { eq } from "drizzle-orm"
import { chatbots as dbChatbots } from "@/db/schema"
import Link from "next/link"
import { Globe, ChevronLeft, Code } from "lucide-react"
import ChatbotInfo from "@/components/chatbot-info"

export default async function Page({
  params,
}: {
  params: Promise<{ chatbotId: string }>
}) {
  const { chatbotId } = await params

  if (!chatbotId) return <div>Invalid Chatbot ID</div>

  const chatbots = await db.query.chatbots.findMany({
    where: eq(dbChatbots.id, parseInt(chatbotId)),
  })

  const chatbot = chatbots[0]

  return (
    <div className="max-w-5xl mx-auto w-full px-5 pt-5">
      {/* Back button  */}
      <Link
        href="/dashboard"
        className="flex items-center text-zinc-700 mb-5 w-fit px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 transition border border-black text-sm"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        <span>Back to projects</span>
      </Link>
      {/* Info about the chatbot */}
      <div className="flex justify-between items-start">
        <ChatbotInfo chatbot={chatbot} />
        {/* <div className="flex flex-col">
          {chatbot.url ? (
            <Link
              href={chatbot.url}
              className="underline text-indigo-700 flex items-center"
            >
              <Globe className="h-5 w-5 mr-1" />
              <span className="text-lg">Visit site</span>
            </Link>
          ) : null}
          <Link
            href={`/chatbots/${chatbotId}/instructions`}
            className="underline text-indigo-700 flex items-center mt-2"
          >
            <Code className="h-5 w-5 mr-1" />
            <span className="text-lg">Embed Code</span>
          </Link>
        </div> */}
      </div>
      {/* <div>
        <Table data={project.feedbacks} />
      </div> */}
    </div>
  )
}

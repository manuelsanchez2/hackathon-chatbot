import { db } from "@/db"
import { eq } from "drizzle-orm"
import { chatbots as dbChatbots } from "@/db/schema"
import Link from "next/link"
import { Globe, ChevronLeft, Code } from "lucide-react"
// import Table from "@/components/table";

const page = async ({
  params,
}: {
  params: {
    chatbotId: string
  }
}) => {
  if (!params.chatbotId) return <div>Invalid Chatbot ID</div>

  const chatbots = await db.query.chatbots.findMany({
    where: eq(dbChatbots.id, parseInt(params.chatbotId)),
    // with: {
    //   feedbacks: true,
    // },
  })

  const chatbot = chatbots[0]

  return (
    <div>
      <div>
        <Link
          href="/dashboard"
          className="flex items-center text-indigo-700 mb-5 w-fit"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span className="text-lg">Back to projects</span>
        </Link>
      </div>
      <div className="flex justify-between items-start">
        <div className="proj-info">
          <h1 className="text-3xl font-bold mb-3">{chatbot.name}</h1>
          <h2 className="text-primary-background text-xl mb-2">
            {chatbot.description}
          </h2>
        </div>
        <div className="flex flex-col">
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
            href={`/chatbots/${params.chatbotId}/instructions`}
            className="underline text-indigo-700 flex items-center mt-2"
          >
            <Code className="h-5 w-5 mr-1" />
            <span className="text-lg">Embed Code</span>
          </Link>
        </div>
      </div>
      {/* <div>
        <Table data={project.feedbacks} />
      </div> */}
    </div>
  )
}

export default page

import { InferSelectModel } from "drizzle-orm"
import { chatbots } from "@/db/schema"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Chatbot = InferSelectModel<typeof chatbots>

type Props = {
  chatbots: Chatbot[]
  subscribed: boolean | null | undefined
}

const ChatbotList = (props: Props) => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4">
        {props.chatbots.map((chatbot: Chatbot) => (
          <li key={chatbot.id}>
            <Card className="max-w-[350px] flex flex-col h-full">
              <CardHeader className="flex-1">
                <CardTitle>{chatbot.name}</CardTitle>
                <CardDescription>{chatbot.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/chatbots/${chatbot.id}`}>
                  <Button>View Chatbot</Button>
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ChatbotList

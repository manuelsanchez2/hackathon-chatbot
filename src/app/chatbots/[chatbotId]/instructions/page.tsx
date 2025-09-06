import CopyBtn from "@/components/copy-button"

const page = ({
  params,
}: {
  params: {
    chatbotId: string
  }
}) => {
  if (!params.chatbotId) return <div>Invalid chatbot ID</div>

  const WIDGET_URL = "https://cdn.fakecdn.com"

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">
        Embed the code in your site
      </p>
      <div className="bg-blue-950 p-6 rounded-md mt-6 relative">
        <code className=" text-white">
          {`<my-widget chatbot-id="${params.chatbotId}"></my-widget>`}
          <br />
          {`<script src="${WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <CopyBtn
          text={`<my-widget chatbot-id="${params.chatbotId}"></my-widget>\n<script src="${WIDGET_URL}/widget.umd.js"></script>`}
        />
      </div>
    </div>
  )
}

export default page

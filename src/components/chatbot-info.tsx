"use client"

import { Chatbot } from "@/db/schema"
import { useState } from "react"
import { Edit2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { updateChatbot } from "@/actions/updateChatbot"

function ChatbotInfo({ chatbot }: { chatbot: Chatbot }) {
  const [projectName, setProjectName] = useState(chatbot.name || "")
  const [projectDescription, setProjectDescription] = useState(
    chatbot.description || ""
  )
  const [url, setUrl] = useState(chatbot.url || "")
  const [editing, setEditing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEditing(false)
    try {
      await updateChatbot({
        id: String(chatbot.id),
        name: projectName,
        description: projectDescription,
        url: url,
      })
    } catch (error) {
      console.log("Error updating chatbot:", error)
    }
  }

  return (
    <form className="proj-info" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 mb-4">
        <h1 className="font-bold text-2xl">Chatbot Name & Description</h1>
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 px-2 py-1 border border-zinc-800  hover:bg-gray-100 cursor-pointer"
          onClick={() => setEditing(!editing)}
          aria-label="Edit description"
        >
          {editing ? <X size={18} /> : <Edit2 size={18} />}
        </button>
      </div>
      {/* name  */}
      <div className="flex flex-col w-[300px]">
        <label className="text-lg font-bold" htmlFor="name">
          Name
        </label>
        <div
          className={
            "flex items-center mb-3 px-2 rounded border bg-white" +
            (editing ? "  border-black" : "border-transparent")
          }
        >
          {editing ? (
            <input
              type="text"
              id="name"
              name="name"
              className="text-lg w-full focus:outline-none"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              autoFocus
            />
          ) : (
            <div className="text-lg w-full">{projectName}</div>
          )}
        </div>
      </div>
      {/* description  */}
      <div className="flex flex-col w-[300px]">
        <label className="text-lg font-bold" htmlFor="description">
          Description
        </label>
        <div
          className={
            "flex items-center mb-3 px-2 rounded border bg-white" +
            (editing ? "  border-black" : "border-transparent")
          }
        >
          {editing ? (
            <textarea
              id="description"
              name="description"
              className="text-lg w-full focus:outline-none resize-none"
              value={projectDescription}
              rows={4}
              onChange={(e) => setProjectDescription(e.target.value)}
            ></textarea>
          ) : (
            <div className="text-lg w-full h-[112px] overflow-clip">
              {projectDescription}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col w-[300px]">
        <label className="text-lg font-bold" htmlFor="url">
          URL
        </label>
        <div
          className={
            "flex items-center mb-3 px-2 rounded border bg-white" +
            (editing ? "  border-black" : "border-transparent")
          }
        >
          {editing ? (
            <input
              type="text"
              id="url"
              name="url"
              className="text-lg w-full focus:outline-none"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              autoFocus
            />
          ) : (
            <div className="text-lg w-full">{url}</div>
          )}
        </div>
      </div>
      {editing && (
        <Button
          type="submit"
          className="mt-2"
          disabled={
            !projectName.trim() || !projectDescription.trim() || !url.trim()
          }
        >
          Save Changes
        </Button>
      )}
    </form>
  )
}

export default ChatbotInfo

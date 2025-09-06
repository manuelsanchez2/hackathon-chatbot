"use client";

import React, { useState } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "../ai-elements/conversation";
import { Message, MessageContent } from "../ai-elements/message";
import { useChat } from "@ai-sdk/react";
import { Response } from "../ai-elements/response";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputSubmit,
} from "../ai-elements/prompt-input";
import { Button } from "../ui/button";
import clsx from "clsx";

function Chat() {
  const { messages, sendMessage } = useChat();
  const [input, setInput] = useState("");

  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 bottom h-96 flex items-end w-96 justify-end">
      <Button className={clsx("z-50", toggle && "hidden")} onClick={() => setToggle((prev) => !prev)}>chat</Button>
      <div className={clsx("relative border-[1px] p-2 rounded-lg", toggle ? "block" : "hidden")}>
        <Button className="absolute top-2 right-2 z-50" onClick={() => setToggle((prev) => !prev)}>x</Button>
        <div className="flex-1 overflow-hidden">
          <Conversation className="h-full">
            <ConversationContent className="px-6 py-4">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full text-center">
                  <div className="space-y-2">
                    <div className="text-2xl">👋</div>
                    <h2 className="text-lg font-medium text-foreground">
                      Welcome to AI Gateway Chatbot
                    </h2>
                    <p className="text-muted-foreground">
                      Start a conversation by typing a message below.
                    </p>
                  </div>
                </div>
              ) : (
                messages.map((message) => (
                  <Message from={message.role} key={message.id}>
                    <MessageContent>
                      {message.parts.map((part, i) => {
                        switch (part.type) {
                          case "text":
                            return (
                              <Response key={`${message.id}-${i}`}>
                                {part.text}
                              </Response>
                            );
                          default:
                            return null;
                        }
                      })}
                    </MessageContent>
                  </Message>
                ))
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>
          <PromptInput
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage({ text: input });
              setInput("");
            }}
            className="mt-4 relative"
          >
            <PromptInputTextarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <PromptInputToolbar>
              <PromptInputSubmit
                className="absolute right-1 bottom-1"
                disabled={false}
                status={"ready"}
              />
            </PromptInputToolbar>
          </PromptInput>
        </div>
      </div>
    </div>
  );
}

export default Chat;

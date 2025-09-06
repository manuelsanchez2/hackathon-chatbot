"use client";

import React, { useState } from "react";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputSubmit,
} from "../ai-elements/prompt-input";
import { useChat } from "@ai-sdk/react";

function PromptInputComponent() {
  const [input, setInput] = useState("");
  const { sendMessage } = useChat();
  return (
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
  );
}

export default PromptInputComponent;

import React from "react";
import { AnimatePresence } from "framer-motion";
import MessageBubble from "./MessageBubble";

interface Message {
  role: "user" | "assistant";
  text: string;
  loading?: boolean;
}

interface MessageListProps {
  messages: Message[];
  darkMode: boolean;
  copyToClipboard: (text: string) => void;
  downloadMessage: (text: string) => void;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  darkMode,
  copyToClipboard,
  downloadMessage,
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      <AnimatePresence>
        {messages.map((msg, i) => (
          <MessageBubble
            key={i}
            role={msg.role}
            text={msg.text}
            loading={msg.loading}
            darkMode={darkMode}
            copyToClipboard={copyToClipboard}
            downloadMessage={downloadMessage}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MessageList;

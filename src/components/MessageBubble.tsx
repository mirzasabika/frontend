import React from "react";
import { User, Bot, Copy, Download } from "lucide-react";
import { motion } from "framer-motion";

interface MessageBubbleProps {
  role: "user" | "assistant";
  text: string;
  loading?: boolean;
  darkMode: boolean;
  copyToClipboard: (text: string) => void;
  downloadMessage: (text: string) => void;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  role,
  text,
  loading,
  darkMode,
  copyToClipboard,
  downloadMessage,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-start gap-2 ${
        role === "user" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        {role === "user" ? <User size={16} /> : <Bot size={16} />}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-lg p-3 rounded-lg text-sm flex flex-col gap-2 ${
          role === "user"
            ? "bg-blue-600 text-white"
            : darkMode
            ? "bg-gray-700 text-gray-100"
            : "bg-gray-300 text-gray-900"
        }`}
      >
        {loading ? (
          <div className="flex gap-1">
            {[0, 0.2, 0.4].map((delay) => (
              <motion.span
                key={delay}
                className="w-2 h-2 bg-gray-400 rounded-full"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1, delay }}
              />
            ))}
          </div>
        ) : (
          <>
            <span>{text}</span>
            {role === "assistant" && (
              <div className="flex gap-6 text-xs opacity-70">
                <button
                  onClick={() => copyToClipboard(text)}
                  className="flex items-center gap-1 hover:opacity-100"
                >
                  <Copy size={14} /> Copy
                </button>
                <button
                  onClick={() => downloadMessage(text)}
                  className="flex items-center gap-1 hover:opacity-100"
                >
                  <Download size={14} /> Download
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default MessageBubble;

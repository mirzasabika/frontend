import React from "react";
import { Send } from "lucide-react";
import { FaMicrophone } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";

interface ChatInputProps {
  darkMode: boolean;
  input: string;
  setInput: (v: string) => void;
  sendMessage: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  darkMode,
  input,
  setInput,
  sendMessage,
}) => {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-800" : "bg-gray-200"
      } sm:p-4 p-2 flex items-center gap-2`}
    >
      <button className="bg-blue-600 hover:bg-blue-500 p-3 rounded-lg flex items-center justify-center">
        <GrAttachment />
      </button>

      <div
        className={`flex-1 p-3 rounded-lg text-sm flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <input
          type="text"
          placeholder="Ask anything..."
          className="focus:outline-none bg-transparent w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <FaMicrophone />
      </div>

      <button
        onClick={sendMessage}
        className="bg-blue-600 hover:bg-blue-500 p-3 rounded-lg flex items-center justify-center"
      >
        <Send size={18} />
      </button>
    </div>
  );
};

export default ChatInput;

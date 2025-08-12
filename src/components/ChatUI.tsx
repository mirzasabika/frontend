import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

interface Message {
  role: "user" | "assistant";
  text: string;
  loading?: boolean;
}

const ChatUI: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hello! I can explain Design Thinking — ask me anything." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg, { role: "assistant", text: "", loading: true }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m, i) =>
          i === prev.length - 1
            ? { role: "assistant", text: mockAIResponse(userMsg.text), loading: false }
            : m
        )
      );
    }, 1500);
  };

  const mockAIResponse = (userText: string) => {
    return `You said: "${userText}". Here's a helpful AI-style response, generated locally.`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const downloadMessage = (text: string) => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "message.txt";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div
      className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} flex h-screen`}
    >
      <Sidebar darkMode={darkMode} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <ChatHeader
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setSidebarOpen={setSidebarOpen}
        />
        <MessageList
          messages={messages}
          darkMode={darkMode}
          copyToClipboard={copyToClipboard}
          downloadMessage={downloadMessage}
        />
        <ChatInput
          darkMode={darkMode}
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default ChatUI;

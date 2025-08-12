import React from "react";
import { Menu, Sun, Moon } from "lucide-react";

interface ChatHeaderProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  setSidebarOpen: (v: boolean) => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ darkMode, setDarkMode, setSidebarOpen }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-300"
      } flex items-center justify-between p-4 border-b`}
    >
      <div className="flex items-center gap-4">
        <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
          <Menu size={20} />
        </button>
        <h2 className="font-semibold">Model: GPT-4</h2>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded hover:bg-gray-700"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
};

export default ChatHeader;

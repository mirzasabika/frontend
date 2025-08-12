import React, { useState } from "react";
import { X } from "lucide-react";
import { Thermometer, Type } from "lucide-react";
import { FaDownload, FaCopy } from "react-icons/fa";

interface SidebarProps {
  darkMode: boolean;
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode, sidebarOpen, setSidebarOpen }) => {
  const [temperature, setTemperature] = useState(0.5);
  const [maxTokens, setMaxTokens] = useState(1000);
  return (
    <div
      className={`fixed md:static inset-y-0 left-0 w-64 ${
        darkMode ? "bg-gray-800" : "bg-gray-200"
      } p-4 flex flex-col gap-6 z-20 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300`}
    >
      <div className="flex justify-between items-center md:hidden">
        <h2 className="text-lg font-semibold">Settings</h2>
        <button onClick={() => setSidebarOpen(false)}>
          <X size={20} />
        </button>
      </div>

      {/* Model Select */}
      <div>
        <label className="block text-sm font-medium opacity-70">Model</label>
        <select
          className={`w-full rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode ? "bg-gray-700" : "bg-gray-300"
          }`}
        >
          <option>GPT-4</option>
          <option>GPT-3.5</option>
        </select>
      </div>

     {/* Temperature */}
      <div className="bg-white/5 p-3 rounded-xl backdrop-blur-sm border border-white/10">
        <label className="flex items-center gap-2 text-sm font-semibold mb-2">
          <Thermometer size={16} /> Temperature: 
          <span className="ml-auto text-blue-400 font-bold">{temperature}</span>
        </label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
          className="w-full accent-blue-500 cursor-pointer"
        />
      </div>

      {/* Max Tokens */}
      <div className="bg-white/5 p-3 rounded-xl backdrop-blur-sm border border-white/10">
        <label className="flex items-center gap-2 text-sm font-semibold mb-2">
          <Type size={16} /> Max Tokens: 
          <span className="ml-auto text-green-400 font-bold">{maxTokens}</span>
        </label>
        <input
          type="range"
          min={50}
          max={2000}
          step={50}
          value={maxTokens}
          onChange={(e) => setMaxTokens(parseInt(e.target.value))}
          className="w-full accent-green-500 cursor-pointer"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <button
          className={` ${
            darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"
          } px-3 py-2 rounded w-full text-sm flex gap-4 items-center justify-center`}
        >   <FaDownload/>
            Download JSON
        </button>
        <button
          className={`${
            darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"
          } px-3 py-2 rounded w-full text-sm  flex gap-4 items-center justify-center`}
        >
          <FaCopy />
          Copy JSON
        </button>
      </div>

      {/* Saved Prompt */}
      <textarea
        placeholder="Your saved prompt..."
        className={`${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        } rounded p-2 text-sm w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      ></textarea>

      {/* Save / Load */}
      <div className="flex gap-2">
        <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded w-full text-sm">
          Save
        </button>
        <button
          className={`${
            darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"
          } px-4 py-2 rounded w-full text-sm`}
        >
          Load
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

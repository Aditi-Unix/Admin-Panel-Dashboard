import React, { useEffect, useState } from "react";
import {
  Menu,
  Search,
  Filter,
  Plus,
  Sun,
  Moon,
  Bell,
  ChevronDown,
} from "lucide-react";

export default function Header({ toggleSidebar, isDark, toggleTheme }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const profileImage = user?.photo
    ? user.photo
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(
        user?.name || ""
      )}&background=6366F1&color=fff`;

  return (
    <div
      className={`${
        isDark
          ? "bg-gray-900 border-gray-800 text-white"
          : "bg-white border-gray-200 text-gray-900"
      } border-b px-6 py-4 shadow-sm transition-all`}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Sidebar Toggle + Title */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md ${
              isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
          >
            <Menu size={22} />
          </button>
          <h1 className="text-2xl font-bold select-none">Dashboard</h1>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            className={`w-full pl-10 pr-10 py-2 rounded-xl outline-none transition-all duration-200
            ${
              isDark
                ? "bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500"
                : "bg-gray-100 text-gray-900 focus:ring-2 focus:ring-indigo-400"
            }`}
            placeholder="Search Anything..."
          />
          <Filter
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:scale-110 transition"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* New Button */}
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition-all hover:scale-105 shadow-sm">
            <Plus size={16} /> New
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all hover:scale-110 ${
              isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notifications */}
          <button
            className={`relative p-2 rounded-xl transition-all hover:scale-110 ${
              isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-[6px] rounded-full animate-bounce">
              3
            </span>
          </button>

          {/* Profile Dropdown */}
          <div
            className={`flex items-center gap-2 cursor-pointer border-l pl-3 transition-all 
            hover:scale-105 hover:opacity-80 ${
              isDark ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <img
              src={profileImage}
              alt="User"
              className="w-10 h-10 rounded-full object-cover shadow-md"
            />
            <ChevronDown size={18} className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

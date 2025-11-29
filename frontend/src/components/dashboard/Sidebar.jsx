import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  Package,
  MessageSquare,
  Calendar,
  FileText,
  Settings
} from "lucide-react";

export default function Sidebar({ isOpen, isDark }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: Users, label: "Users", path: "/users" },
    { icon: ShoppingCart, label: "Orders", path: "/ecommerce" },
    { icon: Package, label: "Inventory", path: "/inventory" },
    { icon: MessageSquare, label: "Messages", path: "/messages" },
    { icon: Calendar, label: "Calendar", path: "/calendar" },
    { icon: FileText, label: "Reports", path: "/reports" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div
      className={`${isOpen ? "w-64" : "w-20"}
      transition-all duration-300 flex flex-col h-screen border-r shadow-md
      ${
        isDark
          ? "bg-gradient-to-b from-[#0A1A3A] to-[#1E3A8A] text-white border-blue-900"
          : "bg-gradient-to-b from-white to-blue-100 text-gray-900 border-blue-200"
      }`}
    >

      {/* Logo */}
      <div className="p-6 flex items-center gap-2 select-none">
        <span className="text-2xl">⚡</span>
        {isOpen && (
          <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
            Nexus
          </span>
        )}
      </div>

      {/* Menu */}
      <nav className="space-y-2 px-3 flex-1">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`group flex items-center gap-3 px-4 py-3 w-full rounded-lg transition-all duration-200
              ${isActive
                ? isDark
                  ? "bg-blue-600/90 text-white shadow-lg"
                  : "bg-blue-500 text-white shadow-md"
                : isDark
                  ? "hover:bg-blue-900/40 text-blue-200"
                  : "hover:bg-blue-200 text-gray-900"
              }`}
            >
              <item.icon size={20} />

              {/* Hover Zoom Label */}
              {isOpen && (
                <span className="font-medium transition-all duration-200 group-hover:scale-110">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 text-[10px] opacity-70 text-center">
        © 2025 Nexus Admin
      </div>
    </div>
  );
}

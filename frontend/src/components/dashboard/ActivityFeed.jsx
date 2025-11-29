import React from "react";
import { Clock, UserPlus, ShoppingBag, CreditCard, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ActivityFeed({ isDark }) {
  const navigate = useNavigate();

  const activities = [
    { icon: <UserPlus size={20} />, title: "New signup", time: "2 min ago", path: "/users" },
    { icon: <ShoppingBag size={20} />, title: "New order", time: "5 min ago", path: "/ecommerce" },
    { icon: <CreditCard size={20} />, title: "Payment done", time: "10 min ago", path: "/payments" },
    { icon: <Settings size={20} />, title: "System update", time: "1 hr ago", path: "/settings" },
  ];

  return (
    <div className={`rounded-2xl p-6 shadow-lg border transition-all duration-300
      ${
        isDark
          ? "bg-[#0E1B33] border-gray-700 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }
      h-full flex flex-col justify-center
    `}>
      
      <h3 className="font-bold mb-4 text-lg">Activity Feed</h3>

      <div className="space-y-3">
        {activities.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(item.path)}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer group
              ${
                isDark
                  ? "hover:bg-white/10"
                  : "hover:bg-gray-100"
              }
            `}
          >
            <span className="text-indigo-500 group-hover:scale-110 transition-transform">
              {item.icon}
            </span>

            <div className="flex-1">
              <p className="font-medium group-hover:text-indigo-600 transition-colors">
                {item.title}
              </p>

              <span className="flex items-center text-xs text-gray-400 gap-1">
                <Clock size={12} /> {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

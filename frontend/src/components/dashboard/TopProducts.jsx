import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopProducts({ isDark }) {
  const navigate = useNavigate();

  const products = [
    { name: "MacBook Pro 16", revenue: "$2,987,530", progress: 75 },
    { name: "iPhone 15 Pro", revenue: "$2,807,059", progress: 60 },
  ];

  return (
    <div
      className={`rounded-2xl p-6 shadow-lg border transition-all duration-300
      ${
        isDark
          ? "bg-[#0E1B33] border-gray-700 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      <h3 className="font-bold mb-4 text-lg flex justify-between">
        Top Products
        <button
          onClick={() => navigate("/products")}
          className="text-indigo-500 text-sm hover:underline"
        >
          View All
        </button>
      </h3>

      {products.map((p, i) => (
        <div
          key={i}
          onClick={() => navigate(`/product/${p.name.replace(/\s+/g, "-")}`)}
          className={`mb-4 p-4 rounded-lg cursor-pointer 
          group transition-all duration-300 shadow-sm
          ${
            isDark
              ? "hover:bg-white/10"
              : "hover:bg-indigo-50"
          }
          hover:shadow-lg hover:scale-[1.03]`}
        >
          <p className="font-semibold group-hover:text-indigo-600 transition-colors duration-200">
            {p.name}
          </p>
          <p className="text-[13px] text-gray-400">{p.revenue}</p>

          <div className="h-2 bg-gray-600/30 rounded mt-2 overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded transition-all duration-700 group-hover:bg-indigo-700"
              style={{ width: `${p.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecentOrders({ isDark }) {
  const navigate = useNavigate();

  const orders = [
    { id: "#001", name: "John Smith", product: "MacBook Pro", price: "$2500", date: "Today" },
    { id: "#002", name: "Emma Watson", product: "iPhone 15", price: "$1200", date: "Today" },
    { id: "#003", name: "William Roe", product: "AirPods Pro", price: "$299", date: "Yesterday" },
  ];

  return (
    <div className={`rounded-2xl p-6 shadow-lg border transition-all duration-300
      ${isDark ? "bg-[#0E1B33] border-gray-700 text-white" : "bg-white border-gray-200 text-gray-900"}`}>
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Recent Orders</h3>
        <button onClick={() => navigate("/orders")} className="text-indigo-500 text-sm hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <tbody>
            {orders.map((order, i) => (
              <tr
                key={i}
                onClick={() => navigate(`/order/${order.id}`)}
                className={`cursor-pointer border-b last:border-none transition-all 
                  ${isDark ? "hover:bg-white/10 border-gray-700" : "hover:bg-gray-100 border-gray-200"}`}
              >
                <td className="py-3 font-medium">{order.id}</td>
                <td>{order.name}</td>
                <td>{order.product}</td>
                <td className="font-semibold">{order.price}</td>
                <td className="text-gray-400">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

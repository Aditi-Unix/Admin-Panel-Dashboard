import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 600 },
  { month: "Mar", sales: 800 },
  { month: "Apr", sales: 650 },
  { month: "May", sales: 900 },
  { month: "Jun", sales: 750 },
];

const ChartSection = ({ isDark }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

      {/* Line Chart */}
      <div
        className={`rounded-2xl p-6 shadow-lg border transition-all duration-300
        ${
          isDark
            ? "bg-[#0E1B33] border-gray-700 text-white"
            : "bg-white border-gray-200 text-gray-900"
        }`}
      >
        <h2 className="font-semibold text-lg mb-4">Sales Overview</h2>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#334" : "#ccc"} />
            <XAxis dataKey="month" stroke={isDark ? "#fff" : "#000"} />
            <YAxis stroke={isDark ? "#fff" : "#000"} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#1F2A44" : "#fff",
                borderRadius: "10px",
                border: "none",
              }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#4F46E5"
              strokeWidth={3}
              animationDuration={900}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div
        className={`rounded-2xl p-6 shadow-lg border transition-all duration-300
        ${
          isDark
            ? "bg-[#0E1B33] border-gray-700 text-white"
            : "bg-white border-gray-200 text-gray-900"
        }`}
      >
        <h2 className="font-semibold text-lg mb-4">Monthly Revenue</h2>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#334" : "#ccc"} />
            <XAxis dataKey="month" stroke={isDark ? "#fff" : "#000"} />
            <YAxis stroke={isDark ? "#fff" : "#000"} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#1F2A44" : "#fff",
                borderRadius: "10px",
                border: "none",
              }}
            />
            <Bar
              dataKey="sales"
              fill="#10B981"
              radius={[8, 8, 0, 0]}
              animationDuration={900}
            />
          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default ChartSection;

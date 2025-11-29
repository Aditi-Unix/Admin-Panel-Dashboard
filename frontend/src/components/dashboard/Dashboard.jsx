import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";
import ChartSection from "./ChartSection";
import ActivityFeed from "./ActivityFeed";
import RecentOrders from "./RecentOrders";
import TopProducts from "./TopProducts";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>

      <Sidebar isOpen={isSidebarOpen} isDark={isDarkMode} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isDark={isDarkMode}
          toggleTheme={() => setIsDarkMode(!isDarkMode)}
        />

        <main className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Activity Feed */}
            <div>
              <ActivityFeed isDark={isDarkMode} />
            </div>

            {/* Chart Section */}
            <div className="lg:col-span-2">
              <ChartSection isDark={isDarkMode} />
            </div>

            {/* Recent Orders */}
            <div className="lg:col-span-2">
              <RecentOrders isDark={isDarkMode} />
            </div>

            {/* Top Products */}
            <div>
              <TopProducts isDark={isDarkMode} />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

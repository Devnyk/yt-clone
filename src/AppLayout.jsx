import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainRoute from "./Routes/MainRoute";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((s) => !s);

  return (
    <div className="app-root bg-gray-50 min-h-screen">
      <Navbar onToggleSidebar={toggleSidebar} />
      <div className="app-body flex">
        <Sidebar open={sidebarOpen} />
        <main className="flex-1" onClick={() => sidebarOpen && setSidebarOpen(false)}>
          <MainRoute />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

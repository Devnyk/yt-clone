import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainRoute from "./Routes/MainRoute";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((s) => !s);

  return (
    <div className="app-root">
      <Navbar onToggleSidebar={toggleSidebar} />
      <div className="app-body">
        <Sidebar open={sidebarOpen} />
        <main className="app-main" onClick={() => sidebarOpen && setSidebarOpen(false)}>
          <MainRoute />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
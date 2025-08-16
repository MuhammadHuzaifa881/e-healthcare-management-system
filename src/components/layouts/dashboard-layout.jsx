import DashboardRoutes from "@/routes/dashboard-routes";
import Header from "../common/header";
import Sidebars from "../common/sidebar";
import { useState } from "react";

const DashboardLayout = () => {
  const userType = localStorage.getItem("userRole") || "hospital";
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Fixed position */}
        <Sidebars 
          userType={userType} 
          isOpen={isSidebarOpen}
        />
        
        {/* Main content area with header */}
        <div className={`flex-1 flex flex-col transition-all duration-300 bg-primary-500 ${
          isSidebarOpen ? "ml-[250px]" : "ml-[80px]"
        }`}>
          {/* Header - Auto adjusts with sidebar */}
          <Header 
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          
          {/* Scrollable content */}
          <main className="flex-1 overflow-y-auto p-4">
            <DashboardRoutes />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
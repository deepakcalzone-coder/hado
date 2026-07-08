import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import RevenueChart from "../components/RevenueChart";
import ActivityFeed from "../components/ActivityFeed";
import ITservices from "./serviceboards/ITservices"; 
import BPOservices from "./serviceboards/BPOservices";
import Analytics from "./serviceboards/Analytics";
import ClientsPage from "./serviceboards/ClientsPage";
import ProjectPage from "./serviceboards/ProjectPage";
import MyProfile from "./MyProfile";
import SettingsPanel from "./SettingsPanel";
import StatsCard from "../components/StatsCard"; 
import { ArrowUp, CircleCheck, Shield } from "lucide-react";
import FinancePage from "./serviceboards/FinancePage";

// CORRECT PATH: Goes up to src, then into hadohome to find ContactPage
import ContactPage from "../hadohome/ContactPage";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  const renderViewContent = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardOverview />; 
      case "it-services":
        return <ITservices />;
      case "bpo-services":
        return <BPOservices />;
      case "finance":
        return <FinancePage />;
      case 'analytics':
        return <Analytics />
      case 'clients':
        return <ClientsPage />
      case 'projects':
        return <ProjectPage />
      case 'my-profile':
        return <MyProfile />
      case 'settings':
        return <SettingsPanel />
      case "contact-page":
        return <ContactPage onBack={() => setCurrentView("dashboard")} />;
      default:
        return <div className="text-slate-500 text-xs">Module Framework Coming Soon...</div>;
    }
  };

  return (
    <div className="w-full min-h-screen flex font-sans text-slate-100 overflow-hidden ">
      
      {/* SIDEBAR: Controls views and syncs current state values */}
      <Sidebar
        activeView={currentView}
        onViewChange={setCurrentView}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* NAVBAR */}
        <DashboardNavbar onMenuClick={() => setSidebarOpen(true)} />
        
        {/* MAIN ROUTED CORE VIEW WINDOW */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {renderViewContent()}
        </main>

      </div>
    </div>
  );
}

// INNER CONTAINER SUB-COMPONENT FOR THE MAIN SUMMARY ROUTE
function DashboardOverview() {
  const stats = [
    {
      title: "Active Tasks",
      value: "24",
      footer: "↑ +12% This Week",
      icon: ArrowUp, 
      color: "text-blue-400"
    },
    {
      title: "System Status",
      value: "99.9%",
      footer: "✓ Healthy & Operational",
      icon: Shield, 
      color: "text-emerald-400"
    },
    {
      title: "Total Output",
      value: "1,250",
      footer: "↑ +16% This Month",
      icon: CircleCheck, 
      color: "text-purple-400"
    }
  ];

  return (
    <>
      {/* HEADER GREETING ZONE */}
      <div className="mb-8">
        <h1 className="text-2xl font-black tracking-tight text-black sm:text-3xl">
          Dashboard
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Welcome back, Admin. Here is your operational control summary.
        </p>
      </div>

      {/* METRIC CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item) => (
          <StatsCard 
            key={item.title}
            title={item.title}
            value={item.value}
            footer={item.footer}
            icon={item.icon}   
            color={item.color}
          />
        ))}
      </div>
  
      {/* ANALYTICS CHARTS SPLIT ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12 items-stretch">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="h-full">
          <ActivityFeed />
        </div>
      </div>
    </>
  );
}
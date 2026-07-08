import React from "react";
import {Link} from 'react-router-dom';

import {
  LayoutDashboard,
  MonitorSmartphone,
  Headphones,
  Wallet,
  BarChart3,
  Users,
  FolderOpen,
  Settings,
  UserCircle,
  LogOut,
} from "lucide-react";

// Added unique 'id' values to match your router switch cases perfectly
const menuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "it-services",
    title: "IT Services",
    icon: MonitorSmartphone,
  },
  {
    id: "bpo-services",
    title: "BPO Services",
    icon: Headphones,
  },
  {
    id: "finance",
    title: "Finance",
    icon: Wallet,
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: BarChart3,
  },
  {
    id: "clients",
    title: "Clients",
    icon: Users,
  },
  {
    id: "projects",
    title: "Projects",
    icon: FolderOpen,
  },
];

// Destructured active state control triggers into your Sidebar component
export default function Sidebar({ activeView, onViewChange, isOpen, setIsOpen }) {
  return (
    <>
    {/* Overlay */}
  {isOpen && (
    <div
      className="fixed inset-0 bg-black/50 z-40 md:hidden"
      onClick={() => setIsOpen(false)}
    />
  )}
  
    <aside className={`
      fixed md:relative
      inset-y-0 
      left-0
      z-50
      w-72
      bg-slate-950
      border-r border-slate-800
      flex flex-col
      overflow-y-auto
      transition-transform duration-300 ease-in-out
      ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }
      
    `}>

      {/* Logo Section */}
      <div className="flex-1">
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() =>
            setIsOpen(false)
          }
          className="text-white text-2xl">
            X
          </button>
        </div>
        <div className="flex items-center pt-10 px-8">
          {/* White Circular Frame around the Hado Logo */}
          <Link to='./Home'>
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-inner flex-shrink-0">
            <img 
              src="https://hado.co.in/assets/hado_global_services_logo.jpg" 
              alt="Hado Global Services Logo" 
              className="w-full h-full object-contain scale-90"
            />
          </div>
          </Link>
       
          <div className="px-8 ">
            <h1 className="text-lg lg:text-xl text-white font-bold leading-tight">HADO <span className="text-indigo-200">GLOBAL SERVICE</span></h1>
          </div>
        </div>
        <div>
          <p className="text-sm text-slate-400 mt-1 border-b-5 border-slate-800 text-center">
            Business Management Portal
          </p>
        </div>
        

        {/* Navigation */}
        <nav className="mt-8 px-4">

          {menuItems.map((item) => {
            const Icon = item.icon;
          
            const isActive = activeView === item.id;

            return (
              <button
                key={item.id}
                // Trigger the state updater on click
                onClick={() => {
                      onViewChange(item.id);
                      setIsOpen(false);
                    }}
                className={`group w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 mb-2 ${
                  isActive 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10" 
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform group-hover:scale-105 duration-200 ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`} />

                <span className="font-medium">
                  {item.title}
                </span>
              </button>
            );
          })}

        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-slate-800">

          <button
            onClick={() => {
              onViewChange("my-profile");
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition mb-2 ${
              activeView === "my-profile"
                ? "bg-indigo-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <UserCircle
              className={`w-5 h-5 ${
                activeView === "my-profile" ? "text-white" : "text-slate-400"
              }`}
            />
            <span>My Profile</span>
          </button>
        
        
        <button
         onClick={() => {
              onViewChange("settings");
              setIsOpen(false);
            }}
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition mb-2 ${
            activeView === "settings"
              ? "bg-indigo-600 text-white"
              : "text-slate-300 hover:bg-slate-800"
          }`}
        >
          <Settings
            className={`w-5 h-5 ${
              activeView === "settings" ? "text-white" : "text-slate-400"
            }`}
          />
          <span>Settings</span>
        </button>

          <button
            onClick={() => {
              setIsOpen(false);
              localStorage.clear();
              sessionStorage.clear();
              window.location.href = "/";
            }}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>

      </div>

    </aside>
  </>
  );
}
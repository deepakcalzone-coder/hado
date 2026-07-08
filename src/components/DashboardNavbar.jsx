import React, { useState } from "react";
import { Bell, Search, ChevronDown, Menu, User, Settings, LogOut } from "lucide-react";

export default function DashboardNavbar({ onMenuClick }) {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="h-16 w-full  border-b border-white/5 px-4 md:px-6 flex items-center justify-between sticky top-0 z-40 bg-white">
      
      {/* LEFT SIDE: Mobile Menu Trigger & Search */}
      <div className="flex items-center gap-4 flex-1 max-w-md">
        {/* Hamburger menu for mobile responsiveness to open sidebar */}
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Dashboard Search Input */}
        <div className="relative w-full hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search projects, clients, meetings..." 
            className="w-full  border border-black rounded-xl pl-10 pr-4 py-2 text-xs text-slate-300 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-all"
          />
        </div>
      </div>

      {/* RIGHT SIDE: Notifications & Profile Menu Dropdown */}
      <div className="flex items-center gap-4">
        
        {/* Notification Bell Badge Trigger */}
        <button className="p-2 text-slate-400 hover:text-white hover:bg-blue-900 rounded-xl transition relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full ring-2 ring-[#0a0f1d]" />
        </button>

        {/* Divider Bar */}
        <div className="h-6 w-[1px] bg-white/5" />

        {/* Interactive Profile Action Menu Dropdown Container */}
        <div className="relative">
          <button 
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-800/30 transition text-left"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-pink-500 p-[1px]">
              <div className="w-full h-full rounded-full bg-[#0a0f1d] flex items-center justify-center text-xs font-bold text-white">
                HG
              </div>
            </div>
            <div className="hidden lg:block pr-1">
              <p className="text-xs font-bold text-slate-900">Admin User</p>
              <p className="text-[10px] text-slate-500 font-medium">admin@hado.co.in</p>
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${profileOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Actual Dropdown Modal Pane */}
          {profileOpen && (
            <>
              {/* Backing overlay handler to click away safely */}
              <div className="fixed inset-0 z-10" onClick={() => setProfileOpen(false)} />
              
              <div className="absolute right-0 mt-2 w-48 bg-[#0f172a] border border-white/5 rounded-xl shadow-2xl py-1 z-20 text-xs font-semibold text-slate-300 animate-in fade-in slide-in-from-top-2 duration-150">
                <a href="#profile" className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-slate-800/60 hover:text-white transition">
                  <User className="w-4 h-4 text-slate-400" /> My Profile
                </a>
                <a href="#settings" className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-slate-800/60 hover:text-white transition">
                  <Settings className="w-4 h-4 text-slate-400" /> Settings
                </a>
                <div className="h-[1px] bg-white/5 my-1" />
                <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-rose-400 hover:bg-rose-500/10 transition">
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </div>
            </>
          )}
        </div>

      </div>
    </header>
  );
}
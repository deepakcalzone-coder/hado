import React from "react";
import StatsCard from "../../components/StatsCard"; 
import { Server, Cpu, Terminal } from "lucide-react";

export default function ITservices() {
 
  const stats = [
    { 
      title: "Active Deployments", 
      value: "14", 
      footer: "Live Pipelines",
      icon: Terminal, 
      color: "text-blue-400" 
    },
    { 
      title: "Server Health", 
      value: "99.8%", 
      footer: "Optimal State",
      icon: Cpu, 
      color: "text-emerald-400" 
    },
    { 
      title: "Open Tech Tickets", 
      value: "3", 
      footer: "Requires Attention",
      icon: Server, 
      color: "text-amber-400" 
    }
  ];

  const services = [
    { id: "IT-01", name: "Bespoke Software Development", status: "Active", lead: "Tech Team A", load: "High" },
    { id: "IT-02", name: "Cloud Infrastructure Setup", status: "Active", lead: "DevOps Core", load: "Optimal" },
    { id: "IT-03", name: "Database Cluster Migration", status: "Pending", lead: "DBA Specialist", load: "Idle" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-black tracking-tight">IT Services Console</h1>
        <p className="text-sm text-slate-400 mt-1">Manage technical frameworks, system architectures, and development environments.</p>
      </div>

      {/* 3. Render your reusable metric card grid seamlessly */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <StatsCard 
            key={i}
            title={item.title}
            value={item.value}
            footer={item.footer}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>

      {/* Active Service Pipelines Table */}
      <div className="bg-[#0a0f1d] border border-white/5 rounded-2xl p-6">
        <h2 className="text-base font-bold text-white mb-4">Software & Tech Pipelines</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead>
              <tr className="border-b border-white/5 text-xs text-slate-400 uppercase font-semibold">
                <th className="pb-3">ID</th>
                <th className="pb-3">Service Focus</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Allocated Group</th>
                <th className="pb-3">Server Load</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {services.map((srv) => (
                <tr key={srv.id} className="hover:bg-slate-900/30">
                  <td className="py-3 font-mono text-xs text-indigo-400">{srv.id}</td>
                  <td className="py-3 font-semibold text-white">{srv.name}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-md ${srv.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                      {srv.status}
                    </span>
                  </td>
                  <td className="py-3 text-slate-400">{srv.lead}</td>
                  <td className="py-3 text-xs font-semibold text-slate-400">{srv.load}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
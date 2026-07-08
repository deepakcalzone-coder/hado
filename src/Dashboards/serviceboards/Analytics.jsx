import React from "react";
import StatsCard from "../../components/StatsCard"; 
import { TrendingUp, BarChart3, Activity, Zap, ShieldCheck } from "lucide-react";

export default function Analytics() {
  const analyticsStats = [
    {
      title: "Resource Efficiency",
      value: "94.2%",
      footer: "Optimal allocation path",
      icon: Zap,
      color: "text-amber-400"
    },
    {
      title: "SLA Compliance Rate",
      value: "99.1%",
      footer: "↑ +0.7% from last week",
      icon: ShieldCheck,
      color: "text-emerald-400"
    },
    {
      title: "Peak Network Load",
      value: "420 req/s",
      footer: "Stable execution cluster",
      icon: Activity,
      color: "text-indigo-400"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-black text-black tracking-tight">System & Operations Analytics</h1>
        <p className="text-sm text-slate-400 mt-1">
          Deep data inspection, performance optimization matrices, and system throughput.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {analyticsStats.map((item, i) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2 bg-[#0a0f1d] border border-white/5 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Throughput Over Time
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Execution intervals calculated across 24-hour cycles.</p>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-white/10 rounded-xl bg-slate-950/40">
            <p className="text-xs text-slate-500 font-mono">📈 Timeline Performance Chart Area</p>
          </div>
        </div>

        <div className="bg-[#0a0f1d] border border-white/5 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2 mb-1">
              <BarChart3 className="w-4 h-4 text-indigo-400" />
              Volume Distribution
            </h2>
            <p className="text-xs text-slate-400 mb-6">Load balance divided by operational divisions.</p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                  <span>IT Frameworks</span>
                  <span>55%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: "55%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                  <span>BPO Operations</span>
                  <span>30%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: "30%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                  <span>Financial Audits</span>
                  <span>15%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "15%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
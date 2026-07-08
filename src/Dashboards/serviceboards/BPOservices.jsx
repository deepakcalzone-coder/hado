import React from "react";
import StatsCard from "../../../src/components/StatsCard";
import { Headphones, Layers, FileText, Play } from "lucide-react";

export default function BPOservices() {
 
  const stats = [
    { 
      title: "Active Queue Volume", 
      value: "1,420 Items", 
      footer: "Awaiting Processing",
      icon: Layers, 
      color: "text-purple-400" 
    },
    { 
      title: "SLA Adherence Rate",
      value: "98.4%", 
      footer: "Target: >95.0%",
      icon: Headphones, 
      color: "text-emerald-400" 
    },
    { 
      title: "Avg Handling Duration",
      value: "4.2m", 
      footer: "Per Volume Unit",
      icon: FileText, 
      color: "text-cyan-400"
    }
  ];

  const queues = [
    { id: "BPO-88", stream: "Medical Transcription Backlog", target: "99.5% Acc.", processed: "840 / 1000", speed: "Optimal" },
    { id: "BPO-89", stream: "Mortgage Processing Support", target: "24hr Turnaround", processed: "310 / 350", speed: "Accelerated" },
    { id: "BPO-90", stream: "Back-Office Data Cleansing", target: "Bulk Verification", processed: "270 / 500", speed: "Throttled" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-black tracking-tight">BPO Operations Feed</h1>
        <p className="text-sm text-slate-400 mt-1">Track high-volume operational metrics, mortgage review pipelines, and medical logs.</p>
      </div>

      {/* 2. Un-commented and bound properties cleanly */}
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

      {/* Live Operational Queues */}
      <div className="bg-[#0a0f1d] border border-white/5 rounded-2xl p-6">
        <h2 className="text-base font-bold text-white mb-8">Live Operation Streams</h2>
        <div className="space-y-4">
          {queues.map((q) => (
            <div key={q.id} className="border border-white/5 bg-slate-950/40 p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-purple-400 font-bold">{q.id}</span>
                  <h3 className="text-sm font-bold text-white">{q.stream}</h3>
                </div>
                <p className="text-xs text-slate-500">Quality Target Metric: <span className="text-slate-400">{q.target}</span></p>
              </div>

              {/* Progress Tracker Status Row */}
              <div className="flex items-center gap-6 justify-between md:justify-end">
                <div className="text-left md:text-right">
                  <p className="text-xs font-semibold text-slate-300">{q.processed} Completed</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 mt-0.5 tracking-wide">Pace: {q.speed}</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white cursor-pointer transition">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
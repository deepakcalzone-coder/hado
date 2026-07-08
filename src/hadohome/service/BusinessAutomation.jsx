import React from "react";
import { 
  Cpu, 
  Workflow, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Database, 
  RefreshCw, 
  BarChart4 
} from "lucide-react";

export default function BusinessAutomation() {
  const automationPillars = [
    {
      icon: Workflow,
      title: "Workflow Orchestration",
      desc: "Mapping and automating repetitive manual pipelines, approval chains, and cross-department assignments to minimize operational bottlenecks."
    },
    {
      icon: RefreshCw,
      title: "API & Legacy Integration",
      desc: "Bridging the gap between isolated data hubs, legacy software, and modern cloud applications to ensure fluid, automated data synchronization."
    },
    {
      icon: Database,
      title: "Automated Data Processing",
      desc: "Extracting, structuring, and routing critical business data (like invoices, leads, or logs) directly into your CRMs or databases with zero human errors."
    },
    {
      icon: Clock,
      title: "Time & Resource Optimization",
      desc: "Eliminating manual tracking by implementing smart background triggers that handle routine operations instantly, saving thousands of operational hours."
    }
  ];

  const workflowSteps = [
    { step: "01", name: "Process Audit", detail: "Analyzing your daily manual workflows to pinpoint operational friction and repetitive tasks." },
    { step: "02", name: "Logic Mapping", detail: "Designing condition-based rules, relational data routing pathways, and fail-safe triggers." },
    { step: "03", name: "Engine Engineering", detail: "Building custom scripts, configuring webhooks, and wiring platform integrations together securely." },
    { step: "04", name: "System Optimization", detail: "Running thorough load testing, validating error-handling logs, and deploying live background automation hooks." }
  ];

  return (
    <div className="w-full bg-white text-slate-900 rounded-3xl p-6 lg:p-12 border border-slate-100 shadow-sm animate-fadeIn">
      
      {/* 1. HERO BANNER GRID ZONE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold bg-pink-50 text-pink-600 rounded-full uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" /> Core Competency
          </span>
          <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Autonomous Systems & Intelligent Workflows
          </h1>
          <p className="text-base lg:text-lg text-slate-500 leading-relaxed">
            Stop letting repetitive tasks slow down your primary output. We build background automation systems and custom pipeline integrations that securely synchronize your company’s applications, minimize overhead, and maximize human efficiency.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure Data Encryption
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <BarChart4 className="w-4 h-4 text-pink-500" /> Real-time Performance Logs
            </div>
          </div>
        </div>
        
        {/* Right Feature Graphic Plate */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video lg:aspect-square shadow-inner">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
            alt="Business Automation Process Logic Board Layout"
            className="w-full h-full object-cover mix-blend-luminosity opacity-85 hover:mix-blend-normal transition duration-500"
          />
        </div>
      </div>

      <hr className="border-slate-100 my-12" />

      {/* 2. THE FOUR STRUCTURAL CAPABILITY PILLARS */}
      <div className="mb-16">
        <div className="mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tight">Capabilities Matrix</h2>
          <p className="text-sm text-slate-400 mt-0.5">The frameworks we integrate to cut your operational friction in half.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {automationPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-sm mb-4 group-hover:bg-pink-600 group-hover:border-pink-600 transition duration-200">
                  <Icon className="w-5 h-5 text-slate-700 group-hover:text-white transition" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. INTERACTIVE PROGRESS STEPS BLOCK */}
      <div className="bg-[#0f172a] text-white rounded-2xl p-6 lg:p-10 shadow-lg">
        <div className="mb-10">
          <h2 className="text-xl font-bold tracking-tight text-white">Our Automation Roadmap</h2>
          <p className="text-xs text-slate-400 mt-0.5">How we systematically convert chaotic manual steps into clear code triggers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {workflowSteps.map((w, idx) => (
            <div key={idx} className="space-y-3 relative group">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-indigo-400 font-mono">
                {w.step}
              </div>
              <h4 className="text-sm font-bold text-slate-200 group-hover:text-pink-400 transition">
                {w.name}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {w.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
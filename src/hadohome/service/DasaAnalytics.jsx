import React from "react";
import { 
  BarChart3, 
  PieChart, 
  Spline, 
  Layers3, 
  ShieldCheck, 
  DatabaseZap, 
  Gauge, 
  Target 
} from "lucide-react";

export default function DataAnalytics() {
  const analyticsPillars = [
    {
      icon: DatabaseZap,
      title: "Data Warehousing & ETL Pipelines",
      desc: "Structuring high-volume behavioral streams and transactional logs into optimized warehouses (Snowflake, BigQuery) using ultra-clean, automated ingestion scripting."
    },
    {
      icon: Gauge,
      title: "Real-Time BI Dashboards",
      desc: "Building highly interactive, real-time control planes using looker engines, customized tracking scripts, or low-latency web interfaces to track core product health at a glance."
    },
    {
      icon: Spline,
      title: "Predictive Behavior Modeling",
      desc: "Deploying regression algorithms, segmentation cohorts, and churn prediction maps to let your product teams intercept user behavior proactively."
    },
    {
      icon: Target,
      title: "Funnel & Conversion Audits",
      desc: "Wiring granular user session flows, heatmaps, and structured event trackers (GA4/Mixpanel pipelines) directly into checkout and signup funnels to unlock growth leaks."
    }
  ];

  const workflowSteps = [
    { step: "01", name: "Data Schema Design", detail: "Mapping data properties, identifying event naming protocols, and structural source logs." },
    { step: "02", name: "Pipeline Engineering", detail: "Writing pipeline connectors, custom webhooks, and transformation scripts to clean raw payloads." },
    { step: "03", name: "Dashboard Scaffolding", detail: "Aggregating metrics, configuring data sync delays, and engineering responsive layout metrics." },
    { step: "04", name: "Actionable Handoff", detail: "Validating telemetry integrity, delivering target behavior alerts, and training team operators." }
  ];

  return (
    <div className="w-full bg-white text-slate-900 rounded-3xl p-6 lg:p-12 border border-slate-100 shadow-sm animate-fadeIn">
      
      {/* 1. HERO BANNER GRID ZONE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold bg-violet-50 text-violet-600 rounded-full uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" /> Core Competency
          </span>
          <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Turn Behavioral Metrics Into Visual Strategy
          </h1>
          <p className="text-base lg:text-lg text-slate-500 leading-relaxed">
            Stop running operations based on guesswork. We engineer low-latency analytics infrastructures and clean data pipelines that turn unstructured user telemetry into organized, highly actionable business intelligence reporting platforms.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> GDPR & Privacy Compliant
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <PieChart className="w-4 h-4 text-violet-500" /> Granular Funnel Event Mapping
            </div>
          </div>
        </div>
        
        {/* Right Feature Graphic Plate */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video lg:aspect-square shadow-inner">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
            alt="Data Analytics Interface Charts Business Metrics Layout"
            className="w-full h-full object-cover mix-blend-luminosity opacity-85 hover:mix-blend-normal transition duration-500"
          />
        </div>
      </div>

      <hr className="border-slate-100 my-12" />

      {/* 2. THE FOUR STRUCTURAL CAPABILITY PILLARS */}
      <div className="mb-16">
        <div className="mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tight">Capabilities Matrix</h2>
          <p className="text-sm text-slate-400 mt-0.5">The structural analytic data steps we map out to validate user pathways.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {analyticsPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-sm mb-4 group-hover:bg-violet-600 group-hover:border-violet-600 transition duration-200">
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
          <h2 className="text-xl font-bold tracking-tight text-white">Our Telemetry Engine Flow</h2>
          <p className="text-xs text-slate-400 mt-0.5">How we convert noisy background action events into structured dashboard points.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {workflowSteps.map((w, idx) => (
            <div key={idx} className="space-y-3 relative group">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-indigo-400 font-mono">
                {w.step}
              </div>
              <h4 className="text-sm font-bold text-slate-200 group-hover:text-violet-400 transition">
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
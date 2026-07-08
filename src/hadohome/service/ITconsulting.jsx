import React from "react";
import { 
  FileText, 
  Compass, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  LineChart, 
  Users, 
  GitMerge 
} from "lucide-react";

export default function ITconsulting() {
  const consultingPillars = [
    {
      icon: Compass,
      title: "Tech Stack Audit & Strategy",
      desc: "Evaluating your existing application ecosystems to eliminate redundant licensing, reduce running costs, and outline a robust blueprint built for structural scaling."
    },
    {
      icon: GitMerge,
      title: "Legacy Modernization Plans",
      desc: "Creating careful migration risk profiles and step-by-step roadmaps to transition aging desktop or monolith software frameworks into nimble, modern cloud setups."
    },
    {
      icon: LineChart,
      title: "Operational Cost Optimization",
      desc: "Analyzing third-party developer integrations, API overhead expenses, and compute resource allocation to streamline your gross technical budget."
    },
    {
      icon: Users,
      title: "Agile Workflow & Team Architecture",
      desc: "Aligning your engineering structure with high-velocity deployment cycles, clean git branching practices, and optimized product release cycles."
    }
  ];

  const workflowSteps = [
    { step: "01", name: "System Discovery", detail: "Deep-diving into your current software pipelines, codebase quality, and tech dependencies." },
    { step: "02", name: "Friction Diagnostics", detail: "Pinpointing cost overhead leaks, deployment barriers, and tech debt bottlenecks." },
    { step: "03", name: "Strategic Blueprint", detail: "Architecting a multi-phased engineering roadmap complete with risk mitigation steps." },
    { step: "04", name: "Execution Advisory", detail: "Providing continuous oversight, vendor audits, and code milestone validations during implementation." }
  ];

  return (
    <div className="w-full bg-white text-slate-900 rounded-3xl p-6 lg:p-12 border border-slate-100 shadow-sm animate-fadeIn">
      
      {/* 1. HERO BANNER GRID ZONE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold bg-teal-50 text-teal-600 rounded-full uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" /> Core Competency
          </span>
          <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Strategic Tech Advisory & Tech Debt Elimination
          </h1>
          <p className="text-base lg:text-lg text-slate-500 leading-relaxed">
            Stop making blind engineering guesses. Get clear, battle-tested technology roadmaps from seasoned technical architects designed to future-proof your digital framework, minimize operating overhead, and eliminate technical friction before it impacts your bottom line.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> ROI-Driven Roadmaps
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <TrendingUp className="w-4 h-4 text-teal-500" /> Technical Cost Reductions
            </div>
          </div>
        </div>
        
        {/* Right Feature Graphic Plate */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video lg:aspect-square shadow-inner">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" 
            alt="Business Strategy Planning Board Technical Advisory Consultation"
            className="w-full h-full object-cover mix-blend-luminosity opacity-85 hover:mix-blend-normal transition duration-500"
          />
        </div>
      </div>

      <hr className="border-slate-100 my-12" />

      {/* 2. THE FOUR STRUCTURAL CAPABILITY PILLARS */}
      <div className="mb-16">
        <div className="mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tight">Capabilities Matrix</h2>
          <p className="text-sm text-slate-400 mt-0.5">The advisory frameworks we establish to map out clean, long-term technical growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {consultingPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-sm mb-4 group-hover:bg-teal-600 group-hover:border-teal-600 transition duration-200">
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
          <h2 className="text-xl font-bold tracking-tight text-white">Our Strategic Engagement Flow</h2>
          <p className="text-xs text-slate-400 mt-0.5">How we systematically analyze structural problems and output ironclad deployment architectures.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {workflowSteps.map((w, idx) => (
            <div key={idx} className="space-y-3 relative group">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-emerald-400 font-mono">
                {w.step}
              </div>
              <h4 className="text-sm font-bold text-slate-200 group-hover:text-teal-400 transition">
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
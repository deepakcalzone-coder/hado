import React from "react";
import { 
  Globe, 
  Layers, 
  Zap, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Code2, 
  ShieldCheck, 
  Cpu 
} from "lucide-react";

export default function WebDevelopment() {
  const corePillars = [
    {
      icon: Code2,
      title: "Custom Frontend Engineering",
      desc: "Architecting lightning-fast user interfaces using React.js, Next.js, and modern tailwind frameworks optimized for sub-second load environments."
    },
    {
      icon: Layers,
      title: "Headless CMS & API Architecture",
      desc: "Decoupling your presentation layers with headless solutions (Strapi, Sanity) paired with structured GraphQL or RESTful backends."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      desc: "Maximizing core web vitals, implementing advanced caching strategies, edge delivery nodes, and clean script execution flows."
    },
    {
      icon: Smartphone,
      title: "Responsive Matrix Fluidity",
      desc: "Engineering highly elastic layouts that look flawless across everything from mobile viewpoints to massive 4K enterprise displays."
    }
  ];

  const workflowSteps = [
    { step: "01", name: "Architecture Blueprint", detail: "Scaffolding component relationships, state boundaries, and data models." },
    { step: "02", name: "UI Engineering", detail: "Developing pixel-perfect interfaces with high layout consistency and modular classes." },
    { step: "03", name: "System Integration", detail: "Connecting endpoints, configuring state management, and executing security validation loops." },
    { step: "04", name: "Edge Deployment", detail: "Building, staging, and launching onto optimized content delivery pipelines with automated monitoring hooks." }
  ];

  return (
    <div className="w-full bg-white text-slate-900 rounded-3xl p-6 lg:p-12 border border-slate-100 shadow-sm animate-fadeIn">
      
      {/* 1. HERO HERO BANNER GRID ZONE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold bg-blue-50 text-blue-600 rounded-full uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" /> Core Competency
          </span>
          <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Enterprise Web Systems & Platforms
          </h1>
          <p className="text-base lg:text-lg text-slate-500 leading-relaxed">
            We don't just write templates; we engineer highly scalable, robust digital platforms. Our architectures are crafted to handle real-world user workflows with clean code bases, structural flexibility, and high security.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> SEO & Vitals Optimized
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <Cpu className="w-4 h-4 text-purple-500" /> React State Architecture
            </div>
          </div>
        </div>
        
        {/* Right Feature Graphic Plate */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video lg:aspect-square shadow-inner">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
            alt="Web Development Dashboard Analytics Layout"
            className="w-full h-full object-cover mix-blend-luminosity opacity-85 hover:mix-blend-normal transition duration-500"
          />
        </div>
      </div>

      <hr className="border-slate-100 my-12" />

      {/* 2. THE FOUR STRUCTURAL CAPABILITY PILLARS */}
      <div className="mb-16">
        <div className="mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tight">Capabilities Matrix</h2>
          <p className="text-sm text-slate-400 mt-0.5">The structural methodologies we inject into every deployment asset.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-sm mb-4 group-hover:bg-blue-600 group-hover:border-blue-600 transition duration-200">
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
          <h2 className="text-xl font-bold tracking-tight text-white">Our Engineering Roadmap</h2>
          <p className="text-xs text-slate-400 mt-0.5">How we convert cross-functional layout objectives into concrete source files.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {workflowSteps.map((w, idx) => (
            <div key={idx} className="space-y-3 relative group">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-pink-500 font-mono">
                {w.step}
              </div>
              <h4 className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition">
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
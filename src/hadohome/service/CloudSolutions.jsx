import React from "react";
import { 
  Cloud, 
  Server, 
  ShieldAlert, 
  Activity, 
  ShieldCheck, 
  HardDrive, 
  Terminal, 
  Layers3 
} from "lucide-react";

export default function CloudSolutions() {
  const cloudPillars = [
    {
      icon: Server,
      title: "Elastic Infrastructure Scaling",
      desc: "Configuring auto-scaling groups and multi-region compute clusters (AWS/Azure) that expand seamlessly during demand spikes and shrink to optimize costs during quiet cycles."
    },
    {
      icon: ShieldAlert,
      title: "Zero-Trust Cloud Security",
      desc: "Implementing hardened parameter controls, enterprise Identity & Access Management (IAM), data-at-rest encryption, and virtual private cloud (VPC) firewalls."
    },
    {
      icon: HardDrive,
      title: "Automated Backup & Failover",
      desc: "Engineering automated database replication, point-in-time recovery maps, and instantaneous failover configurations to guarantee zero data loss and maximum business continuity."
    },
    {
      icon: Terminal,
      title: "DevOps & CI/CD Pipelines",
      desc: "Automating software delivery with fully scripted infrastructure as code (Terraform) and streamlined Git-driven deployment pipelines for zero-downtime updates."
    }
  ];

  const workflowSteps = [
    { step: "01", name: "Stack Assessment", detail: "Auditing current software hosting parameters, resource leakages, and security weak spots." },
    { step: "02", name: "Cloud Architecture", detail: "Blueprinting cloud resources, microservices networks, subnets, and redundancy matrices." },
    { step: "03", name: "Secure Migration", detail: "Executing safe database pipelines and structural data synchronization without disrupting live systems." },
    { step: "04", name: "24/7 Deployment Setup", detail: "Deploying synthetic heartbeat monitors, real-time logging, and metric alert relays for instant notifications." }
  ];

  return (
    <div className="w-full bg-white text-slate-900 rounded-3xl p-6 lg:p-12 border border-slate-100 shadow-sm animate-fadeIn">
      
      {/* 1. HERO BANNER GRID ZONE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold bg-indigo-50 text-indigo-600 rounded-full uppercase tracking-wider">
            <Cloud className="w-3.5 h-3.5" /> Core Competency
          </span>
          <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Failproof Cloud Systems & DevOps
          </h1>
          <p className="text-base lg:text-lg text-slate-500 leading-relaxed">
            Eliminate runtime crashes and configuration risks. We build scalable, highly available multi-cloud systems engineered to run enterprise software seamlessly with maximum uptime, strict firewall parameters, and fast response metrics.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> SOC2 Compliance Ready
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <Activity className="w-4 h-4 text-indigo-500" /> 99.99% Guaranteed Uptime
            </div>
          </div>
        </div>
        
        {/* Right Feature Graphic Plate */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video lg:aspect-square shadow-inner">
          <img 
            src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800" 
            alt="Cloud Computing Server Infrastructure Datacenter"
            className="w-full h-full object-cover mix-blend-luminosity opacity-85 hover:mix-blend-normal transition duration-500"
          />
        </div>
      </div>

      <hr className="border-slate-100 my-12" />

      {/* 2. THE FOUR STRUCTURAL CAPABILITY PILLARS */}
      <div className="mb-16">
        <div className="mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tight">Capabilities Matrix</h2>
          <p className="text-sm text-slate-400 mt-0.5">The enterprise pillars we establish to safeguard and optimize your application environments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cloudPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-sm mb-4 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition duration-200">
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
          <h2 className="text-xl font-bold tracking-tight text-white">Our Infrastructure Roadmap</h2>
          <p className="text-xs text-slate-400 mt-0.5">How we systematically move your workflows to an enterprise-grade cloud network.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {workflowSteps.map((w, idx) => (
            <div key={idx} className="space-y-3 relative group">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-blue-400 font-mono">
                {w.step}
              </div>
              <h4 className="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition">
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
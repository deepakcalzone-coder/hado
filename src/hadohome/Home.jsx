import React from "react";
import {Link} from 'react-router-dom';
import { 
  ArrowRight, 
  Cpu, 
  CloudLightning, 
  BarChart3, 
  Sparkles, 
  ChevronRight 
} from 'lucide-react';

// Structured Component Data Array
const heroCards = [
  {
    icon: Cpu,
    colorClass: "from-amber-500 to-orange-500 bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-amber-950/50",
    title: "Process Automation",
    desc: "Streamline workflows with AI-driven autonomous engines.",
  },
  {
    icon: CloudLightning,
    colorClass: "from-sky-500 to-indigo-500 bg-sky-500/10 text-sky-400 border-sky-500/20 shadow-sky-950/50",
    title: "Cloud Infrastructure",
    desc: "Elastic, secure scaling engineered for high performance.",
  },
  {
    icon: BarChart3,
    colorClass: "from-emerald-500 to-teal-500 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-emerald-950/50",
    title: "Real-time Analytics",
    desc: "Convert raw streams into dynamic, acting intelligence.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36 text-white min-h-screen flex items-center">
      
      {/* ================= BACKGROUND IMAGE ENGINE ================= */}
      <div className="absolute inset-0 z-10 select-none pointer-events-none">
        {/* Full-bleed background graphic element */}
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern architecture interior" 
          className="w-full h-full object-cover object-center"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-70/85 via-slate-70/80 to-slate-950/95 backdrop-blur-[1px]" />
        
       
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center w-full">
        
        {/* Centered Heading & Subtext */}
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-20">
          
          {/* Active Modern Indicator Badge */}
          <div className="inline-flex gap-2 items-center px-4 py-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
            </span>
            <span className="text-xs font-semibold text-white uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              Digital Transformation Partner
            </span>
          </div>

          <h1 className="text-4xl !text-white sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.5] max-w-5xl">
            Strategic Solutions for<br/>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Global Success.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Unlock new possibilities with Hado Global Services. From world-class BPO to cutting-edge IT and Financial solutions, we build the foundations to thrive.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-ce nter justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl transition-all duration-300 hover:bg-slate-100 hover:scale-[1.02] active:scale-98 shadow-xl">
              Explore Our Services
            </button>
           <Link to="./contact">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 hover:scale-[1.02] active:scale-98 shadow-xl shadow-indigo-600/30">
              Start your project
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
          </div>
        </div>

        {/* ================= DYNAMIC CARDS ECOSYSTEM ================= */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {heroCards.map((card, i) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={i}
                className="group relative w-full bg-slate-800/60 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/5 hover:border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Glassmorphic Icon Wrapper */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${card.colorClass}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5">
                      Service 0{i + 1}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-bold text-slate-100 text-lg group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {card.desc}
                    </p>
                  </div>
                </div>
                
                {/* Clean Interactive Action Link */}
                <div className="mt-6 pt-4 border-t border-white/5 text-xs font-bold flex items-center gap-1.5 text-indigo-400 group-hover:text-indigo-300 transition-all cursor-pointer">
                  More Details
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
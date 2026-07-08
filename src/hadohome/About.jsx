import React from 'react';
import { CheckCircle2, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="w-full bg-slate-50 py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative background blobs for a modern tech feel */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Interactive Image Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Main Image Wrapper with modern shadows and borders */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 transform hover:scale-[1.01] transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Our collaborative team engineering digital solutions" 
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating Metric Card 1 (Top Right) */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 hidden sm:flex items-center gap-3 z-20 animate-bounce-slow">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Performance</p>
                <p className="text-lg font-bold text-slate-900">99.9% Uptime</p>
              </div>
            </div>

            {/* Floating Metric Card 2 (Bottom Left) */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-5 rounded-xl shadow-xl hidden sm:flex items-center gap-4 z-20">
              <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight text-white">50M+</p>
                <p className="text-xs font-medium text-slate-400">API Requests Daily</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50/80 px-3 py-1.5 rounded-full border border-indigo-100">
              <Sparkles className="w-3.5 h-3.5" />
              Who We Are
            </div>
            <h1 className='text-black font-bold lg:text-7xl leadingtight'>
              Your Strategic Partner for Operational Excellence
            </h1>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              We engineer the foundations for <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">digital scale.</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
             Hado Global Services provides specialized expertise across Finance, Legal, Healthcare, and IT sectors. We go beyond traditional outsourcing by offering strategic value, process optimization, and data-driven insights.
            </p>
            
            

            {/* Enhanced Value Pillars Grid */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Performance-First</h4>
                  {/* <p className="text-xs text-slate-500 mt-0.5">Optimized for sub-second speeds.</p> */}
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Zero Technical Debt</h4>
                  {/* <p className="text-xs text-slate-500 mt-0.5">Maintainable, clean architecture.</p> */}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Domain Expertise</h4>
                  {/* <p className="text-xs text-slate-500 mt-0.5">Maintainable, clean architecture.</p> */}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Scalable Solutions</h4>
                  {/* <p className="text-xs text-slate-500 mt-0.5">Maintainable, clean architecture.</p> */}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
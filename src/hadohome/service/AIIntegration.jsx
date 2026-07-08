import React from "react";
import { 
  Brain, 
  Sparkles, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Bot, 
  Binary, 
  Network 
} from "lucide-react";

export default function AIIntegration() {
  const aiPillars = [
    {
      icon: Bot,
      title: "Custom LLM Orchestration & Tuning",
      desc: "Integrating and fine-tuning advanced foundational models (OpenAI, Anthropic, Llama) with your proprietary enterprise data to build context-aware corporate intelligence tools."
    },
    {
      icon: Database,
      title: "Vector Database & RAG Pipelines",
      desc: "Architecting high-speed vector storage structures (Pinecone, ChromaDB, pgvector) alongside Retrieval-Augmented Generation loops to secure pinpoint accurate responses with zero hallucination loops."
    },
    {
      icon: Network,
      title: "Cognitive Agent Workflows",
      desc: "Engineering autonomous multi-agent software loops that can independently read text payloads, run custom logical calls, and execute cross-platform transactional operations based on natural language commands."
    },
    {
      icon: Binary,
      title: "Predictive Analytics & NLP",
      desc: "Infusing machine learning classification loops, tokenized sentiment analysis trackers, and high-volume text semantic processing nodes directly into your pre-existing product databases."
    }
  ];

  const workflowSteps = [
    { step: "01", name: "Data Readiness Audit", detail: "Assessing your internal database structures, identifying training parameters, and mapping contextual constraints." },
    { step: "02", name: "Embedding Scaffolding", detail: "Converting raw document stores into vectorized numerical matrix blocks and configuring secure contextual ingestion tunnels." },
    { step: "03", name: "Prompt & Agent Engineering", detail: "Designing fail-safe multi-step reasoning guardrails, API backend interfaces, and semantic routing conditions." },
    { step: "04", name: "Production Evaluation", detail: "Running strict latency profiling loops, configuring model usage budget caps, and setting live semantic moderation switches." }
  ];

  return (
    <div className="w-full bg-white text-slate-900 rounded-3xl p-6 lg:p-12 border border-slate-100 shadow-sm animate-fadeIn">
      
      {/* 1. HERO BANNER GRID ZONE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold bg-fuchsia-50 text-fuchsia-600 rounded-full uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5" /> Core Competency
          </span>
          <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Infuse Intelligent Machine Learning Ecosystems
          </h1>
          <p className="text-base lg:text-lg text-slate-500 leading-relaxed">
            Stop treating AI as a mere novelty. We engineer robust, enterprise-grade cognitive architectures that safely embed natural language processing models and deterministic reasoning engines directly into your daily operational pipelines.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Isolated Enterprise Data Security
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <Sparkles className="w-4 h-4 text-fuchsia-500" /> High-Accuracy RAG Architectures
            </div>
          </div>
        </div>
        
        {/* Right Feature Graphic Plate */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video lg:aspect-square shadow-inner">
          <img 
            src="https://i.pinimg.com/736x/22/5e/d6/225ed64777b68c6108f4894f3da7c662.jpg" 
            alt="AI Machine Learning Neural Infrastructure Layout"
            className="w-full h-full object-cover mix-blend-luminosity opacity-85 hover:mix-blend-normal transition duration-500"
          />
        </div>
      </div>

      <hr className="border-slate-100 my-12" />

      {/* 2. THE FOUR STRUCTURAL CAPABILITY PILLARS */}
      <div className="mb-16">
        <div className="mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tight">Capabilities Matrix</h2>
          <p className="text-sm text-slate-400 mt-0.5">The computational frameworks we build to deliver practical, security-first artificial intelligence solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-sm mb-4 group-hover:bg-fuchsia-600 group-hover:border-fuchsia-600 transition duration-200">
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
          <h2 className="text-xl font-bold tracking-tight text-white">Our Cognitive Engineering Roadmap</h2>
          <p className="text-xs text-slate-400 mt-0.5">How we securely map your business constraints into programmatic system intelligence nodes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {workflowSteps.map((w, idx) => (
            <div key={idx} className="space-y-3 relative group">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-violet-400 font-mono">
                {w.step}
              </div>
              <h4 className="text-sm font-bold text-slate-200 group-hover:text-fuchsia-400 transition">
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
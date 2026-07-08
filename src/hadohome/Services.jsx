import React, { useState } from "react";
import WebDevelopment from "./service/WebDevolopment";
import BusinessAutomation from "./service/BusinessAutomation";
import CloudSolutions from "./service/CloudSolutions";
import ITconsulting from "./service/ITconsulting";
import DataAnalytics from "./service/DasaAnalytics";
import AIIntegration from "./service/AIIntegration";
import { 
  Code, 
  Cloud, 
  Cpu, 
  FileText, 
  BarChart3, 
  Brain, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  ArrowLeft // Make sure this is imported for the back button
} from "lucide-react";


const servicesData = [
  {
    id: "web-dev",
    tabTitle: "Web Development",
    icon: Code,
    headline: "High-performance, scalable web systems built with cutting-edge architectures.",
    description: "We design and engineer flawless user experiences tailored for enterprise infrastructure, ensuring minimal latency and zero-friction deployments.",
    bullets: ["Modern React/Next.js Architecture", "SEO & Core Web Vitals Optimized", "Headless CMS Integrations"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    component: WebDevelopment // Attaching the component directly here
  },
  {
    id: "cloud-sol",
    tabTitle: "Cloud & IT Solutions",
    icon: Cloud,
    headline: "Secure, reliable cloud environments engineered to handle heavy enterprise workloads.",
    description: "Eliminate technical debt and secure your parameter controls with cloud setups explicitly engineered for failproof scaling.",
    bullets: ["AWS/Azure Elastic Scaling", "Zero-Trust Security Configurations", "24/7 Infrastructure Monitoring"],
    image: "https://i.pinimg.com/1200x/2e/60/df/2e60df82287ce87245ad8a3f862a8125.jpg",
    component: CloudSolutions
  },
  {
    id: "automation",
    tabTitle: "Business Automation",
    icon: Cpu,
    headline: "Eliminate repetitive tasks by syncing your operational workflows.",
    description: "Sync your company's operational pipelines with custom autonomous engines designed to minimize overhead and maximize human output.",
    bullets: ["Custom ERP/CRM Integrations", "Intelligent Workflow Triggers", "Legacy System API Bridging"],
    image: "https://i.pinimg.com/736x/be/94/ea/be94ea9d620c4c438b682c1f072faf7d.jpg",
    component: BusinessAutomation // Attaching the component directly here
  },
  {
    id: "consulting",
    tabTitle: "IT Consulting",
    icon: FileText,
    headline: "Strategic infrastructure planning to eliminate technical debt.",
    description: "Get real, actionable roadmaps from industry veterans to future-proof your digital operations and streamline resource allocation.",
    bullets: ["Technical Debt Assessments", "Agile Roadmap Engineering", "Vendor & Tech Stack Audits"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    component: ITconsulting
  },
  {
    id: "analytics",
    tabTitle: "Data Analytics",
    icon: BarChart3,
    headline: "Convert raw behavioral streams into beautiful, interactive intelligence.",
    description: "Stop guessing. Transform unstructured data metrics into dynamic visual control boards that allow your team to act instantly.",
    bullets: ["Real-time BI Dashboards", "Predictive Behavioral Models", "Advanced Mixpanel/GA4 Pipelines"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    component: DataAnalytics
  },
  {
    id: "ai-integration",
    tabTitle: "AI Integration",
    icon: Brain,
    headline: "Infuse smart machine-learning models into pre-existing products.",
    description: "Incorporate intelligent LLMs, custom training models, and automated cognitive systems smoothly into your software ecosystem.",
    bullets: ["Custom LLM Adjustments", "Vector Database Provisioning", "Natural Language Processing"],
    image: "https://i.pinimg.com/736x/22/5e/d6/225ed64777b68c6108f4894f3da7c662.jpg",
    component: AIIntegration
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(servicesData[0]);
  // Synced variable name spelling to prevent rendering crashes
  const [openInnerComponent, setOpenInnerComponent] = useState(null);

  // 1. CONDITIONAL VIEW REPLACEMENT TRIGGER
  if (openInnerComponent) {
    const SelectedComponent = openInnerComponent;
    return (
      <div className="w-full bg-slate-50 py-10 font-sans">
        <div className="max-w-7xl mx-auto px-4">
          <button 
            onClick={() => setOpenInnerComponent(null)}
            className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </button>
          <SelectedComponent />
        </div>
      </div>
    );
  }

  return (
    <section id="services" className="w-full bg-slate-50 py-20 lg:py-28 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="!text-2xl lg:text-3xl !font-bold text-slate-900 tracking-tight leading-snug">
            Comprehensive Services for<br />Your Business
          </h2>
        </div>

        <div className="w-full bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          
          {/* LEFT SIDEBAR: Interactive Menu Tabs */}
          <div className="lg:col-span-3 bg-[#0f172a] p-6 lg:py-10 lg:px-4 flex flex-col justify-start gap-2">
            {servicesData.map((item) => {
              const IconComponent = item.icon;
              const isSelected = activeTab.id === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  className={`w-full text-left px-5 py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-between transition-all duration-300 group ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-600 to-pink-500 text-white shadow-lg shadow-indigo-950/40 translate-x-1"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className={`w-4 h-4 ${isSelected ? "text-white" : "text-slate-400 group-hover:text-slate-300"}`} />
                    <span>{item.tabTitle}</span>
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* MIDDLE COLUMN: Text Descriptions & Bullets */}
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between relative bg-white">
            <div className="absolute top-12 right-8 opacity-[0.03] select-none pointer-events-none">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="currentColor" className="text-slate-900" strokeWidth="3">
                <path d="M0 40H30L45 10L60 70L75 35L85 45L95 40H120" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                {activeTab.headline}
              </h3>
              
              <p className="text-base text-slate-500 leading-relaxed">
                {activeTab.description}
              </p>

              <div className="space-y-3 pt-2">
                {activeTab.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation Trigger */}
            <div className="pt-8">
              <button
                onClick={() => setOpenInnerComponent(() => activeTab.component)}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-pink-500 transition-colors group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Cover */}
          <div className="lg:col-span-4 relative bg-slate-950 min-h-[300px] lg:min-h-full overflow-hidden">
            <img 
              src={activeTab.image} 
              alt={activeTab.tabTitle} 
              className="w-full h-full object-cover transition-all duration-700 scale-100 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent pointer-events-none hidden lg:block" />
          </div>

        </div>

      </div>
    </section>
  );
}
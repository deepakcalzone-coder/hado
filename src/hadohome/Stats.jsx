import React from "react";

export default function Stats() {
  const statItems = [
    { 
      metric: "120+", 
      tag: "PROJECTS DELIVERED", 
      sublabel: "Delivered globally across enterprises" 
    },
    { 
      metric: "50+", 
      tag: "HAPPY CLIENTS", 
      sublabel: "Based on active global partnerships" 
    },
    { 
      metric: "10+", 
      tag: "COUNTRIES SERVED", 
      sublabel: "Expanding digital infrastructure" 
    },
    { 
      metric: "12+", 
      tag: "YEARS EXPERIENCE", 
      sublabel: "Dedicated engineer assistance availability" 
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER CONTAINER BLOCK ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Our Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            A snapshot of our journey, achievements, and the milestones we've reached together.
          </h2>
        </div>

        {/* ================= MODERN STATS GRID SYSTEM ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-slate-200/60 p-8 flex flex-col items-center text-center justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#006A7C] transition-all duration-300 min-h-[190px]"
            >
              <div className="space-y-2 my-auto">
                {/* Large Bold Metric Accent */}
                <div className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">
                  {item.metric}
                </div>
                
                {/* Inner Small Upper Header */}
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 pt-1">
                  {item.tag}
                </div>
              </div>

              {/* Bottom Explanatory Paragraph Description Line */}
              <div className="text-xs text-slate-400 font-medium leading-relaxed max-w-[200px] mt-4 pt-3 border-t border-slate-100 w-full">
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
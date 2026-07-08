// src/components/StatsCard.jsx
import React from 'react';

const StatsCard = ({ title, value, footer, icon: Icon, color }) => {
  return (
    <div className="bg-black backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-slate-700/70 transition-all duration-200 shadow-lg group">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          {title}
        </p>
        {/* Dynamic Glowing Icon Accent */}
        <div className={`p-2 rounded-lg bg-slate-800/60 ${color} group-hover:scale-110 transition-transform duration-200`}>
          {Icon && <Icon className="w-4 h-4" />}
        </div>
      </div>
      
      <p className="text-3xl font-black text-slate-100 mt-3 tracking-tight">
        {value}
      </p>
      
      <div className={`flex items-center gap-1 mt-4 text-xs font-semibold ${color}`}>
        <p>{footer}</p>
      </div>
    </div>
  );
};

export default StatsCard;
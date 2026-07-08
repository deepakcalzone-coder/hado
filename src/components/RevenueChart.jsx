import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock financial data
const revenueData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 5000, expenses: 3000 },
  { month: "Apr", revenue: 4780, expenses: 2908 },
  { month: "May", revenue: 6890, expenses: 4800 },
  { month: "Jun", revenue: 7390, expenses: 3800 },
  { month: "Jul", revenue: 8200, expenses: 4300 },
];

// Custom styled tooltips to match your dashboard theme
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg shadow-xl text-xs font-sans font-medium text-slate-300">
        <p className="text-slate-400 mb-1 font-bold">{label}</p>
        <p className="text-blue-400">Revenue: ${payload[0].value.toLocaleString()}</p>
        <p className="text-purple-400">Expenses: ${payload[1].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export default function RevenueChart() {
  return (
    <div className=" backdrop-blur-sm border border-slate-800 p-6 rounded-xl shadow-lg mt-8">
      <div className="mb-6">
        <h3 className="text-base font-bold text-black tracking-tight">
          Financial Overview
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Monthly breakdown of incoming revenue vs operational overhead.
        </p>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={revenueData}
            margin={{ top: 10, right: 10, left: -5, bottom: 0 }}
          >
            <defs>
              {/* Revenue Glow Gradient */}
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
              </linearGradient>
              {/* Expenses Glow Gradient */}
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c084fc" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#c084fc" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#1e293b" 
              vertical={false} 
            />
            
            <XAxis 
              dataKey="month" 
              stroke="#64748b" 
              fontSize={11} 
              tickLine={false} 
              axisLine={false}
              dy={10}
            />
            
            <YAxis 
              stroke="#64748b" 
              fontSize={11} 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            {/* Revenue Line */}
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#60a5fa"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            
            {/* Expenses Line */}
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#c084fc"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
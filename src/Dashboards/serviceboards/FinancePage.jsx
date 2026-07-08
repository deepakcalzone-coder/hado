import React from "react";
import StatsCard from "../../components/StatsCard";
import InvoiceTable from "../../components/InvoiceTable";
import { Wallet, Clock, ArrowDownRight } from "lucide-react";

export default function FinancePage() {
  const stats = [
    { title: "Total Revenue (Q2)", 
        value: "₹42,50,000",
         footer: "+14.2% vs last quarter",
          icon: Wallet,
           color: "text-emerald-400"
         },
    { title: "Outstanding Invoices",
         value: "₹8,15,000",
          footer: "6 invoices are overdue",
           icon: Clock, 
           color: "text-amber-400"
         },
    { title: "Operational Overhead",
         value: "₹12,40,000", 
         footer: "Includes cloud server stacks",
          icon: ArrowDownRight,
           color: "text-rose-400"
         }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header Section */}
      <div>
        <h1 className="text-2xl font-black text-black tracking-tight">Finance Control Ledger</h1>
        <p className="text-sm text-slate-400 mt-1">Monitor project billing, incoming client revenue, and corporate overhead distributions.</p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <StatsCard 
            key={i}
            title={item.title}
            value={item.value}
            footer={item.footer}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
      
      <InvoiceTable />

    </div>
  );
}
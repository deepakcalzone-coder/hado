import React from "react";
import {
  UserPlus,
  FolderKanban,
  BadgeDollarSign,
  Bot,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const activities = [
  {
    id: 1,
    icon: UserPlus,
    title: "New Client Added",
    description: "ABC Corporation has been onboarded.",
    time: "2 min ago",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    id: 2,
    icon: FolderKanban,
    title: "Project Updated",
    description: "ERP Migration reached 80% completion.",
    time: "15 min ago",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    id: 3,
    icon: BadgeDollarSign,
    title: "Invoice Paid",
    description: "Invoice #INV-204 payment received.",
    time: "1 hour ago",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    id: 4,
    icon: Bot,
    title: "AI Chatbot Deployed",
    description: "Production deployment completed successfully.",
    time: "Today",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    id: 5,
    icon: AlertTriangle,
    title: "Finance Approval Pending",
    description: "Quarterly budget requires approval.",
    time: "Yesterday",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    id: 6,
    icon: CheckCircle2,
    title: "AWS Backup Completed",
    description: "Daily backup finished successfully.",
    time: "Yesterday",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-[#0a0f1d] border border-white/5 rounded-2xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold !text-white">
          Recent Activity
        </h2>

        <button className="text-sm text-blue-400 hover:text-blue-300 transition">
          View All
        </button>
      </div>

      {/* Activity List */}
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-none"
            >
              {/* Icon */}
              <div
                className={`p-2 rounded-xl ${activity.bg} ${activity.color}`}
              >
                <Icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">
                  {activity.title}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  {activity.description}
                </p>
              </div>

              {/* Time */}
              <span className="text-xs text-slate-500 whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { Search, Download } from "lucide-react";

export default function InvoiceTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const invoices = [
    {
      id: "INV-2026-041",
      client: "ABC Corporation",
      service: "IT Services",
      amount: "₹3,50,000",
      date: "04 Jul 2026",
      status: "Paid",
    },
    {
      id: "INV-2026-042",
      client: "Nexus Media",
      service: "BPO Operations",
      amount: "₹1,80,000",
      date: "02 Jul 2026",
      status: "Pending",
    },
    {
      id: "INV-2026-043",
      client: "Quantum Labs",
      service: "Software Development",
      amount: "₹4,20,000",
      date: "30 Jun 2026",
      status: "Paid",
    },
    {
      id: "INV-2026-044",
      client: "Delta Holdings",
      service: "Finance Consulting",
      amount: "₹2,15,000",
      date: "28 Jun 2026",
      status: "Overdue",
    },
    {
      id: "INV-2026-045",
      client: "Hado Global Services",
      service: "Cloud Infrastructure Setup",
      amount: "₹95,000",
      date: "25 Jun 2026",
      status: "Pending",
    },
  ];

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || invoice.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-black border border-slate-800 rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold !text-white">
          Invoice Management
        </h2>

        <button className="flex items-center gap-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 px-4 py-2 rounded-lg text-sm text-white transition">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search invoice or client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
        >
          <option>All</option>
          <option>Paid</option>
          <option>Pending</option>
          <option>Overdue</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-slate-700 text-slate-400 uppercase text-xs">
            <tr>
              <th className="text-left py-3">Invoice ID</th>
              <th className="text-left py-3">Client</th>
              <th className="text-left py-3">Service</th>
              <th className="text-left py-3">Date</th>
              <th className="text-left py-3">Amount</th>
              <th className="text-center py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="border-b border-slate-800 hover:bg-slate-900 transition"
                >
                  <td className="py-4 text-indigo-400 font-semibold">
                    {invoice.id}
                  </td>

                  <td className="py-4 text-white">
                    {invoice.client}
                  </td>

                  <td className="py-4 text-slate-400">
                    {invoice.service}
                  </td>

                  <td className="py-4 text-slate-400">
                    {invoice.date}
                  </td>

                  <td className="py-4 font-semibold text-white">
                    {invoice.amount}
                  </td>

                  <td className="py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        invoice.status === "Paid"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : invoice.status === "Pending"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-8 text-slate-500"
                >
                  No invoices found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  Send, 
  ArrowLeft 
} from "lucide-react";
import {Link} from 'react-router-dom';

export default function ContactPage({ onBack }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const officeLocations = [
    {
      city: "Global Headquarters",
      address: "14 Tottenham Road, London, England",
      phone: "+1 510 945 9514", // Synced to your brand contact logs
      email: "info@hado.co.in"
    },
    {
      city: "North American Branch",
      address: "5 Washington Square, New York, USA",
      phone: "+1 212 425 8617",
      email: "information@office.com"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="w-full min-h-screen py-10 font-sans text-slate-100 animate-fadeIn">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-15">
        
        {/* Back Button Navigation Header */}
        <Link to='./Home'>
        <button 
          
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home Dashboard
        </button>
        </Link>

        {/* Hero Section Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Let's Start a Conversation
          </h1>
          <p className="text-base lg:text-lg text-slate-500 leading-relaxed">
            Have questions or a technical problem? We have a team of global experts in various fields ready to offer professional advice for your infrastructure.
          </p>
        </div>

        {/* Main Content Grid Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR COLUMN: Location Cards & Support Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dynamic Card Iteration mapping */}
            {officeLocations.map((office, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" /> {office.city}
                </h3>
                
                <div className="space-y-3 text-sm text-slate-500">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-600 font-medium">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Micro Quick Support Alert Panel */}
            <div className="bg-[#0f172a] text-white p-6 rounded-2xl shadow-md space-y-3">
              <h4 className="text-sm font-bold flex items-center gap-2 text-blue-400">
                <MessageSquare className="w-4 h-4" /> Live System Support
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Need continuous codebase monitoring or direct deployment assistance? Chat with our support team to optimize runtime configuration parameters instantly.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Functional Interactive Message Terminal */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Send an Inquiry Direct</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full text-sm text-black bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="johndoe@office.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full text-sm text-black bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Subject Line</label>
                <input 
                  type="text" 
                  required
                  placeholder="Technical Architecture Consult"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full text-sm text-black bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Message</label>
                <textarea 
                  rows="5"
                  required
                  placeholder="Outline your pipeline specifications or timeline goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full text-sm  text-black bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition resize-none"
                />
              </div>

              <button 
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition hover:opacity-95 shadow-md shadow-blue-600/10"
              >
                <Send className="w-4 h-4" /> Transmit Secure Message
              </button>
            </form>

          </div>

        </div>

      </div>
      <Footer />
    </div>

    
  );
}
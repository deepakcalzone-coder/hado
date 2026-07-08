import React, { useRef, useState } from "react";

import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const sendMessage = async (e) => {
  e.preventDefault();
  setStatus("loading");

  const data = {
    name: form.current.user_name.value,
    email: form.current.user_email.value,
    message: form.current.message.value,
  };

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzbn49Si6ZTgUsh-ndrS1cCQfWstWpp-I4t2GVFziThAkrwRn9A-plk6-auxLpbcbqzSQ/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    setStatus("success");
    form.current.reset();

    setTimeout(() => {
      setStatus("idle");
    }, 5000);

  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};

  return (
    <section id="contact" className="w-full  py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/40 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 bg-slate-900 rounded-3xl border border-slate-800 p-8 sm:p-12 lg:p-16 shadow-xl">
          
          {/* Left Column: Context & Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full inline-block">
                Connect
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let’s build something exceptional together.
              </h2>
              <p className="text-base text-slate-400 leading-relaxed max-w-sm">
                Have an ambitious project or a complex system scaling bottleneck? Drop us a line—our team typically responds within one business day.
              </p>
            </div>

            {/* Direct Channel fallbacks (Using Crisp SVGs) */}
            <div className="space-y-4 pt-6 border-t border-slate-800 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400" />
                <a href="mailto:info@hado.co.in" className="hover:text-indigo-400 transition-colors">
                  info@hado.co.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400" />
                <span className="text-slate-200">+1 510 945 9514</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-slate-200">
                  710, Lakeway Drive, Sunnyvale, California-94087.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Form */}
          <form 
            ref={form} 
            onSubmit={sendMessage} 
            className="lg:col-span-7 bg-slate-950 p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-2xl space-y-5"
          >
            
            {/* Name Input Group */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Name</label>
              <input 
                type="text" 
                name="user_name"
                required
                disabled={status === "loading"}
                placeholder="John Doe" 
                className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-600 text-sm text-slate-200 disabled:opacity-50"
              />
            </div>

            {/* Email Input Group */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
              <input 
                type="email" 
                name="user_email"
                required
                disabled={status === "loading"}
                placeholder="john@example.com" 
                className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-600 text-sm text-slate-200 disabled:opacity-50"
              />
            </div>

            {/* Message Textarea Group */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Message</label>
              <textarea 
                rows="4" 
                name="message"
                required
                disabled={status === "loading"}
                placeholder="Tell us a bit about your project goals..." 
                className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-600 text-sm text-slate-200 resize-none disabled:opacity-50"
              />
            </div>

            {/* Dynamic Status Notifications */}
            {status === "success" && (
              <div className="flex items-center gap-2 p-3.5 bg-emerald-500/10 text-emerald-400 text-sm rounded-xl border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Message sent successfully! We'll reach out soon.</span>
              </div>
            )}

            {status === "error" && (
              <div className="p-3.5 bg-rose-500/10 text-rose-400 text-sm rounded-xl border border-rose-500/20">
                Something went wrong. Please verify connection credentials and try again.
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/10 transition-all duration-200 mt-2 flex items-center justify-center gap-2 disabled:bg-indigo-800 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

        </div>
        
      </div>
    </section>
  );
}
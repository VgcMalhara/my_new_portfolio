"use client";

import { MessageSquare, Mail, Send, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-4 border-t border-neutral-900/60 relative overflow-hidden bg-[#060608]">
      {/* Subtle Ambient Glow behind contact */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-accent mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-accent" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Have an idea, project, or opportunity? Drop a message below.
          </p>
        </div>

        {/* TWO-COLUMN CONTACT LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: DIRECT REACH DETAILS */}
          <div className="md:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-neutral-400">
                // Contact Details
              </h3>
              
              <a 
                href="mailto:vchiranmalhara@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-neutral-950 text-accent group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono text-neutral-500 uppercase">Email Me</p>
                  <p className="text-sm text-neutral-300 group-hover:text-white truncate transition-colors">
                    vchiranmalhara@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Status Indicator */}
            <div className="mt-8 pt-6 border-t border-neutral-900 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-neutral-400">Available for innovative roles</span>
            </div>
          </div>

          {/* RIGHT: MINIMAL INPUT FORM */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-neutral-500 uppercase">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-neutral-900/60 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-neutral-500 uppercase">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-neutral-900/60 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-neutral-500 uppercase">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Briefly describe your project details..." 
                  className="w-full bg-neutral-900/60 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white text-black font-mono font-bold text-xs hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>SEND NODE MESSAGE</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM TERMINAL ARCHITECTURE INFO */}
        <div className="mt-16 p-4 rounded-xl bg-[#111115]/30 border border-neutral-800/40 text-center">
          <p className="text-xs font-mono text-neutral-500 flex items-center justify-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span>© 2026 Ecosystem Core. Crafted with Next.js & Framer Motion.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
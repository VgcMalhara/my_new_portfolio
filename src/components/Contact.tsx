"use client";

import { MessageSquare, Mail, Send, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-28 px-4 border-t border-neutral-900/60 relative overflow-hidden bg-[#060608]">
      {/* Subtle Ambient Glow behind contact */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 sm:w-[500px] h-64 sm:h-[400px] bg-accent/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] sm:text-xs font-mono text-accent mb-3 sm:mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-accent" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3 sm:mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-sm px-2">
            Have an idea, project, or opportunity? Drop a message below.
          </p>
        </div>

        {/* TWO-COLUMN CONTACT LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT: DIRECT REACH DETAILS */}
          <div className="md:col-span-5 flex flex-col justify-between p-5 sm:p-8 rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md">
            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-bold text-neutral-400 font-mono uppercase tracking-wider">
                {"// Contact Details"}
              </h3>
              
              <a 
                href="mailto:vchiranmalhara@gmail.com"
                className="group flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700 transition-all"
              >
                <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-950 text-accent group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden min-w-0">
                  <p className="text-[10px] font-mono text-neutral-500 uppercase">Email Me</p>
                  <p className="text-xs sm:text-sm text-neutral-300 group-hover:text-white truncate transition-colors">
                    cmhara1@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Status Indicator */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-neutral-900 flex items-center gap-3">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-neutral-400">Available for innovative roles</span>
            </div>
          </div>

          {/* RIGHT: MINIMAL INPUT FORM */}
          <div className="md:col-span-7 p-5 sm:p-8 rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] sm:text-[11px] font-mono text-neutral-500 uppercase">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-neutral-900/60 border border-neutral-800/80 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] sm:text-[11px] font-mono text-neutral-500 uppercase">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-neutral-900/60 border border-neutral-800/80 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] sm:text-[11px] font-mono text-neutral-500 uppercase">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Briefly describe your project details..." 
                  className="w-full bg-neutral-900/60 border border-neutral-800/80 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto px-5 py-3 sm:py-3.5 rounded-xl bg-white text-black font-mono font-bold text-xs hover:bg-neutral-200 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer group shadow-md"
              >
                <span>SEND NODE MESSAGE</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM TERMINAL ARCHITECTURE INFO */}
        <div className="mt-12 sm:mt-16 p-3 sm:p-4 rounded-xl bg-[#111115]/30 border border-neutral-800/40 text-center">
          <p className="text-[11px] sm:text-xs font-mono text-neutral-500 flex items-center justify-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="truncate">© 2026 Ecosystem Core. Crafted with Next.js</span>
          </p>
        </div>

      </div>
    </section>
  );
}
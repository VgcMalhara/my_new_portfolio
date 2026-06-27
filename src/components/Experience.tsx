"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Calendar, Building2, ArrowUpRight, Terminal, Sparkles, CheckCircle2 } from "lucide-react";
import { MouseEvent, useState } from "react";

export default function Experience() {
  // Ultra-modern dynamic glowing grid positioning logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Image load වෙද්දී අවුලක් වුණොත් Icon එක පෙන්වන්න state එකක්
  const [logoError, setLogoError] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="experience" className="relative py-32 px-4 bg-[#060608] overflow-hidden">
      {/* Deep Atmospheric Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800/60 text-[11px] font-mono text-accent mb-4 tracking-wider"
          >
            <Sparkles className="w-3 h-3 text-accent animate-pulse" />
            <span>INDUSTRIAL COMMAND CENTER</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            Work Experience
          </h2>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Architecting modern logic layers and driving corporate production environments.
          </p>
        </div>

        {/* 🔥 HIGH-TECH INTERACTIVE EXPERIENCE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          className="group relative p-8 sm:p-12 rounded-[32px] border border-neutral-900 bg-neutral-950/20 backdrop-blur-sm hover:border-neutral-800/60 transition-colors duration-500 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
        >
          {/* Dynamic Interactive Spotlight Overlay */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  350px circle at ${mouseX}px ${mouseY}px,
                  rgba(99, 102, 241, 0.06),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Upper Dashboard Layer: Logo & Meta Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-900 pb-8 mb-8">
            <div className="flex items-center gap-5">
              
              {/* 🏢 MODERN COMPONENT LOGO CONTAINER */}
              <div className="relative w-14 h-14 shrink-0 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden group-hover:border-indigo-500/30 transition-all duration-500 shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {!logoError ? (
                  /* 🖼️ COMPANY LOGO IMAGE */
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src="/axcertro.webp" 
                    alt="Axcertro Logo" 
                    className="w-9 h-9 object-contain filter brightness-100 group-hover:scale-105 transition-transform duration-500 relative z-10"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  /* 🏢 FALLBACK ICON (ලෝගෝ එක මිස් වුණොත් විතරක් මේක වැඩ කරන්නේ) */
                  <Building2 className="w-6 h-6 text-neutral-400 group-hover:text-indigo-400 transition-colors duration-500 relative z-10" />
                )}

                {/* Micro tech border blink */}
                <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-300">
                    Developer Intern
                  </h3>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                    Active
                  </span>
                </div>
                <p className="text-sm font-mono font-medium text-neutral-400 flex items-center gap-1.5">
                  <span>Axcertro Pvt Ltd</span>
                  <span className="text-neutral-700">•</span>
                  <span className="text-neutral-500 text-xs">Enterprise Ecosystems</span>
                </p>
              </div>
            </div>

            {/* Premium Futuristic Timeline Tag */}
            <div className="flex items-center gap-2 text-xs text-neutral-300 font-mono bg-neutral-900/40 border border-neutral-900 backdrop-blur-md px-4 py-2 rounded-xl self-start md:self-center shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              <span>March 2026 — Present</span>
            </div>
          </div>

          {/* Context Summary */}
          <p className="text-sm sm:text-base font-sans text-neutral-400 leading-relaxed max-w-3xl mb-8 group-hover:text-neutral-300 transition-colors duration-300">
            Engineered within production-grade environments, focusing on deployment scaling, state sync management, and structured architecture designs. Collaborating directly with system pipelines to deploy scalable code solutions.
          </p>

          {/* Modern Progressional Milestones */}
          <div className="space-y-4 mb-10">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-2">// Core System Vector Implementations</h4>
            
            {[
              "Architected reactive state models and sleek modular interface workflows using **React.js**.",
              "Constructed secure relational routing layers and optimized back-end logic via **Laravel (PHP)**.",
              "Managed dynamic environment databases with strict soft-deletes and query performance tuning."
            ].map((text, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="flex items-start gap-3.5 text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300"
              >
                <div className="mt-1 shrink-0 p-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-600 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all duration-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>') }} />
              </motion.div>
            ))}
          </div>

          {/* High-Tech Tech Tag Deck */}
          <div className="pt-6 border-t border-neutral-900">
            <div className="flex flex-wrap gap-2">
              {["React.js", "Laravel", "PHP", "MySQL", "Git Workflow", "REST Architecture"].map((tech) => (
                <div 
                  key={tech}
                  className="relative px-3.5 py-2 text-xs font-mono rounded-xl bg-neutral-900/30 border border-neutral-900 text-neutral-500 hover:text-white hover:border-neutral-700/60 transition-all duration-300 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Clean Interactive Top Right Anchor Arrow */}
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 p-2 rounded-xl bg-neutral-900 border border-neutral-800">
            <ArrowUpRight className="w-4 h-4 text-indigo-400" />
          </div>
        </motion.div>

        {/* TERMINAL STATUS BLOCK */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-4 rounded-2xl bg-[#0b0b0e] border border-neutral-900 text-center"
        >
          <p className="text-xs font-mono text-neutral-500 flex items-center justify-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-indigo-500" />
            <span>Deployment active. Full structural framework nodes successfully synchronized.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
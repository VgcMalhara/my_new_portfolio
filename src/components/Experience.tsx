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
    <section id="experience" className="relative py-16 sm:py-24 md:py-32 px-4 bg-[#060608] overflow-hidden">
      {/* Deep Atmospheric Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-indigo-500/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800/60 text-[10px] sm:text-[11px] font-mono text-accent mb-3 sm:mb-4 tracking-wider"
          >
            <Sparkles className="w-3 h-3 text-accent animate-pulse" />
            <span>INDUSTRIAL COMMAND CENTER</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-3 sm:mb-4">
            Work Experience
          </h2>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-sm px-2">
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
          className="group relative p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl md:rounded-[32px] border border-neutral-900 bg-neutral-950/20 backdrop-blur-sm hover:border-neutral-800/60 transition-colors duration-500 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] sm:shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
        >
          {/* Dynamic Interactive Spotlight Overlay */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl md:rounded-[32px] opacity-0 group-hover:opacity-100 transition duration-300"
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 border-b border-neutral-900 pb-6 sm:pb-8 mb-6 sm:mb-8">
            <div className="flex items-center gap-3.5 sm:gap-5">
              
              {/* 🏢 MODERN COMPONENT LOGO CONTAINER */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden group-hover:border-indigo-500/30 transition-all duration-500 shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {!logoError ? (
                  /* 🖼️ COMPANY LOGO IMAGE */
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src="/axcertro.webp" 
                    alt="Axcertro Logo" 
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain filter brightness-100 group-hover:scale-105 transition-transform duration-500 relative z-10"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  /* 🏢 FALLBACK ICON */
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 group-hover:text-indigo-400 transition-colors duration-500 relative z-10" />
                )}

                {/* Micro tech border blink */}
                <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-300">
                    Developer Intern
                  </h3>
                  <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold uppercase rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                    Active
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-mono font-medium text-neutral-400 flex items-center gap-1.5">
                  <span>Axcertro Pvt Ltd</span>
                  <span className="text-neutral-700">•</span>
                  <span className="text-neutral-500 text-[11px] sm:text-xs">Enterprise Ecosystems</span>
                </p>
              </div>
            </div>

            {/* Premium Futuristic Timeline Tag */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-neutral-300 font-mono bg-neutral-900/40 border border-neutral-900 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl self-start sm:self-center shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              <span>March 2026 — Present</span>
            </div>
          </div>

          {/* Context Summary */}
          <p className="text-xs sm:text-sm md:text-base font-sans text-neutral-400 leading-relaxed max-w-3xl mb-6 sm:mb-8 group-hover:text-neutral-300 transition-colors duration-300">
            Engineered within production-grade environments, focusing on deployment scaling, state sync management, and structured architecture designs. Collaborating directly with system pipelines to deploy scalable code solutions.
          </p>

          {/* Modern Progressional Milestones */}
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            <h4 className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-2">{"// Core System Vector Implementations"}</h4>
            
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
                className="flex items-start gap-2.5 sm:gap-3.5 text-xs sm:text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300"
              >
                <div className="mt-0.5 sm:mt-1 shrink-0 p-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-600 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all duration-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>') }} />
              </motion.div>
            ))}
          </div>

          {/* High-Tech Tech Tag Deck */}
          <div className="pt-5 sm:pt-6 border-t border-neutral-900">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["React.js", "Laravel", "PHP", "MySQL", "Git Workflow", "REST Architecture"].map((tech) => (
                <div 
                  key={tech}
                  className="relative px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-mono rounded-lg sm:rounded-xl bg-neutral-900/30 border border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700/60 transition-all duration-300 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Clean Interactive Top Right Anchor Arrow */}
          <div className="hidden sm:block absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 p-2 rounded-xl bg-neutral-900 border border-neutral-800 pointer-events-none">
            <ArrowUpRight className="w-4 h-4 text-indigo-400" />
          </div>
        </motion.div>

        {/* TERMINAL STATUS BLOCK */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0b0b0e] border border-neutral-900 text-center"
        >
          <p className="text-[11px] sm:text-xs font-mono text-neutral-500 flex items-center justify-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
            <span className="truncate">Deployment active. Full structural framework nodes successfully synchronized.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
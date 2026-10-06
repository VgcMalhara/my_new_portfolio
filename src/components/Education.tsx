"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-10 text-white flex items-center gap-3">
        <span className="w-1.5 h-7 sm:h-8 bg-cyan-500 rounded-full" />
        Education
      </h2>

      <div className="grid gap-4 sm:gap-6">
        {/* NDT CARD */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="group relative p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/5 blur-[70px] sm:blur-[80px] rounded-full -mr-16 -mt-16 pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative z-10">
            <a 
              href="https://uom.lk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 shadow-xl overflow-hidden p-2.5 sm:p-3 hover:scale-105 transition-transform relative"
            >
              <Image src="/uom-logo2.png" alt="University of Moratuwa Logo" width={80} height={80} className="w-full h-full object-contain" />
            </a>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">National Diploma in Technology</h3>
              <p className="text-cyan-400 font-medium mb-2 sm:mb-3 text-xs sm:text-sm">Institute of Technology, University of Moratuwa</p>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Focused on full-stack software architecture, object-oriented principles, and scalable system design.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SCHOOL & AL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* School Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all flex items-center gap-3.5 sm:gap-4"
          >
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 p-2 hover:border-neutral-600 transition-colors relative"
            >
              <Image src="/school-logo.png" alt="School Logo" width={56} height={56} className="w-full h-full object-contain" />
            </a>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">Secondary Education</h4>
              <p className="text-neutral-500 text-xs sm:text-sm">St Thomas College Matara</p>
            </div>
          </motion.div>

          {/* AL Results Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-neutral-900/50 border border-neutral-800 hover:border-amber-500/30 transition-all flex flex-col gap-3.5 sm:gap-4"
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">G.C.E Advanced Level</h4>
                <p className="text-neutral-500 text-xs sm:text-sm font-mono">Physical Science Stream</p>
              </div>
            </div>
            
            {/* Results Grid */}
            <div className="grid grid-cols-3 gap-2 mt-1 sm:mt-2">
              {[
                { sub: "Maths", res: "B" },
                { sub: "Chem", res: "B" },
                { sub: "Phys", res: "C" },
              ].map((item) => (
                <div key={item.sub} className="bg-neutral-950 rounded-lg sm:rounded-xl border border-neutral-800 p-2 text-center">
                  <p className="text-[9px] sm:text-[10px] text-neutral-500 uppercase">{item.sub}</p>
                  <p className="text-xs sm:text-sm font-bold text-white">{item.res}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-neutral-800/50">
              <span className="text-[10px] sm:text-[11px] text-neutral-500 font-mono">Z-Score</span>
              <span className="text-xs font-bold text-amber-400 font-mono">1.2674</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
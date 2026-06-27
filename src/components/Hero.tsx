"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Terminal, FileDown } from "lucide-react";
import { PROFILE } from "@/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-[#060608] py-20">
      
      {/* Premium UI Tech Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Cyberpunk Dynamic Glows */}
      <div className="absolute top-12 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Text Content & Actions */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Modern Interactive Tech Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/40 backdrop-blur-md border border-neutral-800/60 text-xs font-mono text-accent mb-6 shadow-2xl shadow-accent/5"
          >
            <Terminal className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span className="text-neutral-400">~/status:</span> 
            <span className="font-semibold tracking-wide uppercase">Ready to Build</span>
          </motion.div>

          {/* Premium Typography & Main Heading */}
          <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block text-neutral-400 font-light text-2xl md:text-3xl font-mono mb-2"
            >
              Crafting Scalable Code
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="block bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
            >
              Chiran Vidanagamage
            </motion.span>
          </h1>

          {/* Sub-headline / Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base font-mono text-primary tracking-wide mb-6 border-b border-primary/20 pb-2 px-4 bg-primary/5 rounded inline-block"
          >
            {PROFILE.role}
          </motion.div>

          {/* Professional Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm md:text-base text-neutral-400 max-w-xl mb-10 leading-relaxed font-sans"
          >
            {PROFILE.summary}
          </motion.p>

          {/* Action Area (Buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* View Work Button */}
            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-all shadow-xl group tracking-tight"
            >
              Explore Projects
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 stroke-[2.5]" />
            </a>

            {/* Resume Download Button */}
            <a
              href="/Resume_Chiran_Vidanagamage.pdf"
              download="Chiran_Vidanagamage_Resume.pdf"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 bg-neutral-900 border border-neutral-800 text-white font-medium rounded-xl hover:bg-neutral-800 hover:border-neutral-700 transition-all group tracking-tight shadow-lg shadow-black/50"
            >
              <FileDown className="w-4 h-4 text-accent transition-transform group-hover:translate-y-0.5" />
              <span>Download CV</span>
            </a>

            {/* Social Links Box */}
            <div className="flex items-center gap-1 bg-[#111115]/80 backdrop-blur-md border border-neutral-800/80 p-1.5 rounded-xl w-full sm:w-auto justify-center shadow-inner">
              {/* GitHub */}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 hover:bg-neutral-800/50 rounded-lg text-neutral-400 hover:text-white transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 hover:bg-neutral-800/50 rounded-lg text-neutral-400 hover:text-white transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* Email */}
              <a
                href={`mailto:${PROFILE.email}`}
                className="p-2.5 hover:bg-neutral-800/50 rounded-lg text-neutral-400 hover:text-white transition-all duration-200"
                aria-label="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Premium Animated Photo Frame */}
        <div className="lg:col-span-5 flex justify-center items-center relative w-full h-[400px]">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
            className="relative w-64 h-80 rounded-2xl overflow-hidden border border-neutral-800 bg-surface/50 backdrop-blur-md shadow-2xl p-3 group cursor-pointer tracking-normal [perspective:1000px]"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-neutral-900">
              <Image
                src="/profile.png"
                alt={PROFILE.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>

          {/* Floating Tech Badges */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-10 px-3 py-1.5 rounded-xl bg-[#111115]/90 border border-neutral-800 text-xs font-mono text-primary flex items-center gap-1.5 shadow-xl shadow-black/40"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            React.js
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-12 right-6 px-3 py-1.5 rounded-xl bg-[#111115]/90 border border-neutral-800 text-xs font-mono text-red-500 flex items-center gap-1.5 shadow-xl shadow-black/40"
          >
            <span className="w-2 h-2 rounded-full bg-red-500" />
            Laravel
          </motion.div>

          <motion.div
            animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-2/3 left-4 px-3 py-1.5 rounded-xl bg-[#111115]/90 border border-neutral-800 text-xs font-mono text-accent flex items-center gap-1.5 shadow-xl shadow-black/40"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            Docker & CV
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Layout, Server, Database, Brain, Cpu, Terminal, Code2, CheckCircle2 } from "lucide-react";

const TABS_DATA = [
  {
    id: "all",
    title: "All Technologies",
    icon: <Cpu className="w-4 h-4" />,
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <Layout className="w-4 h-4" />,
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <Server className="w-4 h-4" />,
  },
  {
    id: "devops",
    title: "Databases & DevOps",
    icon: <Database className="w-4 h-4" />,
  },
  {
    id: "ml",
    title: "Machine Learning / Data",
    icon: <Brain className="w-4 h-4" />,
  },
];

const SKILLS_DATA = [
  // Frontend
  { name: "React.js", category: "frontend", level: "Expert", color: "from-blue-500 to-cyan-400" },
  { name: "Next.js", category: "frontend", level: "Expert", color: "from-neutral-200 to-neutral-400" },
  { name: "Tailwind CSS", category: "frontend", level: "Expert", color: "from-cyan-500 to-teal-400" },
  { name: "TypeScript", category: "frontend", level: "Advanced", color: "from-blue-600 to-indigo-500" },
  { name: "JavaScript", category: "frontend", level: "Expert", color: "from-yellow-500 to-amber-400" },
  { name: "HTML5/CSS3", category: "frontend", level: "Expert", color: "from-orange-500 to-red-400" },
  
  // Backend
  { name: "Laravel (PHP)", category: "backend", level: "Expert", color: "from-red-600 to-orange-500" },
  { name: "Node.js", category: "backend", level: "Advanced", color: "from-green-600 to-emerald-500" },
  { name: "Express.js", category: "backend", level: "Advanced", color: "from-neutral-400 to-neutral-600" },
  { name: "RESTful APIs", category: "backend", level: "Expert", color: "from-indigo-500 to-purple-500" },
  { name: "MVC Architecture", category: "backend", level: "Expert", color: "from-pink-500 to-rose-500" },
  
  // DevOps / DB
  { name: "MySQL", category: "devops", level: "Expert", color: "from-blue-500 to-orange-400" },
  { name: "PostgreSQL", category: "devops", level: "Advanced", color: "from-blue-600 to-sky-500" },
  { name: "MongoDB", category: "devops", level: "Advanced", color: "from-emerald-500 to-green-600" },
  { name: "Docker", category: "devops", level: "Intermediate", color: "from-sky-500 to-blue-500" },
  { name: "Supabase", category: "devops", level: "Advanced", color: "from-emerald-600 to-teal-400" },
  { name: "Vercel / Render", category: "devops", level: "Expert", color: "from-neutral-300 to-neutral-500" },
  
  // Machine Learning
  { name: "Python", category: "ml", level: "Advanced", color: "from-blue-500 to-yellow-400" },
  { name: "Machine Learning", category: "ml", level: "Intermediate", color: "from-purple-500 to-indigo-500" },
  { name: "Data Science", category: "ml", level: "Intermediate", color: "from-fuchsia-500 to-pink-500" },
  { name: "Data Modeling", category: "ml", level: "Advanced", color: "from-violet-500 to-purple-400" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  // තෝරලා තියෙන Tab එකට අනුව Skills Filter කිරීම
  const filteredSkills = activeTab === "all" 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="relative py-28 px-4 bg-[#060608]">
      {/* Background Subtle Mesh / Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-accent mb-4">
            <Code2 className="w-3.5 h-3.5 text-accent" />
            <span>PREVIEW INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            My Tech Ecosystem
          </h2>
          <p className="text-sm font-mono text-neutral-400 max-w-lg">
            Click on the domains to filter and inspect my development capabilities.
          </p>
        </div>

        {/* 🛠️ USER-FRIENDLY DASHBOARD LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: TABS NAVIGATION (Takes 4 Cols) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-3 lg:pb-0 no-scrollbar sticky top-24 z-20 bg-[#060608]/80 backdrop-blur-md p-2 rounded-2xl border border-neutral-900/60 lg:border-none">
            {TABS_DATA.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs md:text-sm font-mono font-medium transition-all duration-300 whitespace-nowrap cursor-pointer w-full text-left
                    ${isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/40"}`}
                >
                  {/* Active Background Slide Effect */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-neutral-900 rounded-xl border border-neutral-800"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  <span className={`relative z-10 p-1.5 rounded-lg ${isActive ? "bg-neutral-950 text-accent" : "bg-neutral-950/40 text-neutral-500"}`}>
                    {tab.icon}
                  </span>
                  <span className="relative z-10">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: SKILLS INTERACTIVE BENTO GRID (Takes 8 Cols) */}
          <div className="lg:col-span-8 min-h-[350px]">
            <motion.div 
              layout 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    key={skill.name}
                    className="group relative p-5 rounded-2xl border border-neutral-900 bg-neutral-950/60 hover:bg-neutral-950 hover:border-neutral-800/80 transition-all duration-300 flex flex-col justify-between h-32 overflow-hidden shadow-sm"
                  >
                    {/* Top Section: Glowing Indicator & Check */}
                    <div className="flex items-center justify-between">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-accent transition-colors shadow-[0_0_8px_transparent] group-hover:shadow-accent/50" />
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-800 group-hover:text-neutral-600 transition-colors" />
                    </div>

                    {/* Bottom Section: Name & Badge */}
                    <div className="space-y-1 relative z-10">
                      <h4 className="text-sm md:text-base font-bold text-neutral-200 group-hover:text-white transition-colors tracking-tight">
                        {skill.name}
                      </h4>
                      <span className="inline-block text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider">
                        {skill.level}
                      </span>
                    </div>

                    {/* Subtle Gradient Line on Hover */}
                    <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM TERMINAL TICKER */}
        <div className="mt-20 p-4 rounded-xl bg-[#111115]/30 border border-neutral-800/40 text-center">
          <p className="text-xs font-mono text-neutral-500 flex items-center justify-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span>⚡ Tip: Use the dashboard menu to switch between specific engineering nodes seamlessly.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
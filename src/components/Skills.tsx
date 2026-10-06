"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Layout, Server, Database, Brain, Cpu, 
  Terminal, Code2, CheckCircle2, Files, 
  Search, GitBranch, Settings, X, ChevronRight,
  MonitorPlay,
  FileJson,Sparkles
} from "lucide-react";

const TABS_DATA = [
  { id: "all", title: "all_technologies.ts", icon: <Cpu className="w-4 h-4 text-blue-400" /> },
  { id: "frontend", title: "frontend.tsx", icon: <Layout className="w-4 h-4 text-cyan-400" /> },
  { id: "backend", title: "backend.php", icon: <Server className="w-4 h-4 text-red-400" /> },
  { id: "devops", title: "database_devops.sql", icon: <Database className="w-4 h-4 text-orange-400" /> },
  { id: "ml", title: "ai_vision.py", icon: <Brain className="w-4 h-4 text-yellow-400" /> },
];

const SKILLS_DATA = [
  // Frontend
  { name: "React.js", category: "frontend", level: "Expert", color: "from-blue-500 to-cyan-400" },
  { name: "Next.js", category: "frontend", level: "Expert", color: "from-neutral-400 to-neutral-200" },
  { name: "Tailwind CSS", category: "frontend", level: "Expert", color: "from-cyan-500 to-teal-400" },
  { name: "TypeScript", category: "frontend", level: "Advanced", color: "from-blue-600 to-indigo-500" },
  { name: "JavaScript", category: "frontend", level: "Expert", color: "from-yellow-500 to-amber-400" },
  { name: "HTML5/CSS3", category: "frontend", level: "Expert", color: "from-orange-500 to-red-400" },
  
  // Backend
  { name: "Laravel (PHP)", category: "backend", level: "Expert", color: "from-red-600 to-orange-500" },
  { name: "Node.js", category: "backend", level: "Advanced", color: "from-green-600 to-emerald-500" },
  { name: "Express.js", category: "backend", level: "Advanced", color: "from-neutral-500 to-neutral-400" },
  { name: "RESTful APIs", category: "backend", level: "Expert", color: "from-indigo-500 to-purple-500" },
  { name: "MVC Arch.", category: "backend", level: "Expert", color: "from-pink-500 to-rose-500" },
  
  // DevOps / DB
  { name: "MySQL", category: "devops", level: "Expert", color: "from-blue-500 to-orange-400" },
  { name: "PostgreSQL", category: "devops", level: "Advanced", color: "from-blue-600 to-sky-500" },
  { name: "MongoDB", category: "devops", level: "Advanced", color: "from-emerald-500 to-green-600" },
  { name: "Docker", category: "devops", level: "Intermediate", color: "from-sky-500 to-blue-500" },
  { name: "Supabase", category: "devops", level: "Advanced", color: "from-emerald-600 to-teal-400" },
  { name: "Vercel / Render", category: "devops", level: "Expert", color: "from-neutral-400 to-neutral-300" },
  
  // AI & Computer Vision
  { name: "Python", category: "ml", level: "Advanced", color: "from-blue-500 to-yellow-400" },
  { name: "OpenCV", category: "ml", level: "Advanced", color: "from-blue-600 to-teal-400" },
  { name: "YOLO", category: "ml", level: "Advanced", color: "from-amber-500 to-red-500" },
  { name: "Roboflow", category: "ml", level: "Advanced", color: "from-purple-500 to-fuchsia-500" },
  { name: "PyTorch", category: "ml", level: "Intermediate", color: "from-orange-600 to-rose-500" },
  { name: "Computer Vision", category: "ml", level: "Advanced", color: "from-indigo-500 to-cyan-500" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = activeTab === "all" 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeTab);

  const activeTabData = TABS_DATA.find(t => t.id === activeTab);

  // Generate mock line numbers
  const lineNumbers = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 bg-[#060608] min-h-screen flex items-center justify-center font-sans overflow-hidden">
      
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800/60 text-[10px] sm:text-[11px] font-mono text-accent mb-3 sm:mb-4 tracking-wider"
          >
            <Sparkles className="w-3 h-3 text-accent animate-pulse" />
            <span>INDUSTRIAL COMMAND CENTER</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3 sm:mb-4">
            My Tech Ecosystem
          </h2>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-lg px-2">
            Click on the domains to filter and inspect my development capabilities.
          </p>
        </div>

        {/* VS CODE WINDOW CONTAINER */}
        <div className="flex flex-col rounded-xl overflow-hidden border border-[#3c3c3c] bg-[#1e1e1e] shadow-2xl shadow-black/50 h-[80vh] min-h-[550px] max-h-[700px] max-w-5xl mx-auto">
          
          {/* 1. TOP TITLE BAR */}
          <div className="h-9 flex items-center justify-between px-3 sm:px-4 bg-[#323233] select-none border-b border-[#1e1e1e] shrink-0">
            {/* Mac Window Controls */}
            <div className="flex gap-1.5 sm:gap-2 w-16 sm:w-20">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 cursor-pointer"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 cursor-pointer"></div>
            </div>
            {/* File Path */}
            <div className="text-[#cccccc] text-[10px] sm:text-xs font-mono flex-1 text-center truncate px-2 opacity-70">
              portfolio - src/components/skills.tsx
            </div>
            {/* Right spacer */}
            <div className="w-16 sm:w-20"></div>
          </div>

          {/* MAIN WRAPPER: Changed to flex-col on mobile, flex-row on desktop */}
          <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
            
            {/* 2. ACTIVITY BAR (Far Left - Hidden on Mobile) */}
            <div className="w-12 bg-[#333333] flex-col items-center py-4 gap-6 hidden sm:flex border-r border-[#1e1e1e] shrink-0">
              <Files className="w-6 h-6 text-white cursor-pointer opacity-100" />
              <Search className="w-6 h-6 text-white cursor-pointer opacity-40 hover:opacity-100 transition-opacity" />
              <GitBranch className="w-6 h-6 text-white cursor-pointer opacity-40 hover:opacity-100 transition-opacity" />
              <MonitorPlay className="w-6 h-6 text-white cursor-pointer opacity-40 hover:opacity-100 transition-opacity" />
              <div className="mt-auto">
                <Settings className="w-6 h-6 text-white cursor-pointer opacity-40 hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* 3. SIDEBAR / HORIZONTAL TABS (Explorer) */}
            <div className="w-full sm:w-60 bg-[#252526] flex flex-col sm:border-r border-[#3c3c3c] shrink-0 z-10 border-b sm:border-b-0">
              <div className="text-[#cccccc] text-[11px] font-bold tracking-wider px-5 py-3 hidden sm:block shrink-0">
                EXPLORER
              </div>
              
              <div className="flex flex-row sm:flex-col overflow-x-auto sm:overflow-x-hidden no-scrollbar bg-[#1e1e1e] sm:bg-transparent">
                <div className="px-3 py-1 text-[#cccccc] text-xs font-semibold flex items-center gap-1 opacity-70 hidden sm:flex shrink-0">
                  <ChevronRight className="w-3 h-3" /> PORTFOLIO
                </div>
                
                {/* File List / Tabs */}
                <div className="flex flex-row sm:flex-col w-full min-w-max sm:min-w-0">
                  {TABS_DATA.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 sm:px-4 py-3 sm:py-1.5 text-[11px] sm:text-xs font-mono transition-colors cursor-pointer outline-none
                          ${isActive 
                            ? "bg-[#37373d] text-white border-b-2 sm:border-b-0 sm:border-l-2 border-blue-500" 
                            : "text-[#cccccc] hover:bg-[#2a2d2e]"
                          }`}
                      >
                        {tab.icon}
                        <span className="whitespace-nowrap">{tab.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 4. MAIN EDITOR AREA */}
            <div className="flex-1 flex flex-col bg-[#1e1e1e] overflow-hidden min-w-0">
              
              {/* Editor Tabs */}
              <div className="flex bg-[#252526] overflow-x-auto no-scrollbar shrink-0">
                <div className="flex items-center gap-2 bg-[#1e1e1e] px-4 py-2 border-t border-blue-500 min-w-max">
                  {activeTabData?.icon}
                  <span className="text-[#cccccc] text-[11px] sm:text-xs font-mono">{activeTabData?.title}</span>
                  <X className="w-3 h-3 text-[#cccccc] ml-2 hover:bg-[#333333] rounded cursor-pointer" />
                </div>
              </div>

              {/* Breadcrumb (Hidden on very small screens to save space) */}
              <div className="px-4 py-1.5 text-[10px] font-mono text-[#cccccc] opacity-60 border-b border-[#2d2d2d] flex items-center gap-1 hidden md:flex shrink-0">
                portfolio <ChevronRight className="w-3 h-3" /> src <ChevronRight className="w-3 h-3" /> skills <ChevronRight className="w-3 h-3" /> {activeTabData?.title}
              </div>

              {/* Editor Content Area with Line Numbers */}
              <div className="flex-1 overflow-y-auto flex relative p-3 sm:p-4">
                
                {/* Line Numbers */}
                <div className="text-[#858585] text-right pr-4 font-mono text-xs select-none hidden sm:flex flex-col opacity-50 shrink-0">
                  {lineNumbers.map(num => (
                    <span key={num} className="h-[24px] leading-[24px]">{num}</span>
                  ))}
                </div>

                {/* Actual Code / Skills Grid */}
                <div className="flex-1 min-w-0">
                  <div className="text-[#569cd6] text-xs sm:text-sm font-mono mb-4 break-words">
                    <span className="text-[#c586c0]">const</span> {activeTab.toUpperCase()}_SKILLS = <span className="text-[#ffd700]">[</span>
                  </div>
                  
                  <motion.div 
                    layout 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pl-2 sm:pl-4"
                  >
                    <AnimatePresence mode="popLayout">
                      {filteredSkills.map((skill) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          key={skill.name}
                          className="group relative p-3.5 sm:p-4 rounded-lg bg-[#252526] border border-[#3c3c3c] hover:border-[#569cd6] transition-colors flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[#9cdcfe] text-xs sm:text-sm font-mono font-bold truncate pr-2">
                              "{skill.name}"
                            </span>
                            <FileJson className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#858585] group-hover:text-[#569cd6] shrink-0" />
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-[#ce9178] text-[10px] sm:text-xs font-mono">
                              "{skill.level}"
                            </span>
                          </div>

                          {/* Tech Color Bar */}
                          <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${skill.color} opacity-50 group-hover:opacity-100`} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                  
                  <div className="text-[#ffd700] text-xs sm:text-sm font-mono mt-4 pb-4">
                    <span className="text-[#ffd700]">]</span><span className="text-[#d4d4d4]">;</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 5. STATUS BAR (Bottom) */}
          <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-2 sm:px-3 text-[9px] sm:text-xs font-mono select-none shrink-0 overflow-hidden">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1 hover:bg-white/10 px-1 cursor-pointer">
                <GitBranch className="w-3 h-3" /> main*
              </div>
              <div className="hidden sm:flex items-center gap-1 hover:bg-white/10 px-1 cursor-pointer">
                <CheckCircle2 className="w-3 h-3" /> 0 Errors
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden xs:block hover:bg-white/10 px-1 cursor-pointer">Ln 42, Col 16</div>
              <div className="hidden md:block hover:bg-white/10 px-1 cursor-pointer">UTF-8</div>
              <div className="hover:bg-white/10 px-1 cursor-pointer flex items-center gap-1">
                <Code2 className="w-3 h-3" /> <span className="hidden xs:inline">React</span> TSX
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
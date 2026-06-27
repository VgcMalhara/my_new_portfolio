"use client";

import { useState } from "react"; // 1. useState import කරා
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FolderGit2 } from "lucide-react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

const PROJECTS = [
  {
    title: "Riyahala Vehicle Marketplace",

    gallery: [
      "/projects/riyahala-1.jpg", 
      "/projects/riyahala-2.jpg", 
      "/projects/riyahala-3.jpg"
    ],

    description: "A comprehensive vehicle trading platform in Sri Lanka built using modern web stacks, featuring advanced filtering, dynamic search, and optimized media hosting.",
    details: "Riyahala.lk යනු වාහන මිලදී ගැනීමට සහ විකිණීමට ඇති ශ්‍රී ලංකාවේ ප්‍රමුඛතම වෙබ් අඩවියකි.",
    tags: ["React.js", "Node.js", "MongoDB Atlas", "Vercel"],
    github: "https://github.com/VgcMalhara",
    live: "https://riyahala.lk",
    image: "/projects/riyahala.jpg",
    color: "from-blue-600/10 to-indigo-950/30",
    borderColor: "group-hover:border-blue-500/30"
  },
  {
    title: "JustPark.lk",

    gallery: [
      "/projects/riyahala-1.jpg", 
      "/projects/riyahala-2.jpg", 
      "/projects/riyahala-3.jpg"
    ],

    description: "Smart parking management solution tailored for urban spaces, integrating real-time availability tracking and secure backend architecture.",
    details: "නාගරික වාහන නැවැත්වීමේ ගැටලුවට විසඳුමක් ලෙස JustPark.lk නිර්මාණය කර ඇත.",
    tags: ["React.js", "Node.js", "MySQL"],
    github: "https://github.com/VgcMalhara",
    live: "#",
    image: "/projects/justpark.jpg",
    color: "from-emerald-600/10 to-teal-950/30",
    borderColor: "group-hover:border-emerald-500/30"
  },
  {
    title: "HelaHarvest.lk",

    gallery: [
      "/projects/riyahala-1.jpg", 
      "/projects/riyahala-2.jpg", 
      "/projects/riyahala-3.jpg"
    ],

    description: "An innovative digital marketplace empowering local agricultural vendors and streamlining supply chain operations.",
    details: "ප්‍රාදේශීය ගොවීන් සහ පාරිභෝගිකයන් අතර සම්බන්ධය ඇති කරන මෙම වෙබ් අඩවිය හරහා කෘෂිකාර්මික නිෂ්පාදන අලෙවි කරගත හැක.",
    tags: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/VgcMalhara",
    live: "#",
    image: "/projects/helaharvest.jpg",
    color: "from-orange-600/10 to-amber-950/30",
    borderColor: "group-hover:border-orange-500/30"
  },
  {
    title: "WhatsApp AI Bot & Order System",

    gallery: [
      "/projects/riyahala-1.jpg", 
      "/projects/riyahala-2.jpg", 
      "/projects/riyahala-3.jpg"
    ],
    
    description: "Automated conversation thread handling and seamless database logic integration leveraging Next.js and Meta Business API webhook infrastructures.",
    details: "Meta Business API භාවිතයෙන් නිර්මාණය කළ AI Bot පද්ධතියකි.",
    tags: ["Next.js", "Meta API", "PostgreSQL"],
    github: "https://github.com/VgcMalhara",
    live: "#",
    image: "/projects/chatbot.jpg",
    color: "from-purple-600/10 to-fuchsia-950/30",
    borderColor: "group-hover:border-purple-500/30"
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null); // 2. State එක

  return (
    <section id="projects" className="relative py-32 px-4 bg-[#060608]">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/40 backdrop-blur-md border border-neutral-800/60 text-xs font-mono text-accent mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-accent" />
            <span>SELECTED WORK</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4"
          >
            Featured Productions
          </motion.h2>
          <p className="text-sm font-mono text-muted">Scroll down to explore the creation timeline</p>
        </div>

        <div className="flex flex-col gap-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="sticky top-28 group w-full rounded-3xl border border-neutral-800/80 bg-surface/20 backdrop-blur-xl shadow-2xl transition-all duration-300 p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center overflow-hidden"
              style={{
                marginTop: index === 0 ? "0px" : `${index * 16}px`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 rounded-3xl pointer-events-none group-hover:opacity-50 transition-opacity duration-500`} />

              <div className="relative z-10 md:col-span-7 flex flex-col h-full justify-between min-h-[240px]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-primary tracking-widest font-bold">
                      // ARCHIVE_0{index + 1}
                    </span>
                    <div className="flex items-center gap-2.5 md:hidden">
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-muted"><ExternalLink className="w-4 h-4" /></a>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-white mb-3 flex items-center gap-2 group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="text-xs md:text-sm text-muted leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-neutral-950/80 border border-neutral-900 text-neutral-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="hidden md:flex items-center gap-3 pt-4 border-t border-neutral-800/40">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-950 text-xs font-mono border border-neutral-800 text-muted hover:text-white hover:border-neutral-700 transition-all">Code</a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-950 text-xs font-mono border border-neutral-800 text-muted hover:text-white hover:border-neutral-700 transition-all">Live Demo</a>
                    
                    {/* 3. Button එකට onClick එක දැම්මා */}
                    <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-950 text-xs font-mono border border-neutral-800 text-muted hover:text-white hover:border-neutral-700 transition-all"
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative z-10 md:col-span-5 w-full h-[180px] md:h-[240px] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 group-hover:border-primary/30 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-neutral-900 animate-pulse z-0" />
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-700 z-10" priority={index === 0} />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent z-20 pointer-events-none" />
              </div>

              <div className={`absolute inset-0 border border-transparent rounded-3xl transition-colors duration-500 pointer-events-none ${project.borderColor}`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Modal එක */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
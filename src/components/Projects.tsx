"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FolderGit2 } from "lucide-react";
import Image from "next/image";
import ProjectModal, { ProjectItem } from "./ProjectModal";

const PROJECTS: ProjectItem[] = [
  {
    title: "Riyahala Vehicle Marketplace",

    gallery: [
      "/projects/riyahala/gallery1.png", 
      "/projects/riyahala/gallery2.png", 
      "/projects/riyahala/gallery3.png"
    ],

    description: "A comprehensive vehicle trading platform in Sri Lanka built using modern web stacks, featuring advanced filtering, dynamic search, and optimized media hosting.",
    details: "Riyahala.lk is a leading vehicle trading platform in Sri Lanka designed for buying and selling automobiles efficiently.",
    tags: ["React.js", "Next.js", "Prisma ORM", "SQL"],
    github: "https://github.com/VgcMalhara",
    live: "https://riyahala.lk",
    image: "/projects/riyahala/image.png",
    color: "from-blue-600/10 to-indigo-950/30",
    borderColor: "group-hover:border-blue-500/30"
  },
  {
    title: "JustPark.lk",

    gallery: [
      "/projects/justpark/image.png", 
      "/projects/justpark/gallery1.png", 
      "/projects/riyahala-3.jpg"
    ],

    description: "Smart parking management solution tailored for urban spaces, integrating real-time availability tracking and secure backend architecture.",
    details: "JustPark.lk is a smart parking management solution built to address urban vehicle parking challenges seamlessly.",
    tags: ["React.js", "Node.js", "MySQL"],
    github: "https://github.com/VgcMalhara",
    live: "#",
    image: "/projects/justpark/image.png",
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
    details: "HelaHarvest.lk is an innovative digital agricultural marketplace connecting local farmers directly with consumers.",
    tags: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/VgcMalhara",
    live: "#",
    image: "/projects/helaharvest.jpg",
    color: "from-orange-600/10 to-amber-950/30",
    borderColor: "group-hover:border-orange-500/30"
  },
  {
    title: "WoolBear.lk",

    gallery: [
      "/projects/woolbear-1.jpg", 
      "/projects/woolbear-2.jpg", 
      "/projects/woolbear-3.jpg"
    ],
    
    description: "An e-commerce online store specialized in handmade wool toys, providing a seamless shopping experience and secure cart management.",
    details: "WoolBear.lk is an online store dedicated to selling handcrafted wool toys with secure user checkout and real-time inventory tracking.",
    tags: ["Next.js", "Firebase", "PostgreSQL"],
    github: "https://github.com/VgcMalhara",
    live: "#",
    image: "/projects/woolbear/image.png",
    color: "from-pink-600/10 to-rose-950/30",
    borderColor: "group-hover:border-pink-500/30"
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-16 sm:py-24 md:py-32 px-4 bg-[#060608]">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/45 backdrop-blur-md border border-neutral-800/60 text-[11px] sm:text-xs font-mono text-accent mb-3 sm:mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-accent" />
            <span>SELECTED WORK</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3 sm:mb-4"
          >
            Featured Productions
          </motion.h2>
          <p className="text-xs sm:text-sm font-mono text-muted">Scroll down to explore the creation timeline</p>
        </div>

        <div className="flex flex-col gap-10 sm:gap-14 md:gap-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative md:sticky md:top-28 group w-full rounded-2xl sm:rounded-3xl border border-neutral-800/80 bg-surface/20 backdrop-blur-xl shadow-2xl transition-all duration-300 p-5 sm:p-7 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 rounded-2xl sm:rounded-3xl pointer-events-none group-hover:opacity-50 transition-opacity duration-500`} />

              <div className="relative z-10 md:col-span-7 flex flex-col h-full justify-between min-h-0 sm:min-h-[220px]">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="text-[11px] sm:text-xs font-mono text-primary tracking-widest font-bold">
                      {`// ARCHIVE_0${index + 1}`}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2.5 sm:mb-3 flex items-center gap-2 group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5 sm:mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-3.5 sm:gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-neutral-950/80 border border-neutral-900 text-neutral-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions for BOTH mobile and desktop */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-4 border-t border-neutral-800/40">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white text-black text-xs font-mono font-bold hover:bg-neutral-200 active:scale-95 transition-all cursor-pointer shadow-md"
                    >
                      View Details
                    </button>
                    {project.live && project.live !== "#" && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-950 text-xs font-mono border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-950 text-xs font-mono border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative z-10 md:col-span-5 w-full h-[180px] sm:h-[220px] md:h-[240px] rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 group-hover:border-primary/30 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-neutral-900 animate-pulse z-0" />
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-700 z-10" priority={index === 0} />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent z-20 pointer-events-none" />
              </div>

              <div className={`absolute inset-0 border border-transparent rounded-2xl sm:rounded-3xl transition-colors duration-500 pointer-events-none ${project.borderColor}`} />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
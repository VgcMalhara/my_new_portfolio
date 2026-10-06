"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";

export interface ProjectItem {
  title: string;
  gallery?: string[];
  description: string;
  details?: string;
  tags: string[];
  github: string;
  live: string;
  image: string;
  color?: string;
  borderColor?: string;
}

export default function ProjectModal({ project, onClose }: { project: ProjectItem | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;

    // Prevent body scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ y: 20, opacity: 0, scale: 0.98 }} 
          animate={{ y: 0, opacity: 1, scale: 1 }} 
          exit={{ y: 20, opacity: 0, scale: 0.98 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl max-h-[90vh] sm:max-h-[85vh] flex flex-col"
        >
          {/* Header Image */}
          <div className="relative w-full h-44 sm:h-56 md:h-64 shrink-0 bg-neutral-950">
            <Image src={project.image} alt={project.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
            <button 
              onClick={onClose} 
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 bg-black/60 hover:bg-neutral-800 backdrop-blur-md rounded-full text-white transition-all border border-white/10 cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-4 sm:p-6 md:p-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4 tracking-tight">{project.title}</h2>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <section>
                <h3 className="text-[11px] sm:text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 sm:mb-3">Overview</h3>
                <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed">{project.description}</p>
              </section>
              
              {project.details && (
                <section>
                  <h3 className="text-[11px] sm:text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 sm:mb-3">Technical Deep-Dive</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{project.details}</p>
                </section>
              )}

              {project.gallery && project.gallery.length > 0 && (
                <section>
                  <h3 className="text-[11px] sm:text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 sm:mb-3">Project Showcase</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {project.gallery.map((img: string, i: number) => (
                      <div key={i} className="relative aspect-video rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950 group cursor-pointer">
                        <Image src={img} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-5 border-t border-neutral-800 bg-neutral-900/80 flex flex-col sm:flex-row gap-2.5 sm:gap-3 shrink-0">
            {project.live && project.live !== "#" ? (
              <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 px-4 py-3 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-neutral-200 transition-colors">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            ) : null}
            <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 px-4 py-3 rounded-xl bg-neutral-800 text-white font-bold text-xs sm:text-sm hover:bg-neutral-700 transition-colors border border-neutral-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              View Source
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
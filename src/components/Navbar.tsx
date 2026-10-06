"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "#" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled 
            ? "bg-[#060608]/85 backdrop-blur-2xl border-b border-neutral-800/60 py-3" 
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <a href="#" className="flex items-center gap-2.5 z-[70] relative group">
            <div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800 group-hover:border-indigo-500/40 transition-colors">
              <Terminal className="w-4 h-4 text-indigo-400" />
            </div>
            <span className="font-mono text-sm tracking-tight text-white font-bold">
              chiran<span className="text-indigo-400">.dev</span>
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1 bg-[#111115]/60 border border-neutral-800/60 p-1 rounded-full backdrop-blur-md">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full text-[11px] font-mono text-neutral-400 hover:text-white transition-all hover:bg-neutral-800/50"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden md:flex">
            <a 
              href="#contact" 
              className="px-5 py-2 rounded-xl bg-white text-black text-[11px] font-bold font-mono hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              HIRE ME
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-800/60 transition-colors z-[70] relative focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE FULL-SCREEN / RESPONSIVE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#060608]/95 backdrop-blur-2xl z-[55] md:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          >
            {/* Navigation Links */}
            <div className="flex flex-col gap-4 my-auto">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.25 }}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-2xl font-mono text-white/90 hover:text-indigo-400 active:text-indigo-400 transition-colors py-2 border-b border-neutral-900"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-indigo-400/80 font-mono">0{idx + 1}.</span>
                    {item.name}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-600" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer & CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.25 }}
              className="pt-6 border-t border-neutral-800/80 flex flex-col gap-4 mt-6"
            >
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-white text-black text-center text-xs font-bold font-mono tracking-wider uppercase hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5"
              >
                HIRE ME
              </a>

              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pt-1">
                <span>status: ready to build</span>
                <span className="text-indigo-400">cmharal@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
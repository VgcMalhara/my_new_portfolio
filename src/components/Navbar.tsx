"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

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

  // Scroll එක නවත්වන්න
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
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
            ? "bg-[#060608]/80 backdrop-blur-2xl border-b border-neutral-800/60 py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <a href="#" className="flex items-center gap-2 z-[70] relative">
            <div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800">
              <Terminal className="w-4 h-4 text-indigo-400" />
            </div>
            <span className="font-mono text-sm tracking-tight text-white font-bold hidden sm:block">
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

          {/* CTA BUTTON */}
          <div className="hidden md:flex">
            <a href="#contact" className="px-5 py-2 rounded-xl bg-white text-black text-[11px] font-bold font-mono hover:scale-105 transition-transform">
              HIRE ME
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white z-[70] relative"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#060608] z-[50] md:hidden flex flex-col justify-center items-center gap-8"
          >
            {NAV_ITEMS.map((item, idx) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-mono text-white hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
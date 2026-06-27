"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = ["FullStack Developer", "UI/UX Designer", "Machine Learning Enthusiast"];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const typingSpeed = isDeleting ? 25 : 50; 
    
    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1)
      );

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    // Mobile වලදී පෑඩින් අඩු කරලා, desktop එකේදී පෑඩින් වැඩි කරන විදියට හැදුවා
    <div className="relative group bg-[#0a0a0c] border border-neutral-800 rounded-xl px-3 py-2.5 md:px-5 md:py-3 font-mono flex items-center gap-2 md:gap-3 shadow-2xl shadow-black/50 w-full max-w-sm md:max-w-md">
      
      {/* Decorative dots - Mobile වලදී කුඩා කරා */}
      <div className="flex gap-1 shrink-0">
        <div className="w-2 h-2 rounded-full bg-red-500/80" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
        <div className="w-2 h-2 rounded-full bg-green-500/80" />
      </div>
      
      {/* Prompt - මෙතනදී text-xs පාවිච්චි කළා mobile වලදී හොඳට පේන්න */}
      <div className="flex items-center gap-1.5 overflow-hidden text-[11px] md:text-sm">
        <span className="text-emerald-500 font-bold hidden md:block">➜</span>
        <span className="text-blue-400">~</span>
        <span className="text-neutral-500 truncate max-w-[60px] md:max-w-none">profile.sh</span>
        
        <span className="text-white font-medium whitespace-nowrap">
          {text}
          <motion.span 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-[6px] h-[14px] md:h-[16px] bg-white/60 ml-1 align-middle"
          />
        </span>
      </div>
    </div>
  );
}
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress percentage (0 - 100)
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / docHeight) * 100)));
      }

      // Show after scrolling 300px
      setIsVisible(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Luxurious slow and smooth scroll to top with cubic easing
  const handleScrollToTop = (duration = 900) => {
    const startPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (startPosition === 0) return;

    const startTime = performance.now();

    // Smooth cubic ease-in-out curve
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, Math.round(startPosition * (1 - ease)));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  };

  // SVG circular calculation
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-40"
        >
          <button
            onClick={() => handleScrollToTop(900)}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-950/90 hover:bg-slate-900 border border-white/15 hover:border-orange-500/60 shadow-2xl shadow-black/80 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-md"
            aria-label="Scroll slowly back to top"
            title="Back to Top"
          >
            {/* Circular Progress Bar Indicator */}
            <svg className="absolute inset-0 w-12 h-12 -rotate-90 pointer-events-none">
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-white/10 fill-none"
                strokeWidth="2.5"
              />
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-orange-500 fill-none transition-all duration-150"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>

            {/* Glowing Arrow Icon */}
            <ArrowUp className="w-5 h-5 text-slate-300 group-hover:text-orange-400 group-hover:-translate-y-0.5 transition-all duration-300" />

            {/* Pulse Aura on Hover */}
            <div className="absolute inset-0 rounded-full bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

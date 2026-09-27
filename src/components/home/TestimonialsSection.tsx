"use client";

import React, { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2, Building2, School } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonialsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="relative py-24 bg-slate-950/90 border-t border-white/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-semibold">
            <Quote className="w-3.5 h-3.5" />
            <span>REAL CLIENT PARTNERSHIPS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Proven Track Record Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              Decades of Trust
            </span>
          </h2>

          <p className="text-base text-slate-400 leading-relaxed">
            We measure our success by the longevity and operational impact of our partnerships.
            Hear directly from the technology leaders who rely on ET Technologies.
          </p>
        </div>

        {/* Testimonials Display Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Main Card (8 cols) */}
          <div className="lg:col-span-8 glass-card p-8 sm:p-10 border border-white/15 bg-slate-900/80 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white font-mono font-bold text-base shadow-md">
                  {current.avatarText}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {current.author}
                  </h3>
                  <p className="text-xs text-orange-400 font-medium">
                    {current.position}
                  </p>
                  <p className="text-xs text-slate-400">
                    {current.organization}
                  </p>
                </div>
              </div>

              {/* Partnership Badge */}
              <div className="hidden sm:flex flex-col items-end text-right">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold">
                  {current.partnershipYears}
                </span>
                <span className="text-[11px] text-slate-500 mt-1">
                  {current.location}
                </span>
              </div>
            </div>

            {/* Quote Body */}
            <div className="space-y-4">
              <Quote className="w-8 h-8 text-blue-500/40 rotate-180" />
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            {/* Card Footer Controls */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Verified Client Partnership</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-400 px-1">
                  {currentIndex + 1} / {testimonialsData.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Highlights Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {testimonialsData.map((t, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-blue-950/40 border-blue-500/50 shadow-lg shadow-blue-900/20"
                      : "bg-slate-900/40 border-white/10 hover:border-white/20 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-orange-400">
                      {t.highlightMetric}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {t.id === "cebu-gems" ? "Maritime Review" : "Higher Education"}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {t.organization}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {t.quote}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Sparkles, Flag } from "lucide-react";
import { companyInfo } from "@/data/company";

export function CtaBanner() {
  return (
    <section className="relative py-24 bg-[#040510] overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[450px] bg-gradient-to-r from-purple-700/15 via-blue-600/15 to-orange-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="relative rounded-[32px] pt-8 sm:pt-10 lg:pt-10 pb-10 sm:pb-12 lg:pb-14 px-6 sm:px-12 lg:px-16 border border-white/15 bg-gradient-to-b from-[#0c0d24]/95 via-[#080918]/98 to-[#050612]/98 shadow-2xl shadow-black/90 overflow-hidden text-center max-w-5xl mx-auto">
          {/* Subtle Top Border Glow Line (Orange to Purple) */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-orange-500" />

          {/* Atmospheric Soft Purple Glow Atmosphere (Centered at Top) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[320px] bg-gradient-to-b from-purple-600/40 via-purple-700/20 to-transparent rounded-full blur-[80px] pointer-events-none" />

          {/* Center Alien Head with Radiant Ambient Aura */}
          <div className="relative flex flex-col items-center justify-center mb-4">
            {/* Tighter Halo directly behind the head */}
            <div className="absolute w-40 h-40 bg-gradient-to-tr from-purple-500/50 via-indigo-500/40 to-cyan-400/30 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-center">
              <Image
                src="/images/head-color.png"
                alt="ET Technologies Alien Mascot"
                width={120}
                height={120}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain opacity-70 transition-transform duration-500 hover:scale-110 hover:opacity-90"
                priority
              />
            </div>
          </div>

          <div className="space-y-5 max-w-3xl mx-auto relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 text-purple-300 border border-purple-500/30 text-xs font-semibold shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>LET&apos;S WORK TOGETHER</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                Better
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-orange-400">
                Together
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Whether you need to automate attendance and payroll, roll out an online review center,
              modernize school enrollment, or engineer custom enterprise software, our team is ready.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <Link
                href="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 rounded-2xl shadow-lg shadow-blue-600/35 hover:shadow-glow-blue active:scale-95 transition-all duration-300 border border-blue-400/30"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 rounded-2xl border border-white/15 hover:border-orange-500/40 hover:text-white transition-all duration-200"
              >
                <Flag className="w-4 h-4 text-orange-400" />
                <span>Contact Our Office</span>
              </Link>
            </div>

            {/* Direct Phone & Assurance Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Direct Line: {companyInfo.phone.display}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Confidential Requirements &amp; Fast Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

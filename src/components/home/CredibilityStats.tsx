"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Clock,
  School,
  Sparkles,
  Activity,
  Cpu,
  ArrowRight,
} from "lucide-react";

const productSystems = [
  {
    id: "review-center-system",
    name: "Review Center Suite",
    tag: "Exam LMS",
    slug: "review-center-system",
    icon: GraduationCap,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15 border-blue-500/30 group-hover:bg-blue-500/25 group-hover:border-blue-400/50",
    hoverBorder: "hover:border-blue-500/50 hover:shadow-glow-blue",
  },
  {
    id: "employee-time-attendance",
    name: "DTR & Payroll System",
    tag: "Time & Wages",
    slug: "employee-time-attendance",
    icon: Clock,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/15 border-orange-500/30 group-hover:bg-orange-500/25 group-hover:border-orange-400/50",
    hoverBorder: "hover:border-orange-500/50 hover:shadow-glow-orange",
  },
  {
    id: "student-information-system",
    name: "Student Info System",
    tag: "School SIS",
    slug: "student-information-system",
    icon: School,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15 border-cyan-500/30 group-hover:bg-cyan-500/25 group-hover:border-cyan-400/50",
    hoverBorder: "hover:border-cyan-500/50 hover:shadow-glow-cyan",
  },
  {
    id: "digital-laundry-system",
    name: "Digital Laundry POS",
    tag: "Store POS",
    slug: "digital-laundry-system",
    icon: Sparkles,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/15 border-purple-500/30 group-hover:bg-purple-500/25 group-hover:border-purple-400/50",
    hoverBorder: "hover:border-purple-500/50 hover:shadow-glow-purple",
  },
  {
    id: "time-tracking-productivity",
    name: "Productivity Tracker",
    tag: "Workplace",
    slug: "time-tracking-productivity",
    icon: Activity,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15 border-emerald-500/30 group-hover:bg-emerald-500/25 group-hover:border-emerald-400/50",
    hoverBorder: "hover:border-emerald-500/50 hover:shadow-glow-emerald",
  },
  {
    id: "hardware-solutions",
    name: "Hardware & Terminals",
    tag: "Biometrics",
    slug: "hardware",
    icon: Cpu,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/15 border-rose-500/30 group-hover:bg-rose-500/25 group-hover:border-rose-400/50",
    hoverBorder: "hover:border-rose-500/50 hover:shadow-glow-orange",
  },
];

export function CredibilityStats() {
  return (
    <section className="relative py-10 border-y border-white/10 bg-slate-950/90 backdrop-blur-md overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-orange-600/5 pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Single Line All 6 Core Product Systems with Centered Icons on Top */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {productSystems.map((sys) => {
            const IconComponent = sys.icon;
            const targetHref = sys.slug === "hardware" ? "/products/hardware" : `/product/${sys.slug}`;

            return (
              <Link
                key={sys.id}
                href={targetHref}
                className={`group relative flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:bg-slate-900 shadow-lg ${sys.hoverBorder}`}
              >
                {/* Bigger Icon Container on Top */}
                <div
                  className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border ${sys.iconBg} mb-3 transition-all duration-300 group-hover:scale-110 shadow-md`}
                >
                  <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${sys.iconColor}`} />
                </div>

                {/* System Title Centered */}
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors leading-snug">
                  {sys.name}
                </h4>

                {/* Micro Explore Tag Centered */}
                <div className="mt-1.5 text-[10px] font-mono text-slate-400 group-hover:text-slate-300 flex items-center justify-center gap-1">
                  <span>Explore</span>
                  <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

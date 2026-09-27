"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface PartnerTool {
  name: string;
  category: "partner" | "cloud" | "framework" | "tool";
  badge?: string;
  description: string;
  logo: React.ReactNode;
  accentColor: string;
}

const partnersAndToolsList: PartnerTool[] = [
  {
    name: "Google for Education",
    category: "partner",
    badge: "Authorized Partner",
    description: "Campus learning platforms, Classroom integrations & academic cloud licensing.",
    accentColor: "border-blue-500/30 hover:border-blue-400 hover:shadow-blue-500/20",
    logo: (
      <div className="flex items-center gap-3">
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        <div className="flex flex-col">
          <span className="font-bold text-white text-sm tracking-tight leading-none">Google</span>
          <span className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">for Education</span>
        </div>
      </div>
    ),
  },
  {
    name: "Google Cloud",
    category: "partner",
    badge: "Cloud Partner",
    description: "High-concurrency cloud VM infrastructure, Kubernetes, BigQuery & Cloud SQL.",
    accentColor: "border-blue-500/30 hover:border-blue-400 hover:shadow-blue-500/20",
    logo: (
      <div className="flex items-center gap-3">
        <Image
          src="/images/partners/google-cloud.png"
          alt="Google Cloud Icon"
          width={40}
          height={40}
          className="h-8 w-8 object-contain shrink-0"
        />
        <span className="font-bold text-white text-base tracking-tight">Google Cloud</span>
      </div>
    ),
  },
  {
    name: "Google Workspace",
    category: "cloud",
    badge: "Productivity Suite",
    description: "Enterprise email hosting, collaborative Docs, Drive storage & endpoint management.",
    accentColor: "border-emerald-500/30 hover:border-emerald-400 hover:shadow-emerald-500/20",
    logo: (
      <div className="flex items-center gap-3">
        <Image
          src="/images/partners/google-workspace.png"
          alt="Google Workspace Icon"
          width={40}
          height={40}
          className="h-8 w-8 object-contain shrink-0"
        />
        <span className="font-bold text-white text-base tracking-tight">Google Workspace</span>
      </div>
    ),
  },
  {
    name: "Microsoft",
    category: "partner",
    badge: "Enterprise Partner",
    description: "Microsoft Azure cloud, enterprise Windows server environments & licensing.",
    accentColor: "border-orange-500/30 hover:border-orange-400 hover:shadow-orange-500/20",
    logo: (
      <div className="flex items-center gap-3">
        <Image
          src="/images/partners/microsoft.png"
          alt="Microsoft Icon"
          width={36}
          height={36}
          className="h-7 w-7 object-contain shrink-0"
        />
        <span className="font-bold text-white text-base tracking-tight">Microsoft</span>
      </div>
    ),
  },
  {
    name: "Microsoft Visual Studio",
    category: "tool",
    badge: "IDE Environment",
    description: "Professional enterprise IDE used for C#, .NET Core debugging, profiling & deployment.",
    accentColor: "border-purple-500/30 hover:border-purple-400 hover:shadow-purple-500/20",
    logo: (
      <div className="flex items-center gap-3">
        <Image
          src="/images/partners/visual-studio.png"
          alt="Microsoft Visual Studio Icon"
          width={38}
          height={38}
          className="h-8 w-8 object-contain shrink-0"
        />
        <span className="font-bold text-white text-base tracking-tight">Visual Studio</span>
      </div>
    ),
  },
  {
    name: "Microsoft ASP.NET Core",
    category: "framework",
    badge: "Backend Core",
    description: "High-performance enterprise C# backend powering our Maritime LMS & DTR payroll engines.",
    accentColor: "border-blue-500/30 hover:border-blue-400 hover:shadow-blue-500/20",
    logo: (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#512BD4] to-[#7B3FE4] flex items-center justify-center shadow-md shrink-0">
          <span className="text-[11px] font-extrabold text-white font-mono">.NET</span>
        </div>
        <span className="font-bold text-white text-base tracking-tight">ASP.NET Core</span>
      </div>
    ),
  },
  {
    name: "Next.js",
    category: "framework",
    badge: "Web Architecture",
    description: "App Router, Server Components & React framework powering our lightning-fast corporate platforms.",
    accentColor: "border-slate-500/30 hover:border-white hover:shadow-white/10",
    logo: (
      <div className="flex items-center gap-3">
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="90" fill="#FFFFFF" />
          <path d="M149.5 149.5L78.8 54H54V126H71.5V76.8L136.2 163.5A90.4 90.4 0 0 0 149.5 149.5Z" fill="#000000" />
          <rect x="108" y="54" width="18" height="72" fill="#000000" />
        </svg>
        <span className="font-bold text-white text-base tracking-tight">Next.js</span>
      </div>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "framework",
    badge: "Design Engine",
    description: "Modern utility-first CSS design system delivering sleek, responsive interfaces & dark aesthetics.",
    accentColor: "border-cyan-500/30 hover:border-cyan-400 hover:shadow-cyan-500/20",
    logo: (
      <div className="flex items-center gap-3">
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
        <span className="font-bold text-white text-base tracking-tight">Tailwind CSS</span>
      </div>
    ),
  },
  {
    name: "GitHub",
    category: "tool",
    badge: "CI/CD & DevOps",
    description: "Enterprise source code management, automated CI/CD deployment pipelines & version control.",
    accentColor: "border-slate-500/30 hover:border-slate-300 hover:shadow-white/10",
    logo: (
      <div className="flex items-center gap-3">
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="#FFFFFF">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
        <span className="font-bold text-white text-base tracking-tight">GitHub</span>
      </div>
    ),
  },
  {
    name: "WordPress",
    category: "framework",
    badge: "CMS & Portals",
    description: "Custom enterprise WordPress implementations, WooCommerce stores & secure headless CMS.",
    accentColor: "border-blue-500/30 hover:border-blue-400 hover:shadow-blue-500/20",
    logo: (
      <div className="flex items-center gap-3">
        <Image
          src="/images/partners/wordpress.png"
          alt="WordPress Icon"
          width={38}
          height={38}
          className="h-8 w-8 object-contain shrink-0"
        />
        <span className="font-bold text-white text-base tracking-tight">WordPress</span>
      </div>
    ),
  },
];

import { FadeInUp } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export function PartnersAndTools() {
  const [activeFilter, setActiveFilter] = useState<"all" | "partner" | "framework" | "tool">("all");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNav = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const filteredItems =
    activeFilter === "all"
      ? partnersAndToolsList
      : partnersAndToolsList.filter((item) =>
          activeFilter === "partner"
            ? item.category === "partner" || item.category === "cloud"
            : item.category === activeFilter
        );

  return (
    <section className="relative py-20 bg-slate-950/90 border-t border-white/10 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <FadeInUp className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 text-xs font-semibold shadow-sm">
            <Award className="w-3.5 h-3.5 text-orange-400" />
            <span>STRATEGIC ECOSYSTEM & TECH STACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Partners &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-blue-400">
              Technologies Used
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We build and host robust enterprise software using certified cloud platforms,
            battle-tested frameworks, and developer tools trusted by industry leaders globally.
          </p>

          {/* Filter Pills */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === "all"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              All Ecosystem ({partnersAndToolsList.length})
            </button>
            <button
              onClick={() => setActiveFilter("partner")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === "partner"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              Official Partners & Cloud
            </button>
            <button
              onClick={() => setActiveFilter("framework")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === "framework"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              Frameworks & Backend
            </button>
            <button
              onClick={() => setActiveFilter("tool")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === "tool"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              Developer Tools & DevOps
            </button>
          </div>
        </FadeInUp>

        {/* Modern Interactive Partner & Tool Grid: Horizontal Scroll on Mobile (1 card view), Grid on sm/lg */}
        <div
          ref={scrollRef}
          className="mt-12 flex sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory pb-4 sm:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`group relative p-5 rounded-2xl bg-slate-900/80 backdrop-blur-md border transition-all duration-300 hover:-translate-y-1.5 hover:bg-slate-900/95 shadow-lg flex flex-col justify-between ${item.accentColor} w-[calc(100vw-2rem)] sm:w-auto min-w-[calc(100vw-2rem)] sm:min-w-0 flex-shrink-0 sm:flex-shrink snap-center`}
            >
              <div>
                {/* Header Tag / Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {item.badge && (
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 uppercase">
                      {item.badge}
                    </span>
                  )}
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>

                {/* Logo Display Container: Icon + Text beside it */}
                <div className="h-10 flex items-center justify-start transition-transform duration-300 group-hover:scale-105">
                  {item.logo}
                </div>

                {/* Description */}
                <p className="mt-3 text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Status */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
                <span>Production Verified</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation Arrows & Swipe Indicator */}
        <div className="flex sm:hidden items-center justify-between pt-3 px-2">
          <button
            onClick={() => scrollNav("left")}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-orange-500/50 active:scale-95 transition-all shadow-md flex items-center gap-1 text-xs font-semibold"
            aria-label="Previous partner card"
          >
            <ChevronLeft className="w-4 h-4 text-orange-400" />
            <span>Prev</span>
          </button>

          <span className="text-[11px] text-slate-400 font-mono">
            Swipe ↔ or tap arrows
          </span>

          <button
            onClick={() => scrollNav("right")}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-orange-500/50 active:scale-95 transition-all shadow-md flex items-center gap-1 text-xs font-semibold"
            aria-label="Next partner card"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4 text-orange-400" />
          </button>
        </div>

        {/* Bottom Trust Statement */}
        <FadeInUp delay={0.2} className="mt-12 p-5 rounded-2xl bg-slate-900/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Enterprise Scalability & Security</h4>
              <p className="text-xs text-slate-400">All client architectures are deployed on compliant, high-availability clouds with automated backups.</p>
            </div>
          </div>

          <a
            href="/quote"
            className="shrink-0 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-white/10 transition-colors"
          >
            Consult Our Architecture Team →
          </a>
        </FadeInUp>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import {
  Compass,
  FileCode2,
  Terminal,
  Rocket,
  Headphones,
  CheckCircle2,
  Cpu,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discover & Research",
    tagline: "Understanding operational requirements",
    desc: "We analyze your business workflows, examine existing legacy bottlenecks, and define precise technical requirements and data models.",
    icon: <Compass className="w-5 h-5 text-emerald-400" />,
  },
  {
    step: "02",
    title: "Architecture & UI/UX",
    tagline: "Resilient design & database schemas",
    desc: "We model relational schemas in SQL Server, draft REST API specs, and create intuitive desktop and mobile user interfaces.",
    icon: <FileCode2 className="w-5 h-5 text-teal-400" />,
  },
  {
    step: "03",
    title: "Software Engineering",
    tagline: "Clean, maintainable .NET & Web code",
    desc: "Our senior developers craft type-safe backend services in C# and ASP.NET, paired with modern responsive web and mobile clients.",
    icon: <Terminal className="w-5 h-5 text-cyan-400" />,
  },
  {
    step: "04",
    title: "QA & Deployment",
    tagline: "Stress testing & smooth data rollout",
    desc: "Exhaustive quality assurance, hardware biometric terminal syncing, automated data migration, and on-premise or cloud staging.",
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
  },
  {
    step: "05",
    title: "Ongoing Support & SLA",
    tagline: "Long-term partnership stewardship",
    desc: "Proactive maintenance, security patching, new compliance updates, and dedicated local Cebu technical support.",
    icon: <Headphones className="w-5 h-5 text-teal-400" />,
  },
];

import { FadeInUp } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export function TechCapabilities() {
  return (
    <section className="relative py-24 bg-[#030611] border-t border-white/10 overflow-hidden">
      {/* Background Image: /images/how-we-deliver-bg.webp */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/how-we-deliver-bg.webp"
          alt="ET Technologies How We Deliver Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-45 lg:opacity-55"
          priority
        />
        {/* Faded Green Tint & Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030611] via-[#030611]/60 to-[#030611]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030611]/90 via-transparent to-[#030611]/90" />
        <div className="absolute inset-0 bg-emerald-950/30 mix-blend-color pointer-events-none" />
      </div>

      {/* Atmospheric Faded Green Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] lg:w-[1200px] h-[550px] bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.22)_0%,_rgba(5,150,105,0.12)_40%,_transparent_70%)] blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[200px] bg-emerald-400/10 rounded-full blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[200px] bg-teal-400/10 rounded-full blur-[90px] pointer-events-none z-0" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <FadeInUp className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold shadow-sm backdrop-blur-sm">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>HOW WE DELIVER VALUE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Software Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Lifecycle
            </span>
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            We are not simply website builders—we are dedicated technology partners engineering
            complete software solutions designed to evolve alongside your organization for decades.
          </p>
        </FadeInUp>

        {/* 5-Step Process Timeline Cards with Staggered Delay Fade-Up */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="relative p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
            >
              {/* Connector Line on Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-[1px] bg-gradient-to-r from-emerald-500/40 to-transparent z-20" />
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-800/90 border border-white/10 group-hover:bg-emerald-950/50 group-hover:border-emerald-500/40 transition-colors shadow-inner">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xl sm:text-2xl font-black tracking-wider text-slate-400/90 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.7)] transition-all duration-300">
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-mono text-emerald-400 font-medium mt-0.5">
                    {item.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Milestones</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Banner */}
        <FadeInUp delay={0.2} className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-base font-bold text-white">
              Enterprise Engineering Stack &amp; Frameworks
            </h4>
            <p className="text-xs text-slate-300">
              Built on battle-tested technologies supporting high concurrency, security, and offline resilience.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {["C# / ASP.NET", "Microsoft SQL", "Azure Cloud", "TypeScript", "Next.js", "Flutter", "Plesk / cPanel", "G Suite"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/90 text-slate-200 border border-white/10 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

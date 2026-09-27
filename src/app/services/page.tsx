import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import {
  Code2,
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  ArrowRight,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "IT Services & Software Engineering Solutions",
  description:
    "Explore our professional IT services: Custom Software Development, Website Development, Mobile App Development, Digital Marketing, and Creative UI/UX Design.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-blue-400" />,
  Globe: <Globe className="w-6 h-6 text-orange-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-blue-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-orange-400" />,
  Palette: <Palette className="w-6 h-6 text-cyan-400" />,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-slate-950">
        <div className="section-container text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>IT & ENGINEERING SERVICES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Technology Services for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-sky-300 to-blue-400">
              Growing Enterprises
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We provide an end-to-end suite of IT solutions to help businesses achieve their goals,
            automate complex operations, and stay ahead of the competition.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <div
                key={service.id}
                className="glass-card p-8 border border-white/10 flex flex-col justify-between group hover:border-blue-500/40 hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                      {serviceIcons[service.iconName] || <Code2 className="w-6 h-6 text-blue-400" />}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-xs text-slate-400 font-medium">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Core Deliverables */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Key Deliverables:
                    </span>
                    {service.deliverables.slice(0, 3).map((del, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] bg-slate-900 text-slate-300 border border-white/10 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>View Engineering Methodology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

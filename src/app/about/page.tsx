import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Eye,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  Building2,
  Clock,
  HeartHandshake,
} from "lucide-react";
import { companyInfo } from "@/data/company";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Proven Software & Technology Partners",
  description:
    "Learn about ET Technologies, our 15+ years of software engineering history in Cebu, our mission, vision, values, and commitment to long-term client stewardship.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="section-container relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>WHO WE ARE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Building Sustainable Technology for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Real Businesses
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We are an established IT solutions company offering invaluable tech services to both
            small & medium-sized enterprises and large-scale institutions across the Philippines.
          </p>
        </div>
      </section>

      {/* Company Story & History */}
      <section className="py-20 bg-slate-950">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>OVER 15 YEARS OF DEDICATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Story & Industry Footprint
              </h2>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Founded with a straightforward mission, ET Technologies was created to develop
                systems and programs that meet genuine operational requirements and keep pace with the
                rapidly evolving technological landscape.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Over the past 15+ years, we have partnered with organizations across diverse
                sectors—including education, maritime review institutes, commercial laundromats,
                hospitality, and real estate. We have developed custom software products and IT tools
                that empower our clients to scale their operations with reliability and ease.
              </p>

              {/* Core Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
                  <h4 className="text-white font-bold text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Domain Specialization</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Deep expertise in attendance & payroll, campus ERPs, and online review engines.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
                  <h4 className="text-white font-bold text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" />
                    <span>Extension of Your Team</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct developer collaboration and continuous support that lasts decades.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Card (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-card p-8 border border-white/15 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 space-y-6 shadow-2xl">
                <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">
                  At A Glance
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs text-slate-400">Headquarters</span>
                    <span className="text-xs font-semibold text-white">Talisay City, Cebu, PH</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs text-slate-400">Track Record</span>
                    <span className="text-xs font-semibold text-blue-400">15+ Years Active</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs text-slate-400">Review Center Network</span>
                    <span className="text-xs font-semibold text-orange-400">65+ Branches</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs text-slate-400">Core Engineering Stack</span>
                    <span className="text-xs font-semibold text-white font-mono">C#, .NET, SQL, Azure</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Hosting SLA</span>
                    <span className="text-xs font-semibold text-emerald-400 font-mono">99.9% Uptime</span>
                  </div>
                </div>

                <Link
                  href="/quote"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors"
                >
                  <span>Work With ET Technologies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-t border-white/10 bg-slate-950/70">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="glass-card p-8 sm:p-10 border border-blue-500/20 bg-slate-900/80 space-y-4 relative overflow-hidden">
              <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/30 w-fit">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="glass-card p-8 sm:p-10 border border-orange-500/20 bg-slate-900/80 space-y-4 relative overflow-hidden">
              <div className="p-3 rounded-xl bg-orange-600/10 text-orange-400 border border-orange-500/30 w-fit">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 border-t border-white/10 bg-slate-950">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <h2 className="text-3xl font-extrabold text-white">
              Guiding Principles
            </h2>
            <p className="text-sm text-slate-400">
              The foundational values that drive every line of code and customer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.values.map((val, idx) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-blue-500/30 transition-all duration-300 space-y-3"
              >
                <span className="font-mono text-xs font-bold text-orange-400">
                  0{idx + 1}
                </span>
                <h4 className="text-base font-bold text-white">{val.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}

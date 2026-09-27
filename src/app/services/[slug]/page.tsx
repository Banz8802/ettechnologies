import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Code2,
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { servicesData, Service } from "@/data/services";
import { CtaBanner } from "@/components/home/CtaBanner";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} | IT & Software Services`,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} - ET Technologies`,
      description: service.shortDescription,
    },
  };
}

const serviceIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-8 h-8 text-blue-400" />,
  Globe: <Globe className="w-8 h-8 text-orange-400" />,
  Smartphone: <Smartphone className="w-8 h-8 text-blue-400" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-orange-400" />,
  Palette: <Palette className="w-8 h-8 text-cyan-400" />,
};

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20">
      {/* Breadcrumb Bar */}
      <div className="border-b border-white/10 bg-slate-950/60 py-3">
        <div className="section-container">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-blue-400 font-medium truncate">{service.shortTitle}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
                <Cpu className="w-3.5 h-3.5" />
                <span>ENTERPRISE IT SERVICE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-orange-400 font-medium">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={`/quote?service=${service.slug}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-white/10 rounded-xl transition-colors"
                >
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </div>

            {/* Right Deliverables Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="glass-card p-6 sm:p-8 border border-white/15 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono font-bold text-white uppercase">
                      Core Deliverables
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">GUARANTEED</span>
                </div>

                <div className="space-y-3 text-xs">
                  {service.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs leading-snug">{del}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Core Technologies & Tooling:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] bg-slate-800 text-slate-300 border border-white/10 font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Process Steps */}
      <section className="py-20 bg-slate-950">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Our Step-by-Step Delivery Process
            </h2>
            <p className="text-sm text-slate-400">
              Clear milestones, continuous client visibility, and structured quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-blue-500/30 transition-all duration-300 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-mono font-bold text-xs">
                    {step.stepNumber}
                  </span>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 border-t border-white/10 bg-slate-950/70">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Why Partner with ET Technologies for {service.shortTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.whyChooseUs.map((w, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-900 border border-white/10 flex items-start gap-3"
              >
                <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}

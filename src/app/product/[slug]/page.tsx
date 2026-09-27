import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  GraduationCap,
  Clock,
  School,
  Sparkles,
  Activity,
  Cpu,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Server,
  Layers,
  Building2,
  ChevronRight,
  Zap,
} from "lucide-react";
import { productsData, Product } from "@/data/products";
import { CtaBanner } from "@/components/home/CtaBanner";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return productsData.map((prod) => ({
    slug: prod.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = productsData.find((p) => p.slug === params.slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.name} | Enterprise Solutions`,
    description: product.shortDescription,
    alternates: {
      canonical: `/product/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} - ET Technologies`,
      description: product.shortDescription,
    },
  };
}

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-8 h-8 text-blue-400" />,
  Clock: <Clock className="w-8 h-8 text-orange-400" />,
  School: <School className="w-8 h-8 text-blue-400" />,
  Sparkles: <Sparkles className="w-8 h-8 text-cyan-400" />,
  Activity: <Activity className="w-8 h-8 text-blue-400" />,
  Cpu: <Cpu className="w-8 h-8 text-orange-400" />,
};

export default function ProductDetailPage({ params }: Props) {
  const product = productsData.find((p) => p.slug === params.slug);
  if (!product) {
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
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-blue-400 font-medium truncate">{product.shortName}</span>
          </div>
        </div>
      </div>

      {/* Product Hero Header */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500/10 text-orange-400 border border-orange-500/30">
                  {product.badge}
                </span>
                {product.highlightStat && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/30">
                    ★ {product.highlightStat.value} {product.highlightStat.label}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-blue-300 font-medium">
                {product.tagline}
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={`/quote?solution=${product.slug}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200"
                >
                  <span>{product.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-white/10 rounded-xl transition-colors"
                >
                  <span>Talk to an Engineer</span>
                </Link>
              </div>
            </div>

            {/* Right System Specs Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="glass-card p-6 sm:p-8 border border-white/15 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono font-bold text-white uppercase">
                      Technical Architecture
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">VERIFIED SPEC</span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">Deployment Options:</span>
                    <p className="text-white font-semibold mt-0.5">{product.systemSpecs.deployment}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Database Layer:</span>
                    <p className="text-white font-semibold mt-0.5">{product.systemSpecs.database}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Supported Platforms:</span>
                    <p className="text-white font-semibold mt-0.5">{product.systemSpecs.platforms}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Security & Compliance:</span>
                    <p className="text-white font-semibold mt-0.5">{product.systemSpecs.security}</p>
                  </div>
                </div>

                {/* Target Industries */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Ideal Industry Deployment:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.targetIndustries.map((ind, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] bg-slate-800 text-slate-300 border border-white/10 font-medium"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Feature & Module Breakdown */}
      <section className="py-20 bg-slate-950">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Enterprise Modules & Capabilities
            </h2>
            <p className="text-sm text-slate-400">
              Each module is engineered to integrate seamlessly into your daily business workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-blue-500/30 transition-all duration-300 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-mono font-bold text-xs">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Core Feature</span>
                  </div>
                  <h3 className="text-base font-bold text-white">{feat.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits List */}
      <section className="py-16 border-t border-white/10 bg-slate-950/70">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Measurable Operational Benefits
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.keyBenefits.map((b, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-900 border border-white/10 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">{b}</span>
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

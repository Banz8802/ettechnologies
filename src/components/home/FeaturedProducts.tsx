"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Clock,
  School,
  Sparkles,
  Activity,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  BarChart3,
  Shuffle,
  Fingerprint,
  BookOpen,
} from "lucide-react";
import { productsData, Product } from "@/data/products";

export function FeaturedProducts() {
  const featuredList = productsData.filter((p) => p.featured);
  const [selectedProduct, setSelectedProduct] = useState<Product>(featuredList[0]);

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>ENTERPRISE SOFTWARE SUITES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Flagship Software Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Real Operations
            </span>
          </h2>

          <p className="text-base text-slate-400 leading-relaxed">
            Engineered from real industry demands in the Philippines—from nationwide maritime
            review centers with 65+ branches to collegiate campus ERPs and SME payrolls.
          </p>
        </div>

        {/* Product Selection Tabs - Fit in One Line with Bigger Icons */}
        <div className="mt-10 flex items-center justify-start lg:justify-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar">
          {productsData.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 border shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400/50 shadow-lg shadow-blue-500/25 scale-[1.02]"
                    : "bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/25 hover:text-white hover:bg-slate-800/80"
                }`}
              >
                {prod.id === "review-center-system" && <GraduationCap className="w-5 h-5 text-blue-300" />}
                {prod.id === "employee-time-attendance" && <Clock className="w-5 h-5 text-orange-300" />}
                {prod.id === "student-information-system" && <School className="w-5 h-5 text-cyan-300" />}
                {prod.id === "digital-laundry-system" && <Sparkles className="w-5 h-5 text-purple-300" />}
                {prod.id === "time-tracking-productivity" && <Activity className="w-5 h-5 text-emerald-300" />}
                {prod.id === "hardware-solutions" && <Cpu className="w-5 h-5 text-rose-300" />}
                <span>{prod.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Main Featured Showcase Card */}
        <div className="mt-10 glass-card p-6 sm:p-8 lg:p-10 border border-white/15 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-orange-500/10 text-orange-400 border border-orange-500/30">
                  {selectedProduct.badge}
                </span>
                {selectedProduct.highlightStat && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/30">
                    🏆 {selectedProduct.highlightStat.value} {selectedProduct.highlightStat.label}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {selectedProduct.name}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-blue-300 font-medium">
                  {selectedProduct.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProduct.fullDescription}
              </p>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedProduct.keyBenefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href={`/product/${selectedProduct.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200"
                >
                  <span>Explore Full System Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-orange-400 hover:text-white bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-xl transition-all duration-200"
                >
                  <span>Request Live Demo</span>
                </Link>
              </div>
            </div>

            {/* Right Mockup / Architecture Spec Card (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-white/10 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono font-semibold text-white uppercase">
                      Architecture & Deployment Specs
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">ENTERPRISE GRADE</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400">Deployment Model:</span>
                    <p className="text-white font-medium mt-0.5">
                      {selectedProduct.systemSpecs.deployment}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400">Database Engine:</span>
                    <p className="text-white font-medium mt-0.5">
                      {selectedProduct.systemSpecs.database}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400">Supported Platforms:</span>
                    <p className="text-white font-medium mt-0.5">
                      {selectedProduct.systemSpecs.platforms}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400">Security & Compliance:</span>
                    <p className="text-white font-medium mt-0.5">
                      {selectedProduct.systemSpecs.security}
                    </p>
                  </div>
                </div>

                {/* Target Industries */}
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] font-mono text-slate-400 block mb-2">
                    PRIMARY DEPLOYED INDUSTRIES:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.targetIndustries.map((ind, i) => (
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
      </div>
    </section>
  );
}

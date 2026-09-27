"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Clock,
  School,
  Sparkles,
  Activity,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  Search,
  Filter,
} from "lucide-react";
import { productsData, Product } from "@/data/products";
import { CtaBanner } from "@/components/home/CtaBanner";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6 text-blue-400" />,
  Clock: <Clock className="w-6 h-6 text-orange-400" />,
  School: <School className="w-6 h-6 text-blue-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-cyan-400" />,
  Activity: <Activity className="w-6 h-6 text-blue-400" />,
  Cpu: <Cpu className="w-6 h-6 text-orange-400" />,
};

export default function ProductsPage() {
  const [filterCategory, setFilterCategory] = useState<"all" | "software" | "hardware">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productsData.filter((prod) => {
    const matchesCat = filterCategory === "all" || prod.category === filterCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="section-container relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>SOLUTIONS & PRODUCTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Software Products Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              Operational Excellence
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore our suite of field-tested enterprise software platforms, built to solve critical
            workflows across attendance, payroll, exam prep, academic ERP, and laundry operations.
          </p>

          {/* Search & Category Filter */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search software systems & features..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setFilterCategory("all")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors border ${
                  filterCategory === "all"
                    ? "bg-blue-600 text-white border-blue-400"
                    : "bg-slate-900 text-slate-400 border-white/10 hover:text-white"
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => setFilterCategory("software")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors border ${
                  filterCategory === "software"
                    ? "bg-blue-600 text-white border-blue-400"
                    : "bg-slate-900 text-slate-400 border-white/10 hover:text-white"
                }`}
              >
                Software
              </button>
              <button
                onClick={() => setFilterCategory("hardware")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors border ${
                  filterCategory === "hardware"
                    ? "bg-orange-600 text-white border-orange-400"
                    : "bg-slate-900 text-slate-400 border-white/10 hover:text-white"
                }`}
              >
                Hardware
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog Grid */}
      <section className="py-20 bg-slate-950">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="glass-card p-7 border border-white/10 flex flex-col justify-between group hover:border-blue-500/40 hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                      {iconMap[prod.iconName] || <Layers className="w-6 h-6 text-blue-400" />}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      {prod.badge}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {prod.name}
                    </h2>
                    <p className="mt-1 text-xs text-slate-400 font-medium line-clamp-2">
                      {prod.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {prod.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    {prod.keyBenefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/product/${prod.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 group/btn transition-colors"
                  >
                    <span>View System Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] text-slate-500 font-mono capitalize">
                    {prod.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 space-y-3">
              <p className="text-slate-400 text-sm">No products found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterCategory("all");
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-blue-400"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}

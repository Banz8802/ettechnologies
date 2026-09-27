import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { productsData } from "@/data/products";
import { Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Software Products & Enterprise Suites",
  description:
    "Explore ET Technologies' flagship software products: Review Center System, Employee Time & Attendance, Student Information System, Digital Laundry System, and Time Tracking Software.",
};

export default function SoftwareProductsPage() {
  const softwareProducts = productsData.filter((p) => p.category === "software");

  return (
    <div className="pt-28 pb-20">
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-slate-950">
        <div className="section-container text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>SOFTWARE CATALOG</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Advanced Software Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Modern Operations
            </span>
          </h1>
          <p className="text-base text-slate-300">
            Customizable software systems proven across education, payroll, exam prep, and retail operations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareProducts.map((prod) => (
              <div
                key={prod.id}
                className="glass-card p-7 border border-white/10 flex flex-col justify-between group hover:border-blue-500/40 hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="space-y-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {prod.badge}
                  </span>
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {prod.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {prod.shortDescription}
                  </p>
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    {prod.keyBenefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href={`/product/${prod.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>View System Specs & Modules</span>
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

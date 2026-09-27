import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { productsData } from "@/data/products";
import { Cpu, Fingerprint, Printer, Scan, Server, ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Enterprise Hardware & Biometrics",
  description:
    "Turnkey biometric fingerprint clocks, facial recognition devices, thermal receipt printers, and server infrastructure pre-configured for ET Technologies software.",
};

export default function HardwareProductsPage() {
  const hardwareProd = productsData.find((p) => p.id === "hardware-solutions")!;

  return (
    <div className="pt-28 pb-20">
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-slate-950">
        <div className="section-container text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>HARDWARE & TERMINAL SOLUTIONS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Integrated Hardware for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-sky-300 to-blue-400">
              Turnkey Deployments
            </span>
          </h1>
          <p className="text-base text-slate-300">
            Biometric time clocks, thermal receipt printers, barcode scanners, and on-premise servers
            guaranteed 100% plug-and-play compatible with ET Technologies software suites.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="section-container max-w-5xl mx-auto space-y-12">
          {/* Main Card */}
          <div className="glass-card p-8 sm:p-10 border border-white/15 bg-slate-900/80 space-y-8">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500/10 text-orange-400 border border-orange-500/30">
                {hardwareProd.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {hardwareProd.name}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {hardwareProd.fullDescription}
              </p>
            </div>

            {/* Hardware Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {hardwareProd.features.map((feat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-950 border border-white/10 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-orange-400">
                      {feat.icon === "Fingerprint" && <Fingerprint className="w-5 h-5" />}
                      {feat.icon === "Printer" && <Printer className="w-5 h-5" />}
                      {feat.icon === "Scan" && <Scan className="w-5 h-5" />}
                      {feat.icon === "Server" && <Server className="w-5 h-5" />}
                    </div>
                    <h3 className="text-base font-bold text-white">{feat.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Hardware Warranty & On-Site Support Benefits:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {hardwareProd.keyBenefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/quote?category=hardware"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-xl shadow-lg transition-all"
              >
                <span>Request Hardware Bundle Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

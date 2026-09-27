"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Clock,
  ShieldCheck,
  Server,
} from "lucide-react";

export function InteractiveQuoteCalculator() {
  const [solutionType, setSolutionType] = useState<"dtr" | "review" | "sis" | "laundry" | "custom">("dtr");
  const [deployment, setDeployment] = useState<"cloud" | "onprem" | "hybrid">("hybrid");
  const [scale, setScale] = useState<"starter" | "growth" | "enterprise">("growth");

  // Dynamic estimate calculations
  const estimates = {
    dtr: {
      name: "Employee Time & Attendance (DTR & Payroll)",
      timeline: "2 - 3 Weeks (Turnkey)",
      includes: ["Biometric Hardware Sync", "SSS / PhilHealth / Pag-IBIG Auto-Deductions", "1-Click Bank Payroll File", "Digital PDF Payslips"],
      idealFor: "SMEs, Retail Chains, Manufacturing & Corporate Offices",
    },
    review: {
      name: "Maritime & Professional Review Center System",
      timeline: "3 - 4 Weeks (Multi-Branch)",
      includes: ["Dynamic Randomized Exam Engine", "Maritime STCW & PRC Competency Mapping", "Branch & Student Score Analytics", "Anti-Leak Question Bank"],
      idealFor: "Maritime Academies & Nationwide Board Review Centers",
    },
    sis: {
      name: "Student Information & School Enrollment System",
      timeline: "4 - 6 Weeks (Complete Campus ERP)",
      includes: ["Online Admission & Enrollment", "Faculty Grading Portal", "Curriculum & Pre-Requisite Checker", "Cashier POS & Student Ledger"],
      idealFor: "Colleges, Universities & Senior High Campuses",
    },
    laundry: {
      name: "Digital Laundry POS & Operations Suite",
      timeline: "1 - 2 Weeks (Plug & Play)",
      includes: ["Touchscreen POS & Garment Barcodes", "Automated SMS Customer Pickup Alerts", "Wash-Dry-Fold Workflow Tracking", "Daily Shift Cash Reconciliation"],
      idealFor: "Laundromats, Dry Cleaners & Commercial Linen Services",
    },
    custom: {
      name: "Custom Enterprise Software & Web App Development",
      timeline: "Based on Project Scope",
      includes: ["Custom C# / ASP.NET / SQL Backend", "Modern Next.js / React Web Portal", "Mobile iOS & Android Companion App", "Dedicated SLA & Systems Training"],
      idealFor: "Businesses requiring tailored internal ERP & Automation",
    },
  };

  const currentEst = estimates[solutionType];

  return (
    <section className="relative py-24 bg-slate-950 border-t border-white/10 overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT PROJECT ESTIMATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Configure Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              Technology Solution
            </span>
          </h2>

          <p className="text-base text-slate-400 leading-relaxed">
            Select your target software system and deployment model to get instant scope visibility and request a tailored quote.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 border border-white/10 bg-slate-900/80 space-y-6">
            {/* 1. Solution Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
                1. Select Target Software Solution:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: "dtr", label: "DTR & Payroll System" },
                  { id: "review", label: "Review Center System" },
                  { id: "sis", label: "Student Information System" },
                  { id: "laundry", label: "Digital Laundry System" },
                  { id: "custom", label: "Custom Software / Web App" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSolutionType(item.id as any)}
                    className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border ${
                      solutionType === item.id
                        ? "bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30"
                        : "bg-slate-900 text-slate-300 border-white/10 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Deployment Architecture */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
                2. Deployment Infrastructure:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "cloud", label: "Cloud Hosted (SaaS)" },
                  { id: "onprem", label: "On-Premise (Local LAN)" },
                  { id: "hybrid", label: "Hybrid (LAN + Cloud)" },
                ].map((dep) => (
                  <button
                    key={dep.id}
                    onClick={() => setDeployment(dep.id as any)}
                    className={`p-2.5 rounded-xl text-center text-xs font-medium transition-all border ${
                      deployment === dep.id
                        ? "bg-orange-500/20 text-orange-400 border-orange-500/40 font-bold"
                        : "bg-slate-900 text-slate-400 border-white/10 hover:border-white/20"
                    }`}
                  >
                    {dep.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Operational Scale */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
                3. Business / Campus Scale:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "starter", label: "Single Office / Branch" },
                  { id: "growth", label: "Multi-Branch (2-10 Sites)" },
                  { id: "enterprise", label: "Enterprise (10+ Sites)" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScale(s.id as any)}
                    className={`p-2.5 rounded-xl text-center text-xs font-medium transition-all border ${
                      scale === s.id
                        ? "bg-blue-500/20 text-blue-400 border-blue-500/40 font-bold"
                        : "bg-slate-900 text-slate-400 border-white/10 hover:border-white/20"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Column (5 cols) */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 border border-blue-500/30 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-950 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-orange-400 uppercase">
                  Configuration Summary
                </span>
                <span className="text-[10px] font-mono text-emerald-400">READY TO DEPLOY</span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white leading-snug">
                  {currentEst.name}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Ideal for: <span className="text-slate-200">{currentEst.idealFor}</span>
                </p>
              </div>

              {/* Delivery Timeline */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Deployment Timeline:</span>
                </div>
                <span className="text-xs font-bold font-mono text-white">
                  {currentEst.timeline}
                </span>
              </div>

              {/* Inclusions */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Included Enterprise Modules:
                </span>
                {currentEst.includes.map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-white/10 mt-6">
              <Link
                href={`/quote?solution=${solutionType}&deployment=${deployment}&scale=${scale}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200"
              >
                <span>Request Custom Quote & Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Free consultation • No obligation • Direct developer response
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

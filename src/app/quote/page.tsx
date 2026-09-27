"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  Calculator,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Clock,
  Building2,
} from "lucide-react";
import { companyInfo } from "@/data/company";
import { productsData } from "@/data/products";
import { servicesData } from "@/data/services";

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const initialSolution = searchParams.get("solution") || searchParams.get("service") || "";

  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState<string>("software");
  const [selectedSolution, setSelectedSolution] = useState<string>("");
  const [deploymentModel, setDeploymentModel] = useState<string>("Hybrid (LAN + Cloud)");
  const [projectTimeline, setProjectTimeline] = useState<string>("Within 1 month");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialSolution) {
      const prod = productsData.find((p) => p.slug === initialSolution || p.id === initialSolution);
      if (prod) {
        setCategory("software");
        setSelectedSolution(prod.name);
        return;
      }
      const srv = servicesData.find((s) => s.slug === initialSolution || s.id === initialSolution);
      if (srv) {
        setCategory("services");
        setSelectedSolution(srv.title);
        return;
      }
    }
  }, [initialSolution]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#2563eb", "#f97316", "#06b6d4", "#ffffff"],
      });
    } catch {
      // fallback
    }
  };

  if (isSubmitted) {
    return (
      <div className="glass-card p-10 sm:p-14 border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-950 text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-white">
            Quote Request Received!
          </h2>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Thank you, <span className="text-white font-semibold">{fullName}</span>. An
            ET Technologies solution specialist will review your project details and respond to{" "}
            <span className="text-blue-400 font-semibold">{email}</span> within 24 business hours.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-300 max-w-md mx-auto space-y-1 text-left">
          <p>
            <strong className="text-white">Organization:</strong> {companyName || "N/A"}
          </p>
          <p>
            <strong className="text-white">Target Solution:</strong>{" "}
            {selectedSolution || category}
          </p>
          <p>
            <strong className="text-white">Estimated Timeline:</strong> {projectTimeline}
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            Return to Homepage
          </Link>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 sm:p-12 border border-white/15 bg-slate-900/80 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 1. Contact Details */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center">
              1
            </span>
            <span>Contact Information</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Full Name *</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Company / School / Business *
              </label>
              <input
                type="text"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Cebu Academy Inc."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Email Address *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Phone Number / Mobile *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0917-XXX-XXXX"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* 2. Solution Category & Selection */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center">
              2
            </span>
            <span>Solution Requirements</span>
          </h3>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Category of Interest</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: "software", label: "Software Systems" },
                { id: "services", label: "Custom Dev / Web" },
                { id: "cloud", label: "Cloud & Hosting" },
                { id: "hardware", label: "Biometrics / POS" },
              ].map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => {
                    setCategory(cat.id);
                    setSelectedSolution("");
                  }}
                  className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-colors ${
                    category === cat.id
                      ? "bg-blue-600 text-white border-blue-400"
                      : "bg-slate-950 text-slate-400 border-white/10 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Select Specific Product or Service
            </label>
            <select
              value={selectedSolution}
              onChange={(e) => setSelectedSolution(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500"
            >
              <option value="">-- Choose specific software or service --</option>
              {category === "software" && (
                <>
                  <option>Maritime & Professional Review Center System</option>
                  <option>Employee Time & Attendance and Payroll System</option>
                  <option>Student Information & School Enrollment System</option>
                  <option>Digital Laundry POS & Management System</option>
                  <option>Time Tracking & Team Productivity Software</option>
                </>
              )}
              {category === "services" && (
                <>
                  <option>Software & Systems Development (C#, ASP.NET, SQL)</option>
                  <option>Website & Web Portal Development</option>
                  <option>Mobile App Development (iOS & Android)</option>
                  <option>Digital Marketing & SEO Services</option>
                  <option>Creative Design & Brand UI/UX</option>
                </>
              )}
              {category === "cloud" && (
                <>
                  <option>Google Workspace (G Suite) Deployment</option>
                  <option>Microsoft 365 Enterprise Migration</option>
                  <option>Automated Offsite Cloud Backups</option>
                  <option>Managed Web & Server Hosting</option>
                </>
              )}
              {category === "hardware" && (
                <>
                  <option>Biometric Fingerprint / Facial Attendance Clocks</option>
                  <option>Thermal Receipt Printers & POS Barcode Scanners</option>
                  <option>On-Premise Database Server Hardware</option>
                </>
              )}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Deployment Infrastructure
              </label>
              <select
                value={deploymentModel}
                onChange={(e) => setDeploymentModel(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option>Hybrid (Local LAN + Cloud Sync)</option>
                <option>Cloud Hosted (SaaS Web App)</option>
                <option>On-Premise Server (Local Area Network)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Target Timeline
              </label>
              <select
                value={projectTimeline}
                onChange={(e) => setProjectTimeline(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option>Immediately (Within 1-2 weeks)</option>
                <option>Within 1 month</option>
                <option>1 - 3 months</option>
                <option>Budgeting / Future Planning</option>
              </select>
            </div>
          </div>
        </div>

        {/* 3. Description & Scope */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center">
              3
            </span>
            <span>Project Description & Requirements</span>
          </h3>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Project Details / Specific Features Needed *
            </label>
            <textarea
              rows={4}
              required
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="Please mention your approximate number of employees, students, branches, or any custom integrations required..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit Action */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200"
          >
            <span>Submit Request for Proposal</span>
            <Send className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Confidential</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>24h Response SLA</span>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function QuotePage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="section-container text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FAST PROPOSAL & CONSULTATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Request a Free{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              Technology Quote
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us about your organization&apos;s requirements. Our software engineers and solutions
            architects will evaluate your specifications and provide a structured scope and proposal.
          </p>
        </div>
      </section>

      {/* Main Form Area */}
      <section className="py-20 bg-slate-950">
        <div className="section-container max-w-4xl mx-auto">
          <Suspense fallback={<div className="text-center text-slate-400 py-12">Loading quotation form...</div>}>
            <QuoteFormContent />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

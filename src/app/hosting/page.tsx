import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Server,
  ShieldCheck,
  Zap,
  Globe,
  HardDrive,
  Lock,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { companyInfo } from "@/data/company";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Managed Web Hosting & Enterprise Servers",
  description:
    "High-speed, 99.9% uptime managed web hosting, NVMe SSD servers, Plesk & cPanel control panels, automated daily backups, and free SSL certificates by ET Technologies.",
};

export default function HostingPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="section-container text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
            <Server className="w-3.5 h-3.5" />
            <span>MANAGED WEB HOSTING & CLOUD SERVERS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-Performance Hosting with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              99.9% Uptime SLA
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Fast, secure, and fully managed server hosting engineered for corporate websites,
            e-commerce portals, and web applications.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote?category=cloud"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all"
            >
              <span>Get Hosting Plan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={companyInfo.hostingPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-white/10 rounded-xl transition-colors"
            >
              <span>Existing Client Portal</span>
              <ExternalLink className="w-4 h-4 text-orange-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Hosting Features Grid */}
      <section className="py-20 bg-slate-950">
        <div className="section-container space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 border border-white/10 space-y-3">
              <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 w-fit">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">NVMe SSD Performance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ultra-fast read/write speeds ensure sub-second page loads and seamless database queries.
              </p>
            </div>

            <div className="glass-card p-6 border border-white/10 space-y-3">
              <div className="p-3 rounded-xl bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">99.9% Uptime SLA</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Redundant power supplies, network failover, and continuous monitoring keep your business online.
              </p>
            </div>

            <div className="glass-card p-6 border border-white/10 space-y-3">
              <div className="p-3 rounded-xl bg-orange-600/10 text-orange-400 border border-orange-500/20 w-fit">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Free SSL & DDoS Shield</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Automated Let&apos;s Encrypt SSL certificates, hardware firewalls, and malicious traffic filtering.
              </p>
            </div>

            <div className="glass-card p-6 border border-white/10 space-y-3">
              <div className="p-3 rounded-xl bg-cyan-600/10 text-cyan-400 border border-cyan-500/20 w-fit">
                <HardDrive className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Automated Daily Backups</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Snapshot backups with 1-click restoration to rollback changes or recover from accidental data loss.
              </p>
            </div>

            <div className="glass-card p-6 border border-white/10 space-y-3">
              <div className="p-3 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 w-fit">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Plesk & cPanel Control</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Industry-standard management control panels to manage email inboxes, subdomains, and databases.
              </p>
            </div>

            <div className="glass-card p-6 border border-white/10 space-y-3">
              <div className="p-3 rounded-xl bg-purple-600/10 text-purple-400 border border-purple-500/20 w-fit">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Dedicated Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct phone and email technical support from local software engineers based in Cebu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

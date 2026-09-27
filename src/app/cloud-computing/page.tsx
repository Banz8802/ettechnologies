import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Cloud,
  Mail,
  ShieldCheck,
  Server,
  Database,
  ArrowRight,
  CheckCircle2,
  HardDrive,
  Users,
  Lock,
} from "lucide-react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Cloud Computing & Enterprise Collaboration Solutions",
  description:
    "Google Workspace (G Suite) setup, Microsoft 365 migrations, Microsoft Azure cloud architecture, and automated offsite disaster recovery backups in Cebu, Philippines.",
};

export default function CloudComputingPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="section-container text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold">
            <Cloud className="w-3.5 h-3.5" />
            <span>CLOUD & ENTERPRISE COLLABORATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Modernize Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              Cloud Infrastructure
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Let ET Technologies help your company scale with specialized cloud software tools,
            enterprise email migrations, and automated disaster recovery data protection.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              href="/quote?category=cloud"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all"
            >
              <span>Consult with a Cloud Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cloud Solutions Pillars */}
      <section className="py-20 bg-slate-950">
        <div className="section-container space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. Google Workspace */}
            <div className="glass-card p-8 border border-white/10 space-y-5 hover:border-blue-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">
                  GOOGLE WORKSPACE
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white">
                Google Workspace (G Suite) for Business
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Empower your workforce with professional custom domain email (`yourname@yourcompany.com`),
                shared Google Drive storage, Google Meet HD video meetings, and real-time collaboration
                across Docs, Sheets, and Slides.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Custom business domain email with 99.9% uptime SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>30GB to Unlimited cloud storage per employee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Seamless DNS setup, MX records, and user provisioning</span>
                </div>
              </div>
            </div>

            {/* 2. Microsoft 365 */}
            <div className="glass-card p-8 border border-white/10 space-y-5 hover:border-orange-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-orange-600/10 text-orange-400 border border-orange-500/20">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full">
                  MICROSOFT 365
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white">
                Microsoft 365 (Office 365) Enterprise
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Equip your team with Word, Excel, PowerPoint, Outlook, and Microsoft Teams.
                Subscription licensing ensures your organization is always running the latest
                enterprise versions with advanced security safeguards.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>1TB OneDrive secure cloud storage per user</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Microsoft Exchange Online enterprise mailbox hosting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Full Microsoft Teams channels and video conferencing</span>
                </div>
              </div>
            </div>

            {/* 3. Off-Site Cloud Backups */}
            <div className="glass-card p-8 border border-white/10 space-y-5 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-cyan-600/10 text-cyan-400 border border-cyan-500/20">
                  <HardDrive className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full">
                  DATA PROTECTION
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white">
                Automated Off-Site Cloud Backups
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Protect your accounting records, student databases, and critical business files from
                hardware failure, accidental deletion, fire, and ransomware with automated, encrypted
                daily cloud replication.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Adherence to the 3-2-1 Enterprise Backup Standard</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Automated background differential backups without downtime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Rapid disaster recovery restoration in hours</span>
                </div>
              </div>
            </div>

            {/* 4. Microsoft Azure & Cloud Infrastructure */}
            <div className="glass-card p-8 border border-white/10 space-y-5 hover:border-blue-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <Server className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">
                  AZURE & CLOUD SERVERS
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white">
                Microsoft Azure Cloud Migration & VPS
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Host your enterprise applications on scalable cloud infrastructure with elastic compute,
                SQL database instances, and secure VPN connections bridging remote branch offices.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Cloud SQL Server database clustering and load balancing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>IoT telemetry and mobile API gateways</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dedicated virtual private networks for multi-branch sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

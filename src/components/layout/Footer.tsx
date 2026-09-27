import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Server,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers,
} from "lucide-react";
import { companyInfo } from "@/data/company";
import { productsData } from "@/data/products";
import { servicesData } from "@/data/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center">
                <Image
                  src="/images/branding/et-newlogo.png"
                  alt="ET Technologies Icon"
                  width={38}
                  height={38}
                  className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="font-bold text-lg md:text-xl text-white tracking-tight group-hover:text-blue-400 transition-colors">
                ET <span className="font-semibold text-slate-300 group-hover:text-blue-300">Technologies</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {companyInfo.description}
            </p>

            {/* System Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Hosting & Cloud SLA: 99.9% Operational</span>
            </div>

            {/* Office Contact Direct */}
            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{companyInfo.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${companyInfo.phone.landline}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Products (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Software Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              {productsData.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/product/${p.slug}`}
                    className="text-slate-400 hover:text-blue-400 flex items-center gap-1.5 group transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                    <span className="truncate">{p.shortName}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products/hardware"
                  className="text-slate-400 hover:text-orange-400 flex items-center gap-1.5 group transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400 transition-colors" />
                  <span>Hardware & Biometrics</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              IT & Tech Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-slate-400 hover:text-blue-400 flex items-center gap-1.5 group transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                    <span className="truncate">{s.shortTitle}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/cloud-computing"
                  className="text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 group transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>Cloud & Workspace Migration</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/hosting"
                  className="text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 group transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>Managed Web & Server Hosting</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Hosting (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Company & Cloud
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Tech Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
                  Get a Free Quote
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={companyInfo.hostingPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-xs font-semibold text-blue-400 border border-blue-500/30 transition-colors"
                >
                  <Server className="w-3.5 h-3.5" />
                  <span>Hosting Portal</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} ET Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Privacy Notice
            </Link>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">
              Architected in Talisay City, Cebu, Philippines 🇵🇭
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

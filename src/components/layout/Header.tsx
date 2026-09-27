"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  Shield,
  GraduationCap,
  Clock,
  School,
  Sparkles,
  Activity,
  Cpu,
  Code2,
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  Cloud,
  Server,
  Layers,
} from "lucide-react";
import { companyInfo } from "@/data/company";
import { mainNavigation } from "@/data/navigation";

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-blue-400" />,
  Clock: <Clock className="w-5 h-5 text-orange-400" />,
  School: <School className="w-5 h-5 text-blue-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-cyan-400" />,
  Activity: <Activity className="w-5 h-5 text-blue-400" />,
  Cpu: <Cpu className="w-5 h-5 text-orange-400" />,
  Code2: <Code2 className="w-5 h-5 text-blue-400" />,
  Globe: <Globe className="w-5 h-5 text-orange-400" />,
  Smartphone: <Smartphone className="w-5 h-5 text-blue-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-orange-400" />,
  Palette: <Palette className="w-5 h-5 text-cyan-400" />,
  Cloud: <Cloud className="w-5 h-5 text-blue-400" />,
  Server: <Server className="w-5 h-5 text-orange-400" />,
};

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent border-b border-white/5 py-4"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo with /images/branding/et-newlogo.png and single line text */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center">
              <Image
                src="/images/branding/et-newlogo.png"
                alt="ET Technologies Icon"
                width={38}
                height={38}
                className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <span className="font-bold text-lg md:text-xl text-white tracking-tight group-hover:text-blue-400 transition-colors">
              ET <span className="font-semibold text-slate-300 group-hover:text-blue-300">Technologies</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive =
                pathname === item.href ||
                (item.children && item.children.some((c) => pathname === c.href));

              if (!hasChildren) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive || activeDropdown === item.name
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180 text-blue-400" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-80 md:w-96 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/15 p-3 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="space-y-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200 group/child"
                          >
                            <div className="p-2 rounded-lg bg-slate-800 border border-white/10 group-hover/child:border-blue-500/40 group-hover/child:bg-blue-950/40 transition-colors">
                              {iconMap[child.icon] || <Layers className="w-5 h-5 text-blue-400" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-white group-hover/child:text-blue-400 transition-colors truncate">
                                  {child.name}
                                </span>
                                {child.badge && (
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30 font-medium">
                                    {child.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                {child.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between px-2 text-xs">
                        <Link
                          href={item.href}
                          className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 group/all"
                        >
                          <span>View All {item.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-1 transition-transform" />
                        </Link>
                        <span className="text-slate-500">Enterprise Ready</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${companyInfo.phone.landline}`}
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              title="Call ET Technologies Sales & Support"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>(032) 316-4504</span>
            </a>

            <Link
              href="/quote"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-500 hover:to-indigo-500 hover:shadow-glow-blue active:scale-95 border border-blue-400/30 shadow-md"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/quote"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg shadow-sm"
            >
              Quote
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-slate-950/95 backdrop-blur-2xl border-t border-white/10 overflow-y-auto p-5 animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-4">
            {mainNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              return (
                <div key={item.name} className="border-b border-white/10 pb-3">
                  {!hasChildren ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-base font-semibold text-slate-200 hover:text-blue-400 py-1"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between text-base font-semibold text-white py-1">
                        <span>{item.name}</span>
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-xs text-blue-400"
                        >
                          View All
                        </Link>
                      </div>
                      <div className="mt-2 pl-2 space-y-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white py-1.5"
                          >
                            <span className="p-1 rounded bg-slate-800 text-blue-400">
                              {iconMap[child.icon] || <Layers className="w-4 h-4" />}
                            </span>
                            <span className="truncate">{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile Contact & CTA */}
            <div className="pt-4 space-y-3">
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-xs space-y-2 text-slate-300">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Cebu Office: (032) 316-4504</span>
                </div>
                <p className="text-slate-400">Mobile: +63 917-581-1975</p>
                <p className="text-slate-400">{companyInfo.email}</p>
                <p className="text-slate-500">{companyInfo.address.full}</p>
              </div>

              <Link
                href="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/25"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

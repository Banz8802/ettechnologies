"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import {
  Code2,
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  Cloud,
  Cpu,
  ArrowRight,
  Fingerprint,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Extended list of cards tailored for the 3D coverflow showcase
const coverflowItems = [
  {
    id: "software-systems",
    slug: "software-systems-development",
    title: "Software & Systems",
    category: "ENTERPRISE",
    pill1: { icon: "⚗️", label: "C# / ASP.NET" },
    pill2: { icon: "⚡", label: "SQL Server" },
    accentColor: "from-blue-600 via-indigo-600 to-purple-600",
    illustrationType: "code",
  },
  {
    id: "web-development",
    slug: "website-development",
    title: "Web Portals & Apps",
    category: "FULL-STACK",
    pill1: { icon: "🌐", label: "Next.js & React" },
    pill2: { icon: "🚀", label: "Fast SEO" },
    accentColor: "from-amber-500 via-orange-500 to-rose-500",
    illustrationType: "web",
  },
  {
    id: "mobile-apps",
    slug: "mobile-app-development",
    title: "Mobile Applications",
    category: "CROSS-PLATFORM",
    pill1: { icon: "📱", label: "iOS & Android" },
    pill2: { icon: "⚡", label: "Cloud Sync" },
    accentColor: "from-cyan-500 via-blue-500 to-indigo-600",
    illustrationType: "mobile",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    category: "GROWTH",
    pill1: { icon: "📈", label: "Organic SEO" },
    pill2: { icon: "🎯", label: "Lead Gen" },
    accentColor: "from-rose-500 via-pink-500 to-purple-600",
    illustrationType: "growth",
  },
  {
    id: "creative-design",
    slug: "creative-design-ui-ux",
    title: "Creative UI/UX Design",
    category: "EXPERIENCE",
    pill1: { icon: "🎨", label: "Figma UI/UX" },
    pill2: { icon: "✨", label: "Design Systems" },
    accentColor: "from-fuchsia-500 via-purple-600 to-indigo-600",
    illustrationType: "design",
  },
  {
    id: "cloud-hosting",
    slug: "software-systems-development",
    title: "Cloud & Web Hosting",
    category: "INFRASTRUCTURE",
    pill1: { icon: "☁️", label: "Azure & Cloud" },
    pill2: { icon: "🔒", label: "99.9% Uptime" },
    accentColor: "from-emerald-500 via-teal-500 to-cyan-600",
    illustrationType: "cloud",
  },
  {
    id: "hardware-integration",
    slug: "software-systems-development",
    title: "Hardware & Biometrics",
    category: "IOT & SECURITY",
    pill1: { icon: "🎛️", label: "Biometrics" },
    pill2: { icon: "📶", label: "RFID & DTR" },
    accentColor: "from-violet-500 via-purple-500 to-indigo-600",
    illustrationType: "hardware",
  },
];

// Rich custom visual illustrations for the cards
function CardIllustration({ type, color }: { type: string; color: string }) {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/70 border border-white/5">
      {/* Background Ambient Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-25 blur-xl`} />
      
      {/* Dynamic Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:16px_16px]" />

      {/* Center 3D Icon Graphic */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {type === "code" && (
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 p-0.5 shadow-2xl shadow-blue-500/50">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                <Code2 className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-blue-500 rounded text-[10px] font-mono text-white font-bold shadow">
              .NET
            </div>
            <div className="absolute -bottom-2 -left-2 px-2 py-0.5 bg-indigo-600 rounded text-[10px] font-mono text-white font-bold shadow">
              C#
            </div>
          </div>
        )}

        {type === "web" && (
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 p-0.5 shadow-2xl shadow-orange-500/50">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <Globe className="w-12 h-12 text-orange-400 animate-spin" style={{ animationDuration: "20s" }} />
              </div>
            </div>
            <div className="absolute -top-1 -right-2 px-2 py-0.5 bg-orange-500 rounded text-[10px] font-mono text-white font-bold shadow">
              NEXT.JS
            </div>
            <div className="absolute -bottom-1 -left-2 px-2 py-0.5 bg-amber-600 rounded text-[10px] font-mono text-white font-bold shadow">
              REACT
            </div>
          </div>
        )}

        {type === "mobile" && (
          <div className="relative">
            <div className="w-20 h-28 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-2xl shadow-cyan-500/50">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex flex-col items-center justify-center p-2">
                <div className="w-6 h-1 bg-white/20 rounded-full mb-3" />
                <Smartphone className="w-9 h-9 text-cyan-400" />
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 animate-ping" />
              </div>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 px-2 py-0.5 bg-blue-600 rounded text-[9px] font-mono text-white font-bold shadow">
              iOS/APK
            </div>
          </div>
        )}

        {type === "growth" && (
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-600 p-0.5 shadow-2xl shadow-pink-500/50">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-pink-400" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-pink-500 rounded text-[10px] font-mono text-white font-bold shadow">
              +340%
            </div>
            <div className="absolute -bottom-2 -left-2 px-2 py-0.5 bg-rose-600 rounded text-[10px] font-mono text-white font-bold shadow">
              SEO #1
            </div>
          </div>
        )}

        {type === "design" && (
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-fuchsia-500 to-purple-600 p-0.5 shadow-2xl shadow-fuchsia-500/50">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                <Palette className="w-12 h-12 text-fuchsia-400" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-purple-600 rounded text-[10px] font-mono text-white font-bold shadow">
              FIGMA
            </div>
            <div className="absolute -bottom-2 -left-2 px-2 py-0.5 bg-fuchsia-600 rounded text-[10px] font-mono text-white font-bold shadow">
              UI/UX
            </div>
          </div>
        )}

        {type === "cloud" && (
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 p-0.5 shadow-2xl shadow-emerald-500/50">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                <Cloud className="w-12 h-12 text-emerald-400" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-emerald-600 rounded text-[10px] font-mono text-white font-bold shadow">
              99.9%
            </div>
            <div className="absolute -bottom-2 -left-2 px-2 py-0.5 bg-teal-600 rounded text-[10px] font-mono text-white font-bold shadow">
              AZURE
            </div>
          </div>
        )}

        {type === "hardware" && (
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-violet-500 to-indigo-600 p-0.5 shadow-2xl shadow-violet-500/50">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                <Fingerprint className="w-12 h-12 text-violet-400" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-violet-600 rounded text-[10px] font-mono text-white font-bold shadow">
              RFID
            </div>
            <div className="absolute -bottom-2 -left-2 px-2 py-0.5 bg-indigo-600 rounded text-[10px] font-mono text-white font-bold shadow">
              DTR
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function ServicesOverview() {
  return (
    <section className="relative py-28 bg-[#040510] overflow-hidden border-t border-white/10">
      {/* Background Deep Neon Gradient Aura (Centered behind carousel) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[550px] bg-gradient-to-r from-blue-700/15 via-orange-600/20 to-blue-700/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#040510] via-orange-950/5 to-transparent pointer-events-none" />

      {/* Section Header (Centered) */}
      <div className="section-container relative z-10 mb-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 text-orange-400 border border-orange-500/30 text-xs font-semibold shadow-inner">
            <Cpu className="w-3.5 h-3.5 text-orange-400 animate-spin" style={{ animationDuration: "12s" }} />
            <span>CORE IT CAPABILITIES & ENGINEERING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Technology{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
              Solutions & Services
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Explore our end-to-end software engineering, mobile development, custom cloud architectures,
            and digital systems tailored for modern organizations.
          </p>
        </div>
      </div>

      {/* Full-Width 3D Coverflow Slider for symmetrical centering */}
      <div className="w-full relative z-10 overflow-hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          watchSlidesProgress={true}
          loopPreventsSliding={false}
          speed={900}
          autoplay={{
            delay: 2400,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 160,
            modifier: 1.1,
            slideShadows: false,
          }}
          pagination={{
            el: ".services-swiper-pagination",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="services-coverflow-swiper"
        >
          {/* Quadrupled slide items for perfectly seamless infinite continuous wrap */}
          {[
            ...coverflowItems.map((item) => ({ ...item, uniqueKey: `set1-${item.id}` })),
            ...coverflowItems.map((item) => ({ ...item, uniqueKey: `set2-${item.id}` })),
            ...coverflowItems.map((item) => ({ ...item, uniqueKey: `set3-${item.id}` })),
            ...coverflowItems.map((item) => ({ ...item, uniqueKey: `set4-${item.id}` })),
          ].map((item) => (
            <SwiperSlide key={item.uniqueKey} className="cursor-pointer">
              <Link href={`/services/${item.slug}`} className="block h-full">
                <div className="coverflow-card-border relative h-[470px] rounded-[26px] bg-[#0c0d22]/95 backdrop-blur-2xl border border-white/10 p-5 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 group">
                  {/* Top Glow Accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Card Top: Category Badge */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 uppercase">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-medium text-orange-400 group-hover:translate-x-1 transition-transform">
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Card Middle: 3D Artwork Illustration */}
                  <div className="my-2">
                    <CardIllustration type={item.illustrationType} color={item.accentColor} />
                  </div>

                  {/* Card Bottom: Pill Box Container (Reference Style) */}
                  <div className="relative z-10 p-4 rounded-2xl bg-slate-900/95 border border-white/10 shadow-lg space-y-2.5">
                    <h3 className="text-base sm:text-lg font-bold text-white text-center tracking-tight group-hover:text-orange-300 transition-colors truncate">
                      {item.title}
                    </h3>

                    {/* Micro Pill Badges */}
                    <div className="flex items-center justify-center gap-2 pt-1">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 border border-white/10 text-xs font-medium text-slate-200">
                        <span>{item.pill1.icon}</span>
                        <span className="text-[11px] truncate">{item.pill1.label}</span>
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 border border-white/10 text-xs font-medium text-slate-200">
                        <span>{item.pill2.icon}</span>
                        <span className="text-[11px] truncate">{item.pill2.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Interactive Pagination Bullets */}
        <div className="services-swiper-pagination" />
      </div>

      {/* Bottom CTA to View All Services */}
      <div className="section-container relative z-10 mt-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 rounded-xl hover:from-orange-500 hover:via-amber-500 hover:to-orange-400 shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95 border border-orange-400/30"
          >
            <span>Explore All Engineering Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/15 rounded-xl transition-all duration-300 hover:border-white/30"
          >
            <span>Request a Custom Quote</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

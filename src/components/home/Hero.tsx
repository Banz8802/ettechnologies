"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { companyInfo } from "@/data/company";

interface HeroSlide {
  id: number;
  badge: {
    highlight: string;
    text: string;
  };
  headlinePrefix: string;
  headlineHighlight: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
    iconType?: "layers" | "phone" | "sparkles";
  };
  trustPoints: {
    text: string;
    color: string;
  }[];
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    badge: {
      highlight: "15+ YEARS OF EXCELLENCE",
      text: "Cebu's Trusted Software Partner",
    },
    headlinePrefix: "Technology Solutions",
    headlineHighlight: "Built Around Your Business",
    description:
      "ET Technologies develops custom enterprise software, web portals, mobile applications, and high-availability cloud solutions designed to modernize operations for schools, review centers, and growing businesses.",
    primaryCta: {
      text: "Get a Free Quote",
      href: "/quote",
    },
    secondaryCta: {
      text: "Explore Solutions",
      href: "/products",
      iconType: "layers",
    },
    trustPoints: [
      { text: "C# & ASP.NET Enterprise Stack", color: "text-blue-400" },
      { text: "65+ Review Centers Powered", color: "text-orange-400" },
      { text: "99.9% Uptime Cloud SLA", color: "text-cyan-400" },
    ],
  },
  {
    id: 2,
    badge: {
      highlight: "ENTERPRISE SOFTWARE SUITE",
      text: "Proven Across 65+ Branches Nationwide",
    },
    headlinePrefix: "Flagship Software",
    headlineHighlight: "Built for Real Operations",
    description:
      "From the industry-standard Maritime Review Center Mock Exam Suite & LMS to Biometric DTR Payroll and Student Information Systems (SIS)—engineered for zero downtime and uncompromised security.",
    primaryCta: {
      text: "View Software Products",
      href: "/products/software",
    },
    secondaryCta: {
      text: "Explore Systems Demo",
      href: "/quote?interest=software",
      iconType: "sparkles",
    },
    trustPoints: [
      { text: "100% Anti-Leak Randomizer", color: "text-emerald-400" },
      { text: "Automated DOLE Compliance", color: "text-blue-400" },
      { text: "Biometric Hardware Sync", color: "text-purple-400" },
    ],
  },
  {
    id: 3,
    badge: {
      highlight: "DIRECT CONSULTATION",
      text: "Fast 24h Architecture & Scoping Turnaround",
    },
    headlinePrefix: "Ready to Modernize",
    headlineHighlight: "Your Business Systems?",
    description:
      "Get a custom proposal, database architecture plan, and accurate price estimate for your software, web portal, or cloud infrastructure project in Cebu and nationwide.",
    primaryCta: {
      text: "Request a Free Quote",
      href: "/quote",
    },
    secondaryCta: {
      text: `Call: ${companyInfo.phone.landline}`,
      href: `tel:${companyInfo.phone.landline}`,
      iconType: "phone",
    },
    trustPoints: [
      { text: "Free Technical Scoping", color: "text-orange-400" },
      { text: "Direct Senior Dev Access", color: "text-cyan-400" },
      { text: "Cebu City Support Team", color: "text-blue-400" },
    ],
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play timer (seamless 6s rotation)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = heroSlides[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section
      className="relative min-h-[640px] lg:min-h-[680px] pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fixed Background Image: /images/hero-bg.webp aligned to right to showcase the alien head */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/hero-bg.webp"
          alt="ET Technologies Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-[82%_center] opacity-85"
        />
        {/* Subtle, soft gradient on the left for text contrast while keeping alien head crisp and clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 via-50% to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/50" />
      </div>

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[300px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="section-container relative z-10 w-full">
        {/* Constrain left container to max 55% / max-w-2xl so it stays safely clear of the alien head on the right */}
        <div className="max-w-xl lg:max-w-2xl xl:max-w-[56%] mx-auto lg:mx-0">
          {/* Stable Fixed Height Wrapper to completely prevent vertical content jumping */}
          <div className="relative min-h-[440px] sm:min-h-[400px] lg:min-h-[380px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-5 text-center lg:text-left"
              >
                {/* Enterprise Credibility Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/85 border border-blue-500/30 text-xs font-medium text-blue-300 shadow-xl backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                  <span className="font-mono text-orange-400 font-semibold">
                    {slide.badge.highlight}
                  </span>
                  <span className="text-slate-500">|</span>
                  <span className="text-slate-300">{slide.badge.text}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-extrabold text-white tracking-tight leading-[1.15] min-h-[80px] sm:min-h-[100px] lg:min-h-[115px] flex items-center justify-center lg:justify-start">
                  <span>
                    {slide.headlinePrefix}{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
                      {slide.headlineHighlight}
                    </span>
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl mx-auto lg:mx-0 min-h-[64px] sm:min-h-[52px]">
                  {slide.description}
                </p>

                {/* Action CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
                  <Link
                    href={slide.primaryCta.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-xl hover:from-blue-500 hover:to-indigo-600 shadow-lg shadow-blue-600/30 hover:shadow-glow-blue active:scale-95 transition-all duration-300 border border-blue-400/30"
                  >
                    <span>{slide.primaryCta.text}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>

                  <Link
                    href={slide.secondaryCta.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 rounded-xl border border-white/15 hover:border-blue-500/40 hover:text-white transition-all duration-300 backdrop-blur-sm"
                  >
                    <span>{slide.secondaryCta.text}</span>
                    {slide.secondaryCta.iconType === "phone" && (
                      <Phone className="w-4 h-4 text-orange-400" />
                    )}
                    {slide.secondaryCta.iconType === "sparkles" && (
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                    )}
                    {slide.secondaryCta.iconType === "layers" && (
                      <Layers className="w-4 h-4 text-blue-400" />
                    )}
                  </Link>
                </div>

                {/* Key Micro-Badges / Trust Points */}
                <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-300">
                  {slide.trustPoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${point.color}`} />
                      <span>{point.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Navigation Controls & Progress Dots */}
          <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-white/10">
            {/* Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/15 text-slate-300 hover:text-white transition-all duration-200 cursor-pointer"
                aria-label="Previous Hero Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/15 text-slate-300 hover:text-white transition-all duration-200 cursor-pointer"
                aria-label="Next Hero Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination Indicators with Active Fill */}
            <div className="flex items-center gap-2">
              {heroSlides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? "w-8 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md shadow-blue-500/50"
                      : "w-2.5 bg-white/25 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Slide Count Label */}
            <span className="text-xs font-mono text-slate-400 pl-2">
              0{currentSlide + 1} / 0{heroSlides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

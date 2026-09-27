"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  Send,
  Building2,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { companyInfo } from "@/data/company";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="section-container text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT OFFICE CONTACT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Discuss Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Technology Goals
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Reach out to our engineering and consulting team in Cebu. We are ready to answer your
            questions and provide dependable solutions.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-slate-950">
        <div className="section-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Office Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card p-8 border border-white/15 bg-slate-900/80 space-y-6">
                <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">
                  Cebu Headquarters
                </h2>

                <div className="space-y-4 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-orange-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-mono uppercase">Office Location</span>
                      <p className="font-semibold text-white mt-0.5">{companyInfo.address.full}</p>
                      <p className="text-xs text-slate-500 mt-0.5">2nd Floor, Romulo Bldg., San Isidro</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-blue-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-mono uppercase">Telephone & Mobile</span>
                      <p className="font-semibold text-white mt-0.5">{companyInfo.phone.display}</p>
                      <p className="text-xs text-slate-500 mt-0.5">Direct Cebu landline & mobile</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-mono uppercase">Email Address</span>
                      <p className="font-semibold text-white mt-0.5">
                        <a href={`mailto:${companyInfo.email}`} className="hover:text-blue-400">
                          {companyInfo.email}
                        </a>
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">Sales & technical inquiries</p>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-mono uppercase">Business Hours</span>
                      <p className="font-semibold text-white mt-0.5">Monday – Friday: 8:30 AM – 5:30 PM</p>
                      <p className="text-xs text-slate-500 mt-0.5">Philippine Standard Time (PHT)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hosting Direct Link */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-blue-500/20 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">Client Hosting Portal</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Manage domains, servers, & cPanel accounts</p>
                </div>
                <a
                  href={companyInfo.hostingPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="glass-card p-8 border border-white/15 bg-slate-900/80 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">Send Us a Direct Message</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below and a representative will reply within 24 business hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <h3 className="text-lg font-bold text-white">Message Sent Successfully!</h3>
                    <p className="text-xs text-slate-300">
                      Thank you for contacting ET Technologies. Our engineering team will review your inquiry and get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-blue-400 underline font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-slate-300 font-medium">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Juan dela Cruz"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-slate-300 font-medium">Company / Organization *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Acme Corp"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-slate-300 font-medium">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-slate-300 font-medium">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="0917-XXX-XXXX"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium">Service or Product of Interest</label>
                      <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-blue-500">
                        <option>Employee Time & Attendance (DTR & Payroll)</option>
                        <option>Maritime Review Center System</option>
                        <option>Student Information & Enrollment System</option>
                        <option>Digital Laundry Management System</option>
                        <option>Time Tracking & Productivity Software</option>
                        <option>Custom Software / Web Systems Development</option>
                        <option>Mobile App Development</option>
                        <option>Cloud Computing & G Suite / Microsoft 365</option>
                        <option>Managed Web Hosting</option>
                        <option>Other Consultation</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium">Message / Project Requirements *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Briefly describe what you'd like to achieve or ask..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200"
                    >
                      <span>Send Message to ET Technologies</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

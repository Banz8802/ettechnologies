"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Bot,
  User,
} from "lucide-react";
import { companyInfo } from "@/data/company";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  quickActions?: { label: string; href?: string; action?: () => void }[];
}

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! Welcome to ET Technologies. How can our engineering team assist you today?",
      quickActions: [
        { label: "View Software Solutions", href: "/products" },
        { label: "Request Free Quote", href: "/quote" },
        { label: "Call Cebu Office", href: `tel:${companyInfo.phone.landline}` },
      ],
    },
  ]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputVal.trim();
    if (!text) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: "user",
      text: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal("");

    // Generate intelligent response based on keywords
    setTimeout(() => {
      const lower = text.toLowerCase();
      let botResponse: ChatMessage;

      if (lower.includes("quote") || lower.includes("price") || lower.includes("cost") || lower.includes("rate")) {
        botResponse = {
          id: String(Date.now() + 1),
          sender: "bot",
          text: "We provide customized quotes tailored to your exact scale, user count, and deployment model. Would you like to fill out our quick quote form or speak directly with our team?",
          quickActions: [
            { label: "Open Quote Form", href: "/quote" },
            { label: "Direct Call (032) 316-4504", href: `tel:${companyInfo.phone.landline}` },
          ],
        };
      } else if (lower.includes("payroll") || lower.includes("dtr") || lower.includes("attendance") || lower.includes("time")) {
        botResponse = {
          id: String(Date.now() + 1),
          sender: "bot",
          text: "Our Employee Time & Attendance and Payroll System integrates directly with biometric fingerprint/facial devices and automates Philippine statutory deductions (SSS, PhilHealth, Pag-IBIG, BIR 2316).",
          quickActions: [
            { label: "View DTR & Payroll System", href: "/product/employee-time-attendance" },
            { label: "Request DTR Demo", href: "/quote?solution=dtr" },
          ],
        };
      } else if (lower.includes("review") || lower.includes("exam") || lower.includes("maritime")) {
        botResponse = {
          id: String(Date.now() + 1),
          sender: "bot",
          text: "Our Maritime & Board Review Center System powers over 65 nationwide branches for Cebu Gems. It features randomized mock exams, STCW competency mapping, and student score diagnostics.",
          quickActions: [
            { label: "Review Center Details", href: "/product/review-center-system" },
            { label: "Schedule Demo", href: "/quote?solution=review" },
          ],
        };
      } else if (lower.includes("school") || lower.includes("student") || lower.includes("enrollment") || lower.includes("sis")) {
        botResponse = {
          id: String(Date.now() + 1),
          sender: "bot",
          text: "Our Student Information & Enrollment System has been proven on campus for 15+ years at Iligan Capitol College, unifying online admissions, registrar TORs, grading, and cashiering POS.",
          quickActions: [
            { label: "View Student Info System", href: "/product/student-information-system" },
          ],
        };
      } else if (lower.includes("laundry") || lower.includes("dry clean")) {
        botResponse = {
          id: String(Date.now() + 1),
          sender: "bot",
          text: "Our Digital Laundry System includes touchscreen POS, garment barcode tagging, wash-dry-fold stage tracking, and automated SMS alerts when laundry is ready.",
          quickActions: [
            { label: "Digital Laundry System", href: "/product/digital-laundry-system" },
          ],
        };
      } else if (lower.includes("contact") || lower.includes("address") || lower.includes("phone") || lower.includes("location") || lower.includes("office")) {
        botResponse = {
          id: String(Date.now() + 1),
          sender: "bot",
          text: `Our main office is located at 2nd Floor, Romulo Bldg., San Isidro, Talisay City, Cebu. You can call us at ${companyInfo.phone.display} or email ${companyInfo.email}.`,
          quickActions: [
            { label: "Visit Contact Page", href: "/contact" },
          ],
        };
      } else {
        botResponse = {
          id: String(Date.now() + 1),
          sender: "bot",
          text: "Thank you for reaching out! You can explore our software solutions, review our IT services, or send us your project specifications for a fast proposal.",
          quickActions: [
            { label: "Explore Products", href: "/products" },
            { label: "IT Services", href: "/services" },
            { label: "Get a Free Quote", href: "/quote" },
          ],
        };
      }

      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-2xl shadow-blue-600/40 hover:shadow-glow-blue hover:scale-105 active:scale-95 transition-all duration-300 border border-blue-400/30"
          aria-label="Open solution assistant"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-500" />
          </div>
          <span className="hidden sm:inline">Questions? Talk with Us</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[500px] glass-card border border-white/20 bg-slate-950/95 shadow-2xl rounded-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-900/90 to-slate-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md">
                ET
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  ET Technologies Solutions
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Technical Engineering Support</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div className="space-y-2 max-w-[80%]">
                  <div
                    className={`p-3 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-slate-900 border border-white/10 text-slate-200 rounded-bl-none shadow-sm"
                    }`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                  </div>

                  {/* Quick Action Chips */}
                  {msg.quickActions && msg.quickActions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.quickActions.map((qa, i) => {
                        if (qa.href) {
                          return (
                            <Link
                              key={i}
                              href={qa.href}
                              onClick={() => {
                                if (!qa.href?.startsWith("tel:")) setIsOpen(false);
                              }}
                              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-[11px] font-medium transition-colors"
                            >
                              {qa.label}
                            </Link>
                          );
                        }
                        return (
                          <button
                            key={i}
                            onClick={qa.action}
                            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-[11px] font-medium transition-colors"
                          >
                            {qa.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Preset Suggested Questions */}
          <div className="px-3 py-2 border-t border-white/5 bg-slate-900/50 flex gap-1.5 overflow-x-auto text-[11px]">
            <button
              onClick={() => handleSend("Tell me about DTR and Payroll")}
              className="px-2 py-1 rounded bg-slate-800 text-slate-300 hover:text-white shrink-0"
            >
              💼 DTR & Payroll
            </button>
            <button
              onClick={() => handleSend("Review Center System details")}
              className="px-2 py-1 rounded bg-slate-800 text-slate-300 hover:text-white shrink-0"
            >
              🎓 Review Center
            </button>
            <button
              onClick={() => handleSend("What is your office address?")}
              className="px-2 py-1 rounded bg-slate-800 text-slate-300 hover:text-white shrink-0"
            >
              📍 Office Location
            </button>
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-900 border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about systems, pricing..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

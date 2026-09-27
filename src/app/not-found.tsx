import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-28 pb-20">
      <div className="section-container max-w-xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 font-mono text-3xl font-extrabold shadow-lg shadow-blue-500/10">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-400">
            The page you requested may have moved or no longer exists. Explore our software suites or return to the homepage.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-white/10 rounded-xl transition-colors"
          >
            <Layers className="w-4 h-4" />
            <span>View Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

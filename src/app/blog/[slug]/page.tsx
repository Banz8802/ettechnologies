import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  ChevronRight,
  Share2,
  Bookmark,
  CheckCircle2,
} from "lucide-react";
import { blogsData, BlogPost } from "@/data/blogs";
import { CtaBanner } from "@/components/home/CtaBanner";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogsData.map((b) => ({
    slug: b.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogsData.find((b) => b.slug === params.slug);
  if (!post) {
    return { title: "Article Not Found" };
  }
  return {
    title: `${post.title} | Tech Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} - ET Technologies`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
  };
}

export default function BlogDetailPage({ params }: Props) {
  const post = blogsData.find((b) => b.slug === params.slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = blogsData
    .filter((b) => b.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="pt-28 pb-20">
      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-slate-950/60 py-3">
        <div className="section-container">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-blue-400 font-medium truncate">{post.category}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-16 bg-slate-950">
        <div className="section-container max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              {post.title}
            </h1>

            {/* Author & Date Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-b border-white/10 py-4 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold font-mono">
                  eL
                </div>
                <div>
                  <p className="font-bold text-white text-sm leading-tight">{post.author}</p>
                  <p className="text-slate-400 text-[11px]">{post.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Published: {post.publishedDate}</span>
              </div>
            </div>
          </div>

          {/* Excerpt Lead */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border-l-4 border-blue-500 text-slate-200 text-base leading-relaxed italic">
            &ldquo;{post.excerpt}&rdquo;
          </div>

          {/* Article Main Text Content */}
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 pt-4">
            {post.content.split("\n\n").map((paragraph, i) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-2xl font-bold text-white pt-6 pb-2 border-b border-white/10">
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }
              if (trimmed.startsWith("#### ")) {
                return (
                  <h4 key={i} className="text-lg font-bold text-orange-400 pt-4 pb-1">
                    {trimmed.replace("#### ", "")}
                  </h4>
                );
              }
              if (trimmed.startsWith("- ")) {
                const bulletItems = trimmed.split("\n- ").map((item) => item.replace(/^- /, ""));
                return (
                  <ul key={i} className="space-y-2 pl-4">
                    {bulletItems.map((item, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ")) {
                return (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-2">
                    <p>{trimmed}</p>
                  </div>
                );
              }
              return (
                <p key={i} className="text-slate-300">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-2">
              Topics:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs bg-slate-900 text-slate-300 border border-white/10 font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="py-16 bg-slate-950/70 border-t border-white/10">
        <div className="section-container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Related Tech Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <div
                key={rPost.id}
                className="glass-card p-6 border border-white/10 flex flex-col justify-between hover:border-blue-500/30 transition-all"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-blue-400">{rPost.category}</span>
                  <h3 className="text-base font-bold text-white line-clamp-2 hover:text-blue-300 transition-colors">
                    <Link href={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{rPost.excerpt}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5">
                  <Link
                    href={`/blog/${rPost.slug}`}
                    className="text-xs font-semibold text-blue-400 flex items-center gap-1 hover:text-blue-300"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { use } from "react";
import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { getBlogBySlug, getRelatedPosts, blogPosts } from "@/lib/blog-data";
import type { BlogSection } from "@/lib/blog-data";
import { ChevronLeft, Clock, Eye, BookOpen, ArrowRight } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Pet Care": "purple",
  "Pet Health": "success",
  Nutrition: "warning",
  Training: "info",
};

function SectionBlock({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "heading":
      return (
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">
          {section.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul className="space-y-2 mb-4 ml-1">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-gray-700 dark:text-gray-300">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "tip":
      return (
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-700 rounded-r-xl p-4 mb-4">
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">{section.text}</p>
        </div>
      );
    case "warning":
      return (
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-4 mb-4">
          <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{section.text}</p>
        </div>
      );
    case "quote":
      return (
        <blockquote className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 my-6">
          <div className="text-4xl text-amber-400 dark:text-amber-950 font-serif leading-none mb-2">&ldquo;</div>
          <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">{section.text}</p>
        </blockquote>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const allPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <LandingNavbar />
      <div className="min-h-screen bg-white dark:bg-gray-950">
        {/* Hero */}
        <section className={`pt-28 pb-12 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors mb-6"
              >
                <ChevronLeft className="w-4 h-4" /> Kembali ke Blog
              </Link>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant={(categoryColors[post.category] as "purple") ?? "secondary"} className="text-xs">
                  {post.category}
                </Badge>
              </div>
              <div className="text-6xl mb-4">{post.emoji}</div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                {post.title}
              </h1>
              <p className="text-white/80 text-lg mb-6 max-w-2xl">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{post.authorEmoji}</span>
                  <div>
                    <p className="text-white font-medium">{post.authorName}</p>
                    <p className="text-white/60 text-xs">{post.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  {post.viewCount.toLocaleString()} tayangan
                </div>
                <span>{formatDate(post.publishedAt, { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="prose prose-lg max-w-none">
                {post.content.map((section, i) => (
                  <SectionBlock key={i} section={section} />
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author card */}
              <div className="mt-8 p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-100 dark:border-amber-800">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{post.authorEmoji}</span>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{post.authorName}</p>
                    <p className="text-sm text-amber-900 dark:text-amber-700">{post.authorRole}</p>
                    <p className="text-sm text-muted-foreground mt-1">Artikel ini ditulis oleh tim ahli Central Pet yang berdedikasi untuk memberikan informasi terbaik bagi pet owners Indonesia.</p>
                  </div>
                </div>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Artikel Terkait</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {related.map((rp) => (
                      <Link key={rp.slug} href={`/blog/${rp.slug}`}>
                        <motion.div
                          whileHover={{ y: -3 }}
                          className="flex gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-amber-200 dark:hover:border-amber-800 transition-all"
                        >
                          <span className="text-3xl">{rp.emoji}</span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-amber-950">{rp.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">{rp.readTime}</p>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* CTA card */}
              <Card className="border-0 shadow-sm overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                <CardContent className="p-5">
                  <div className="text-3xl mb-3">🐾</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Siap Menitipkan Hewanmu?</h3>
                  <p className="text-sm text-muted-foreground mb-4">Hotel, grooming, dan layanan lengkap lainnya tersedia di Central Pet.</p>
                  <div className="space-y-2">
                    <Button className="w-full" size="sm" asChild>
                      <Link href="/hotel">Lihat Pet Hotel <ArrowRight className="w-3.5 h-3.5" /></Link>
                    </Button>
                    <Button variant="outline" className="w-full" size="sm" asChild>
                      <Link href="/grooming/book">Pesan Grooming</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* All posts */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Artikel Lainnya
                </h3>
                <div className="space-y-3">
                  {allPosts.map((ap) => (
                    <Link key={ap.slug} href={`/blog/${ap.slug}`}>
                      <motion.div
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                      >
                        <span className="text-2xl shrink-0">{ap.emoji}</span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200 line-clamp-2">{ap.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{ap.readTime} · {ap.viewCount.toLocaleString()} tayangan</p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
                <Link href="/blog" className="flex items-center gap-1 text-sm text-amber-900 dark:text-amber-700 font-medium mt-3 hover:gap-2 transition-all">
                  Lihat semua artikel <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Membership promo */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-5 border border-amber-100 dark:border-amber-800">
                <span className="text-3xl block mb-2">⭐</span>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">Jadi Member Gold</h3>
                <p className="text-xs text-muted-foreground mb-3">Hemat 20% untuk semua layanan + akses tips eksklusif dari dokter hewan kami.</p>
                <Button variant="outline" size="sm" asChild className="w-full border-amber-300 text-amber-700 hover:bg-amber-50">
                  <Link href="/membership">Lihat Membership</Link>
                </Button>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

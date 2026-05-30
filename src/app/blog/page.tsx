import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { ArrowRight, Clock, Eye } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog — Pet Care Tips & Guides" };

const categoryColors: Record<string, string> = {
  "Pet Care": "purple",
  "Pet Health": "success",
  Nutrition: "warning",
  Training: "info",
};

export default function BlogPage() {
  const displayBlogs = blogPosts;

  return (
    <>
      <LandingNavbar />
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <section className="pt-28 pb-12 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="purple" className="mb-4">Pet Care Blog</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Expert Pet Care <span className="gradient-text">Advice</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Tips, guides, and insights from our veterinarians and pet care experts.
            </p>
          </div>
        </section>

        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayBlogs.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.slug}`}>
                <Card className="border-0 shadow-sm card-hover h-full flex flex-col overflow-hidden group">
                  <div className={`h-44 bg-gradient-to-br ${blog.gradient} flex items-center justify-center relative`}>
                    <span className="text-6xl">{blog.emoji}</span>
                    <div className="absolute top-3 left-3">
                      <Badge variant={(categoryColors[blog.category] as "purple") ?? "secondary"} className="text-xs">
                        {blog.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/30 text-white text-xs px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3" /> {blog.readTime}
                    </div>
                  </div>
                  <CardContent className="p-5 flex flex-col flex-1">
                    <h2 className="text-base font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">{blog.title}</h2>
                    {blog.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{blog.excerpt}</p>
                    )}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <span className="text-base">{blog.authorEmoji}</span>
                        {blog.authorName}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {blog.viewCount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 mt-2 group-hover:gap-2 transition-all">
                      Baca selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

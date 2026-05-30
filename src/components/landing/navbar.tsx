"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Menu, X, PawPrint, ChevronDown,
  Hotel, Scissors, Store, Heart, Star
} from "lucide-react";

const navLinks = [
  {
    label: "Layanan",
    href: "#services",
    children: [
      { label: "Pet Hotel", href: "/hotel", icon: Hotel, desc: "Menginap mewah untuk hewan peliharaanmu" },
      { label: "Grooming", href: "/grooming", icon: Scissors, desc: "Layanan grooming profesional" },
      { label: "Pet Shop", href: "/shop", icon: Store, desc: "Produk & perlengkapan premium" },
      { label: "Kesehatan", href: "/health", icon: Heart, desc: "Rekam medis & wellness hewan" },
    ],
  },
  { label: "Membership", href: "/membership" },
  { label: "Blog", href: "/blog" },
];

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">Central Pet</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                    "text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 p-2 z-50"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-lg gradient-brand flex items-center justify-center shrink-0 shadow-sm">
                          <child.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                            {child.label}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">{child.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
              <Link href="/hotel">Lihat Hotel</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/grooming/book">Pesan Sekarang</Link>
            </Button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-7 py-2 rounded-xl text-sm text-gray-500 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    >
                      <child.icon className="w-4 h-4" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/hotel" onClick={() => setMobileOpen(false)}>Lihat Hotel</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/grooming/book" onClick={() => setMobileOpen(false)}>Pesan Sekarang</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

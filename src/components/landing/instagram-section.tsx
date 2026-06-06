"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, Bookmark, ExternalLink } from "lucide-react";
import Link from "next/link";

const IG_URL = "https://www.instagram.com/centralpetshop.sukapura";
const HANDLE = "@centralpetshop.sukapura";

/* ─── Mock posts ────────────────────────────────────────── */
const posts = [
  {
    id: 1,
    bg: "from-amber-100 via-orange-50 to-amber-200",
    emoji: "🐱",
    emojiSize: "text-6xl",
    caption: "Grooming day is the best day! ✨ Mochi udah bersih & wangi, siap pulang ke rumah 🏠",
    likes: 324,
    comments: 47,
    tag: "#grooming",
    tagColor: "bg-amber-100 text-amber-900",
    size: "large", // spans 2 rows on left
  },
  {
    id: 2,
    bg: "from-[#5B8FA8]/20 via-sky-50 to-[#5B8FA8]/30",
    emoji: "🐾",
    emojiSize: "text-4xl",
    caption: "Jejak-jejak kecil penuh cinta 🤎",
    likes: 218,
    comments: 29,
    tag: "#petlove",
    tagColor: "bg-sky-100 text-sky-800",
    size: "small",
  },
  {
    id: 3,
    bg: "from-rose-50 via-pink-50 to-orange-50",
    emoji: "🐶",
    emojiSize: "text-5xl",
    caption: "Bruno baru selesai spa treatment, harum banget! 🛁✨",
    likes: 441,
    comments: 63,
    tag: "#spa",
    tagColor: "bg-rose-100 text-rose-800",
    size: "small",
  },
  {
    id: 4,
    bg: "from-amber-200 via-yellow-50 to-orange-100",
    emoji: "✂️",
    emojiSize: "text-5xl",
    caption: "Before & after potong rambut Luna yang kece 💇",
    likes: 576,
    comments: 84,
    tag: "#beforeafter",
    tagColor: "bg-amber-100 text-amber-900",
    size: "medium",
  },
  {
    id: 5,
    bg: "from-[#C27A4A]/20 via-amber-50 to-[#A0522D]/20",
    emoji: "🏨",
    emojiSize: "text-5xl",
    caption: "Kamar VIP Suite kami — semewah ini untuk teman berbulumu 🐾❤️",
    likes: 389,
    comments: 52,
    tag: "#pethotel",
    tagColor: "bg-amber-100 text-amber-900",
    size: "medium",
  },
  {
    id: 6,
    bg: "from-emerald-50 via-teal-50 to-[#5B8FA8]/20",
    emoji: "🌿",
    emojiSize: "text-4xl",
    caption: "Cemilan sehat & organik baru masuk! 🦴🥦",
    likes: 267,
    comments: 38,
    tag: "#petfood",
    tagColor: "bg-emerald-100 text-emerald-800",
    size: "small",
  },
  {
    id: 7,
    bg: "from-[#7B3519]/10 via-amber-50 to-orange-100",
    emoji: "👨‍⚕️",
    emojiSize: "text-5xl",
    caption: "Tim groomer kami bersertifikat & penuh kasih 💛 Kepercayaan kalian = motivasi kami!",
    likes: 512,
    comments: 71,
    tag: "#team",
    tagColor: "bg-orange-100 text-orange-900",
    size: "small",
  },
  {
    id: 8,
    bg: "from-pink-50 via-rose-50 to-amber-50",
    emoji: "🐰",
    emojiSize: "text-6xl",
    caption: "Snowy si kelinci lucu baru selesai grooming pertamanya! Comel banget 🤍",
    likes: 634,
    comments: 97,
    tag: "#rabbit",
    tagColor: "bg-pink-100 text-pink-800",
    size: "large",
  },
  {
    id: 9,
    bg: "from-[#5B8FA8]/15 via-blue-50 to-sky-100",
    emoji: "🐟",
    emojiSize: "text-4xl",
    caption: "Perlengkapan aquarium lengkap! Buat rumah ikan hiasmu makin cantik 🐠",
    likes: 198,
    comments: 24,
    tag: "#aquarium",
    tagColor: "bg-blue-100 text-blue-800",
    size: "small",
  },
];

/* ─── Paw SVG ────────────────────────────────────────────── */
function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className}>
      <ellipse cx="20" cy="14" rx="6" ry="8" />
      <ellipse cx="44" cy="14" rx="6" ry="8" />
      <ellipse cx="10" cy="30" rx="5" ry="7" />
      <ellipse cx="54" cy="30" rx="5" ry="7" />
      <path d="M32 22 C18 22 12 32 12 40 C12 52 22 58 32 58 C42 58 52 52 52 40 C52 32 46 22 32 22Z" />
    </svg>
  );
}

/* ─── Single Post Card ───────────────────────────────────── */
function PostCard({
  post,
  index,
  className = "",
}: {
  post: (typeof posts)[0];
  index: number;
  className?: string;
}) {
  return (
    <motion.a
      href={IG_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      className={`relative group overflow-hidden rounded-2xl cursor-pointer block ${className}`}
    >
      {/* Post background */}
      <div className={`w-full h-full bg-gradient-to-br ${post.bg} flex flex-col items-center justify-center p-4 min-h-[140px]`}>
        <motion.span
          className={`${post.emojiSize} select-none`}
          animate={{ rotate: [-3, 3, -3], y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 3 + index * 0.4, ease: "easeInOut" }}
        >
          {post.emoji}
        </motion.span>

        {/* Tag pill */}
        <span className={`mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${post.tagColor}`}>
          {post.tag}
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex flex-col justify-end p-3">
        <p className="text-white text-[11px] leading-tight line-clamp-2 mb-2">{post.caption}</p>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-white/90 text-xs font-medium">
            <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
            {post.likes.toLocaleString("id-ID")}
          </span>
          <span className="flex items-center gap-1 text-white/90 text-xs font-medium">
            <MessageCircle className="w-3 h-3" />
            {post.comments}
          </span>
          <Bookmark className="w-3 h-3 text-white/70 ml-auto" />
        </div>
      </div>

      {/* Corner shine */}
      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
    </motion.a>
  );
}

/* ─── Main Section ───────────────────────────────────────── */
export function InstagramSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-amber-50/60 to-white dark:from-gray-900/60 dark:to-gray-950">

      {/* Background paw prints */}
      {[
        { top: "8%",  left: "2%",  size: "w-16", opacity: "opacity-[0.06]", rotate: "-15deg" },
        { top: "25%", right: "3%", size: "w-12", opacity: "opacity-[0.05]", rotate: "20deg"  },
        { top: "60%", left: "1%",  size: "w-10", opacity: "opacity-[0.07]", rotate: "-5deg"  },
        { top: "80%", right: "5%", size: "w-14", opacity: "opacity-[0.05]", rotate: "10deg"  },
        { top: "45%", left: "96%", size: "w-8",  opacity: "opacity-[0.06]", rotate: "30deg"  },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`absolute pointer-events-none text-amber-900 ${p.opacity} ${p.size}`}
          style={{ top: p.top, left: (p as { left?: string }).left, right: (p as { right?: string }).right, rotate: p.rotate }}
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 6 + i, ease: "easeInOut", delay: i * 0.8 }}
        >
          <PawIcon />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* IG Logo bubble */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 shadow-xl shadow-amber-800/20"
            style={{
              background: "linear-gradient(135deg, #7B3519 0%, #A0522D 40%, #5B8FA8 100%)",
            }}
            animate={{ rotate: [0, 4, -4, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <Instagram className="w-8 h-8 text-white" />
          </motion.div>

          <p className="text-sm font-semibold text-amber-900 dark:text-amber-700 uppercase tracking-wider mb-2">
            Ikuti Kami
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Momen Lucu di{" "}
            <span className="gradient-text">Instagram</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-5 max-w-xl mx-auto">
            Lihat keseharian hewan-hewan lucu kami, tips perawatan, dan promo terbaru! 🐾
          </p>

          {/* Profile strip */}
          <motion.a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-gray-900 border border-amber-200 dark:border-amber-800 shadow-md hover:shadow-lg hover:border-amber-400 transition-all group"
          >
            {/* Avatar */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-inner"
              style={{ background: "linear-gradient(135deg, #7B3519, #5B8FA8)" }}
            >
              CP
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
                {HANDLE}
              </p>
              <div className="flex gap-3 text-xs text-muted-foreground mt-0.5">
                <span><strong className="text-gray-700 dark:text-gray-300">2.4rb</strong> pengikut</span>
                <span><strong className="text-gray-700 dark:text-gray-300">186</strong> postingan</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-amber-800 dark:text-amber-500 ml-2 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>

        {/* ── Grid ── */}
        {/* Row 1: large (2/5) + 3 smalls */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-3">
          {/* Large featured */}
          <PostCard post={posts[0]} index={0} className="col-span-2 row-span-2 aspect-square sm:aspect-auto sm:min-h-[300px]" />
          {/* 3 small top right */}
          <PostCard post={posts[1]} index={1} className="aspect-square" />
          <PostCard post={posts[2]} index={2} className="aspect-square" />
          <PostCard post={posts[5]} index={5} className="aspect-square" />
          {/* Row 2 fill (3 small) */}
          <PostCard post={posts[3]} index={3} className="aspect-square" />
          <PostCard post={posts[6]} index={6} className="aspect-square" />
          <PostCard post={posts[8]} index={8} className="aspect-square" />
        </div>

        {/* Row 2: 3 medium + large featured right */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <PostCard post={posts[4]} index={4} className="aspect-square" />
          <PostCard post={posts[7]} index={7} className="col-span-2 aspect-[2/1] sm:aspect-video" />
          <PostCard post={posts[2]} index={2} className="aspect-square hidden lg:block" />
          <PostCard post={posts[5]} index={5} className="aspect-square hidden lg:block" />
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <motion.a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl text-white font-bold text-sm shadow-xl shadow-amber-800/25 hover:shadow-amber-800/40 transition-all"
            style={{ background: "linear-gradient(135deg, #7B3519 0%, #A0522D 55%, #5B8FA8 100%)" }}
          >
            <Instagram className="w-5 h-5" />
            Ikuti {HANDLE}
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>

          <p className="text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1.5">
            <PawIcon className="w-3 h-3 text-amber-600 inline-block" />
            Update postingan setiap hari — jangan sampai ketinggalan momen lucunya!
            <PawIcon className="w-3 h-3 text-amber-600 inline-block" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}

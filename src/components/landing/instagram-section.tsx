"use client";

import { motion } from "framer-motion";
import { ExternalLink, Heart, Camera } from "lucide-react";

const IG_URL  = "https://www.instagram.com/centralpetshop.sukapura";
const HANDLE  = "@centralpetshop.sukapura";

/* ─── Instagram SVG ─────────────────────────────────────── */
function InstagramLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

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

const highlights = [
  { icon: Camera, label: "Update konten setiap hari" },
  { icon: Heart,  label: "Tips & trik merawat hewan" },
  { icon: "🐾",  label: "Momen lucu teman berbulumu" },
];

export function InstagramSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-amber-50/60 to-white dark:from-gray-900/60 dark:to-gray-950">

      {/* ── Decorative paw prints ── */}
      {[
        { top: "10%", left: "3%",  w: "w-14", op: "opacity-[0.07]", r: "-18deg", d: 0   },
        { top: "70%", left: "2%",  w: "w-10", op: "opacity-[0.05]", r: "8deg",   d: 1.2 },
        { top: "20%", right: "3%", w: "w-12", op: "opacity-[0.06]", r: "22deg",  d: 0.5 },
        { top: "75%", right: "4%", w: "w-16", op: "opacity-[0.05]", r: "-10deg", d: 1.8 },
        { top: "45%", left: "0%",  w: "w-8",  op: "opacity-[0.08]", r: "5deg",   d: 0.9 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`absolute pointer-events-none text-amber-800 ${p.op} ${p.w}`}
          style={{ top: p.top, left: (p as {left?:string}).left, right: (p as {right?:string}).right, rotate: p.r }}
          animate={{ y: [0, -14, 0] }}
          transition={{ repeat: Infinity, duration: 6 + i, ease: "easeInOut", delay: p.d }}
        >
          <PawIcon />
        </motion.div>
      ))}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* ── Animated IG icon ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 180 }}
          className="flex justify-center mb-6"
        >
          <motion.div
            className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl shadow-amber-800/25"
            style={{ background: "linear-gradient(135deg, #7B3519 0%, #A0522D 40%, #5B8FA8 100%)" }}
            animate={{ rotate: [0, 4, -4, 0], scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <InstagramLogo className="w-10 h-10 text-white" />
          </motion.div>
        </motion.div>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-sm font-semibold text-amber-900 dark:text-amber-600 uppercase tracking-widest mb-3">
            Ikuti Kami di Instagram
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Lihat Momen Lucu<br />
            <span className="gradient-text">Setiap Harinya</span> 🐾
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Dari grooming yang menggemaskan, tips perawatan hewan, hingga update promo terbaru
            — semuanya ada di Instagram kami!
          </p>
        </motion.div>

        {/* ── Highlight pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, y: -2 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-gray-900 border border-amber-200 dark:border-amber-800 shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {typeof h.icon === "string"
                ? <span className="text-base">{h.icon}</span>
                : <h.icon className="w-4 h-4 text-amber-800 dark:text-amber-500" />
              }
              {h.label}
            </motion.div>
          ))}
        </motion.div>

        {/* ── Profile card ── */}
        <motion.a
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02, y: -3 }}
          whileTap={{ scale: 0.98 }}
          className="group inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-amber-200 dark:border-amber-800 shadow-lg hover:shadow-xl hover:border-amber-400 dark:hover:border-amber-600 transition-all mb-8 max-w-sm w-full"
        >
          {/* Avatar */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-md"
            style={{ background: "linear-gradient(135deg, #7B3519, #A0522D, #5B8FA8)" }}
          >
            CP
          </div>

          <div className="text-left flex-1 min-w-0">
            <p className="font-bold text-gray-900 dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors truncate">
              {HANDLE}
            </p>
            <div className="flex gap-3 text-xs text-muted-foreground mt-1">
              <span><strong className="text-gray-700 dark:text-gray-300">29</strong> pengikut</span>
            </div>
          </div>

          <ExternalLink className="w-4 h-4 text-amber-700 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.a>

        {/* ── Main CTA button ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-bold shadow-xl shadow-amber-800/25 hover:shadow-amber-800/40 transition-shadow text-base"
            style={{ background: "linear-gradient(135deg, #7B3519 0%, #A0522D 55%, #5B8FA8 100%)" }}
          >
            <InstagramLogo className="w-5 h-5" />
            Buka Instagram Kami
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>

          <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
            <PawIcon className="w-3 h-3 text-amber-600 inline-block" />
            Konten baru setiap hari — jangan sampai ketinggalan!
            <PawIcon className="w-3 h-3 text-amber-600 inline-block" />
          </p>
        </motion.div>

      </div>
    </section>
  );
}

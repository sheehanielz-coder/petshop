"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Activity, Syringe, Camera, Utensils, Footprints,
  Scissors, Clock, ArrowRight, CheckCircle2, Bell
} from "lucide-react";

const pets = [
  { name: "Cupcake", breed: "Persia", emoji: "🐱", image: "/images/pets/kucing/cupcake.jpg", tag: "Si Manis", tagColor: "bg-pink-100 text-pink-700", status: "Menginap", checkIn: "25 Mei", duration: "2H 5J", progress: 2, total: 5, progressColor: "bg-pink-400", activities: [
    { icon: Utensils, label: "Makan", time: "08:00", done: true },
    { icon: Footprints, label: "Jalan", time: "09:30", done: true },
    { icon: Activity, label: "Bermain", time: "11:00", done: true },
    { icon: Scissors, label: "Grooming", time: "14:00", done: false },
  ]},
  { name: "Danise", breed: "Maine Coon", emoji: "🐱", image: "/images/pets/kucing/danise.jpg", tag: "Si Ceria", tagColor: "bg-amber-100 text-amber-700", status: "Menginap", checkIn: "26 Mei", duration: "1H 12J", progress: 1, total: 4, progressColor: "bg-amber-400", activities: [
    { icon: Utensils, label: "Makan", time: "08:00", done: true },
    { icon: Footprints, label: "Jalan", time: "10:00", done: true },
    { icon: Activity, label: "Bermain", time: "13:00", done: false },
    { icon: Camera, label: "Foto", time: "15:00", done: false },
  ]},
  { name: "Claire", breed: "British Shorthair", emoji: "🐱", image: "/images/pets/kucing/claire.jpg", tag: "Si Anggun", tagColor: "bg-amber-100 text-violet-700", status: "Menginap", checkIn: "24 Mei", duration: "3H 2J", progress: 3, total: 7, progressColor: "bg-amber-600", activities: [
    { icon: Utensils, label: "Makan", time: "07:45", done: true },
    { icon: Scissors, label: "Grooming", time: "09:00", done: true },
    { icon: Activity, label: "Bermain", time: "13:00", done: true },
    { icon: Camera, label: "Foto", time: "16:00", done: false },
  ]},
];

const topStats = [
  { value: "3", label: "Pet Menginap", emoji: "🐾", color: "from-pink-400 to-rose-500" },
  { value: "2H 5J", label: "Rata-rata Durasi", emoji: "⏱️", color: "from-blue-400 to-cyan-500" },
  { value: "2/3", label: "Sudah Makan", emoji: "🍖", color: "from-green-400 to-emerald-500" },
  { value: "8", label: "Foto Hari Ini", emoji: "📸", color: "from-amber-600 to-amber-800" },
];

const timeline = [
  { time: "08:00", pet: "Cupcake", action: "Sudah makan", emoji: "🐱" },
  { time: "08:30", pet: "Danise", action: "Sudah makan", emoji: "🐱" },
  { time: "07:45", pet: "Claire", action: "Sudah makan", emoji: "🐱" },
  { time: "09:00", pet: "Claire", action: "Jadwal grooming", emoji: "✂️" },
];

function PetCard({ pet, index }: { pet: typeof pets[0]; index: number }) {
  const pct = (pet.progress / pet.total) * 100;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)" }}
      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex-1 min-w-[200px]"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center text-2xl overflow-hidden">
            <span>{pet.emoji}</span>
            <img
              src={pet.image}
              alt={pet.name}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="font-bold text-gray-800 text-sm">{pet.name}</p>
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${pet.tagColor}`}>{pet.tag}</span>
            </div>
            <p className="text-xs text-gray-400">{pet.breed}</p>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">{pet.status}</span>
      </div>
      <div className="text-xs text-gray-400 mb-1">Check-in: {pet.checkIn} · {pet.duration}</div>

      {/* Progress */}
      <div className="mb-3">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-500 font-medium">Progres Menginap</span>
          <span className="font-bold text-gray-700">{pet.progress}/{pet.total} hari</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${pet.progressColor}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          />
        </div>
      </div>

      {/* Activities */}
      <div className="grid grid-cols-4 gap-1">
        {pet.activities.map((act) => (
          <div key={act.label} className="text-center">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center mx-auto mb-0.5 ${act.done ? "bg-green-100" : "bg-gray-100"}`}>
              <act.icon className={`w-3.5 h-3.5 ${act.done ? "text-green-600" : "text-gray-400"}`} />
            </div>
            <p className={`text-[9px] font-medium ${act.done ? "text-green-600" : "text-gray-400"}`}>{act.label}</p>
            <p className="text-[9px] text-gray-300">{act.time}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function AppPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50/30 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">Live Dashboard</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Pantau Hewanmu
            <span className="gradient-text"> Real-Time</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Selama hewanmu menginap, kamu bisa lihat semua aktivitas, foto terbaru, jadwal makan — langsung dari hp kamu.
          </p>
        </motion.div>

        {/* Dashboard Mock */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFF9F5] dark:bg-gray-900 rounded-3xl shadow-2xl shadow-orange-200/50 dark:shadow-black/30 border border-orange-100 dark:border-gray-800 overflow-hidden"
        >
          {/* Dashboard Header */}
          <div className="bg-white dark:bg-gray-950 px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-800 dark:text-white text-lg">Hai, Pet Owner! 🐾 ❤️</h3>
              <p className="text-sm text-gray-400">Kami sedang merawat mereka dengan penuh cinta 💛</p>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center"
              >
                <Bell className="w-4 h-4 text-red-500" />
              </motion.div>
              <div className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center text-white text-sm font-bold">P</div>
            </div>
          </div>

          <div className="p-6">
            {/* Top Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {topStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.emoji}</span>
                  </div>
                  <div className="text-xl font-bold text-gray-800 dark:text-white">{s.value}</div>
                  <div className="text-xs text-gray-400">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Pet Cards + Sidebar */}
            <div className="flex flex-col xl:flex-row gap-4">
              {/* Pet Cards */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-800 dark:text-white">Pet Kesayanganmu ❤️</h4>
                  <button className="text-xs text-amber-900 font-medium">Semua Pet ▾</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {pets.map((pet, i) => (
                    <PetCard key={pet.name} pet={pet} index={i} />
                  ))}
                </div>

                {/* Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 bg-gradient-to-r from-amber-700 to-amber-500 rounded-2xl p-4 flex items-center gap-4 text-white"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm">Update setiap hari, hati jadi tenang ❤️</p>
                    <p className="text-xs text-amber-100">Foto & laporan dikirim rutin, jadi kamu nggak ketinggalan momen mereka!</p>
                  </div>
                  <button className="shrink-0 bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-colors">
                    Lihat Galeri
                  </button>
                </motion.div>
              </div>

              {/* Sidebar Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="xl:w-60 shrink-0"
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 mb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-bold text-gray-800 dark:text-white text-sm">📅 Hari Ini</p>
                      <p className="text-xs text-gray-400">Selasa, 28 Mei 2024</p>
                    </div>
                    <span className="text-lg">🐾</span>
                  </div>
                  <div className="space-y-2">
                    {timeline.map((t, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + 0.4 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-xs text-gray-400 w-10 shrink-0">{t.time}</span>
                        <span className="text-base">{t.emoji}</span>
                        <div>
                          <p className="text-xs font-medium text-gray-700 dark:text-gray-300 leading-none">{t.pet}</p>
                          <p className="text-[10px] text-gray-400">{t.action}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <button className="w-full text-xs text-amber-900 font-semibold mt-3 py-1.5 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-xl transition-colors">
                    Lihat Semua →
                  </button>
                </div>

                {/* Mini gallery */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-gray-800 dark:text-white text-sm">Momen Terbaru</p>
                    <span className="text-xs text-amber-900 font-medium">Lihat Galeri →</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {["🐩", "🐕", "🐱", "🐩", "🐕"].map((e, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-square rounded-xl bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/20 dark:to-pink-900/20 flex items-center justify-center text-xl cursor-pointer"
                      >
                        {e}
                      </motion.div>
                    ))}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 flex items-center justify-center cursor-pointer"
                    >
                      <span className="text-xs font-bold text-amber-900">+5</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Features below */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {[
            { emoji: "📸", title: "Foto & Update Harian", desc: "Tim kami kirim foto dan laporan aktivitas setiap hari biar kamu tenang.", color: "bg-orange-50 dark:bg-orange-900/10" },
            { emoji: "🔔", title: "Notifikasi Real-time", desc: "Dapat alert langsung saat hewanmu makan, bermain, atau butuh perhatian.", color: "bg-amber-50 dark:bg-amber-900/10" },
            { emoji: "📊", title: "Laporan Kesehatan", desc: "Summary lengkap kondisi hewanmu setelah setiap sesi stay atau grooming.", color: "bg-emerald-50 dark:bg-emerald-900/10" },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`${f.color} rounded-2xl p-6 border border-transparent`}
            >
              <span className="text-3xl block mb-3">{f.emoji}</span>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4 text-sm">Siap coba pengalaman pet care terbaik?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" asChild className="shadow-xl shadow-amber-700/20 group">
              <Link href="/hotel">
                Lihat Hotel Kami
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/grooming/book">Book Grooming</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

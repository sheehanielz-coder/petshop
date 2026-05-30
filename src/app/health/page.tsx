"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart, Shield, Activity, Syringe, FileText, Bell,
  ChevronRight, CheckCircle2, Clock, TrendingUp
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Digital Health Passport",
    description: "Semua riwayat kesehatan hewan peliharaanmu tersimpan rapi dalam satu tempat — dari kecil hingga dewasa.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    items: ["Riwayat pemeriksaan lengkap", "Catatan berat badan", "Riwayat obat & alergi", "Catatan operasi & prosedur"],
  },
  {
    icon: Syringe,
    title: "Jadwal Vaksinasi",
    description: "Jangan pernah melewatkan vaksin penting. Sistem kami mengingatkan kamu jauh hari sebelum jadwal tiba.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    items: ["Reminder otomatis", "Tracking vaksin rabies, distemper, dll", "Sertifikat digital vaksin", "Sinkronisasi dengan klinik"],
  },
  {
    icon: Activity,
    title: "Monitoring Aktivitas",
    description: "Pantau pola makan, tidur, dan aktivitas harian hewan peliharaanmu dari mana saja.",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    items: ["Log aktivitas harian", "Grafik pertumbuhan berat badan", "Pola makan & minum", "Tingkat aktivitas & olahraga"],
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Notifikasi pintar yang memberitahu kamu ketika ada yang perlu diperhatikan dari kondisi hewan peliharaanmu.",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    items: ["Alert vaksin jatuh tempo", "Reminder konsultasi rutin", "Notifikasi berat badan abnormal", "Tips kesehatan personal"],
  },
];

const stats = [
  { value: "12,000+", label: "Hewan Terdaftar", icon: Heart },
  { value: "98%", label: "Vaksin Tepat Waktu", icon: CheckCircle2 },
  { value: "24/7", label: "Akses Data Kesehatan", icon: Clock },
  { value: "50+", label: "Klinik Partner", icon: Shield },
];

const healthTips = [
  { emoji: "🦷", title: "Sikat Gigi Rutin", desc: "Gosok gigi anjing/kucing 2-3x seminggu untuk cegah penyakit gusi." },
  { emoji: "💧", title: "Hidrasi Cukup", desc: "Pastikan selalu ada air bersih. Kucing terutama butuh banyak asupan cairan." },
  { emoji: "🥗", title: "Diet Seimbang", desc: "Pilih makanan sesuai usia, ras, dan kondisi kesehatan hewan peliharaanmu." },
  { emoji: "🏃", title: "Olahraga Teratur", desc: "Ajak anjingmu jalan kaki minimal 30 menit sehari untuk jaga kebugaran." },
  { emoji: "🛁", title: "Grooming Berkala", desc: "Mandi dan grooming rutin menjaga kulit & bulu tetap sehat." },
  { emoji: "🩺", title: "Check-up Tahunan", desc: "Konsultasi rutin ke dokter hewan setidaknya sekali setahun." },
];

export default function HealthPage() {
  return (
    <>
      <LandingNavbar />
      <div className="min-h-screen bg-white dark:bg-gray-950">
        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-white dark:from-emerald-950/30 dark:via-gray-950 dark:to-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <Badge variant="success" className="mb-4">Pet Healthcare</Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
                  Kesehatan Hewan
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Prioritas Utama</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Rekam medis digital, jadwal vaksinasi otomatis, dan monitoring kesehatan real-time — semua dalam satu platform yang mudah digunakan.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0 shadow-lg shadow-emerald-500/25">
                    <Link href="/grooming/book">Mulai Sekarang <ChevronRight className="w-4 h-4" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/blog">Baca Tips Kesehatan</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Mock health card */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-2xl shadow-emerald-500/10 border border-emerald-100 dark:border-emerald-900/30">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-3xl">🐕</div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">Buddy</h3>
                      <p className="text-sm text-muted-foreground">Golden Retriever • 3 tahun</p>
                      <span className="inline-flex items-center gap-1 text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Sehat
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Vaksin Rabies", date: "15 Jun 2025", status: "Aktif", color: "emerald" },
                      { label: "Vaksin Distemper", date: "20 Mar 2025", status: "Aktif", color: "emerald" },
                      { label: "Vaksin Parvovirus", date: "05 Agu 2024", status: "Segera", color: "amber" },
                    ].map((v) => (
                      <div key={v.label} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2">
                          <Syringe className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{v.label}</p>
                            <p className="text-xs text-muted-foreground">{v.date}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${v.color === "emerald" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"}`}>
                          {v.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Berat badan stabil: 28.5 kg</span>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-2xl px-4 py-2 shadow-xl border border-gray-100 dark:border-gray-800"
                >
                  <p className="text-xs font-bold text-gray-900 dark:text-white">🛡️ Vaksin up-to-date!</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <s.icon className="w-6 h-6 text-emerald-200 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-sm text-emerald-200">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Fitur <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Kesehatan Lengkap</span>
            </h2>
            <p className="text-lg text-muted-foreground">Semua yang kamu butuhkan untuk menjaga kesehatan hewan peliharaan ada di sini.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border-0 shadow-sm card-hover h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-sm`}>
                      <f.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{f.description}</p>
                    <ul className="space-y-2">
                      {f.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Health Tips */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Tips Kesehatan Harian 🐾</h2>
              <p className="text-muted-foreground">Kebiasaan kecil yang membuat hewan peliharaanmu sehat dan bahagia.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {healthTips.map((tip, i) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-gray-950 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <span className="text-3xl mb-3 block">{tip.emoji}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-5xl mb-4">🏥</div>
              <h2 className="text-3xl font-bold mb-3">Mulai Jaga Kesehatan Hewan Peliharaanmu</h2>
              <p className="text-emerald-100 mb-8">Daftarkan hewanmu dan dapatkan reminder vaksinasi gratis seumur hidup.</p>
              <Button size="lg" asChild className="bg-white text-emerald-700 hover:bg-emerald-50 shadow-xl">
                <Link href="/grooming/book">Mulai Gratis Sekarang</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, MapPin, ChevronRight } from "lucide-react";

const values = [
  { emoji: "❤️", title: "Passion for Pets", desc: "Kami bukan hanya platform teknologi — kami adalah sesama pecinta hewan yang membangun ini karena benar-benar peduli." },
  { emoji: "🔬", title: "Science-Backed Care", desc: "Setiap layanan kami dirancang bersama dokter hewan dan ahli gizi untuk standar tertinggi." },
  { emoji: "🤝", title: "Community First", desc: "Komunitas pet owner adalah inti dari semua yang kami lakukan. Feedback kamu membentuk produk kami." },
  { emoji: "🌱", title: "Sustainable", desc: "Semua produk grooming kami ramah lingkungan dan tidak diuji pada hewan." },
];

const team = [
  { name: "Arief Kusuma", role: "CEO & Co-Founder", emoji: "👨‍💼", image: "/images/tim/arief-kusuma.jpg", desc: "10+ tahun di industri pet care. Dog dad of 2 golden retrievers." },
  { name: "Dr. Siti Rahma", role: "Chief Veterinary Officer", emoji: "👩‍⚕️", image: "/images/tim/siti-rahma.jpg", desc: "Dokter hewan berpengalaman 15 tahun, spesialis nutrisi & preventive care." },
  { name: "Budi Hartono", role: "CTO & Co-Founder", emoji: "👨‍💻", image: "/images/tim/budi-hartono.jpg", desc: "Ex-Gojek engineer. Cat dad. Builder of pet-tech since 2019." },
  { name: "Maya Indira", role: "Head of Grooming", emoji: "💇‍♀️", image: "/images/tim/maya-indira.jpg", desc: "Certified master groomer dengan 200+ satisfied clients per bulan." },
  { name: "Rizal Pratama", role: "Head of Operations", emoji: "📦", image: "/images/tim/rizal-pratama.jpg", desc: "Memastikan setiap pickup, delivery, dan stay berjalan sempurna." },
  { name: "Dina Amelia", role: "Community Manager", emoji: "🌟", image: "/images/tim/dina-amelia.jpg", desc: "Membangun komunitas 50.000+ pet owners aktif di Indonesia." },
];

const milestones = [
  { year: "2020", title: "Lahirnya Central Petshop", desc: "Dimulai dari garasi dengan 3 orang dan mimpi besar.", emoji: "🚀" },
  { year: "2021", title: "1.000 Pengguna Pertama", desc: "Validasi pertama bahwa pet owners butuh solusi all-in-one.", emoji: "🎉" },
  { year: "2022", title: "Series A Funding", desc: "Ekspansi ke 5 kota besar dan launch Pet Hotel pertama.", emoji: "💰" },
  { year: "2023", title: "12.000+ Happy Pets", desc: "Platform #1 pet care di Indonesia versi App Store & Play Store.", emoji: "🏆" },
  { year: "2024", title: "50+ Cabang", desc: "Hadir di Jabodetabek, Bandung, Surabaya, dan terus berkembang.", emoji: "📍" },
];

export default function AboutPage() {
  return (
    <>
      <LandingNavbar />
      <div className="min-h-screen bg-white dark:bg-gray-950">
        {/* Hero */}
        <section className="pt-28 pb-16 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="purple" className="mb-4">Our Story</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-5">
                Kami Membangun Ini <br />
                <span className="gradient-text">Karena Cinta</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Central Petshop lahir dari frustrasi nyata sebagai pet owner — terlalu banyak app berbeda, terlalu susah cari groomer terpercaya, terlalu khawatir saat menitipkan hewan ke hotel. Kami memutuskan untuk membangun solusinya sendiri.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <Users className="w-4 h-4 text-amber-800" /> Tim 50+ orang
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-amber-800" /> 5 kota di Indonesia
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <Heart className="w-4 h-4 text-amber-800" /> 12.000+ happy pets
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <Award className="w-4 h-4 text-amber-800" /> #1 Pet Platform 2024
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Nilai-Nilai Kami</h2>
            <p className="text-muted-foreground">Prinsip yang memandu setiap keputusan yang kami buat.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 text-center"
              >
                <span className="text-4xl block mb-3">{v.emoji}</span>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Perjalanan Kami</h2>
              <p className="text-muted-foreground">Dari garasi kecil hingga platform pet care #1 di Indonesia.</p>
            </motion.div>
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-none w-16 text-right">
                    <span className="text-sm font-bold gradient-text">{m.year}</span>
                  </div>
                  <div className="flex-none w-px bg-amber-200 dark:bg-amber-800 self-stretch mx-2" />
                  <div className="bg-white dark:bg-gray-950 rounded-2xl p-4 flex-1 shadow-sm border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{m.emoji}</span>
                      <h3 className="font-bold text-gray-900 dark:text-white">{m.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Tim Kami 🐾</h2>
            <p className="text-muted-foreground">Pecinta hewan yang membangun masa depan pet care Indonesia.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 text-center"
              >
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center text-4xl mx-auto mb-3 overflow-hidden">
                  <span>{t.emoji}</span>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{t.name}</h3>
                <p className="text-sm text-amber-900 dark:text-amber-700 font-medium mb-2">{t.role}</p>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-brand text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-5xl mb-4">🐾</div>
              <h2 className="text-3xl font-bold mb-3">Bergabunglah Bersama Kami</h2>
              <p className="text-amber-100 mb-8">Jadilah bagian dari komunitas 12.000+ pet owner yang sudah mempercayakan perawatan hewan peliharaan mereka kepada Central Petshop.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button size="lg" asChild className="bg-white text-amber-950 hover:bg-amber-50 shadow-xl">
                  <Link href="/hotel">Mulai Sekarang <ChevronRight className="w-4 h-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/40 text-white hover:bg-white/10">
                  <Link href="/contact">Hubungi Kami</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

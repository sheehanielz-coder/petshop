"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, MapPin, Clock, Shield, Phone, CheckCircle2, ChevronRight, Star } from "lucide-react";

const features = [
  { icon: Clock, title: "Jadwal Fleksibel", desc: "Pilih waktu pickup sesuai jadwalmu — pagi, siang, atau sore. Kami siap 7 hari seminggu.", color: "from-blue-500 to-cyan-600" },
  { icon: MapPin, title: "Tracking Real-time", desc: "Pantau lokasi driver dan status perjalanan hewanmu langsung dari app.", color: "from-violet-500 to-purple-600" },
  { icon: Shield, title: "Driver Tersertifikasi", desc: "Semua driver kami sudah terlatih khusus menangani hewan peliharaan dengan aman.", color: "from-emerald-500 to-teal-600" },
  { icon: Phone, title: "Update Perjalanan", desc: "Foto dan update kondisi hewanmu dikirim selama perjalanan biar kamu tenang.", color: "from-pink-500 to-rose-600" },
];

const steps = [
  { step: "01", title: "Jadwalkan Pickup", desc: "Pilih tanggal, waktu, dan alamat penjemputan lewat app atau WhatsApp kami.", emoji: "📅" },
  { step: "02", title: "Driver Tiba", desc: "Driver tersertifikasi kami tiba tepat waktu dengan kendaraan khusus hewan peliharaan.", emoji: "🚐" },
  { step: "03", title: "Perjalanan Aman", desc: "Hewanmu dibawa dengan nyaman, lengkap dengan AC dan kandang yang sesuai.", emoji: "🛡️" },
  { step: "04", title: "Sampai Tujuan", desc: "Tiba di lokasi (hotel/grooming/klinik), kamu langsung dapat notifikasi konfirmasi.", emoji: "✅" },
];

const serviceAreas = [
  "Jakarta Pusat", "Jakarta Selatan", "Jakarta Barat", "Jakarta Utara", "Jakarta Timur",
  "Tangerang", "Tangerang Selatan", "Bekasi", "Depok", "Bogor"
];

export default function PickupPage() {
  return (
    <>
      <LandingNavbar />
      <div className="min-h-screen bg-white dark:bg-gray-950">
        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-white dark:from-blue-950/20 dark:via-gray-950 dark:to-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-0">Pickup & Delivery</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-5">
                Antar Jemput <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">Hewan Peliharaanmu</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Tidak sempat antar ke grooming atau hotel? Kami jemput dari rumahmu dan antar kembali — aman, tepat waktu, dan hewan bahagia.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button size="lg" asChild className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                  <Link href="/hotel/book">Pesan Sekarang <ChevronRight className="w-4 h-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Hubungi Kami</Link>
                </Button>
              </div>
              {/* Floating trucks */}
              <div className="relative mt-16 flex justify-center gap-6 flex-wrap">
                {[
                  { label: "Free untuk Member Gold & Platinum", icon: Star },
                  { label: "Layanan 7 hari seminggu", icon: Clock },
                  { label: "Driver bersertifikat", icon: Shield },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-2 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-md border border-gray-100 dark:border-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    <item.icon className="w-4 h-4 text-blue-500" />
                    {item.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Kenapa Pilih Layanan Pickup Kami?</h2>
            <p className="text-muted-foreground">Aman, nyaman, dan hewan peliharaanmu selalu dalam kondisi terbaik.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Card className="border-0 shadow-sm h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                      <f.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Cara Kerja Layanan Pickup</h2>
              <p className="text-muted-foreground">Simpel, cepat, dan bisa kamu pantau setiap langkahnya.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-950 rounded-2xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-800 h-full">
                    <div className="text-4xl mb-3">{s.emoji}</div>
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">STEP {s.step}</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-10 text-gray-300 dark:text-gray-600">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage area */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Area Layanan Kami</h2>
              <p className="text-muted-foreground mb-6">Saat ini kami melayani pickup & delivery di area Jabodetabek dengan armada 50+ kendaraan.</p>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span key={area} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                    <MapPin className="w-3 h-3" /> {area}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Area lain segera menyusul — hubungi kami untuk info terbaru
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 text-white text-center"
            >
              <Truck className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Harga Pickup</h3>
              <div className="space-y-3 mt-6">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span>Area Jakarta</span>
                  <span className="font-bold">Rp 35.000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span>Tangerang / Bekasi / Depok</span>
                  <span className="font-bold">Rp 50.000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Member Gold & Platinum</span>
                  <span className="font-bold text-yellow-300">GRATIS 🎉</span>
                </div>
              </div>
              <Button className="mt-6 w-full bg-white text-blue-700 hover:bg-blue-50 shadow-lg" asChild>
                <Link href="/hotel/book">Pesan Pickup Sekarang</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

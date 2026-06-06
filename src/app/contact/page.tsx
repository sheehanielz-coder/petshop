"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, MessageCircle, Clock, CheckCircle2, Sparkles } from "lucide-react";

const contactMethods = [
  { icon: MessageCircle, title: "WhatsApp", desc: "Chat langsung dengan tim kami", value: "+62 812-3456-7890", href: "https://wa.me/6281234567890", color: "bg-green-500", badge: "Fastest" },
  { icon: Mail, title: "Email", desc: "Kami balas dalam 1-2 jam kerja", value: "hello@centralpet.id", href: "mailto:hello@centralpet.id", color: "bg-amber-500", badge: null },
  { icon: Phone, title: "Telepon", desc: "Senin–Sabtu, 08.00–20.00 WIB", value: "+62 21 1234 5678", href: "tel:+622112345678", color: "bg-blue-500", badge: null },
  { icon: MapPin, title: "Kantor Pusat", desc: "Kunjungi kami langsung", value: "Jl. Sukapura No.26, Dayeuhkolot, Bandung", href: "https://www.google.com/maps/dir/?api=1&destination=Jl.+Sukapura+No.26%2C+Sukapura%2C+Kec.+Dayeuhkolot%2C+Kabupaten+Bandung%2C+Jawa+Barat+40267%2C+Indonesia", color: "bg-pink-500", badge: null },
];

const faqs = [
  { q: "Berapa biaya grooming untuk anjing besar?", a: "Biaya grooming untuk anjing besar (>20kg) mulai dari Rp 150.000 untuk Full Grooming. Harga bisa berbeda berdasarkan kondisi bulu dan layanan yang dipilih." },
  { q: "Apakah hewan peliharaan saya aman di hotel?", a: "Absolut. Semua kamar hotel kami dilengkapi CCTV 24/7, staf terlatih yang selalu ada, dan pemeriksaan kesehatan awal sebelum check-in." },
  { q: "Bagaimana cara memesan layanan pickup?", a: "Kamu bisa pesan melalui halaman Hotel atau Grooming, pilih 'Add Pickup Service'. Atau langsung hubungi kami via WhatsApp." },
  { q: "Apakah ada diskon untuk member?", a: "Ya! Member Silver dapat 10% diskon, Gold 20%, dan Platinum 30% untuk semua layanan. Member Gold & Platinum juga gratis pickup & delivery." },
];

export default function ContactPage() {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep("success"); }, 1200);
  };

  return (
    <>
      <LandingNavbar />
      <div className="min-h-screen bg-white dark:bg-gray-950">
        {/* Hero */}
        <section className="pt-28 pb-16 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <Badge variant="purple" className="mb-4">Hubungi Kami</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Ada Pertanyaan? <br />
                <span className="gradient-text">Kami Siap Bantu!</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Tim kami yang ramah siap membantu kamu — dari pertanyaan layanan hingga darurat medis hewan peliharaanmu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact methods */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactMethods.map((m, i) => (
              <motion.a
                key={m.title}
                href={m.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="block bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-amber-200 dark:hover:border-amber-800 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 ${m.color} rounded-xl flex items-center justify-center`}>
                    <m.icon className="w-5 h-5 text-white" />
                  </div>
                  {m.badge && (
                    <span className="text-xs font-bold px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">{m.badge}</span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-amber-950 dark:group-hover:text-amber-700 transition-colors">{m.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{m.desc}</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{m.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Form + FAQ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Kirim Pesan</h2>
              {step === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-lg text-center border border-gray-100 dark:border-gray-800"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-4"
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Pesan Terkirim!</h3>
                  <p className="text-muted-foreground text-sm">
                    Terima kasih <span className="font-semibold text-gray-900 dark:text-white">{name}</span>! Tim kami akan membalas ke <span className="font-medium">{email}</span> dalam 1–2 jam kerja.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1.5">Nama Lengkap *</label>
                    <Input placeholder="Nama kamu" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1.5">Email *</label>
                    <Input type="email" placeholder="email@kamu.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1.5">Pesan *</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tuliskan pertanyaan atau pesanmu di sini..."
                      rows={5}
                      required
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-700/30 focus:border-amber-700 resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" loading={loading} disabled={!name || !email || !message}>
                    Kirim Pesan
                  </Button>
                </form>
              )}
            </motion.div>

            {/* FAQ */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pertanyaan Umum</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800"
                  >
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">{faq.q}</p>
                        <p className="text-sm text-muted-foreground">{faq.a}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-800">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-amber-900" />
                  <span className="text-sm font-semibold text-amber-950 dark:text-amber-700">Jam Operasional</span>
                </div>
                <p className="text-sm text-muted-foreground">Senin–Sabtu: 08.00–20.00 WIB</p>
                <p className="text-sm text-muted-foreground">Minggu & Libur: 09.00–17.00 WIB</p>
                <p className="text-xs text-amber-900 dark:text-amber-700 mt-2 font-medium">WhatsApp tersedia 24/7 untuk kondisi darurat 🚨</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-amber-800" />
              Lokasi Kami
            </h2>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-700/10 border border-gray-100 dark:border-gray-800">
              {/* Map iframe */}
              <div className="relative h-[420px] md:h-[500px]">
                <iframe
                  src="https://maps.google.com/maps?q=Jl.+Sukapura+No.26+Dayeuhkolot+Kabupaten+Bandung+Jawa+Barat+40267&output=embed&z=16&hl=id"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Lokasi Central Petshop"
                  allowFullScreen
                />

                {/* Gradient overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                {/* Animated pulse marker overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-14 h-14 rounded-full bg-amber-500/40 border-2 border-amber-700"
                  />
                </div>
              </div>

              {/* Info card floating over the map */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute top-5 left-5 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-5 max-w-xs w-full border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-xl gradient-brand flex items-center justify-center shadow-md shadow-amber-700/30">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">Central Petshop</p>
                    <p className="text-[10px] text-amber-800 font-medium">Kantor & Layanan Utama</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Jl. Sukapura No.26, Sukapura,<br />
                  Kec. Dayeuhkolot, Kabupaten Bandung,<br />
                  Jawa Barat 40267
                </p>
                <div className="space-y-2">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Jl.+Sukapura+No.26%2C+Sukapura%2C+Kec.+Dayeuhkolot%2C+Kabupaten+Bandung%2C+Jawa+Barat+40267%2C+Indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl gradient-brand text-white text-xs font-bold hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                    Petunjuk Arah
                  </a>
                  <a
                    href="https://maps.google.com/maps?q=Jl.+Sukapura+No.26+Dayeuhkolot+Bandung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </motion.div>

              {/* Hours badge bottom right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-5 right-5 bg-white dark:bg-gray-900 rounded-2xl shadow-lg px-4 py-3 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">Buka Sekarang</p>
                </div>
                <p className="text-[10px] text-muted-foreground">Sen–Sab: 08.00–20.00 WIB</p>
                <p className="text-[10px] text-muted-foreground">Minggu: 09.00–17.00 WIB</p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ArrowRight, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Jl.+Sukapura+No.26%2C+Sukapura%2C+Kec.+Dayeuhkolot%2C+Kabupaten+Bandung%2C+Jawa+Barat+40267%2C+Indonesia";

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Jl.+Sukapura+No.26+Dayeuhkolot+Kabupaten+Bandung+Jawa+Barat+40267&output=embed&z=16&hl=id";

const hours = [
  { day: "Senin – Sabtu", time: "08.00 – 20.00 WIB" },
  { day: "Minggu & Libur", time: "09.00 – 17.00 WIB" },
  { day: "WhatsApp", time: "24 Jam (Darurat)" },
];

export function LocationSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900" id="lokasi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm font-semibold text-amber-900 dark:text-amber-700 uppercase tracking-wider mb-3">
            Temukan Kami
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Lokasi <span className="gradient-text">Central Petshop</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kami berlokasi di Bandung dan siap melayani kamu setiap hari.
            Datang langsung atau hubungi kami dulu!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Address card */}
            <div className="bg-white dark:bg-gray-950 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center shadow-md shadow-amber-700/30">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">Alamat</p>
                  <p className="text-xs text-amber-800 font-medium">Kantor & Layanan Utama</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                Jl. Sukapura No.26, Sukapura,<br />
                Kec. Dayeuhkolot,<br />
                Kabupaten Bandung,<br />
                Jawa Barat 40267
              </p>
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity"
              >
                <Navigation className="w-4 h-4" />
                Petunjuk Arah
              </a>
            </div>

            {/* Hours card */}
            <div className="bg-white dark:bg-gray-950 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-sm">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">Jam Operasional</p>
              </div>
              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{h.day}</span>
                    <span className={`text-xs font-semibold ${i === 2 ? "text-green-600 dark:text-green-400" : "text-gray-800 dark:text-gray-200"}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">Buka sekarang</span>
              </div>
            </div>

            {/* Contact quick */}
            <div className="bg-white dark:bg-gray-950 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">Kontak</p>
              </div>
              <div className="space-y-2 mb-4">
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between group">
                  <span className="text-xs text-muted-foreground">WhatsApp</span>
                  <span className="text-xs font-medium text-gray-800 dark:text-gray-200 group-hover:text-green-500 transition-colors">+62 812-3456-7890</span>
                </a>
                <a href="mailto:hello@centralpet.id"
                  className="flex items-center justify-between group">
                  <span className="text-xs text-muted-foreground">Email</span>
                  <span className="text-xs font-medium text-gray-800 dark:text-gray-200 group-hover:text-amber-800 transition-colors">hello@centralpet.id</span>
                </a>
              </div>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/contact">
                  Lihat Semua Kontak <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-700/10 border border-gray-100 dark:border-gray-800 h-[420px] md:h-[580px]">
              {/* iframe */}
              <iframe
                src={MAPS_EMBED}
                className="w-full h-full border-0"
                loading="lazy"
                title="Lokasi Central Petshop — Jl. Sukapura No.26 Bandung"
                allowFullScreen
              />

              {/* bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

              {/* Pulsing marker */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-full bg-amber-500/50 border-2 border-amber-700"
                />
              </div>

              {/* Open maps CTA bottom */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-5 left-1/2 -translate-x-1/2"
              >
                <a
                  href={MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 rounded-full shadow-lg text-sm font-bold text-gray-900 dark:text-white border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
                >
                  <Navigation className="w-4 h-4 text-amber-800" />
                  Buka di Google Maps
                  <ArrowRight className="w-3.5 h-3.5 text-amber-800" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

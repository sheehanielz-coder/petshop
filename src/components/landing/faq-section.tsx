"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Hewan peliharaan apa saja yang bisa menggunakan layanan ini?",
    a: "Kami saat ini melayani anjing, kucing, kelinci, dan hewan eksotik kecil. Fasilitas kami dirancang agar setiap spesies merasa nyaman dan aman di area terpisah.",
  },
  {
    q: "Bagaimana cara booking hotel untuk hewan peliharaan?",
    a: "Pilih kategori kamar (Standard, Deluxe, atau VIP Suite), tentukan tanggal check-in/check-out, tambahkan permintaan khusus, dan konfirmasi booking. Prosesnya cepat dan mudah!",
  },
  {
    q: "Bisakah saya memantau hewan peliharaan saya saat menginap?",
    a: "Tentu! Kami menyediakan feed aktivitas detail yang diperbarui sepanjang hari — jadwal makan, sesi bermain, waktu istirahat, dan foto. Seperti media sosial khusus untuk masa menginap hewanmu.",
  },
  {
    q: "Vaksinasi apa yang diperlukan sebelum menginap?",
    a: "Semua hewan peliharaan harus memiliki vaksinasi inti yang lengkap (Rabies, DHPP untuk anjing; FVRCP untuk kucing). Kamu bisa upload bukti vaksinasi langsung saat booking.",
  },
  {
    q: "Bagaimana cara kerja reward point?",
    a: "Kamu mendapatkan poin dari setiap booking hotel, sesi grooming, dan pembelian di toko. Poin bisa ditukarkan dengan diskon, layanan gratis, dan produk eksklusif.",
  },
  {
    q: "Apakah layanan pickup & delivery tersedia di kota saya?",
    a: "Saat ini kami melayani Jakarta, Bandung, Surabaya, Bali, dan Yogyakarta. Kota baru terus ditambahkan. Cek halaman Pickup untuk info terbaru area layanan.",
  },
  {
    q: "Bisakah saya membatalkan atau menjadwal ulang booking?",
    a: "Ya — booking dapat dibatalkan atau dijadwal ulang hingga 24 jam sebelum check-in tanpa biaya. Dalam 24 jam, biaya pembatalan 50% berlaku.",
  },
  {
    q: "Bagaimana cara memilih paket membership yang tepat?",
    a: "Silver cocok untuk pengguna sesekali. Gold ideal untuk pengguna rutin dengan diskon 20% dan pickup gratis. Platinum terbaik untuk keluarga multi-hewan yang butuh layanan lengkap.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-gray-950" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-amber-900 dark:text-amber-700 uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ada Pertanyaan? <span className="gradient-text">Kami Jawab.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={cn(
                "rounded-2xl border transition-all duration-200",
                open === i
                  ? "border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10"
                  : "border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
              )}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 shrink-0 text-amber-800 transition-transform duration-200",
                    open === i && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

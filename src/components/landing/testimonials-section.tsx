"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Wijaya",
    role: "Dog Mom • Member Gold",
    avatar: "SW",
    rating: 5,
    content: "Central Pet benar-benar mengubah cara aku merawat Max. Staf hotel memperlakukannya seperti raja, dan feed aktivitas harian bikin aku tenang saat business trip. Platformnya keren banget!",
    pet: "Max, Golden Retriever",
  },
  {
    name: "Budi Santoso",
    role: "Cat Dad • Member Platinum",
    avatar: "BS",
    rating: 5,
    content: "Sebagai member Platinum, diskon yang aku dapat sudah balik modal 3x lipat. Fitur rekam medis sangat membantu — dokter hewanku suka banget dengan riwayat vaksinasi yang terorganisir.",
    pet: "Luna & Mochi, Kucing Persia",
  },
  {
    name: "Dewi Kusuma",
    role: "Multi-pet Owner • Member Silver",
    avatar: "DK",
    rating: 5,
    content: "Dulu booking grooming untuk 3 anjingku itu mimpi buruk. Sekarang cukup 2 menit di Central Pet. Foto grooming yang mereka kirim lucunya minta ampun!",
    pet: "Rocky, Bella & Coco",
  },
  {
    name: "Ahmad Fauzi",
    role: "Rabbit Owner • Member Gold",
    avatar: "AF",
    rating: 5,
    content: "Awalnya skeptis sama platform pet premium, tapi kualitasnya luar biasa. Shopnya lengkap, pengiriman cepat, dan customer support selalu responsif. 10/10 recommended!",
    pet: "Snowy, Holland Lop",
  },
  {
    name: "Maya Putri",
    role: "Cat Mom • Member Platinum",
    avatar: "MP",
    rating: 5,
    content: "Fitur pet passport-nya jenius. Semua riwayat medis, vaksin, dan grooming Whiskers ada di satu tempat yang cantik. Dokter hewanku sampai tanya aku pakai app apa!",
    pet: "Whiskers, Maine Coon",
  },
  {
    name: "Reza Pratama",
    role: "Dog Dad • Member Gold",
    avatar: "RP",
    rating: 5,
    content: "Layanan pickup-nya luar biasa praktis. Mereka jemput Bruno untuk menginap dan antar balik — prosesnya sangat mulus. Stafnya benar-benar sayang hewan, kerasa banget.",
    pet: "Bruno, Labrador",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-amber-900 dark:text-amber-700 uppercase tracking-wider mb-3">
            Testimoni
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Dipercaya Pet Owner
            <span className="gradient-text"> di Seluruh Indonesia</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Lebih dari 12.000 keluarga pet owner mempercayai Central Pet. Ini kata mereka.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-xs text-amber-900 dark:text-amber-700 mt-0.5">{t.pet}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

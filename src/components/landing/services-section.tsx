"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hotel, Scissors, ShoppingBag, Heart, Truck, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Hotel,
    title: "Pet Hotel",
    description:
      "Akomodasi mewah dengan pilihan Standard, Deluxe, dan VIP Suite. Update aktivitas harian, foto, dan perawatan profesional 24/7.",
    href: "/hotel",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    features: ["Update aktivitas harian", "3 kategori kamar", "Staf terlatih"],
  },
  {
    icon: Scissors,
    title: "Grooming",
    description:
      "Grooming profesional dari mandi & potong dasar hingga perawatan spa penuh. Groomer bersertifikat, produk premium, jadwal online.",
    href: "/grooming",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    features: ["4 paket layanan", "Groomer bersertifikat", "Update foto"],
  },
  {
    icon: ShoppingBag,
    title: "Pet Shop",
    description:
      "Pilihan produk premium — makanan, suplemen, aksesori, mainan, dan produk grooming. Pengiriman cepat ke pintu rumahmu.",
    href: "/shop",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    features: ["500+ produk", "Pengiriman hari ini", "Program loyalitas"],
  },
  {
    icon: Heart,
    title: "Kesehatan Hewan",
    description:
      "Paspor kesehatan digital untuk setiap hewan. Rekam vaksinasi, riwayat medis, pemantauan berat badan, dan rekomendasi dokter hewan.",
    href: "/health",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    features: ["Rekam medis digital", "Tracking vaksinasi", "Alert kesehatan"],
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    description:
      "Penjemputan dan pengantaran terjadwal untuk check-in hotel, janji grooming, dan pesanan produk langsung dari rumahmu.",
    href: "/pickup",
    color: "from-blue-500 to-cyan-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    features: ["Jadwal fleksibel", "Tracking real-time", "Driver profesional"],
  },
  {
    icon: Star,
    title: "Membership",
    description:
      "Tier Silver, Gold, dan Platinum dengan diskon eksklusif, prioritas booking, poin reward, dan manfaat khusus member.",
    href: "/membership",
    color: "from-yellow-500 to-amber-600",
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    features: ["Hemat hingga 30%", "Poin reward", "Dukungan prioritas"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3">
            Semua Ada di Satu Tempat
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ekosistem Perawatan Hewan
            <span className="gradient-text"> Paling Lengkap</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Dari grooming harian hingga menginap di hotel mewah, kami memenuhi setiap kebutuhan
            kesehatan, kebahagiaan, dan kenyamanan hewan peliharaanmu.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
              <Link
                href={service.href}
                className={cn(
                  "group block p-6 rounded-2xl border border-gray-100 dark:border-gray-800 card-hover",
                  "bg-white dark:bg-gray-900 hover:border-purple-200 dark:hover:border-purple-800"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br",
                    service.color
                  )}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <div className={cn("w-1.5 h-1.5 rounded-full bg-gradient-to-r", service.color)} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div className="flex items-center gap-1 text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:gap-2 transition-all">
                  Pelajari lebih lanjut <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

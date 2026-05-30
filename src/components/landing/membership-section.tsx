"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Silver",
    price: "149.000",
    period: "/bulan",
    gradient: "from-slate-400 to-slate-600",
    borderColor: "border-slate-200 dark:border-slate-700",
    popular: false,
    benefits: [
      "Diskon 10% semua layanan",
      "100 poin reward per booking",
      "Prioritas dukungan via email",
      "Newsletter kesehatan bulanan",
      "2x grooming basic gratis/tahun",
    ],
  },
  {
    name: "Gold",
    price: "299.000",
    period: "/bulan",
    gradient: "from-amber-400 to-amber-600",
    borderColor: "border-amber-300 dark:border-amber-700",
    popular: true,
    benefits: [
      "Diskon 20% semua layanan",
      "250 poin reward per booking",
      "Prioritas dukungan telepon & chat",
      "Pickup & delivery gratis",
      "4x grooming full gratis/tahun",
      "Check-in kesehatan bulanan",
    ],
  },
  {
    name: "Platinum",
    price: "499.000",
    period: "/bulan",
    gradient: "from-violet-500 to-purple-700",
    borderColor: "border-purple-300 dark:border-purple-700",
    popular: false,
    benefits: [
      "Diskon 30% semua layanan",
      "500 poin reward per booking",
      "Manajer akun pribadi",
      "Pickup & delivery gratis tanpa batas",
      "Grooming tanpa batas",
      "Konsultasi dokter hewan per 3 bulan",
      "Upgrade kamar VIP hotel",
    ],
  },
];

export function MembershipSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900" id="membership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3">
            Paket Membership
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hemat Lebih, Dapat <span className="gradient-text">Lebih Banyak</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Bergabunglah dengan ribuan pet owner yang hemat di setiap layanan dengan membership kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className={cn(
                "relative rounded-2xl border-2 p-8 bg-white dark:bg-gray-950",
                tier.borderColor,
                tier.popular && "shadow-2xl shadow-amber-500/10 scale-105"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    <Zap className="w-3.5 h-3.5" /> Paling Populer
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4", tier.gradient)}>
                  <span className="text-white font-bold text-sm">{tier.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tier.name}</h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-xs text-muted-foreground">Rp</span>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                  <span className="text-sm text-muted-foreground mb-1">{tier.period}</span>
                </div>
              </div>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                    <Check className={cn("w-4 h-4 shrink-0 mt-0.5 bg-gradient-to-br rounded-full p-0.5 text-white", tier.gradient)} />
                    {b}
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "default" : "outline"}
                className={cn("w-full", tier.popular && "shadow-lg shadow-purple-500/20")}
                asChild
              >
                <Link href="/membership">Pilih {tier.name}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

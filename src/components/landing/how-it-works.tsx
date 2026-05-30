"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserPlus, PawPrint, CalendarCheck, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Pilih Layanan",
    description:
      "Cukup pilih layanan yang kamu butuhkan — hotel, grooming, pickup, atau shop. Semua ada di satu platform.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: PawPrint,
    step: "02",
    title: "Set Up Pet Profiles",
    description:
      "Each pet gets their own digital passport — health records, vaccinations, activity history, and a personal photo gallery.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Book Services",
    description:
      "Book hotel stays, grooming sessions, or schedule pickups in minutes. Choose dates, rooms, and services that fit your needs.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Track & Enjoy",
    description:
      "Get real-time activity updates, beautiful photo feeds, health alerts, and a seamless post-service experience.",
    color: "from-emerald-500 to-teal-600",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple Steps to
            <span className="gradient-text"> Happy Pets</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started takes minutes. Then everything just works.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-violet-200 via-pink-200 to-emerald-200 dark:from-violet-800 dark:via-pink-800 dark:to-emerald-800" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center relative"
              >
                {/* Icon circle */}
                <div className="relative inline-flex mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl mx-auto`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full gradient-brand text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <Button size="lg" asChild className="shadow-xl shadow-purple-500/20 group">
            <Link href="/hotel">
              Mulai Sekarang — Gratis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

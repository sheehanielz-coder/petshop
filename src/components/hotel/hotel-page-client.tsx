"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Hotel, Wifi, Coffee, Shield, Camera, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type RoomCategory = "STANDARD" | "DELUXE" | "VIP_SUITE";

interface HotelRoom {
  id: string;
  name: string;
  category: RoomCategory;
  description: string;
  capacity: number;
  pricePerNight: number;
  features: string[];
  images: string[];
  isAvailable: boolean;
  roomNumber: string;
  floorNumber: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Props {
  rooms: HotelRoom[];
}

const categoryLabels: Record<RoomCategory, string> = {
  STANDARD: "Standard",
  DELUXE: "Deluxe",
  VIP_SUITE: "VIP Suite",
};

const categoryColors: Record<RoomCategory, string> = {
  STANDARD: "from-slate-500 to-gray-600",
  DELUXE: "from-amber-500 to-orange-600",
  VIP_SUITE: "from-violet-600 to-purple-700",
};

const defaultFeatures = ["Makan Harian", "Waktu Bermain", "Cek Kesehatan", "Update Aktivitas"];

const allCategories: RoomCategory[] = ["STANDARD", "DELUXE", "VIP_SUITE"];

export function HotelPageClient({ rooms }: Props) {
  const [activeCategory, setActiveCategory] = useState<RoomCategory | "ALL">("ALL");
  const filtered =
    activeCategory === "ALL"
      ? rooms
      : rooms.filter((r) => r.category === activeCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="pt-28 pb-16 gradient-hero dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="purple" className="mb-4">Akomodasi Premium untuk Hewan Peliharaan</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="gradient-text">Pet Hotel</span> Mewah
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Berikan hewan peliharaanmu liburan yang layak mereka dapatkan. 3 kategori kamar
              menawarkan segalanya — dari menginap nyaman hingga pengalaman VIP terbaik.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: Shield, label: "Bersertifikat dokter hewan" },
                { icon: Camera, label: "Update foto harian" },
                { icon: Coffee, label: "Makanan berkualitas" },
                { icon: Wifi, label: "Feed aktivitas real-time" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/60 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <f.icon className="w-4 h-4 text-purple-600" />
                  {f.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Room filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[{ label: "Semua Kamar", value: "ALL" as const }, ...allCategories.map((c) => ({ label: categoryLabels[c], value: c }))].map(
              (cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === cat.value
                      ? "gradient-brand text-white shadow-lg shadow-purple-500/25"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                >
                  {cat.label}
                </button>
              )
            )}
          </div>

          {/* Room cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((room, i) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Card className="overflow-hidden border-0 shadow-sm card-hover h-full flex flex-col">
                  {/* Room image */}
                  <div className={cn("h-48 bg-gradient-to-br flex items-center justify-center relative overflow-hidden", categoryColors[room.category])}>
                    <Hotel className="w-16 h-16 text-white/60" />
                    {room.images[0] && (
                      <img
                        src={room.images[0]}
                        alt={room.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                    )}
                    {room.category === "VIP_SUITE" && (
                      <div className="absolute top-3 right-3 bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                        ⭐ VIP
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{room.name}</h3>
                        <p className="text-xs text-muted-foreground">Kamar {room.roomNumber} · Lantai {room.floorNumber}</p>
                      </div>
                      <Badge
                        variant={room.category === "VIP_SUITE" ? "default" : room.category === "DELUXE" ? "warning" : "secondary"}
                        className="text-xs shrink-0"
                      >
                        {categoryLabels[room.category]}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 flex-1">{room.description}</p>

                    {/* Capacity */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 mb-4">
                      <Users className="w-3.5 h-3.5" />
                      Kapasitas {room.capacity} hewan peliharaan
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {(room.features.length > 0 ? room.features : defaultFeatures).slice(0, 4).map((f) => (
                        <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 font-medium">
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Price + Book */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                          {formatCurrency(room.pricePerNight)}
                        </span>
                        <span className="text-xs text-muted-foreground"> /malam</span>
                      </div>
                      <Button size="sm" asChild>
                        <Link href={`/hotel/book?roomId=${room.id}`}>
                          Pesan Sekarang <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

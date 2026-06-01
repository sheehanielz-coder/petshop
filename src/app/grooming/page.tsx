import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { Scissors, Droplets, Sparkles, Check, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Grooming Hewan Peliharaan — Central Pet" };

const services = [
  {
    name: "Grooming Basic",
    price: 75000,
    icon: Droplets,
    color: "from-blue-500 to-cyan-600",
    duration: "60 menit",
    includes: ["Mandi & blow dry", "Sisir bulu", "Bersihkan telinga", "Potong kuku", "Semprot cologne"],
  },
  {
    name: "Grooming Full",
    price: 150000,
    icon: Scissors,
    color: "from-amber-700 to-amber-900",
    duration: "90 menit",
    popular: true,
    includes: ["Semua di Basic", "Potong & styling rambut", "Kondisioner dalam", "Sikat gigi", "Perawatan telapak kaki"],
  },
  {
    name: "Perawatan Spa",
    price: 250000,
    icon: Sparkles,
    color: "from-pink-500 to-rose-600",
    duration: "2 jam",
    includes: ["Semua di Full", "Mandi aromaterapi", "Pijat handuk panas", "Facial blueberry", "Produk premium", "Bandana & dasi kupu-kupu"],
  },
];

export default function GroomingPage() {
  return (
    <>
      <LandingNavbar />
      <div className="min-h-screen bg-white dark:bg-gray-950">
        {/* Hero */}
        <section className="pt-28 pb-16 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="purple" className="mb-4">Grooming Profesional</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Layanan <span className="gradient-text">Grooming</span><br />Terbaik
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Dari mandi segar hingga perawatan spa penuh — hewan peliharaanmu berhak tampil dan merasa terbaik.
            </p>
            <Button size="lg" asChild>
              <Link href="/grooming/book">Buat Janji <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={service.name} className={`border-0 shadow-sm ${service.popular ? "ring-2 ring-amber-700 shadow-xl shadow-amber-700/10" : ""} h-full flex flex-col`}>
                {service.popular && (
                  <div className="text-center py-1.5 gradient-brand">
                    <span className="text-xs font-bold text-white">Most Popular</span>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-sm`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{service.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{service.duration}</p>
                  <div className="flex items-end gap-1 mb-5">
                    <span className="text-2xl font-bold gradient-text">{formatCurrency(service.price)}</span>
                    <span className="text-xs text-muted-foreground mb-1">/session</span>
                  </div>
                  <ul className="space-y-2 flex-1 mb-5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant={service.popular ? "default" : "outline"} className="w-full" asChild>
                    <Link href="/grooming/book">Pesan Sekarang</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

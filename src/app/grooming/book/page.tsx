"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Scissors, ChevronLeft, Check, Sparkles } from "lucide-react";

const services = [
  { value: "BASIC",     label: "Grooming Basic",  price: 75000,  duration: "60 menit",  description: "Mandi, sisir, bersihkan telinga, potong kuku" },
  { value: "FULL",      label: "Grooming Full",   price: 150000, duration: "90 menit",  description: "Basic + potong rambut, kondisioner, sikat gigi", popular: true },
  { value: "SPA",       label: "Perawatan Spa",   price: 250000, duration: "2 jam",     description: "Full + aromaterapi, pijat, facial" },
  { value: "NAIL_TRIM", label: "Potong Kuku",     price: 35000,  duration: "15 menit",  description: "Potong dan kikir kuku cepat" },
];

const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

export default function GroomingBookPage() {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("FULL");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  const selectedServiceData = services.find((s) => s.value === selectedService);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!petName || !ownerName || !phone || !selectedDate) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("success");
    }, 1200);
  };

  if (step === "success") {
    return (
      <>
        <LandingNavbar />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-xl text-center max-w-md w-full"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-700/30"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Booking Diterima!</h2>
            <p className="text-muted-foreground mb-2">
              Hei <span className="font-semibold text-gray-900 dark:text-white">{ownerName}</span>! Permintaan grooming untuk <span className="font-semibold text-gray-900 dark:text-white">{petName}</span> sudah kami terima.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Tim kami akan menghubungi kamu di <span className="font-medium">{phone}</span> dalam 1–2 jam untuk konfirmasi jadwal.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-4 text-sm text-left space-y-2 mb-8">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Layanan</span>
                <span className="font-medium">{selectedServiceData?.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tanggal</span>
                <span className="font-medium">
                  {new Date(selectedDate).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })} · {selectedTime}
                </span>
              </div>
              <div className="flex justify-between border-t border-amber-200 dark:border-amber-700 pt-2 font-bold">
                <span>Harga</span>
                <span className="gradient-text">{formatCurrency(selectedServiceData?.price ?? 0)}</span>
              </div>
            </div>
            <Button className="w-full" asChild>
              <Link href="/">Kembali ke Home</Link>
            </Button>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <LandingNavbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Link
            href="/grooming"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" /> Kembali ke Grooming
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center shadow-md shadow-amber-700/20">
              <Scissors className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pesan Grooming</h1>
              <p className="text-sm text-muted-foreground">Isi form — tim kami konfirmasi dalam 1–2 jam.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Pet & Owner info */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-5 space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Info Hewan & Pemilik</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1.5">Nama Hewan *</label>
                    <Input placeholder="e.g. Mochi, Luna..." value={petName} onChange={(e) => setPetName(e.target.value)} required />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1.5">Nama Pemilik *</label>
                    <Input placeholder="Nama lengkap" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1.5">No. WhatsApp *</label>
                  <Input placeholder="08xx-xxxx-xxxx" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
              </CardContent>
            </Card>

            {/* Service selection */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-5">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Pilih Layanan</h3>
                <div className="space-y-2">
                  {services.map((s) => (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => setSelectedService(s.value)}
                      className={`w-full flex items-center gap-4 p-3.5 rounded-xl border-2 text-left transition-all ${
                        selectedService === s.value
                          ? "border-amber-700 bg-amber-50 dark:bg-amber-900/20"
                          : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">{s.label}</p>
                          {s.popular && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full gradient-brand text-white">Populer</span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{s.description} · {s.duration}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-bold gradient-text">{formatCurrency(s.price)}</p>
                      </div>
                      {selectedService === s.value && <Check className="w-4 h-4 text-amber-800 shrink-0" />}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Date & Time */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-5 space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Jadwal</h3>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1.5">Tanggal *</label>
                  <input
                    type="date"
                    min={minDateStr}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-700/30 focus:border-amber-700"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1.5">Jam</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`py-2 rounded-xl text-xs font-medium border-2 transition-all ${
                          selectedTime === t
                            ? "border-amber-700 bg-amber-50 dark:bg-amber-900/20 text-amber-950 dark:text-amber-700"
                            : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special requests */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-5">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Catatan Khusus (opsional)</h3>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Alergi, preferensi, atau instruksi khusus..."
                  rows={3}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-700/30 focus:border-amber-700 resize-none"
                />
              </CardContent>
            </Card>

            {/* Summary */}
            <AnimatePresence>
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                >
                  <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10 shadow-sm">
                    <CardContent className="p-5 text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Layanan</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedServiceData?.label}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Jadwal</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {new Date(selectedDate).toLocaleDateString("id-ID", { day: "numeric", month: "long" })} · {selectedTime}
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-amber-200 dark:border-amber-700 pt-2 font-bold">
                        <span className="text-gray-900 dark:text-white">Total</span>
                        <span className="gradient-text">{formatCurrency(selectedServiceData?.price ?? 0)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              loading={loading}
              disabled={!petName || !ownerName || !phone || !selectedDate}
            >
              Kirim Permintaan Booking
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

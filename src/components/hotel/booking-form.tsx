"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/utils";
import { Hotel, Calendar, PawPrint, ArrowRight, Check, Sparkles } from "lucide-react";

interface RoomStatic {
  id: string;
  name: string;
  pricePerNight: number;
  category: string;
}

interface Props {
  rooms: RoomStatic[];
  preselectedRoomId?: string;
}

export function HotelBookingForm({ rooms, preselectedRoomId }: Props) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [roomId, setRoomId] = useState(preselectedRoomId ?? rooms[0]?.id ?? "");
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const activeRoom = rooms.find((r) => r.id === roomId);
  const nights =
    checkIn && checkOut
      ? Math.max(0, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000))
      : 0;
  const total = activeRoom && nights > 0 ? nights * activeRoom.pricePerNight : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomId || !petName || !ownerName || !phone || !checkIn || !checkOut) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("success");
    }, 1200);
  };

  if (step === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/30"
        >
          <Sparkles className="w-10 h-10 text-white" />
        </motion.div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Permintaan Diterima!</h2>
        <p className="text-muted-foreground mb-2">
          Hei <span className="font-semibold text-gray-900 dark:text-white">{ownerName}</span>! Permintaan booking hotel untuk <span className="font-semibold text-gray-900 dark:text-white">{petName}</span> sudah kami terima.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Tim kami akan menghubungi kamu di <span className="font-medium">{phone}</span> dalam 1–2 jam untuk konfirmasi reservasi.
        </p>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-4 text-sm text-left space-y-2 mb-8">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Kamar</span>
            <span className="font-medium">{activeRoom?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Check-in</span>
            <span className="font-medium">{new Date(checkIn).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Check-out</span>
            <span className="font-medium">{new Date(checkOut).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
          {total > 0 && (
            <div className="flex justify-between border-t border-purple-200 dark:border-purple-700 pt-2 font-bold">
              <span>Estimasi Total</span>
              <span className="gradient-text">{formatCurrency(total)}</span>
            </div>
          )}
        </div>
        <Button className="w-full" asChild>
          <a href="/">Kembali ke Home</a>
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6 space-y-5">
          {/* Room Type */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block flex items-center gap-1.5">
              <Hotel className="w-4 h-4 text-purple-500" /> Tipe Kamar
            </label>
            <div className="space-y-2">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => setRoomId(room.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border-2 text-left transition-all ${
                    roomId === room.id
                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                  }`}
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{room.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold gradient-text">{formatCurrency(room.pricePerNight)}/malam</span>
                    {roomId === room.id && <Check className="w-4 h-4 text-purple-500" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pet & Owner */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                <PawPrint className="inline w-4 h-4 mr-1 text-purple-500" /> Nama Hewan *
              </label>
              <Input placeholder="e.g. Mochi, Buddy..." value={petName} onChange={(e) => setPetName(e.target.value)} required />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Nama Pemilik *</label>
              <Input placeholder="Nama lengkap..." value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">No. WhatsApp *</label>
            <Input placeholder="08xx-xxxx-xxxx" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                <Calendar className="inline w-4 h-4 mr-1 text-purple-500" /> Check-in *
              </label>
              <Input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} min={new Date().toISOString().split("T")[0]} required />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Check-out *</label>
              <Input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} min={checkIn || new Date().toISOString().split("T")[0]} required />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Catatan Khusus (opsional)</label>
            <textarea
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="Alergi, obat-obatan, kebutuhan khusus..."
              rows={3}
              className="flex w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
            />
          </div>
        </CardContent>
      </Card>

      {activeRoom && nights > 0 && (
        <Card className="border-purple-100 dark:border-purple-900 bg-purple-50/50 dark:bg-purple-900/10 shadow-sm">
          <CardContent className="p-5 text-sm space-y-2">
            <div className="flex justify-between text-muted-foreground">
              <span>{formatCurrency(activeRoom.pricePerNight)} × {nights} malam</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900 dark:text-white pt-2 border-t border-purple-200 dark:border-purple-800">
              <span>Estimasi Total</span>
              <span className="gradient-text">{formatCurrency(total)}</span>
            </div>
          </CardContent>
        </Card>
      )}

      <Button type="submit" className="w-full" size="lg" loading={loading}>
        Kirim Permintaan Booking <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );
}

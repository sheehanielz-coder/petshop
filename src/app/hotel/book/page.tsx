import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { HotelBookingForm } from "@/components/hotel/booking-form";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pesan Kamar Hotel" };

const rooms = [
  { id: "1", name: "Kamar Standard", pricePerNight: 150000, category: "STANDARD" },
  { id: "2", name: "Kamar Deluxe",   pricePerNight: 280000, category: "DELUXE" },
  { id: "3", name: "VIP Suite",      pricePerNight: 500000, category: "VIP_SUITE" },
];

type Props = { searchParams: Promise<{ room?: string }> };

export default async function HotelBookPage({ searchParams }: Props) {
  const { room } = await searchParams;
  return (
    <>
      <LandingNavbar />
      <div className="min-h-screen gradient-hero pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Pesan Kamar Hotel</h1>
          <p className="text-muted-foreground mb-8">Isi form di bawah, tim kami akan menghubungi kamu dalam 1–2 jam.</p>
          <HotelBookingForm rooms={rooms} preselectedRoomId={room} />
        </div>
      </div>
      <Footer />
    </>
  );
}

import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { HotelPageClient } from "@/components/hotel/hotel-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pet Hotel — Menginap Mewah untuk Hewan Peliharaanmu" };

const rooms = [
  {
    id: "1",
    name: "Kamar Standard",
    category: "STANDARD" as const,
    description: "Kamar nyaman dengan semua yang dibutuhkan hewan peliharaanmu untuk masa menginap yang menyenangkan.",
    capacity: 1,
    pricePerNight: 150000,
    features: ["Makan setiap hari", "Bermain 2x/hari", "Pemantauan kesehatan", "Update foto harian"],
    images: ["/images/hotel/standard.jpg"] as string[],
    isAvailable: true,
    roomNumber: "S-01",
    floorNumber: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Kamar Deluxe",
    category: "DELUXE" as const,
    description: "Kamar deluxe luas dengan tempat tidur premium, mainan, dan waktu bermain ekstra.",
    capacity: 2,
    pricePerNight: 280000,
    features: ["Tempat tidur premium", "Bermain 3x/hari", "Grooming termasuk", "Update video", "Kamar ber-AC"],
    images: ["/images/hotel/deluxe.jpg"] as string[],
    isAvailable: true,
    roomNumber: "D-01",
    floorNumber: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "VIP Suite",
    category: "VIP_SUITE" as const,
    description: "Pengalaman mewah terbaik — suite pribadi dengan perawatan personal 24/7.",
    capacity: 2,
    pricePerNight: 500000,
    features: ["Suite pribadi", "Staf personal 24/7", "Spa treatment", "Kamera live", "Makanan gourmet", "Pickup & delivery"],
    images: ["/images/hotel/vip.jpg"] as string[],
    isAvailable: true,
    roomNumber: "VIP-01",
    floorNumber: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function HotelPage() {
  return (
    <>
      <LandingNavbar />
      <HotelPageClient rooms={rooms} />
      <Footer />
    </>
  );
}

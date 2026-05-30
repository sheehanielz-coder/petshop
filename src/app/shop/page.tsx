import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ShopPageClient } from "@/components/shop/shop-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pet Shop — Premium Products" };

export default function ShopPage() {
  return (
    <>
      <LandingNavbar />
      <ShopPageClient />
      <Footer />
    </>
  );
}

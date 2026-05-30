import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MembershipSection } from "@/components/landing/membership-section";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Paket Membership" };

export default function MembershipPage() {
  return (
    <>
      <LandingNavbar />
      <div className="pt-16">
        <MembershipSection />
      </div>
      <Footer />
    </>
  );
}

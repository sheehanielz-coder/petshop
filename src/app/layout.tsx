import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Central Petshop — Semua Kebutuhan Hewan Peliharaanmu", template: "%s | Central Petshop" },
  description:
    "Platform lengkap untuk pet owner — hotel, grooming, toko, kesehatan, pickup & delivery dalam satu tempat.",
  keywords: ["pet hotel", "grooming hewan", "pet shop", "perawatan hewan", "central pet", "pet owner"],
  openGraph: {
    title: "Central Petshop — Semua Kebutuhan Hewan Peliharaanmu",
    description: "Platform lengkap untuk pet owner — hotel, grooming, toko, kesehatan, pickup & delivery.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

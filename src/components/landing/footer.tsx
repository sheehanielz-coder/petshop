import React from "react";
import Link from "next/link";
import { PawPrint, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Pet Hotel", href: "/hotel" },
    { label: "Grooming", href: "/grooming" },
    { label: "Pet Shop", href: "/shop" },
    { label: "Healthcare", href: "/health" },
    { label: "Pickup & Delivery", href: "/pickup" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "WhatsApp", href: "https://wa.me/6281234567890" },
    { label: "Blog & Tips", href: "/blog" },
    { label: "FAQ", href: "/#faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Cookie Policy", href: "/" },
    { label: "Refund Policy", href: "/" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Central Petshop</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Platform lengkap untuk pet owner — hotel, grooming, toko, kesehatan, dan pickup & delivery dalam satu tempat.
            </p>
            <div className="space-y-2">
              <a href="mailto:hello@centralpet.id" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-amber-700" /> hello@centralpet.id
              </a>
              <a href="tel:+6221123456" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-amber-700" /> +62 21 1234 5678
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Jl.+Sukapura+No.26%2C+Sukapura%2C+Kec.+Dayeuhkolot%2C+Kabupaten+Bandung%2C+Jawa+Barat+40267%2C+Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                Jl. Sukapura No.26, Dayeuhkolot, Bandung
              </a>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[
                { href: "https://instagram.com", label: "IG" },
                { href: "https://twitter.com", label: "TW" },
                { href: "https://facebook.com", label: "FB" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-amber-800 flex items-center justify-center transition-all hover:scale-110 text-xs font-bold text-gray-400 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Central Petshop. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Made with ❤️ for pet lovers in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}

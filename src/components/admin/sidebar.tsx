"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Users, PawPrint, Package, Hotel, Scissors,
  ShoppingBag, Star, Bell, BookOpen, Ticket, Settings, ChevronLeft,
  PawPrintIcon, BarChart3, Tag
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Pets", href: "/admin/pets", icon: PawPrint },
  { label: "Hotel Rooms", href: "/admin/rooms", icon: Hotel },
  { label: "Bookings", href: "/admin/bookings", icon: Scissors },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Categories", href: "/admin/categories", icon: Tag },
  { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { label: "Memberships", href: "/admin/memberships", icon: Star },
  { label: "Notifications", href: "/admin/notifications", icon: Bell },
  { label: "Blog", href: "/admin/blog", icon: BookOpen },
  { label: "Support", href: "/admin/support", icon: Ticket },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  return (
    <aside className="hidden lg:flex flex-col w-56 h-screen bg-gray-950 shrink-0 sticky top-0 overflow-y-auto scrollbar-hide">
      {/* Logo */}
      <div className="flex items-center gap-2.5 h-16 px-4 border-b border-gray-800 shrink-0">
        <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center shrink-0">
          <PawPrintIcon className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">Central Petshop</p>
          <p className="text-[10px] text-gray-400">Admin Panel</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors mb-0.5",
              isActive(item.href)
                ? "gradient-brand text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            )}
          >
            <item.icon className="w-4 h-4 shrink-0" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-3 border-t border-gray-800">
        <Link href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
      </div>
    </aside>
  );
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "IDR"): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: Date | string, opts?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...opts,
  }).format(d);
}

export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return formatDate(d);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function generateOrderNumber(): string {
  const prefix = "CP";
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

export function getPetAge(birthDate: Date | string | null): string {
  if (!birthDate) return "Unknown";
  const birth = typeof birthDate === "string" ? new Date(birthDate) : birthDate;
  const now = new Date();
  const years = now.getFullYear() - birth.getFullYear();
  const months = now.getMonth() - birth.getMonth();
  const totalMonths = years * 12 + months;

  if (totalMonths < 1) return "< 1 month";
  if (totalMonths < 12) return `${totalMonths} month${totalMonths > 1 ? "s" : ""}`;
  const y = Math.floor(totalMonths / 12);
  const m = totalMonths % 12;
  if (m === 0) return `${y} year${y > 1 ? "s" : ""}`;
  return `${y}y ${m}m`;
}

export function getMembershipColor(tier: string): string {
  switch (tier) {
    case "SILVER": return "from-slate-400 to-slate-600";
    case "GOLD": return "from-amber-400 to-amber-600";
    case "PLATINUM": return "from-violet-500 to-purple-700";
    default: return "from-gray-400 to-gray-600";
  }
}

export function getMembershipDiscount(tier: string): number {
  switch (tier) {
    case "SILVER": return 10;
    case "GOLD": return 20;
    case "PLATINUM": return 30;
    default: return 0;
  }
}

export function truncate(str: string, length = 100): string {
  if (str.length <= length) return str;
  return str.slice(0, length).trim() + "…";
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function getInitials(firstName?: string | null, lastName?: string | null): string {
  const f = firstName?.charAt(0)?.toUpperCase() ?? "";
  const l = lastName?.charAt(0)?.toUpperCase() ?? "";
  return f + l || "?";
}

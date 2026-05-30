"use client";

import { create } from "zustand";

interface UIStore {
  sidebarOpen: boolean;
  cartOpen: boolean;
  notifOpen: boolean;
  toggleSidebar: () => void;
  setSidebar: (open: boolean) => void;
  toggleCart: () => void;
  toggleNotif: () => void;
}

export const useUI = create<UIStore>((set) => ({
  sidebarOpen: true,
  cartOpen: false,
  notifOpen: false,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSidebar: (open) => set({ sidebarOpen: open }),
  toggleCart: () => set((s) => ({ cartOpen: !s.cartOpen })),
  toggleNotif: () => set((s) => ({ notifOpen: !s.notifOpen })),
}));

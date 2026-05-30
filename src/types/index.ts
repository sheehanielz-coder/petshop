// App-specific types (no Prisma dependency)

export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  badge?: string | number;
  children?: NavItem[];
}

export interface DashboardStats {
  activePets: number;
  upcomingBookings: number;
  membershipTier: string | null;
  recentOrders: number;
  rewardPoints: number;
  totalSpent: number;
}

export interface CartItemLocal {
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
}

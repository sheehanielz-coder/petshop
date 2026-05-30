"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "./product-card";
import { Search, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  parentId: string | null;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  comparePrice: number | null;
  sku: string;
  stock: number;
  images: string[];
  weight: number;
  tags: string[];
  isFeatured: boolean;
  isActive: boolean;
  rating: number;
  reviewCount: number;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductWithCategory = Product & { category: Category };

const categories: Category[] = [
  { id: "c1", name: "Makanan",          slug: "food",             description: null, imageUrl: null, parentId: null, createdAt: new Date() },
  { id: "c2", name: "Aksesori",         slug: "accessories",      description: null, imageUrl: null, parentId: null, createdAt: new Date() },
  { id: "c3", name: "Suplemen",         slug: "supplements",      description: null, imageUrl: null, parentId: null, createdAt: new Date() },
  { id: "c4", name: "Mainan",           slug: "toys",             description: null, imageUrl: null, parentId: null, createdAt: new Date() },
  { id: "c5", name: "Obat-obatan",      slug: "medicine",         description: null, imageUrl: null, parentId: null, createdAt: new Date() },
  { id: "c6", name: "Produk Grooming",  slug: "grooming-products",description: null, imageUrl: null, parentId: null, createdAt: new Date() },
];

const cat = (id: string) => categories.find((c) => c.id === id)!;

const products: ProductWithCategory[] = [
  { id: "p1",  name: "Makanan Anjing Premium 5kg",    slug: "premium-dog-food",      description: "Formula protein tinggi untuk semua ras",       price: 185000, comparePrice: 220000, sku: "DOG-FOOD-001", stock: 50, images: [], weight: 5,   tags: ["dog","food"],        isFeatured: true,  isActive: true, rating: 4.8, reviewCount: 124, categoryId: "c1", createdAt: new Date(), updatedAt: new Date(), category: cat("c1") },
  { id: "p2",  name: "Makanan Kucing Premium 2kg",   slug: "premium-cat-food",      description: "Formula bebas biji-bijian untuk kucing dewasa",  price: 135000, comparePrice: 160000, sku: "CAT-FOOD-001", stock: 40, images: [], weight: 2,   tags: ["cat","food"],        isFeatured: true,  isActive: true, rating: 4.7, reviewCount: 98,  categoryId: "c1", createdAt: new Date(), updatedAt: new Date(), category: cat("c1") },
  { id: "p3",  name: "Kit Grooming Kucing",          slug: "cat-grooming-kit",      description: "Set grooming lengkap khusus kucing",            price: 125000, comparePrice: null,   sku: "CAT-GROOM-001",stock: 30, images: [], weight: 0.5, tags: ["cat","grooming"],    isFeatured: true,  isActive: true, rating: 4.6, reviewCount: 87,  categoryId: "c2", createdAt: new Date(), updatedAt: new Date(), category: cat("c2") },
  { id: "p4",  name: "Set Mangkuk Stainless",        slug: "pet-bowl-set",          description: "Dua mangkuk stainless dengan dudukan",          price: 115000, comparePrice: null,   sku: "ACC-001",     stock: 35, images: [], weight: 1,   tags: ["accessories"],       isFeatured: true,  isActive: true, rating: 4.8, reviewCount: 89,  categoryId: "c2", createdAt: new Date(), updatedAt: new Date(), category: cat("c2") },
  { id: "p5",  name: "Suplemen Vitamin C",           slug: "vitamin-c-supplement",  description: "Peningkat imun harian untuk hewan peliharaan",  price: 75000,  comparePrice: 90000,  sku: "SUPP-001",    stock: 80, images: [], weight: 0.2, tags: ["supplement"],        isFeatured: false, isActive: true, rating: 4.9, reviewCount: 203, categoryId: "c3", createdAt: new Date(), updatedAt: new Date(), category: cat("c3") },
  { id: "p6",  name: "Minyak Ikan Omega 3",          slug: "omega-3-fish-oil",      description: "Suplemen kesehatan bulu dan kulit",             price: 89000,  comparePrice: null,   sku: "SUPP-002",    stock: 60, images: [], weight: 0.3, tags: ["supplement"],        isFeatured: false, isActive: true, rating: 4.7, reviewCount: 145, categoryId: "c3", createdAt: new Date(), updatedAt: new Date(), category: cat("c3") },
  { id: "p7",  name: "Mainan Puzzle Interaktif",     slug: "interactive-puzzle-toy",description: "Stimulasi mental untuk anjing cerdas",          price: 95000,  comparePrice: null,   sku: "TOY-001",     stock: 25, images: [], weight: 0.3, tags: ["toy","dog"],         isFeatured: true,  isActive: true, rating: 4.7, reviewCount: 56,  categoryId: "c4", createdAt: new Date(), updatedAt: new Date(), category: cat("c4") },
  { id: "p8",  name: "Tongkat Bulu Catnip",          slug: "catnip-feather-wand",   description: "Mainan bulu yang tak tertahankan untuk kucing", price: 45000,  comparePrice: null,   sku: "TOY-002",     stock: 55, images: [], weight: 0.1, tags: ["toy","cat"],         isFeatured: false, isActive: true, rating: 4.5, reviewCount: 71,  categoryId: "c4", createdAt: new Date(), updatedAt: new Date(), category: cat("c4") },
  { id: "p9",  name: "Kalung Anti Kutu & Caplak",   slug: "flea-tick-collar",      description: "Kalung perlindungan 6 bulan",                  price: 145000, comparePrice: 180000, sku: "MED-001",     stock: 40, images: [], weight: 0.05,tags: ["medicine"],          isFeatured: false, isActive: true, rating: 4.5, reviewCount: 92,  categoryId: "c5", createdAt: new Date(), updatedAt: new Date(), category: cat("c5") },
  { id: "p10", name: "Tetes Telinga & Mata",         slug: "ear-eye-drops",         description: "Larutan pembersih lembut untuk hewan",         price: 55000,  comparePrice: null,   sku: "MED-002",     stock: 70, images: [], weight: 0.1, tags: ["medicine","health"], isFeatured: false, isActive: true, rating: 4.6, reviewCount: 38,  categoryId: "c5", createdAt: new Date(), updatedAt: new Date(), category: cat("c5") },
  { id: "p11", name: "Sampo & Kondisioner Anjing",  slug: "dog-shampoo",           description: "Formula lembut untuk kulit sensitif",          price: 65000,  comparePrice: 80000,  sku: "GROOM-001",   stock: 70, images: [], weight: 0.5, tags: ["grooming","dog"],    isFeatured: false, isActive: true, rating: 4.6, reviewCount: 74,  categoryId: "c6", createdAt: new Date(), updatedAt: new Date(), category: cat("c6") },
  { id: "p12", name: "Gunting Kuku Hewan Pro",       slug: "nail-clippers-pro",     description: "Gunting kuku dengan pengaman untuk semua ukuran",price: 79000,  comparePrice: null,   sku: "GROOM-002",   stock: 45, images: [], weight: 0.15,tags: ["grooming"],          isFeatured: false, isActive: true, rating: 4.8, reviewCount: 112, categoryId: "c6", createdAt: new Date(), updatedAt: new Date(), category: cat("c6") },
];

export function ShopPageClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        (p.description ?? "").toLowerCase().includes(search.toLowerCase());
      const matchCategory = !activeCategory || p.category.slug === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero */}
      <section className="pt-28 pb-12 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="purple" className="mb-4">Produk Premium untuk Hewan</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="gradient-text">Pet Shop</span> Terlengkap
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Produk pilihan untuk setiap hewan peliharaan. Gratis ongkos kirim untuk pesanan di atas Rp 200.000.
            </p>
            <div className="max-w-lg mx-auto">
              <Input
                placeholder="Cari makanan, mainan, suplemen..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                startIcon={<Search className="w-4 h-4" />}
                className="bg-white dark:bg-gray-900 shadow-lg border-0 h-12 text-base"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-8">
          {/* Sidebar categories */}
          <aside className="hidden lg:block w-52 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Kategori</h3>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                    !activeCategory
                      ? "gradient-brand text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  Semua Produk
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                      activeCategory === cat.slug
                        ? "gradient-brand text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products grid */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                {filtered.length} produk
                {activeCategory && ` · ${categories.find((c) => c.slug === activeCategory)?.name}`}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Produk tidak ditemukan</h3>
                <p className="text-muted-foreground text-sm">Coba ubah kata pencarian atau filter kategori.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/store/cart";
import type { ProductWithCategory } from "./shop-page-client";
import { cn } from "@/lib/utils";

// Emoji placeholders for product images
const categoryEmojis: Record<string, string> = {
  "dog-food": "🦴", "cat-food": "🐟", food: "🥘",
  accessories: "🎀", supplements: "💊", toys: "🎾",
  medicine: "💉", "grooming-products": "✂️",
};

export function ProductCard({ product }: { product: ProductWithCategory }) {
  const { addItem, items } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const inCart = items.some((i) => i.productId === product.id);
  const emoji = categoryEmojis[product.category.slug] ?? "🐾";
  const discount = product.comparePrice
    ? Math.round((1 - product.price / product.comparePrice) * 100)
    : null;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] ?? "",
      stock: product.stock,
    });
    toast.success(`${product.name} ditambahkan ke keranjang!`);
  };

  return (
    <Card className="overflow-hidden border-0 shadow-sm card-hover group h-full flex flex-col">
      {/* Product image */}
      <div className="relative h-44 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center">
        <span className="text-6xl">{emoji}</span>

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
          {product.isFeatured && (
            <Badge variant="default" className="text-xs">Unggulan</Badge>
          )}
          {discount && (
            <Badge variant="destructive" className="text-xs">-{discount}%</Badge>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted); }}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className={cn("w-4 h-4 transition-colors", wishlisted ? "fill-red-500 text-red-500" : "text-gray-500")} />
        </button>
      </div>

      <CardContent className="p-4 flex flex-col flex-1">
        <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mb-1">
          {product.category.name}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        {product.reviewCount > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-3 h-3",
                    i < Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>
        )}

        <div className="flex-1" />

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base font-bold text-gray-900 dark:text-white">
            {formatCurrency(product.price)}
          </span>
          {product.comparePrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatCurrency(product.comparePrice)}
            </span>
          )}
        </div>

        {/* Stock */}
        {product.stock < 10 && product.stock > 0 && (
          <p className="text-xs text-amber-600 dark:text-amber-400 mb-2">Sisa {product.stock} item</p>
        )}

        <Button
          size="sm"
          variant={inCart ? "outline" : "default"}
          className="w-full"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          {product.stock === 0 ? "Habis" : inCart ? "Di Keranjang" : "Tambah ke Keranjang"}
        </Button>
      </CardContent>
    </Card>
  );
}

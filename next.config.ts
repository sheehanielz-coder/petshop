import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.clerk.com" },
    ],
  },
  experimental: {
    serverActions: { allowedOrigins: ["localhost:3000", "localhost:3001", "localhost:3002"] },
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;

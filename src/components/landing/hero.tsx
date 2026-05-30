"use client";

import { useRef, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";
import { ArrowRight, Star, Shield, Zap } from "lucide-react";

function FloatingOrb({
  position,
  color,
  speed,
  size,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  size: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={ref} position={position} args={[size, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#a855f7" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#ec4899" />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <FloatingOrb position={[2.5, 0.5, -1]} color="#7c3aed" speed={0.8} size={1.1} />
      <FloatingOrb position={[-2.8, -0.3, -2]} color="#a855f7" speed={1.2} size={0.8} />
      <FloatingOrb position={[0.5, -1.5, -3]} color="#ec4899" speed={0.6} size={0.6} />
      <FloatingOrb position={[-1.2, 1.5, -1.5]} color="#c084fc" speed={1.0} size={0.5} />
    </>
  );
}

const stats = [
  { label: "Hewan Bahagia", value: "12.000+" },
  { label: "Ulasan Bintang 5", value: "8.400+" },
  { label: "Staf Ahli", value: "50+" },
  { label: "Kota", value: "5" },
];

const features = [
  { icon: Shield, label: "Fasilitas bersertifikat dokter hewan" },
  { icon: Zap, label: "Pemantauan 24/7" },
  { icon: Star, label: "Fasilitas mewah" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero dark:bg-gray-950">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/80 dark:from-transparent dark:via-gray-950/20 dark:to-gray-950/80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none" />

      {/* Floating pet emojis */}
      {[
        { emoji: "🐾", top: "15%", left: "8%", delay: 0, size: "text-3xl" },
        { emoji: "🐕", top: "25%", right: "6%", delay: 1, size: "text-4xl" },
        { emoji: "🐱", top: "60%", left: "5%", delay: 0.5, size: "text-3xl" },
        { emoji: "🦴", top: "70%", right: "8%", delay: 1.5, size: "text-2xl" },
        { emoji: "🐟", top: "40%", left: "3%", delay: 2, size: "text-2xl" },
        { emoji: "⭐", top: "20%", right: "15%", delay: 0.8, size: "text-xl" },
      ].map((item, i) => (
        <motion.div
          key={i}
          className={`absolute pointer-events-none select-none ${item.size} opacity-40`}
          style={{ top: item.top, left: (item as { left?: string }).left, right: (item as { right?: string }).right }}
          animate={{ y: [0, -16, 0], rotate: [0, 8, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4 + i * 0.5, delay: item.delay, ease: "easeInOut" }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <Badge variant="purple" className="px-4 py-1.5 text-sm font-medium rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30">
              ✨ Platform Pet Premium #1 di Indonesia
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            <span className="text-gray-900 dark:text-white">Semua Kebutuhan</span>
            <br />
            <span className="gradient-text">Hewan Peliharaanmu</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Hotel mewah, grooming profesional, toko lengkap, dan manajemen kesehatan hewan —
            semua terhubung indah dalam satu platform untuk pet owner modern Indonesia.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/60 dark:border-white/10 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                <f.icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                {f.label}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="xl" asChild className="shadow-2xl shadow-purple-500/30 group">
              <Link href="/hotel">
                Lihat Hotel Kami
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="/grooming/book">Book Grooming</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-center p-4 rounded-2xl glass border border-white/60 dark:border-white/10"
              >
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}

"use client";

import { useRef, Suspense } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";
import { ArrowRight, Star, Shield, Zap } from "lucide-react";

/* ─── Brand palette ──────────────────────────────────────── */
const BROWN_DARK   = "#7B3519";
const BROWN_MID    = "#A0522D";
const BROWN_LIGHT  = "#C27A4A";
const TEAL         = "#5B8FA8";
const CARAMEL      = "#D4A574";
const CREAM_WARM   = "#F5DEB3";

/* ─── 3-D Orb ────────────────────────────────────────────── */
function FloatingOrb({
  position, color, speed, size, distort = 0.4,
}: {
  position: [number, number, number];
  color: string; speed: number; size: number; distort?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.35;
    ref.current.rotation.z = state.clock.elapsedTime * 0.1;
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere ref={ref} position={position} args={[size, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={1.8}
          roughness={0.1}
          metalness={0.3}
          transparent
          opacity={0.75}
        />
      </Sphere>
    </Float>
  );
}

/* ─── Wobble ring ────────────────────────────────────────── */
function WobbleRing({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[0.6, 0.12, 16, 60]} />
      <MeshWobbleMaterial color={color} factor={0.5} speed={2} transparent opacity={0.55} />
    </mesh>
  );
}

/* ─── Scene ──────────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[8, 8, 6]}  intensity={2.0} color={BROWN_LIGHT} />
      <pointLight position={[-8, -6, -4]} intensity={1.2} color={TEAL} />
      <pointLight position={[0, 4, 2]}  intensity={0.8} color={CARAMEL} />

      {/* Large background orbs */}
      <FloatingOrb position={[2.8,  0.4, -2]}  color={BROWN_MID}   speed={0.7}  size={1.2}  distort={0.45} />
      <FloatingOrb position={[-3.0,-0.5, -2.5]} color={TEAL}       speed={1.1}  size={0.9}  distort={0.35} />
      <FloatingOrb position={[0.5, -1.8, -3]}  color={CARAMEL}    speed={0.55} size={0.65} distort={0.5}  />
      <FloatingOrb position={[-1.5, 1.8, -1.5]} color={BROWN_LIGHT} speed={0.9}  size={0.5}  distort={0.3}  />
      <FloatingOrb position={[3.8, -1.5, -4]}  color={CREAM_WARM} speed={0.6}  size={0.4}  distort={0.6}  />
      <FloatingOrb position={[-0.5, 2.5, -3.5]} color={BROWN_DARK}  speed={0.8}  size={0.55} distort={0.4}  />

      {/* Rings */}
      <WobbleRing position={[1.8, 1.2, -1]} color={BROWN_MID} />
      <WobbleRing position={[-2.2, -1.0, -2]} color={TEAL} />
    </>
  );
}

/* ─── Paw SVG (inline) ───────────────────────────────────── */
function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="14" rx="6" ry="8" />
      <ellipse cx="44" cy="14" rx="6" ry="8" />
      <ellipse cx="10" cy="30" rx="5" ry="7" />
      <ellipse cx="54" cy="30" rx="5" ry="7" />
      <path d="M32 22 C18 22 12 32 12 40 C12 52 22 58 32 58 C42 58 52 52 52 40 C52 32 46 22 32 22Z" />
    </svg>
  );
}

/* ─── Floating elements config ───────────────────────────── */
const floaters = [
  /* paw prints */
  { type: "paw",   top: "12%", left:  "6%",  delay: 0,    size: "w-10 h-10", opacity: "opacity-20", color: "text-amber-800"  },
  { type: "paw",   top: "72%", left:  "4%",  delay: 1.2,  size: "w-7 h-7",  opacity: "opacity-15", color: "text-amber-700"  },
  { type: "paw",   top: "38%", right: "5%",  delay: 0.6,  size: "w-8 h-8",  opacity: "opacity-20", color: "text-[#5B8FA8]"  },
  { type: "paw",   top: "85%", right: "8%",  delay: 2.0,  size: "w-6 h-6",  opacity: "opacity-15", color: "text-amber-900"  },
  { type: "paw",   top: "55%", left: "12%",  delay: 3.0,  size: "w-5 h-5",  opacity: "opacity-10", color: "text-[#C27A4A]"  },
  { type: "paw",   top: "20%", right: "12%", delay: 1.8,  size: "w-9 h-9",  opacity: "opacity-15", color: "text-[#A0522D]"  },
  { type: "paw",   top: "65%", right: "15%", delay: 0.3,  size: "w-6 h-6",  opacity: "opacity-12", color: "text-[#5B8FA8]"  },

  /* emojis */
  { type: "emoji", emoji: "🐱", top: "22%",  left:  "9%",  delay: 0.4,  size: "text-4xl", opacity: "opacity-70" },
  { type: "emoji", emoji: "🐶", top: "60%",  left:  "7%",  delay: 1.6,  size: "text-3xl", opacity: "opacity-60" },
  { type: "emoji", emoji: "🦴", top: "78%",  right: "6%",  delay: 0.9,  size: "text-2xl", opacity: "opacity-50" },
  { type: "emoji", emoji: "🐟", top: "45%",  left:  "3%",  delay: 2.2,  size: "text-2xl", opacity: "opacity-55" },
  { type: "emoji", emoji: "⭐", top: "18%",  right: "18%", delay: 0.7,  size: "text-xl",  opacity: "opacity-60" },
  { type: "emoji", emoji: "🐰", top: "32%",  right: "3%",  delay: 1.4,  size: "text-3xl", opacity: "opacity-55" },
  { type: "emoji", emoji: "🐹", top: "88%",  left: "15%",  delay: 2.8,  size: "text-2xl", opacity: "opacity-50" },
  { type: "emoji", emoji: "🌿", top: "50%",  right: "14%", delay: 1.0,  size: "text-2xl", opacity: "opacity-40" },
  { type: "emoji", emoji: "✨", top: "8%",   right: "8%",  delay: 3.2,  size: "text-xl",  opacity: "opacity-70" },
  { type: "emoji", emoji: "🐾", top: "95%",  right: "22%", delay: 0.5,  size: "text-3xl", opacity: "opacity-45" },
  { type: "emoji", emoji: "💛", top: "42%",  left: "15%",  delay: 2.5,  size: "text-lg",  opacity: "opacity-40" },
];

const stats = [
  { label: "Hewan Bahagia",   value: "12.000+", emoji: "🐾" },
  { label: "Ulasan Bintang 5", value: "8.400+",  emoji: "⭐" },
  { label: "Staf Ahli",       value: "50+",      emoji: "👨‍⚕️" },
  { label: "Kota",            value: "5",        emoji: "📍" },
];

const features = [
  { icon: Shield, label: "Fasilitas bersertifikat dokter hewan" },
  { icon: Zap,    label: "Pemantauan 24/7" },
  { icon: Star,   label: "Fasilitas mewah" },
];

/* ─── 3-D tilt card (mouse parallax) ────────────────────── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useTransform(y, [-0.5, 0.5], ["6deg", "-6deg"]);
  const ry = useTransform(x, [-0.5, 0.5], ["-6deg", "6deg"]);
  const sx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sy = useSpring(ry, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: sx, rotateY: sy, transformStyle: "preserve-3d", perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero dark:bg-gray-950">

      {/* ── 3D Canvas ── */}
      <div className="absolute inset-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* ── Soft gradient overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/25 to-white/85 dark:from-transparent dark:via-gray-950/25 dark:to-gray-950/85 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none" />

      {/* ── Paw print + emoji floaters ── */}
      {floaters.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute pointer-events-none select-none ${item.opacity}`}
          style={{
            top:   (item as { top?: string }).top,
            left:  (item as { left?: string }).left,
            right: (item as { right?: string }).right,
          }}
          animate={{
            y:       [0, -18, 0],
            rotate:  [0, 6, -6, 0],
            scale:   [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + (i % 5) * 0.7,
            delay:   item.delay,
            ease:    "easeInOut",
          }}
        >
          {item.type === "paw" ? (
            <PawIcon className={`${item.size} ${(item as { color: string }).color}`} />
          ) : (
            <span className={item.size}>{(item as { emoji: string }).emoji}</span>
          )}
        </motion.div>
      ))}

      {/* ── Particle dots ── */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute pointer-events-none rounded-full"
          style={{
            width:  `${4 + (i % 4) * 2}px`,
            height: `${4 + (i % 4) * 2}px`,
            left:   `${8 + (i * 5.1) % 84}%`,
            top:    `${10 + (i * 7.3) % 80}%`,
            background: [BROWN_LIGHT, TEAL, CARAMEL, CREAM_WARM][i % 4],
            opacity: 0.25 + (i % 3) * 0.08,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            repeat: Infinity,
            duration: 5 + (i % 6),
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <motion.div
              animate={{ boxShadow: ["0 0 0 0 rgba(160,82,45,0)", "0 0 0 10px rgba(160,82,45,0)"] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Badge
                variant="purple"
                className="px-5 py-1.5 text-sm font-semibold rounded-full border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/40 text-amber-900 dark:text-amber-300 shadow-sm"
              >
                🐾 Platform Petshop Premium #1 di Indonesia
              </Badge>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            <span className="text-gray-900 dark:text-white">Semua Kebutuhan</span>
            <br />
            <motion.span
              className="gradient-text inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Hewan Peliharaanmu
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Hotel mewah, grooming profesional, toko lengkap, dan manajemen kesehatan hewan —{" "}
            <span className="text-amber-900 dark:text-amber-400 font-medium">
              semua dalam satu platform
            </span>{" "}
            untuk pet owner modern Indonesia.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/60 dark:border-white/10 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm cursor-default"
              >
                <f.icon className="w-4 h-4 text-amber-800 dark:text-amber-500" />
                {f.label}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button size="xl" asChild className="shadow-2xl shadow-amber-800/30 group">
                <Link href="/hotel">
                  Lihat Hotel Kami
                  <motion.span
                    className="inline-flex"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button size="xl" variant="outline" asChild>
                <Link href="/grooming/book">✂️ Book Grooming</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats — 3D tilt cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {stats.map((stat, i) => (
              <TiltCard key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 180 }}
                  className="text-center p-4 rounded-2xl glass border border-white/60 dark:border-white/10 shadow-md hover:shadow-amber-200/50 dark:hover:shadow-amber-900/30 transition-shadow"
                >
                  <div className="text-xl mb-1">{stat.emoji}</div>
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-amber-600 to-transparent" />
      </motion.div>
    </section>
  );
}

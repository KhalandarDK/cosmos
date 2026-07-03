"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function ParallaxImage({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  intensity = 120, // total px of vertical travel
}) {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const range = prefersReducedMotion ? 0 : intensity / 2;
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      <motion.div
        style={{
          y,
          top: `-${intensity / 2}px`,
          height: `calc(100% + ${intensity}px)`,
        }}
        className="absolute inset-x-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
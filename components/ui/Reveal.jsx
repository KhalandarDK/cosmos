"use client";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Fades + slides content up into place the first time it scrolls into
 * view. Wrap any block of text or images with this for a consistent
 * "floating up" reveal across the site.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 40,
  duration = 0.8,
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
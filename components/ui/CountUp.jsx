"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export default function CountUp({ value, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(null);

  const match = String(value).match(/^([^\d.]*)([\d.]+)([^\d.]*)$/);
  const prefix = match?.[1] ?? "";
  const numericTarget = match ? parseFloat(match[2]) : 0;
  const suffix = match?.[3] ?? "";
  const decimals = match?.[2]?.includes(".") ? 1 : 0;

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, numericTarget, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(latest.toFixed(decimals));
      },
    });

    return () => controls.stop();
  }, [isInView, numericTarget, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display ?? (0).toFixed(decimals)}
      {suffix}
    </span>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ArrowLink from "@/components/ui/ArrowLink";


const HERO_IMAGES = [
  { src: "/images/hero-image-1.png", alt: "Aravalle Estates — estate exterior" },
  { src: "/images/hero-image-2.png", alt: "Aravalle Estates — vineyard grounds" },
];

// How long each image stays fully visible before the next one crossfades in.
const SLIDE_DURATION_MS = 6000;
// How long the crossfade itself takes.
const CROSSFADE_MS = 1200;

export default function Hero() {
  const outerRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll-driven shrink/reveal progress (unchanged from before).
  useEffect(() => {
    const outer = outerRef.current;
    const container = containerRef.current;
    if (!outer || !container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let ticking = false;

    const updateProgress = () => {
      const rect = outer.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const scrolled = Math.min(
        Math.max(-rect.top, 0),
        Math.max(scrollable, 0)
      );
      const progress = scrollable > 0 ? scrolled / scrollable : 0;
      container.style.setProperty("--progress", progress.toFixed(4));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Background crossfade slideshow. Skips entirely (stays on the first
  // image) when the person prefers reduced motion.
  useEffect(() => {
    if (HERO_IMAGES.length < 2) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <div ref={outerRef} className="relative h-[130vh]">
      <section 
        ref={containerRef}
        className="hero-reveal sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* Background crossfade slideshow */}
        <div className="absolute inset-0">
          {HERO_IMAGES.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover transition-opacity"
              style={{
                opacity: index === activeIndex ? 1 : 0,
                transitionDuration: `${CROSSFADE_MS}ms`,
                transitionTimingFunction: "var(--ease-signature)",
              }}
            />
          ))}
        </div>

        {/* Warm dark scrim, heavier toward the bottom where a real photo's
            shadows would naturally sit, plus a light overall tint so the
            centered copy reads cleanly no matter what's behind it. */}
        <div className="pointer-events-none absolute inset-0 bg-bg-dark/25" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-bg-dark/25 to-transparent" />

        {/* Content — explicitly absolute + flex-centered so it never
            depends on the section being display:flex or on a sibling's
            flow height. */}
        <div className="hero-copy absolute inset-0 z-10 flex items-center justify-center px-pp">
          <div className="mx-auto max-w-3xl text-center text-text-light">
            <span className="eyebrow text-brand-invert">
              Estate &amp; Vineyard Properties — California
            </span>
            <h1 className="mt-xs text-h1 font-display italic">
              Homes chosen for how they make you live.
            </h1>
            <p className="mx-auto mt-m max-w-xl text-intro text-text-light/85">
              Aravalle Estates represents a curated portfolio of distinctive
              properties, guided by advisors who know every acre by name.
            </p>
            <div className="mt-m flex flex-wrap items-center justify-center gap-6">
              <Button href="/properties" variant="invert" size="large">
                View Listings
              </Button>
              <ArrowLink href="/contact" tone="dark">
                Schedule a private tour
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

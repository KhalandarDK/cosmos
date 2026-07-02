"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/data/navigation";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex h-header w-full items-center border-b transition-colors duration-500 ${
        scrolled
          ? "border-line-light bg-bg-main"
          : "border-transparent bg-bg-main/90 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex w-full max-w-container items-center justify-between px-pp">
        <Link href="/" className="font-display text-h5 italic text-text-dark">
          Fortune <span className="not-italic text-brand">Cosmos </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline font-body text-brow font-semibold uppercase tracking-eyebrow text-text-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="filled" size="base">
            Schedule a Tour
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-text-dark transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text-dark transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute left-0 top-header flex w-full flex-col gap-6 border-t border-line-light bg-bg-main px-pp py-l lg:hidden">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-h5 text-text-dark"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" variant="filled" className="mt-2">
            Schedule a Tour
          </Button>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";

/**
 * ArrowLink
 * The small "explore listing / read more" link pattern: underlined label
 * plus an arrow that slides out and is replaced by a duplicate on hover.
 */
export default function ArrowLink({ href, children, className = "", tone = "light" }) {
  const color = tone === "dark" ? "text-text-light" : "text-text-dark";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-body text-brow font-semibold uppercase tracking-eyebrow ${color} ${className}`}
    >
      <span className="link-underline">{children}</span>
      <span className="relative block h-3 w-4 overflow-hidden text-brand">
        <svg
          viewBox="0 0 16 12"
          fill="none"
          className="absolute left-0 top-0 h-3 w-4 -translate-x-full opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
        >
          <path d="M0 6h14M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        <svg
          viewBox="0 0 16 12"
          fill="none"
          className="absolute left-0 top-0 h-3 w-4 transition-all duration-300 ease-out group-hover:translate-x-full group-hover:opacity-0"
        >
          <path d="M0 6h14M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </span>
    </Link>
  );
}

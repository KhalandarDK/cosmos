import Link from "next/link";

const VARIANTS = {
  filled: "bg-brand border-brand text-text-light",
  outline: "bg-transparent border-line-medium text-text-dark",
  invert: "bg-text-light border-text-light text-text-dark",
};

/**
 * Button
 * Uppercase, letter-spaced call-to-action with a vertical text-swap
 * animation on hover/focus (label slides up, a duplicate slides in from
 * below) — the same interaction language as the reference "book" button.
 *
 * Renders a Next.js <Link> when `href` is provided, otherwise a <button>.
 */
export default function Button({
  href,
  children,
  variant = "filled",
  size = "base",
  className = "",
  onClick,
  type = "button",
}) {
  const sizeClass =
    size === "large" ? "min-h-[3.125rem] px-8" : "min-h-btn px-6";

  const classes = `group relative inline-flex w-fit items-center justify-center overflow-hidden border ${VARIANTS[variant]} ${sizeClass} font-body text-brow font-semibold uppercase tracking-eyebrow transition-colors duration-300 hover:bg-brand hover:border-brand hover:text-text-light ${className}`;

  const content = (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-400 ease-signature group-hover:-translate-y-[105%] group-hover:scale-95">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute left-0 top-1/2 block w-full translate-y-[105%] text-center transition-transform duration-400 ease-signature group-hover:-translate-y-1/2"
      >
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

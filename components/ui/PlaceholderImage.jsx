/**
 * PlaceholderImage
 * Stands in for real photography throughout the template. It renders a
 * tasteful gradient tile with a caption naming the shot that belongs there
 * (e.g. "Hero — Estate exterior at dusk"), so dropping in real assets later
 * is a simple search-and-replace: swap this component for a Next <Image>
 * pointed at your own photography, using the same `label` as an alt guide.
 */
const TONES = {
  light: "from-bg-accent via-bg-accent to-line-light/60 text-text-dark/70",
  dark: "from-bg-dark via-bg-dark to-line-dark/40 text-text-light/70",
  brand: "from-brand/80 via-brand to-bg-dark text-text-light/80",
};

export default function PlaceholderImage({
  label,
  ratio = "aspect-[4/3]",
  tone = "light",
  className = "",
}) {
  return (
    <div
      className={`relative flex items-end overflow-hidden bg-gradient-to-br ${TONES[tone]} ${ratio} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.35), transparent 45%)",
        }}
      />
      <span className="relative z-10 p-4 text-footnote uppercase tracking-eyebrow">
        {label}
      </span>
    </div>
  );
}

const TONES = {
  brand: "bg-brand text-text-light",
  outline: "border border-line-medium text-text-dark bg-transparent",
  dark: "bg-bg-dark text-text-light",
};

export default function Badge({ children, tone = "brand", className = "" }) {
  return (
    <span
      className={`eyebrow inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

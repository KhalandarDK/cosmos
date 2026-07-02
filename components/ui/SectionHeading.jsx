/**
 * SectionHeading
 * The eyebrow / display-heading / intro-copy pattern repeated across most
 * sections of the site. `align` controls left vs centered layouts.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "left",
  tone = "light", // "light" = dark text for light bg, "dark" = light text for dark bg
  className = "",
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const textTone = tone === "dark" ? "text-text-light" : "text-text-dark";
  const eyebrowTone = tone === "dark" ? "text-brand-invert" : "text-brand";

  return (
    <div className={`flex max-w-2xl flex-col gap-s ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${eyebrowTone}`}>{eyebrow}</span>
      )}
      {heading && (
        <h2 className={`text-h3 ${textTone}`}>{heading}</h2>
      )}
      {intro && (
        <p className={`text-intro font-display italic text-text-medium ${tone === "dark" ? "text-text-light/80" : ""}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

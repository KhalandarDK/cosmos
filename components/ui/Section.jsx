const TONES = {
  main: "bg-bg-main text-text-dark",
  accent: "bg-bg-accent text-text-dark",
  dark: "bg-bg-dark text-text-light",
};

/**
 * Section
 * Standardizes vertical spacing and background tone between page sections.
 * Every section on the site should be wrapped in this so rhythm stays
 * consistent — change --space-2xl / --space-3xl in globals.css to retune
 * the whole site's spacing at once.
 */
export default function Section({
  children,
  tone = "main",
  className = "",
  containerClassName = "",
  fullBleed = false,  
  as: Tag = "section",
  ...rest
}) {
  return (
    <Tag className={`py-2xl md:py-3xl ${TONES[tone]} ${className}`} {...rest}>
      {fullBleed ? (
        children
      ) : (
        <div className={`mx-auto w-full max-w-container px-pp ${containerClassName}`}>
          {children}
        </div>
      )}
    </Tag>
  );
}

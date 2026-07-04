import Reveal from "@/components/ui/Reveal";

const TONES = {
  main: "bg-bg-main text-text-dark",
  accent: "bg-bg-accent text-text-dark",
  dark: "bg-bg-dark text-text-light",
};

export default function Section({
  children,
  tone = "main",
  className = "",
  containerClassName = "",
  fullBleed = false,
  reveal = true,
  as: Tag = "section",
  ...rest
}) {
  const content = reveal ? <Reveal>{children}</Reveal> : children;

  return (
    <Tag className={`py-2xl md:py-3xl ${TONES[tone]} ${className}`} {...rest}>
      {fullBleed ? (
        content
      ) : (
        <div className={`mx-auto w-full max-w-container px-pp ${containerClassName}`}>
          {content}
        </div>
      )}
    </Tag>
  );
}
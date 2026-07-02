import Button from "@/components/ui/Button";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function CTABanner() {
  return (
    <section className="relative flex min-h-[60vh] w-full items-center overflow-hidden bg-bg-dark text-text-light">
      <PlaceholderImage
        label="Estate grounds, golden hour"
        tone="brand"
        ratio="aspect-auto"
        className="absolute inset-0 h-full w-full opacity-70"
      />
      <div className="pointer-events-none absolute inset-0 bg-bg-dark/50" />
      <div className="relative z-10 mx-auto flex w-full max-w-container flex-col items-center gap-l px-pp py-3xl text-center">
        <span className="eyebrow text-brand-invert">Ready when you are</span>
        <h2 className="max-w-2xl text-h2 font-display italic">
          Let&apos;s find the property that fits how you actually live.
        </h2>
        <Button href="/contact" variant="invert" size="large">
          Speak with an Advisor
        </Button>
      </div>
    </section>
  );
}

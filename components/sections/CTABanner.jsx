import Button from "@/components/ui/Button";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function CTABanner() {
  return (
    <section className="relative flex min-h-[95vh] w-full items-center overflow-hidden bg-bg-dark text-text-light">
      <ParallaxImage
        src="/images/cta-banner.jpg"
        alt="Estate grounds, golden hour"
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
        imageClassName="opacity-70"
        intensity={140}
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
import Section from "@/components/ui/Section";
import ArrowLink from "@/components/ui/ArrowLink";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function Since() {
  return (
    <Section tone="dark" className="py-2xl md:py-3xl">
      <div className="grid items-center gap-2xl lg:grid-cols-2">
        {/* TEXT SIDE */}
        <div className="flex max-w-xl flex-col justify-center gap-5">
          <span className="eyebrow text-brand-invert">Since 2000</span>
          <h2 className="font-display text-h2 italic leading-[1.1] text-text-light">
            Cheers to 26 Years
          </h2>
          <p className="text-body text-text-light/80">
            Join us in celebrating 26 years of Aravalle Estates
          </p>
          <ArrowLink href="/contact" tone="dark" className="mt-3">
            View 20th Anniversary Offers &amp; Specials
          </ArrowLink>
        </div>

        {/* IMAGE SIDE */}
        <ParallaxImage
          src="/images/hero-image-2.png"
          alt="Celebrating 26 years"
          className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[4/5] lg:h-[70vh]"
          priority
          intensity={110}
        />
      </div>
    </Section>
  );
}
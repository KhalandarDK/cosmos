import Image from "next/image";
import Section from "@/components/ui/Section";
import ArrowLink from "@/components/ui/ArrowLink";

export default function Since() {
  return (
    <Section tone="dark" fullBleed className="py-2xl md:py-3xl">
      <div className="grid items-center gap-2xl lg:grid-cols-2 lg:gap-0">
        {/* TEXT SIDE */}
        <div className="flex max-w-xl flex-col justify-center gap-5 px-pp">
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
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[4/5] lg:h-[70vh]">
          <Image
            src="/images/hero-image-2.png"
            alt="Celebrating 26 years"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
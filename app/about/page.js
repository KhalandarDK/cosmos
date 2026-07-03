import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ParallaxImage from "@/components/ui/ParallaxImage";
import StatsAwards from "@/components/sections/StatsAwards";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = {
  title: "About | Fortune Cosmos",
  description:
    "Fortune Cosmos is a private real estate advisory representing distinctive homes across California.",
};

export default function AboutPage() {
  return (
    <>
      <Section tone="dark" className="py-2xl">
        <SectionHeading
          eyebrow="About Fortune Cosmos"
          heading="Nineteen years of representing California's most considered homes."
          intro="We built Fortune Cosmos around a simple belief: a home should be found, not simply sold."
          tone="dark"
        />
      </Section>

      <Section tone="main">
        <div className="grid gap-2xl lg:grid-cols-2 lg:items-center">
          <ParallaxImage
            src="/images/about.jpg"
            alt="Team walking a vineyard property"
            className="aspect-[4/5] w-full rounded-xl"
            intensity={90}
          />
          <div className="flex flex-col gap-l text-body text-text-medium">
            <p>
              Fortune Cosmos was founded by a small group of advisors who
              were frustrated with how transactional luxury real estate had
              become. We slowed things down — fewer clients per advisor, more
              time spent understanding what a family actually needs from a
              property.
            </p>
            <p>
              Today that same philosophy guides every search and every sale:
              discretion first, relationships over volume, and a portfolio
              curated as carefully as the homes themselves.
            </p>
          </div>
        </div>
      </Section>

      <StatsAwards />

      <Testimonials />
    </>
  );
}
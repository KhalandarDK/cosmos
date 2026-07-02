import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import StatsAwards from "@/components/sections/StatsAwards";
import Testimonials from "@/components/sections/Since";

export const metadata = {
  title: "About | Fortune  Cosmos",
  description:
    "Fortune  Cosmos is a private real estate advisory representing distinctive homes across California.",
};

const advisors = [
  { name: "Renata Sorel", title: "Founding Partner" },
  { name: "James Okonkwo", title: "Vineyard Estates Lead" },
  { name: "Claire Bellamy", title: "Waterfront Specialist" },
  { name: "Théo Marchand", title: "Client Advisory" },
];

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
          <PlaceholderImage label="Team walking a vineyard property" ratio="aspect-[4/5]" />
          <div className="flex flex-col gap-l text-body text-text-medium">
            <p>
              Fortune  Cosmos was founded by a small group of advisors who
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

      <Section tone="accent" id="advisors">
        <SectionHeading eyebrow="Our Team" heading="Advisors who know every acre by name." />
        <div className="mt-l grid gap-x-8 gap-y-l sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map((advisor) => (
            <div key={advisor.name} className="flex flex-col gap-4">
              <PlaceholderImage label={`Portrait — ${advisor.name}`} ratio="aspect-[3/4]" />
              <div>
                <p className="font-display text-h5 italic text-text-dark">{advisor.name}</p>
                <p className="text-footnote uppercase tracking-eyebrow text-text-medium">
                  {advisor.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Testimonials />
    </>
  );
}

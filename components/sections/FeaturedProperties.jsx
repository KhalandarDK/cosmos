import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";
import PropertyCard from "@/components/sections/PropertyCard";
import { featuredProperties } from "@/data/properties";

export default function FeaturedProperties() {
  return (
    <Section tone="accent">
      <div className="flex flex-col gap-l">   
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Current Listings"
            heading="A small selection of what's available now."
          />
          <ArrowLink href="/properties">View all listings</ArrowLink>
        </div>
        <div className="grid gap-x-8 gap-y-2xl sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </div>
    </Section>
  );
}

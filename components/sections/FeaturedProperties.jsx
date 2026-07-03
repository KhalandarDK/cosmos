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
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          {featuredProperties.map((property, index) => (
            <PropertyCard  
              key={property.slug}
              property={property} 
              className={index === 0 ? "lg:row-span-2" : ""}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

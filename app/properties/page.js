import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import PropertyCard from "@/components/sections/PropertyCard";
import { properties } from "@/data/properties";

export const metadata = {
  title: "Listings | Fortune  Cosmos",
  description: "Browse the current Fortune  Cosmos property portfolio.",
};

export default function PropertiesPage() {
  return (
    <>
      <Section tone="dark" className="py-2xl">
        <SectionHeading
          eyebrow="Portfolio"
          heading="Every listing currently represented by Fortune  Cosmos."
          tone="dark"
        />
      </Section>
      <Section tone="main">
        <div className="grid gap-x-8 gap-y-2xl sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </Section>
    </>
  );
}

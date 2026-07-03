import { notFound } from "next/navigation";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ParallaxImage from "@/components/ui/ParallaxImage";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { properties } from "@/data/properties";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) return {};
  return {
    title: `${property.name} | Fortune Cosmos`,
    description: property.description,
  };
}

export default function PropertyDetailPage({ params }) {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) notFound();

  const stats = [
    { label: "Beds", value: property.beds },
    { label: "Baths", value: property.baths },
    { label: "Sq Ft", value: property.sqft },
    { label: "Type", value: property.type },
  ];

  return (
    <>
      {property.image ? (
        <ParallaxImage
          src={property.image}
          alt={`${property.name} — Hero exterior`}
          className="aspect-[16/9] w-full"
          priority
          intensity={120}
        />
      ) : (
        <PlaceholderImage
          label={`${property.name} — Hero exterior`}
          ratio="aspect-[16/9]"
          tone="brand"
        />
      )}

      <Section tone="main">
        <div className="grid gap-2xl lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-l">
            <div className="flex flex-col gap-3">
              <Badge tone="brand" className="w-fit">
                {property.type}
              </Badge>
              <h1 className="text-h2 font-display italic text-text-dark">
                {property.name}
              </h1>
              <p className="text-footnote uppercase tracking-eyebrow text-text-medium">
                {property.location}
              </p>
            </div>
            <p className="max-w-2xl text-intro font-display italic text-text-medium">
              {property.description}
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line-light pt-l sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-display text-h5 italic text-brand">
                    {s.value}
                  </span>
                  <span className="text-footnote uppercase tracking-eyebrow text-text-medium">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <aside className="flex h-fit flex-col gap-4 border border-line-light bg-bg-accent p-l">
            <span className="eyebrow text-brand">Listed at</span>
            <span className="text-h3 font-display italic text-text-dark">
              {property.price}
            </span>
            <Button href="/contact" variant="filled" className="mt-2 w-full">
              Request a Private Tour
            </Button>
            <Button href="/contact" variant="outline" className="w-full">
              Ask a Question
            </Button>
          </aside>
        </div>
      </Section>
    </>
  );
}
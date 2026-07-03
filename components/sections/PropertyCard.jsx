import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Badge from "@/components/ui/Badge";

export default function PropertyCard({ property, className = "" }) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className={`group flex flex-col gap-4 ${className}`}
    >
      <div className="relative overflow-hidden">
        {property.image ? (
          <ParallaxImage
            src={property.image}
            alt={`${property.name} — Exterior`}
            className="aspect-[4/3]"
            imageClassName="transition-transform duration-[900ms] ease-signature group-hover:scale-105"
            intensity={40}
          />
        ) : (
          <PlaceholderImage
            label={`${property.name} — Exterior`}
            ratio="aspect-[4/3]"
            className="transition-transform duration-[900ms] ease-signature group-hover:scale-105"
          />
        )}
        <Badge tone="dark" className="absolute left-4 top-4">
          {property.type}
        </Badge>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-h5 font-display italic text-text-dark">
            {property.name}
          </h3>
          <span className="whitespace-nowrap font-body text-brow font-semibold text-brand">
            {property.price}
          </span>
        </div>
        <p className="text-footnote uppercase tracking-eyebrow text-text-medium">
          {property.location}
        </p>
        <p className="mt-1 text-footnote text-text-medium">
          {property.beds} Beds · {property.baths} Baths · {property.sqft} Sq Ft
        </p>
      </div>
    </Link>
  );
}
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const regions = [
  "Sonoma & Napa Valley",
  "Peninsula & Woodside",
  "Newport & Laguna Coast",
  "Big Sur & Carmel",
];

export default function LocationSection() {
  return (
    <Section tone="accent">
      <div className="grid gap-2xl lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-l">
          <SectionHeading
            eyebrow="Where We Work"
            heading="Focused on California's most distinctive addresses."
          />
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {regions.map((region) => (
              <li key={region} className="flex items-center gap-3 text-body text-text-medium">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {region}
              </li>
            ))}
          </ul>
        </div>
        <PlaceholderImage
          label="Interactive regional map"
          ratio="aspect-[4/3]"
        />
      </div>
    </Section>
  );
}

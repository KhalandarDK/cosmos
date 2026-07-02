import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/amenities";

export default function ServicesGrid() {
  return (
    <Section tone="main" id="services" as="section">
      <div className="flex flex-col gap-l">
        <SectionHeading
          eyebrow="How We Help"
          heading="Full-service support, from search to settling in."
        />
        <div className="grid gap-x-8 gap-y-l sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div key={service.title} className="flex flex-col gap-3 border-t border-line-light pt-6">
              <span className="font-display text-h4 italic text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-h5 font-display italic text-text-dark">
                {service.title}
              </h3>
              <p className="text-body text-text-medium">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

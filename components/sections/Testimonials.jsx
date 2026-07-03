import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "Our advisor understood exactly what we needed before we could fully articulate it ourselves. The entire process felt considered, never rushed.",
    name: "A. Whitfield",
    location: "Sonoma Valley",
  },
  {
    quote:
      "Discretion mattered enormously to us, and Fortune Cosmos delivered on every level. We never once felt like a transaction.",
    name: "M. Delacroix",
    location: "Newport Coast",
  },
  {
    quote:
      "Nineteen years of relationships in this market shows. They knew about the property before it was even quietly listed.",
    name: "R. Okafor",
    location: "Woodside",
  },
];

export default function Testimonials() {
  return (
    <Section tone="accent">
      <div className="flex flex-col gap-2xl">
        <SectionHeading
          eyebrow="In Their Words"
          heading="Trusted by families across India."
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-l lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col gap-6 rounded-xl bg-bg-main p-8"
            >
              <blockquote className="text-body italic text-text-dark">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex flex-col gap-1">
                <span className="text-footnote font-semibold uppercase tracking-eyebrow text-text-dark">
                  {testimonial.name}
                </span>
                <span className="text-footnote text-text-medium">
                  {testimonial.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
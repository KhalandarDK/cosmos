import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export const metadata = {
  title: "Contact | Fortune  Cosmos",
  description:
    "Get in touch with the Fortune  Cosmos advisory team to buy, sell, or schedule a private tour.",
};

const offices = [
  { city: "Sonoma Valley", phone: "(707) 555-0142" },
  { city: "Peninsula & South Bay", phone: "(650) 555-0198" },
  { city: "Orange County Coast", phone: "(949) 555-0176" },
];

function FormField({ label, id, type = "text", as = "input", ...rest }) {
  const Tag = as;
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="eyebrow text-text-medium">{label}</span>
      <Tag
        id={id}
        name={id}
        type={as === "input" ? type : undefined}
        className="w-full border border-line-medium bg-white px-4 py-3 text-input text-text-dark placeholder:text-text-medium/60 focus:border-brand focus:outline-none"
        {...rest}
      />
    </label>
  );
}

export default function ContactPage() {
  return (
    <>
      <Section tone="dark" className="py-2xl">
        <SectionHeading
          eyebrow="Get in Touch"
          heading="Tell us what you're looking for."
          intro="Whether you're ready to tour a property or just starting to explore, an advisor will respond within one business day."
          tone="dark"
        />
      </Section>

      <Section tone="main">
        <div className="grid gap-2xl lg:grid-cols-[1.2fr_1fr]">
          <form className="flex flex-col gap-l">
            <div className="grid gap-l sm:grid-cols-2">
              <FormField id="firstName" label="First Name" required />
              <FormField id="lastName" label="Last Name" required />
            </div>
            <div className="grid gap-l sm:grid-cols-2">
              <FormField id="email" type="email" label="Email" required />
              <FormField id="phone" type="tel" label="Phone" />
            </div>
            <FormField
              id="message"
              label="What are you looking for?"
              as="textarea"
              rows={5}
              placeholder="Tell us about your search — location, budget, timeline…"
            />
            <Button type="submit" variant="filled" size="large" className="w-fit">
              Send Inquiry
            </Button>
          </form>

          <div className="flex flex-col gap-l">
            <PlaceholderImage label="Regional office exterior" ratio="aspect-[4/3]" />
            <div className="flex flex-col gap-4 border-t border-line-light pt-l">
              {offices.map((office) => (
                <div key={office.city} className="flex items-center justify-between gap-4">
                  <span className="text-body text-text-dark">{office.city}</span>
                  <span className="text-footnote uppercase tracking-eyebrow text-text-medium">
                    {office.phone}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { footerNav } from "@/data/navigation";

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="eyebrow text-brand-invert">{title}</span>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="link-underline font-body text-body text-text-light/85"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-light">
      <Container className="flex flex-col gap-2xl py-2xl md:py-3xl">
        <div className="flex flex-col justify-between gap-2xl lg:flex-row">
          <div className="flex max-w-sm flex-col gap-4">
            <span className="font-display text-h4 italic">
              Fortune <span className="not-italic text-brand-invert">Cosmos </span>
            </span>
            <p className="text-body text-text-light/75">
              A private advisory representing distinctive homes, vineyard
              estates and waterfront residences across California.
            </p>
            <form className="mt-2 flex max-w-sm gap-2">
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Your email"
                className="w-full border border-line-dark bg-transparent px-4 py-3 text-body text-text-light placeholder:text-text-light/50 focus:border-brand-invert focus:outline-none"
              />
              <Button type="submit" variant="invert" className="shrink-0">
                Join
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            <FooterColumn title="Explore" links={footerNav.explore} />
            <FooterColumn title="Company" links={footerNav.company} />
            <FooterColumn title="Support" links={footerNav.support} />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line-dark pt-l text-footnote text-text-light/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fortune  Cosmos. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="link-underline">
              Privacy Policy
            </Link>
            <Link href="/contact" className="link-underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

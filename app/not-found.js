import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-l px-pp text-center">
      <span className="eyebrow text-brand">404</span>
      <h1 className="text-h2 font-display italic text-text-dark">
        This page has moved, or never existed.
      </h1>
      <p className="max-w-md text-body text-text-medium">
        Try browsing our current listings, or head back to the homepage.
      </p>
      <div className="flex gap-4">
        <Button href="/">Back Home</Button>
        <Button href="/properties" variant="outline">
          View Listings
        </Button>
      </div>
    </section>
  );
}

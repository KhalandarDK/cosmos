"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ArrowLink from "@/components/ui/ArrowLink";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OFFERS = [
  {
    src: "/images/offer-flash-sale.jpg",
    alt: "Poolside lounging, vineyard-view deck",
    heading: "4th of July Flash Sale",
    description: "Enjoy Up to 25% Off & a $150 Resort Credit",
    href: "/contact",
  },
  {
    src: "/images/offer-wine-train.jpg",
    alt: "Wine train cabin, Napa Valley",
    heading: "The Ultimate Pairing: Wine Train Escape",
    description: "Lunch Wine Train Experience, 10% Off & a $100 Resort Credit",
    href: "/contact",
  },
  {
    src: "/images/offer-cabana.jpg",
    alt: "Private cabana, poolside service",
    heading: "Sip, Savor & Celebrate Getaway",
    description: "Full-Day Private Cabana Rental, $400 Resort Credit & 20% Off",
    href: "/contact",
  },
];

function SpecialOffers() {
  const [active, setActive] = useState(0);
  const [dragX, setDragX] = useState(0);
  const dragState = useRef(null);
  const offer = OFFERS[active];

  const goTo = (index) => {
    setActive((index + OFFERS.length) % OFFERS.length);
  };

  const onPointerDown = (e) => {
    dragState.current = { startX: e.clientX, dragging: true };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragState.current?.dragging) return;
    setDragX(e.clientX - dragState.current.startX);
  };

  const endDrag = () => {
    if (!dragState.current?.dragging) return;
    const threshold = 60;
    if (dragX > threshold) goTo(active - 1);
    else if (dragX < -threshold) goTo(active + 1);
    dragState.current = null;
    setDragX(0);
  };

  return (
    <Section tone="main">
      <div className="grid gap-10 bg-bg-accent lg:grid-cols-2 lg:items-center min-h-[750px] py-12">
        {/* IMAGE SECTION */}
        <div className="relative mx-auto w-full max-w-xl p-6 lg:p-10">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl cursor-grab select-none touch-pan-y active:cursor-grabbing"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
          >
            {/* SLIDE WRAPPER */}
            <div
              className="relative h-full w-full"
              style={{
                transform: `translateX(${dragX}px)`,
                transition: dragState.current?.dragging
                  ? "none"
                  : "transform 350ms ease",
              }}
            >
              <Image
                src={offer.src}
                alt={offer.alt}
                fill
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-cover"
                priority={active === 0}
              />
            </div>

            {/* LEFT ARROW */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => goTo(active - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition"
            >
              <ChevronLeft size={22} />
            </button>

            {/* RIGHT ARROW */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => goTo(active + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="flex flex-col items-center justify-center gap-6 px-6 lg:px-12 text-center">
          <span className="eyebrow text-brand">Special Offers</span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
            M
          </div>

          <h3 className="text-h3 text-text-dark">{offer.heading}</h3>

          <p className="text-body text-text-medium max-w-md">
            {offer.description}
          </p>

          <ArrowLink href={offer.href}>View Offer</ArrowLink>
        </div>
      </div>
    </Section>
  );
}

export default function IntroSplit() {
  return (
    <>
      {/* Elegant Accommodations split */}
      <Section tone="main" className="!pt-0">
        <SectionHeading
          eyebrow="Our Approach"
          heading="Napa All in One Place"
          intro="Aravalle is your destination for everything real estate, a sprawling advisory unlike anywhere else. Uncover the essence of wine country with ease, with the finest homes and guidance at your fingertips."
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-l">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/accommodations-suite.jpg"
                alt="Primary suite — vineyard-view bedroom"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-h3 text-text-dark">Elegant Accommodations</h3>
              <p className="text-body text-text-medium">
                Call a corner of California wine country your own in exquisite
                properties, from vineyard view estates to luxurious
                multi-bedroom homes with guest suites.
              </p>
              <Button href="/properties" variant="outline" className="mt-2">
                Browse Listings
              </Button>
            </div>
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden lg:mt-2xl">
            <Image
              src="/images/accommodations-balcony.jpg"
              alt="Private balcony overlooking the vineyard"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <SpecialOffers />
    </>
  );
}
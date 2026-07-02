import Hero from "@/components/sections/Hero";
import StatsAwards from "@/components/sections/StatsAwards";
import IntroSplit from "@/components/sections/IntroSplit";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Testimonials from "@/components/sections/Since";
import LocationSection from "@/components/sections/LocationSection";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsAwards />
      <IntroSplit />
      <Testimonials />
      <FeaturedProperties />
      <ServicesGrid />
      <LocationSection />
      <CTABanner />
    </>
  );
}

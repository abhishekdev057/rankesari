import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import PackagesGrid from "@/components/packages-grid";
import CTABlock from "@/components/cta-block";
import { BRAND } from "@/lib/brand-images";

export const metadata: Metadata = {
  title: "Tent Packages — From Classic to Tent City",
  description:
    "Choose from Classic Luxury, Royal Swiss Cottage, Maharaja Suite, Event Stay Infrastructure and Tent City packages. Custom configurations on request."
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tent Categories"
        title={
          <>
            Five canvases, <span className="italic gold-text">infinite possibilities.</span>
          </>
        }
        subtitle="From a signature couple's suite to a multi-acre luxury city. Every spec is customisable."
        image={BRAND.maharajaInterior}
      />
      <PackagesGrid />
      <CTABlock />
    </>
  );
}

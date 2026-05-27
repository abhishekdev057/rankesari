import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import GalleryGrid from "@/components/gallery-grid";
import CTABlock from "@/components/cta-block";

export const metadata: Metadata = {
  title: "Gallery — Camps, Interiors & Cinematic Stays",
  description:
    "A visual journey through Ran Kesari's luxury desert camps, royal interiors, wedding tent infrastructure and event hospitality cities."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            A visual <span className="italic gold-text">journey.</span>
          </>
        }
        subtitle="Camps, interiors, nights and the moments in between."
        image="/images/gallery/gallery-hero.jpg"
      />
      <GalleryGrid />
      <CTABlock />
    </>
  );
}

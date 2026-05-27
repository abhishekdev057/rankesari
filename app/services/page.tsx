import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ServicesGrid from "@/components/services-grid";
import Process from "@/components/process";
import CTABlock from "@/components/cta-block";
import Marquee from "@/components/marquee";
import { tentFeatures } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — Luxury Tent Infrastructure",
  description:
    "Luxury Swiss tents, wedding tent infrastructure, event tent cities, corporate retreat camps, festival accommodation and royal desert camps — installed end-to-end."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            What we <span className="italic gold-text">build.</span>
          </>
        }
        subtitle="Six signature offerings. One end-to-end team. Every infrastructure detail handled."
        image="/images/services/services-hero.jpg"
      />
      <ServicesGrid />
      <Marquee items={tentFeatures} />
      <Process />
      <CTABlock />
    </>
  );
}

import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import AboutBlock from "@/components/about-block";
import ServicesGrid from "@/components/services-grid";
import PackagesGrid from "@/components/packages-grid";
import Experience from "@/components/experience";
import GalleryGrid from "@/components/gallery-grid";
import WhyUs from "@/components/why-us";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import CTABlock from "@/components/cta-block";
import { tentFeatures } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee items={tentFeatures} />
      <AboutBlock />
      <ServicesGrid compact />
      <Experience />
      <PackagesGrid compact />
      <GalleryGrid preview />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTABlock />
    </>
  );
}

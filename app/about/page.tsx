import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import LuxeImage from "@/components/image";
import { Reveal } from "@/components/reveal";
import WhyUs from "@/components/why-us";
import Process from "@/components/process";
import CTABlock from "@/components/cta-block";
import { stats } from "@/lib/data";
import { BRAND } from "@/lib/brand-images";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "About — Royal Camping Infrastructure",
  description:
    "Ran Kesari Camping is a Rajasthan-born luxury tent infrastructure brand designing and installing premium camps, royal suites and full hospitality cities across India."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ran Kesari"
        title={
          <>
            A philosophy of <span className="italic gold-text">desert luxury.</span>
          </>
        }
        subtitle="We don't pitch tents. We install premium hospitality ecosystems — temporary, but never compromised."
        image={BRAND.canopy}
      />

      <Section>
        <div className="container-luxe grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow single">Our Story</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-display mt-6 text-4xl sm:text-5xl lg:text-[60px] text-balance">
                Born in Rajasthan.
                <span className="block italic gold-text">Built for anywhere.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-base leading-relaxed text-ivory/70 sm:text-lg">
                Ran Kesari Camping began on the dunes of the Thar — building
                royal stays for travellers who refused to trade luxury for
                landscape. Today we install complete temporary hospitality
                ecosystems for weddings, festivals, retreats, tourism and
                government tourism initiatives.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-5 text-base leading-relaxed text-ivory/70 sm:text-lg">
                Every camp we build is engineered like a hotel and finished
                like a private estate. Hardwood floors, climate-controlled
                interiors, attached luxury washrooms, premium linen, hand-picked
                furniture, hospitality teams trained in five-star service.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="mt-5 text-base leading-relaxed text-ivory/70 sm:text-lg">
                When the event ends, we dismantle without a trace. The land
                remembers nothing. Your guests remember everything.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal y={40}>
              <LuxeImage
                src={BRAND.twinInterior}
                alt="Luxury Swiss tent interior with block-printed walls and lanterns"
                className="h-[520px] sm:h-[640px]"
              />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-ink-800/40">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="What We Stand For"
            title={
              <>
                The Ran Kesari <span className="italic gold-text">codes.</span>
              </>
            }
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Hospitality First",
                body: "Every decision begins with the guest. Comfort, dignity, quiet."
              },
              {
                title: "Quietly Royal",
                body: "Rajasthani heritage referenced — never costumed. Restraint over excess."
              },
              {
                title: "Engineered, Not Improvised",
                body: "Power, water, climate, structure — built to spec, not stitched together."
              },
              {
                title: "Time-Critical, Always",
                body: "Weddings don't wait. We mobilise fast and finish on time."
              },
              {
                title: "Leave No Trace",
                body: "Dismantle with the same care as install. Respect the land."
              },
              {
                title: "Trusted Crews",
                body: "Long-standing hospitality teams, trained in five-star service."
              }
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="card-luxe h-full p-8">
                  <span className="font-display text-4xl gold-text">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-2xl text-ivory">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 border border-gold/20 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  "flex h-full min-h-[180px] flex-col items-center justify-center bg-ink-900 px-6 py-10 text-center sm:px-8 sm:py-12",
                  i % 2 === 1 && "border-l border-gold/15",
                  i >= 2 && "border-t border-gold/15",
                  "lg:border-t-0",
                  i > 0 && "lg:border-l lg:border-gold/15"
                )}
              >
                <p className="font-display text-4xl leading-none gold-text sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-widest2 text-ivory/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <WhyUs />
      <Process />
      <CTABlock />
    </>
  );
}

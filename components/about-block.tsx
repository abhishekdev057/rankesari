import Link from "next/link";
import { Section } from "./section";
import LuxeImage from "./image";
import { Reveal } from "./reveal";
import { stats } from "@/lib/data";
import { BRAND } from "@/lib/brand-images";
import { cn } from "@/lib/cn";

export default function AboutBlock() {
  return (
    <Section id="about">
      <div className="container-luxe grid gap-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow single">Our Story</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-display mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-[64px] text-balance">
              A luxury hospitality brand,
              <span className="block italic gold-text">built in canvas.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-base leading-relaxed text-ivory/70 sm:text-lg">
              Ran Kesari Camping is a premium tent infrastructure company born
              from the dunes of Rajasthan. We design and install complete
              temporary hospitality ecosystems — Swiss cottages, royal suites,
              dining marquees, washroom blocks, lighting, power and the
              hospitality crews to run it all.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 text-base leading-relaxed text-ivory/70 sm:text-lg">
              Where there is sand, a clearing or a palace lawn — we build
              five-star experiences. Then we take them away without a trace.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/about" className="btn-gold">
                Our Philosophy
              </Link>
              <Link href="/services" className="btn-ghost">
                What We Build
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6">
          <Reveal y={50}>
            <div className="relative h-[520px] sm:h-[600px]">
              <LuxeImage
                src={BRAND.maharajaInterior}
                alt="Luxury Swiss tent interior with chandelier and brass accents"
                className="h-full w-full"
              />
              <div className="absolute -bottom-8 -left-6 hidden h-44 w-44 border border-gold/40 bg-ink-800/90 p-5 backdrop-blur-md sm:block">
                <p className="text-[10px] uppercase tracking-widest2 text-gold">
                  Est. Rajasthan
                </p>
                <p className="mt-4 font-display text-[44px] leading-none gold-text">
                  15+
                </p>
                <p className="mt-2 text-xs text-ivory/70">
                  Years building royal desert experiences
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container-luxe mt-24">
        <div className="grid grid-cols-2 border border-gold/20 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div
                className={cn(
                  "flex h-full min-h-[180px] flex-col items-center justify-center bg-ink-900 px-6 py-10 text-center sm:px-8 sm:py-12",
                  // Mobile (2 cols): left border on items 1 & 3, top border on items 2 & 3
                  i % 2 === 1 && "border-l border-gold/15",
                  i >= 2 && "border-t border-gold/15",
                  // Desktop (4 cols): left border on items 1, 2, 3; no top border anywhere
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
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

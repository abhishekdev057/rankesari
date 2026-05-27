import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "./section";
import { services } from "@/lib/data";
import { Reveal } from "./reveal";
import LuxeImage from "./image";

export default function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const items = compact ? services.slice(0, 6) : services;
  return (
    <Section id="services" className="bg-ink-800/40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Our Services"
          title={
            <>
              Royal infrastructure for
              <span className="italic gold-text"> extraordinary stays.</span>
            </>
          }
          description="From a single signature suite tent to a full hospitality city — we design, build and run it all."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((svc, i) => (
            <Reveal key={svc.slug} delay={i * 0.06}>
              <article className="card-luxe group flex h-full flex-col">
                <div className="relative h-72 overflow-hidden">
                  <LuxeImage src={svc.image} alt={svc.title} className="h-full w-full" />
                  <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center border border-ivory/20 bg-ink/60 text-ivory backdrop-blur-md transition-colors group-hover:border-gold group-hover:text-gold">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl text-ivory">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                    {svc.blurb}
                  </p>
                  <ul className="mt-5 space-y-2 text-[12px] text-ivory/55">
                    {svc.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="h-px w-4 bg-gold/70" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-gold transition-colors hover:text-ivory"
                    >
                      Enquire
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

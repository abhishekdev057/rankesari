import Link from "next/link";
import { Check } from "lucide-react";
import { Section, SectionHeader } from "./section";
import { packages } from "@/lib/data";
import { Reveal } from "./reveal";
import LuxeImage from "./image";
import { cn } from "@/lib/cn";

export default function PackagesGrid({ compact = false }: { compact?: boolean }) {
  const items = compact ? packages.slice(0, 3) : packages;
  return (
    <Section id="packages">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Tent Categories"
          title={
            <>
              Choose your <span className="italic gold-text">royal canvas.</span>
            </>
          }
          description="Five signature configurations — from intimate suites to entire luxury cities."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {items.map((pkg, i) => (
            <Reveal
              key={pkg.name}
              delay={i * 0.06}
              className={cn(
                "lg:col-span-6",
                items.length >= 4 && i >= 3 && "lg:col-span-6",
                items.length === 5 && i === 4 && "lg:col-span-12"
              )}
            >
              <article
                className={cn(
                  "card-luxe relative grid h-full grid-cols-1 overflow-hidden md:grid-cols-2",
                  pkg.featured && "border-gold/60"
                )}
              >
                {pkg.featured && (
                  <span className="absolute right-5 top-5 z-10 border border-gold/60 bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-widest2 text-gold backdrop-blur-sm">
                    Signature
                  </span>
                )}
                <div className="relative h-72 md:h-full">
                  <LuxeImage src={pkg.image} alt={pkg.name} className="h-full w-full" />
                </div>
                <div className="flex flex-col p-7 lg:p-9">
                  <h3 className="font-display text-3xl text-ivory">{pkg.name}</h3>
                  <p className="mt-2 text-sm italic text-gold/80">{pkg.tagline}</p>

                  <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-[12px]">
                    <Spec label="Size" value={pkg.size} />
                    <Spec label="Capacity" value={pkg.capacity} />
                    <Spec label="Climate" value={pkg.ac ? "AC + Heating" : "Non-AC"} />
                    <Spec label="Washroom" value={pkg.washroom} />
                    <Spec label="Bed Setup" value={pkg.bed} />
                  </dl>

                  <div className="mt-6">
                    <p className="text-[11px] uppercase tracking-widest2 text-ivory/55">
                      Amenities
                    </p>
                    <ul className="mt-3 grid grid-cols-1 gap-1.5 text-[12px] text-ivory/75 sm:grid-cols-2">
                      {pkg.amenities.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <Check size={12} className="mt-1 shrink-0 text-gold" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className="text-[11px] uppercase tracking-widest2 text-ivory/55">
                      Best For
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {pkg.bestFor.map((b) => (
                        <span
                          key={b}
                          className="border border-ivory/15 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ivory/70"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-7">
                    <Link href="/contact#quote" className="btn-gold w-full">
                      Get Quotation
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

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-widest2 text-ivory/45">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-ivory/90">{value}</dd>
    </div>
  );
}

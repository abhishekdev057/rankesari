import Link from "next/link";
import { Section } from "./section";
import LuxeImage from "./image";
import { Reveal } from "./reveal";
import { site } from "@/lib/site";

export default function CTABlock() {
  return (
    <Section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10">
        <LuxeImage
          src="/images/cta/cta-bg.jpg"
          alt=""
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink" />
      </div>

      <div className="container-luxe">
        <div className="relative mx-auto max-w-4xl border border-gold/40 bg-ink/70 p-10 text-center backdrop-blur-md sm:p-16">
          <span className="pointer-events-none absolute -top-px left-1/2 h-px w-3/4 -translate-x-1/2 bg-gold-line" />
          <Reveal>
            <p className="eyebrow">Begin your camp</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-display mt-6 text-3xl leading-tight sm:text-5xl lg:text-[64px] text-balance">
              Tell us where.
              <span className="block italic gold-text">
                We&rsquo;ll build the rest.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ivory/70 sm:text-base">
              A consultation with our team takes twenty minutes. A custom
              quotation, two days. A finished camp city — anywhere you choose.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-gold">
                Book Consultation
              </Link>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost">
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

import { Section, SectionHeader } from "./section";
import { whyUs } from "@/lib/data";
import { Reveal } from "./reveal";

export default function WhyUs() {
  return (
    <Section id="why-us" className="bg-ink-800/40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Why Ran Kesari"
          title={
            <>
              The standard, <span className="italic gold-text">redefined.</span>
            </>
          }
          description="Six reasons why luxury weddings, governments, and global event teams choose us."
        />
        <div className="mt-16 grid gap-px border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="group relative h-full bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-700 sm:p-10">
                <span className="font-display text-5xl gold-text">0{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl text-ivory">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                  {w.body}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold-line transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

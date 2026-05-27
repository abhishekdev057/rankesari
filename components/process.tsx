import { Section, SectionHeader } from "./section";
import { process } from "@/lib/data";
import { Reveal } from "./reveal";

export default function Process() {
  return (
    <Section id="process">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Our Process"
          title={
            <>
              From dune to <span className="italic gold-text">delivery.</span>
            </>
          }
          description="Six precise steps. One seamless luxury experience."
        />
        <div className="relative mt-20">
          <span className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gold/20 lg:block" />
          <ol className="space-y-12 lg:space-y-0">
            {process.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <li key={p.step} className="lg:grid lg:grid-cols-2 lg:gap-16">
                  {left ? (
                    <>
                      <div className="lg:pr-12 lg:text-right">
                        <Reveal delay={i * 0.05}>
                          <StepCard p={p} />
                        </Reveal>
                      </div>
                      <div className="hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" />
                      <div className="lg:pl-12">
                        <Reveal delay={i * 0.05}>
                          <StepCard p={p} />
                        </Reveal>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}

function StepCard({ p }: { p: { step: string; title: string; body: string } }) {
  return (
    <div className="relative border border-ivory/10 bg-ink-800/60 p-8 backdrop-blur-sm lg:p-10">
      <p className="font-display text-5xl gold-text">{p.step}</p>
      <h3 className="mt-4 font-display text-2xl text-ivory">{p.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ivory/65">{p.body}</p>
    </div>
  );
}

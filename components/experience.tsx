import { Section } from "./section";
import LuxeImage from "./image";
import { Reveal } from "./reveal";
import { BRAND } from "@/lib/brand-images";

export default function Experience() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <LuxeImage
          src={BRAND.weddingNight}
          alt="Luxury camp lit at night under desert stars"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      </div>

      <div className="container-luxe grid gap-16 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow single">The Experience</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-display mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-[72px] text-balance">
              Dunes, lantern-light, and
              <span className="block italic gold-text">a king-size bed under stars.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
              Step from a candle-lit dining marquee into a Swiss tent finished
              like a five-star suite — silk linen, hardwood floors, attached
              washroom, climate-controlled, hushed. Outside, the desert
              breathes. Inside, you forget the world is anywhere else.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.2}>
            <ul className="space-y-5 border-l border-gold/30 pl-6 text-sm text-ivory/80">
              {[
                "Royal Rajasthan aesthetics, no kitsch",
                "Hotel-grade infrastructure end-to-end",
                "Crafted lighting from dusk to dawn",
                "Hospitality crews trained in five-star service",
                "Climate-controlled comfort in the desert"
              ].map((p, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="block h-px w-6 bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

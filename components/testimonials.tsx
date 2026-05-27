"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeader } from "./section";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);

  return (
    <Section id="testimonials" className="bg-ink-800/40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Voices"
          title={
            <>
              Trusted by royalty,
              <span className="italic gold-text"> told by guests.</span>
            </>
          }
        />

        <div className="relative mx-auto mt-16 max-w-4xl text-center">
          <svg
            viewBox="0 0 60 48"
            className="mx-auto h-10 w-10 text-gold/80"
            aria-hidden
          >
            <path
              d="M0 28C0 16 6 6 18 0l4 8c-6 4-10 8-10 14h10v18H0V28zm34 0c0-12 6-22 18-28l4 8c-6 4-10 8-10 14h10v18H34V28z"
              fill="currentColor"
              opacity="0.55"
            />
          </svg>

          <div className="relative mt-10 min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="space-y-7"
              >
                <p className="font-display text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl text-balance">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <p className="text-[11px] uppercase tracking-widest2 text-gold">
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs text-ivory/55">{t.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center border border-ivory/15 text-ivory/80 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1 transition-all ${
                    idx === i ? "w-8 bg-gold" : "w-4 bg-ivory/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center border border-ivory/15 text-ivory/80 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

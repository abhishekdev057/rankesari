"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import LuxeImage from "./image";
import { BRAND } from "@/lib/brand-images";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={ref}
      className="relative h-[100vh] min-h-[680px] w-full overflow-hidden vignette"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <LuxeImage
          src={BRAND.tentCity}
          alt="Royal Swiss tent city at twilight in the Thar Desert"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/30 to-ink" />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="container-luxe relative z-10 flex h-full flex-col items-center justify-center pt-24 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow"
        >
          Royal Rajasthan · Luxury Camp Infrastructure
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-display mt-8 max-w-5xl text-[44px] leading-[1.02] sm:text-[68px] lg:text-[92px] text-balance"
        >
          Luxury Desert Hospitality,
          <span className="block italic gold-text">Installed Anywhere.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/75 sm:text-lg text-balance"
        >
          Premium Swiss tents, royal desert camps and end-to-end hospitality
          infrastructure for weddings, festivals, retreats and tourism.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link href="/services" className="btn-gold">
            Explore Camps
          </Link>
          <Link href="/contact" className="btn-ghost">
            Book Consultation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/60 sm:bottom-10"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

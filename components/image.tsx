"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Luxury image component with graceful placeholder.
 * Falls back to an SVG canvas-style placeholder if the source isn't available yet,
 * so the design renders beautifully before client images are dropped in.
 */
export default function LuxeImage({
  src,
  alt,
  className,
  caption
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <figure className={cn("group relative overflow-hidden bg-ink-700", className)}>
      {!errored ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
      ) : (
        <Placeholder label={alt} />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-90" />
      {caption && (
        <figcaption className="absolute bottom-5 left-5 right-5 text-[11px] uppercase tracking-widest2 text-ivory/85">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 800 600" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1916" />
            <stop offset="60%" stopColor="#3a2a18" />
            <stop offset="100%" stopColor="#6a4a22" />
          </linearGradient>
          <linearGradient id="dune" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9b7a3e" />
            <stop offset="100%" stopColor="#3a2a18" />
          </linearGradient>
          <linearGradient id="tent" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d9c4a0" />
            <stop offset="100%" stopColor="#a87f1f" />
          </linearGradient>
          <radialGradient id="sun" cx="0.7" cy="0.25" r="0.25">
            <stop offset="0%" stopColor="#f3e7b8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#f3e7b8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="800" height="600" fill="url(#sky)" />
        <rect width="800" height="600" fill="url(#sun)" />
        <path d="M0 420 Q 200 360 400 400 T 800 380 L 800 600 L 0 600 Z" fill="url(#dune)" opacity="0.95" />
        <path d="M0 480 Q 220 440 420 470 T 800 460 L 800 600 L 0 600 Z" fill="#2a1f10" opacity="0.85" />
        {/* Tent */}
        <g transform="translate(330,360)">
          <path d="M0 100 L70 0 L140 100 Z" fill="url(#tent)" />
          <path d="M55 100 Q70 70 85 100 Z" fill="#0a0908" />
          <path d="M70 -4 L70 8" stroke="#c8a25b" strokeWidth="1.5" />
          <circle cx="70" cy="-7" r="3" fill="#c8a25b" />
        </g>
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div className="rounded-full border border-gold/40 bg-ink/40 px-4 py-1.5 text-[10px] uppercase tracking-widest2 text-gold/90 backdrop-blur-sm">
          {label}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { BRAND } from "@/lib/brand-images";

/**
 * Brand logo. Tries the photo logo at /brand/logo.png first; if it fails to
 * load (file not yet uploaded), falls back to the gold-on-black SVG mark.
 *
 * - `variant="full"`  → photo logo with text (default, used in navbar / footer)
 * - `variant="mark"`  → just the icon mark
 */
export default function Logo({
  className,
  variant = "full"
}: {
  className?: string;
  variant?: "full" | "mark";
}) {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {!photoFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={BRAND.logo}
          alt="Ran Kesari Camping"
          onError={() => setPhotoFailed(true)}
          className={cn(
            "block w-auto select-none",
            variant === "full" ? "h-16 sm:h-20 lg:h-[88px]" : "h-12"
          )}
        />
      ) : (
        <FallbackMark withText={variant === "full"} />
      )}
    </div>
  );
}

function FallbackMark({ withText }: { withText: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 64 64" className="h-9 w-9 shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="rk-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8a6618" />
            <stop offset="35%" stopColor="#d9b54d" />
            <stop offset="55%" stopColor="#f3e7b8" />
            <stop offset="80%" stopColor="#c8a25b" />
            <stop offset="100%" stopColor="#8a6618" />
          </linearGradient>
        </defs>
        <path
          d="M32 4 L58 22 L58 58 L6 58 L6 22 Z"
          fill="none"
          stroke="url(#rk-gold)"
          strokeWidth="0.8"
          opacity="0.65"
        />
        <path d="M32 14 L52 50 L44 50 L32 30 L20 50 L12 50 Z" fill="url(#rk-gold)" />
        <path d="M28 50 Q32 40 36 50 Z" fill="#0a0908" />
        <circle cx="32" cy="11" r="1.6" fill="url(#rk-gold)" />
        <path d="M10 54 L54 54" stroke="url(#rk-gold)" strokeWidth="0.6" opacity="0.7" />
      </svg>
      {withText && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-[20px] tracking-[0.18em] text-ivory">
            RAN <span className="gold-text">KESARI</span>
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-widest2 text-ivory/55">
            Camping · Rajasthan
          </span>
        </div>
      )}
    </div>
  );
}

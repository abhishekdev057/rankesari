import Link from "next/link";
import { Section, SectionHeader } from "./section";
import { galleryImages } from "@/lib/data";
import LuxeImage from "./image";
import { Reveal } from "./reveal";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";

const spanClass = {
  big: "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto",
  tall: "row-span-2 aspect-[3/4]",
  wide: "sm:col-span-2 aspect-[16/9]",
  none: "aspect-[4/5]"
} as const;

export default function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const items = preview ? galleryImages.slice(0, 7) : galleryImages;
  return (
    <Section id="gallery">
      <div className="container-luxe">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeader
            align="left"
            eyebrow="Gallery"
            title={
              <>
                Quiet drama,
                <span className="italic gold-text"> cinematic stays.</span>
              </>
            }
            description="A glimpse into the camps, the nights, the interiors, the moments."
          />
          {preview && (
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-gold hover:text-ivory"
            >
              View full gallery <ArrowUpRight size={12} />
            </Link>
          )}
        </div>

        <div
          className={cn(
            "mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[220px]"
          )}
        >
          {items.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 6) * 0.05}
              className={spanClass[img.span ?? "none"]}
            >
              <LuxeImage src={img.src} alt={img.alt} className="h-full w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  id
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative py-24 sm:py-28 lg:py-36", className)}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center"
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : ""
      )}
    >
      <p className={cn("eyebrow", align === "center" ? "" : "single")}>{eyebrow}</p>
      <h2 className="h-display mt-6 text-4xl sm:text-5xl lg:text-[64px] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base leading-relaxed text-ivory/70 sm:text-lg text-balance">
          {description}
        </p>
      )}
    </div>
  );
}

export function Ornament() {
  return (
    <div className="ornament my-10">
      <svg width="22" height="22" viewBox="0 0 22 22" className="text-gold">
        <path
          d="M11 1 L13 9 L21 11 L13 13 L11 21 L9 13 L1 11 L9 9 Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}

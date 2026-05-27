import LuxeImage from "./image";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden vignette">
      <div className="absolute inset-0">
        <LuxeImage src={image} alt="" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />
      </div>
      <div className="container-luxe relative z-10 flex h-full flex-col items-center justify-center pt-24 text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h-display mt-6 text-5xl leading-[1.02] sm:text-7xl lg:text-[88px] text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/75 sm:text-lg text-balance">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

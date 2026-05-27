export default function Marquee({ items }: { items: string[] }) {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ivory/10 bg-ink-800/60 py-6">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {list.map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-[12px] uppercase tracking-widest2 text-ivory/70"
          >
            {it}
            <svg width="8" height="8" viewBox="0 0 8 8" className="text-gold">
              <circle cx="4" cy="4" r="2" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

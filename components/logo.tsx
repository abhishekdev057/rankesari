import { cn } from "@/lib/cn";

export default function Logo({
  className,
  mark = false,
  tone = "gold"
}: {
  className?: string;
  mark?: boolean;
  tone?: "gold" | "ivory";
}) {
  const fill = tone === "gold" ? "url(#rk-gold)" : "#f5efe2";
  const stroke = tone === "gold" ? "url(#rk-gold)" : "#f5efe2";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="rk-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8a6618" />
            <stop offset="35%" stopColor="#d9b54d" />
            <stop offset="55%" stopColor="#f3e7b8" />
            <stop offset="80%" stopColor="#c8a25b" />
            <stop offset="100%" stopColor="#8a6618" />
          </linearGradient>
        </defs>
        {/* Ornate Rajasthani arch frame */}
        <path
          d="M32 4 L58 22 L58 58 L6 58 L6 22 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="0.8"
          opacity="0.65"
        />
        {/* Tent silhouette */}
        <path
          d="M32 14 L52 50 L44 50 L32 30 L20 50 L12 50 Z"
          fill={fill}
        />
        {/* Inner tent door */}
        <path
          d="M28 50 Q32 40 36 50 Z"
          fill="#0a0908"
        />
        {/* Crown dot */}
        <circle cx="32" cy="11" r="1.6" fill={fill} />
        {/* Base line */}
        <path
          d="M10 54 L54 54"
          stroke={stroke}
          strokeWidth="0.6"
          opacity="0.7"
        />
      </svg>
      {!mark && (
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

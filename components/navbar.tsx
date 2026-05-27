"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-ivory/10 bg-ink/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container-luxe flex h-[108px] items-center justify-between lg:h-[128px]">
        <Link href="/" aria-label="Ran Kesari home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative text-[11px] uppercase tracking-widest2 transition-colors",
                  active ? "text-gold" : "text-ivory/80 hover:text-ivory"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-gold transition-all duration-500 group-hover:w-full",
                    active && "w-full"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-gold">
            Book Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center border border-ivory/15 text-ivory lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="border-t border-ivory/10 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-luxe flex flex-col py-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-ivory/5 py-4 text-sm uppercase tracking-widest2 text-ivory/80 hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/contact" className="btn-gold w-full">
                  Book Consultation
                </Link>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="btn-ghost w-full"
                >
                  {site.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

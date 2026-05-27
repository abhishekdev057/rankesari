import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./logo";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-ivory/10 bg-ink-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-2/3 bg-gold-line" />
      <div className="container-luxe grid gap-14 py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/65">
            Ran Kesari Camping designs and installs luxury Swiss tents, royal
            desert camps and end-to-end hospitality infrastructure for
            destination weddings, festivals, retreats and tourism — anywhere in
            India.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center border border-ivory/15 text-ivory/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram size={16} />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="grid h-11 w-11 place-items-center border border-ivory/15 text-ivory/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Mail size={16} />
            </a>
            <a
              href={`tel:${site.phoneRaw}`}
              aria-label="Phone"
              className="grid h-11 w-11 place-items-center border border-ivory/15 text-ivory/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-[11px] uppercase tracking-widest2 text-gold/90">
            Navigate
          </h4>
          <ul className="mt-6 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-[11px] uppercase tracking-widest2 text-gold/90">
            Contact
          </h4>
          <ul className="mt-6 space-y-4 text-sm text-ivory/70">
            <li className="flex items-start gap-3">
              <Phone size={14} className="mt-1 text-gold" />
              <a href={`tel:${site.phoneRaw}`} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={14} className="mt-1 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Instagram size={14} className="mt-1 text-gold" />
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                {site.instagramHandle}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-1 text-gold" />
              <span>{site.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-4 py-6 text-[11px] uppercase tracking-widest2 text-ivory/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Ran Kesari Camping. All rights reserved.</p>
          <p className="text-ivory/40">Crafted with desert reverence.</p>
        </div>
      </div>
    </footer>
  );
}

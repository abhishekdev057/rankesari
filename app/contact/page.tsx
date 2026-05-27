import type { Metadata } from "next";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/page-hero";
import { Section } from "@/components/section";
import ContactForm from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { BRAND } from "@/lib/brand-images";

export const metadata: Metadata = {
  title: "Contact — Begin Your Luxury Camp",
  description:
    "Speak to Ran Kesari Camping. Book a consultation, request a quotation, or message us on WhatsApp for luxury tent infrastructure anywhere in India."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Begin your <span className="italic gold-text">royal camp.</span>
          </>
        }
        subtitle="A consultation takes twenty minutes. A custom quotation, two days."
        image={BRAND.canopy}
      />

      <Section>
        <div className="container-luxe grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="border border-ivory/10 bg-ink-800/60 p-7 backdrop-blur-md sm:p-10">
                <p className="eyebrow single">Direct Lines</p>
                <h3 className="h-display mt-4 text-3xl sm:text-4xl">
                  Speak to us <span className="italic gold-text">directly.</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/65">
                  We&apos;re reachable 7 days a week for new enquiries, site
                  visits and partner conversations.
                </p>

                <ul className="mt-8 space-y-6 text-sm">
                  <ContactRow
                    icon={<Phone size={14} />}
                    label="Phone"
                    value={site.phone}
                    href={`tel:${site.phoneRaw}`}
                  />
                  <ContactRow
                    icon={<Mail size={14} />}
                    label="Email"
                    value={site.email}
                    href={`mailto:${site.email}`}
                  />
                  <ContactRow
                    icon={<MessageCircle size={14} />}
                    label="WhatsApp"
                    value="Chat instantly"
                    href={site.whatsapp}
                    external
                  />
                  <ContactRow
                    icon={<Instagram size={14} />}
                    label="Instagram"
                    value={site.instagramHandle}
                    href={site.instagram}
                    external
                  />
                  <ContactRow
                    icon={<MapPin size={14} />}
                    label="Location"
                    value={site.location}
                  />
                </ul>

                <div className="mt-10 border-t border-ivory/10 pt-7">
                  <p className="text-[11px] uppercase tracking-widest2 text-gold">
                    Hours
                  </p>
                  <p className="mt-3 text-sm text-ivory/70">
                    Mon – Sun · 9:00 AM – 9:00 PM IST
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center border border-gold/40 text-gold">
        {icon}
      </span>
      <span>
        <span className="block text-[10px] uppercase tracking-widest2 text-ivory/50">
          {label}
        </span>
        <span className="mt-1 block text-ivory">{value}</span>
      </span>
    </>
  );
  const cls = "flex items-start gap-4 transition-colors hover:text-gold";
  return (
    <li>
      {href ? (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          className={cls}
        >
          {inner}
        </a>
      ) : (
        <div className={cls}>{inner}</div>
      )}
    </li>
  );
}

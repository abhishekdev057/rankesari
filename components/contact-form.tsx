"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const data = new FormData(f);
    const name = data.get("name");
    const phone = data.get("phone");
    const email = data.get("email");
    const purpose = data.get("purpose");
    const date = data.get("date");
    const guests = data.get("guests");
    const location = data.get("location");
    const message = data.get("message");

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Event: ${purpose}`,
      `Preferred Date: ${date}`,
      `Guests: ${guests}`,
      `Location: ${location}`,
      "",
      "Message:",
      message
    ].join("\n");

    const subject = encodeURIComponent(`Luxury Camp Enquiry — ${name}`);
    const url = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      id="quote"
      className="relative border border-ivory/10 bg-ink-800/60 p-7 backdrop-blur-md sm:p-10"
    >
      <p className="eyebrow single">Request a Consultation</p>
      <h3 className="h-display mt-4 text-3xl sm:text-4xl">
        Tell us about your <span className="italic gold-text">vision.</span>
      </h3>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Full Name" required />
        <Field name="phone" label="Phone" type="tel" required />
        <Field name="email" label="Email" type="email" required />
        <Field name="purpose" label="Event Type" placeholder="Wedding / Festival / Retreat" />
        <Field name="date" label="Preferred Dates" type="text" placeholder="e.g. 14–17 Nov 2026" />
        <Field name="guests" label="Approx. Guests" type="number" />
        <div className="sm:col-span-2">
          <Field name="location" label="Location" placeholder="City / Site" />
        </div>
        <div className="sm:col-span-2">
          <Textarea name="message" label="Tell us more" />
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="btn-gold mt-8 w-full sm:w-auto"
      >
        <Send size={14} /> Send Enquiry
      </motion.button>

      {sent && (
        <p className="mt-5 text-xs text-gold/90">
          Your email draft has opened. We&apos;ll respond within 24 hours.
        </p>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-widest2 text-ivory/55">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-ivory/15 bg-transparent py-2.5 text-sm text-ivory placeholder:text-ivory/35 outline-none transition-colors focus:border-gold"
      />
    </label>
  );
}

function Textarea({ name, label }: { name: string; label: string }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-widest2 text-ivory/55">
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        className="mt-2 w-full border border-ivory/15 bg-transparent p-3 text-sm text-ivory placeholder:text-ivory/35 outline-none transition-colors focus:border-gold"
      />
    </label>
  );
}

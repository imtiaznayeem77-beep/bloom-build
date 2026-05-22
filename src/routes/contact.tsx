import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MessageCircle, Phone, MapPin, Send } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Sutton's Garden Maintenance | Free Quote Deal, Kent" },
      { name: "description", content: "Get a free quote for garden maintenance, lawn care or a transformation across Deal, Kent. Call 07775 085518 or message us on WhatsApp." },
      { property: "og:title", content: "Contact — Sutton's Garden Maintenance" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter your phone").max(30),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().trim().min(5, "Tell us a bit more").max(2000),
});

const SERVICES = [
  "Garden Maintenance",
  "Lawn Care",
  "Hedge Trimming",
  "Garden Transformations",
  "Garden Clearance",
  "Commercial Grounds Maintenance",
  "Holiday Let Gardening",
  "Other",
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(BUSINESS.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (res.ok) {
        toast.success("Thanks! We'll get back to you shortly.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please call or WhatsApp us.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get your free quote today."
        subtitle="Professional garden maintenance services across Deal, Kent and surrounding areas. We aim to reply the same day."
      />

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 rounded-3xl bg-card border border-border p-7 md:p-10 shadow-soft">
            <h2 className="text-2xl font-display">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us a bit about your garden and we'll come back with a friendly,
              no-obligation quote.
            </p>

            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" placeholder="Your name" required />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Phone" name="phone" type="tel" placeholder="07…" required />
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Service required</label>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="" disabled>Choose a service…</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your garden, the work you're after, your address and the best time to call…"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {submitting ? "Sending…" : "Send enquiry"}
              </button>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your enquiry. We never share your details.
              </p>
            </form>
          </div>

          <aside className="lg:col-span-2 space-y-4">
            <ContactCard icon={Phone} label="Call us" value={BUSINESS.phone} href={BUSINESS.phoneHref} />
            <ContactCard icon={MessageCircle} label="WhatsApp" value="Chat with us instantly" href={BUSINESS.whatsappHref} external />
            <ContactCard icon={Mail} label="Email" value={BUSINESS.email} href={BUSINESS.emailHref} />
            <ContactCard icon={MapPin} label="Service area" value={BUSINESS.area} />

            <div className="rounded-3xl overflow-hidden border border-border shadow-soft aspect-[4/3]">
              <iframe
                title="Deal, Kent map"
                src="https://www.google.com/maps?q=Deal%2C%20Kent%2C%20UK&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon, label, value, href, external,
}: { icon: typeof Phone; label: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 hover:bg-muted transition">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
  if (!href) return inner;
  return external ? (
    <a href={href} target="_blank" rel="noreferrer">{inner}</a>
  ) : (
    <a href={href}>{inner}</a>
  );
}

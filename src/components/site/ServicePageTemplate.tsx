import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, ChevronDown } from "lucide-react";
import { PageHero, Section } from "./Section";
import { CTASection } from "./CTASection";
import { BUSINESS } from "@/lib/business";

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  intro: ReactNode;
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  includes: string[];
  faqs: { q: string; a: string }[];
  related?: { src: string; alt: string }[];
};

export function ServicePageTemplate(p: ServicePageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: p.title,
    provider: { "@type": "LocalBusiness", name: BUSINESS.name, telephone: BUSINESS.phone },
    areaServed: { "@type": "AdministrativeArea", name: "Kent" },
    description: p.subtitle,
  };

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={BUSINESS.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-muted">
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-elev">
            <img src={p.heroImage} alt={p.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="prose prose-neutral max-w-none text-muted-foreground leading-relaxed">
            {p.intro}
          </div>
        </div>
      </Section>

      <Section eyebrow="Benefits" title={`Why choose us for ${p.title.toLowerCase()}.`} className="bg-[oklch(0.96_0.005_140)]">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {p.benefits.map((b) => (
            <div key={b.title} className="rounded-2xl bg-card border border-border p-7">
              <h3 className="font-display text-lg">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Our process" title="How it works.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {p.process.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl bg-card border border-border p-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-[oklch(0.5_0.08_145)]">Step {i + 1}</span>
              <h3 className="mt-3 font-display text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="What's included" title="Every visit, done properly." className="bg-[oklch(0.96_0.005_140)]">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {p.includes.map((i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl bg-card border border-border px-5 py-4">
              <Check className="h-5 w-5 text-[oklch(0.55_0.13_145)] mt-0.5" /> <span className="text-sm">{i}</span>
            </li>
          ))}
        </ul>
      </Section>

      {p.related && p.related.length > 0 && (
        <Section eyebrow="Recent work" title="A few snapshots.">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {p.related.map((r, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <img src={r.src} alt={r.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section eyebrow="FAQs" title="Questions we get asked." center className="bg-[oklch(0.96_0.005_140)]">
        <div className="max-w-3xl mx-auto divide-y divide-border rounded-2xl bg-card border border-border">
          {p.faqs.map((f, i) => (
            <details key={i} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                <span className="font-medium text-foreground">{f.q}</span>
                <ChevronDown className="h-5 w-5 text-muted-foreground transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CTASection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}

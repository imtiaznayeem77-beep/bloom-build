import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, ChevronDown } from "lucide-react";
import { Section } from "./Section";
import { CTASection } from "./CTASection";
import { BUSINESS } from "@/lib/business";
import { StatsSection } from "./StatsSection";
import { GoogleReviewsWidget } from "./GoogleReviewsWidget";
import { TrustStrip } from "./TrustStrip";

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {/* HERO with image backdrop */}
      <section className="relative min-h-[78svh] flex items-end overflow-hidden">
        <img
          src={p.heroImage}
          alt={p.title}
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1100}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.012_150)] via-[oklch(0.16_0.012_150)]/55 to-[oklch(0.16_0.012_150)]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.16_0.012_150)]/70 via-transparent to-transparent" />
        <div className="relative container-px mx-auto max-w-7xl pt-40 pb-20 md:pb-28 text-white">
          <p className="reveal text-xs md:text-sm font-medium uppercase tracking-[0.28em] text-white/80 mb-4">
            {p.eyebrow}
          </p>
          <h1 className="reveal reveal-2 text-4xl md:text-6xl font-display font-semibold text-balance leading-[1.05] max-w-4xl">
            {p.title}
          </h1>
          <p className="reveal reveal-3 mt-5 text-base md:text-xl text-white/85 max-w-2xl leading-relaxed">
            {p.subtitle}
          </p>
          <div className="reveal reveal-4 mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={BUSINESS.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1ebe57]">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-elev">
            <img src={p.heroImage} alt={p.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="text-muted-foreground leading-relaxed space-y-4 text-base md:text-lg">
            {p.intro}
          </div>
        </div>
      </Section>

      <Section eyebrow="Benefits" title={`Why choose us for ${p.title.toLowerCase()}.`} className="bg-[oklch(0.96_0.005_140)]">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {p.benefits.map((b) => (
            <div key={b.title} className="rounded-2xl bg-card border border-border p-7 hover:shadow-elev transition-shadow">
              <h3 className="font-display text-lg">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <StatsSection />

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

      <GoogleReviewsWidget
        eyebrow="What customers say"
        title="5★ rated across Deal & Kent."
        subtitle="Real Google reviews from real homeowners we've worked with."
      />

      <Section eyebrow="FAQs" title="Questions we get asked." center>
        <div className="max-w-3xl mx-auto divide-y divide-border rounded-2xl bg-card border border-border shadow-soft">
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

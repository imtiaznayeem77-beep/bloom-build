import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Home as HomeIcon, Building2, Trees, Check } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CTASection } from "@/components/site/CTASection";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { ProcessSection } from "@/components/site/ProcessSection";
import { StatsSection } from "@/components/site/StatsSection";
import { GoogleReviewsWidget } from "@/components/site/GoogleReviewsWidget";
import { FAQ, HOME_FAQS } from "@/components/site/FAQ";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Reveal } from "@/components/site/Reveal";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Gardening Services in Deal & Kent | Sutton's Garden Maintenance" },
      {
        name: "description",
        content:
          "Garden maintenance, lawn care, hedge trimming, garden transformations, commercial grounds and holiday let gardening across Deal, Kent and the surrounding area.",
      },
      { property: "og:title", content: "Gardening Services | Sutton's Garden Maintenance" },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: "/projects/p7-final.jpg" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const PROPERTY_TYPES = [
  {
    icon: HomeIcon,
    title: "Domestic gardens",
    desc: "Town gardens, family homes and coastal properties across Deal and Kent — maintained beautifully on a weekly or fortnightly schedule.",
    bullets: ["Weekly / fortnightly visits", "Lawn, hedges, beds & borders", "Seasonal tidy-ups"],
  },
  {
    icon: HomeIcon,
    title: "Holiday lets",
    desc: "Discreet, scheduled garden care that keeps your let looking guest-ready — every changeover, every season.",
    bullets: ["Pre-arrival turnarounds", "Reliable, predictable schedule", "Photo-ready presentation"],
  },
  {
    icon: Trees,
    title: "Country estates",
    desc: "Larger grounds maintained by a small, consistent team that knows your land and your standards.",
    bullets: ["Scheduled contracts", "Hedges, lawns, woodland edges", "Single point of contact"],
  },
  {
    icon: Building2,
    title: "Commercial properties",
    desc: "Offices, managed developments and commercial sites kept presentable, professional and tidy year-round.",
    bullets: ["Insured & uniformed team", "Agreed scope & visit plan", "Invoiced monthly"],
  },
];

const ALL_INCLUDED = [
  "Free, no-obligation site visit",
  "Clear written quote",
  "Public liability insured",
  "All green waste removed",
  "Professional, uniformed team",
  "Friendly, reliable service",
  "Domestic & commercial work",
  "Tools, fuel & disposal included",
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Garden services for every property in Kent."
        subtitle="From weekly garden maintenance to full transformations and commercial grounds care — pick the service that fits, or let us put together a tailored plan."
        image={servicesHero}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90"
        >
          Get a Free Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <TrustStrip />

      <Section
        eyebrow="What we do"
        title="Nine specialist services, one trusted local team."
        subtitle="Every service is delivered to the same standard, by the same team, with the same obsessive eye for finish."
      >
        <ServicesGrid />
      </Section>

      {/* By property type */}
      <Section
        className="bg-[oklch(0.93_0.028_145)]"
        eyebrow="Tailored to your property"
        title="Who we look after."
        subtitle="Whether it's a small coastal garden or a 20-acre estate, the service is shaped around the property — not the other way around."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROPERTY_TYPES.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full rounded-3xl bg-card border border-border p-7 transition hover:-translate-y-1 hover:shadow-elev">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-display">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="mt-5 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-[oklch(0.55_0.13_145)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <StatsSection />

      <WhyChooseUs />

      {/* What's always included */}
      <Section
        eyebrow="Standard with every job"
        title="What's always included."
        subtitle="The basics done properly, without extras creeping onto the invoice."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ALL_INCLUDED.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl bg-card border border-border p-5 transition hover:border-primary/40 hover:shadow-soft"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <ProcessSection />

      <GoogleReviewsWidget />

      <FAQ items={HOME_FAQS} />

      <CTASection />
    </>
  );
}


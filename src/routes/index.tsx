import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Star, ShieldCheck, Sparkles, Clock } from "lucide-react";
import heroImg from "@/assets/hero-garden.jpg";
import lawnImg from "@/assets/lawn-care.jpg";
import { BUSINESS } from "@/lib/business";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { Section } from "@/components/site/Section";
import { TrustStrip } from "@/components/site/TrustStrip";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CTASection } from "@/components/site/CTASection";
import { SocialSection } from "@/components/site/SocialSection";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Sutton's Garden Maintenance | Gardener in Deal, Kent" },
      {
        name: "description",
        content:
          "Premium garden maintenance, lawn care and transformations across Deal, Kent. Friendly, reliable, professional. Free quotes — call 07775 085518.",
      },
      { property: "og:title", content: "Sutton's Garden Maintenance | Deal, Kent" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  const featured = projects.filter((p) => p.before && p.after).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Beautifully maintained luxury garden in Kent at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.015_150)] via-[oklch(0.18_0.015_150)]/55 to-[oklch(0.18_0.015_150)]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.015_150)]/70 via-transparent to-transparent" />

        <div className="relative container-px mx-auto max-w-7xl pb-20 md:pb-28 pt-40 text-white">
          <p className="reveal text-xs md:text-sm font-medium uppercase tracking-[0.28em] text-white/80 mb-5">
            Deal · Kent &amp; Surrounding Areas
          </p>
          <h1 className="reveal reveal-2 text-4xl sm:text-5xl md:text-7xl font-display font-semibold text-balance leading-[1.02] max-w-4xl">
            Professional Garden Maintenance Across Deal &amp; Kent
          </h1>
          <p className="reveal reveal-3 mt-6 text-base md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Friendly, reliable and professional garden maintenance for domestic and
            commercial properties across Deal, Kent and surrounding areas.
          </p>

          <ul className="reveal reveal-3 mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
            {["Friendly Local Service", "Domestic & Commercial", "Reliable Maintenance", "Free Quotes"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.09_120)]" /> {t}
              </li>
            ))}
          </ul>

          <div className="reveal reveal-4 mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#1ebe57] transition"
            >
              <MessageCircle className="h-4 w-4" /> Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* INTRO */}
      <Section
        eyebrow="Who we are"
        title="Premium garden care, with a friendly local touch."
        subtitle="From weekly maintenance and seasonal tidy-ups to full garden transformations, Sutton's delivers the kind of attention to detail that keeps Kent's finest gardens looking their best."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Reliable & insured", d: "Turn up when we say we will, every time." },
            { icon: Sparkles, t: "Attention to detail", d: "Clean edges, neat finishes, gardens that feel cared-for." },
            { icon: Clock, t: "Flexible scheduling", d: "One-off jobs, weekly visits or seasonal plans — your call." },
          ].map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="rounded-2xl bg-card border border-border p-7 h-full">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-display">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        eyebrow="What we do"
        title="Garden services across Deal & Kent"
        subtitle="A full range of garden maintenance and transformation services for homes, estates, holiday lets and commercial properties."
      >
        <ServicesGrid />
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* BEFORE/AFTER */}
      <section className="py-20 md:py-28 bg-[oklch(0.96_0.005_140)]">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.5_0.08_145)] mb-3">
              Real transformations
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-foreground text-balance">
              Drag to see the difference.
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              A few recent before-and-afters from gardens across Deal and Kent.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <div>
                  <BeforeAfter before={p.before!} after={p.after!} alt={p.title} />
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.category}</p>
                    <h3 className="mt-1 font-display text-lg">{p.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90"
            >
              See all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SPLIT LAWN */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elev">
              <img
                src={lawnImg}
                alt="Professional gardener mowing a striped luxury lawn in Kent"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.5_0.08_145)] mb-3">
              Lawn care specialists
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-foreground text-balance">
              A flawless lawn, looked after properly.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Mowing, edging, scarifying and seasonal feeding — plus full lawn
              installations. We treat every lawn like it's the centrepiece of the
              garden, because more often than not, it is.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Crisp, defined edges",
                "Healthy seasonal feeding",
                "New lawn installations",
                "Holiday let & estate lawns",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-[oklch(0.55_0.13_145)]" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/services/lawn-care"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90"
              >
                Explore lawn care <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <SocialSection />
      <CTASection />
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Star, Phone } from "lucide-react";
import heroImg from "@/assets/hero-garden-dark.jpg";
import lawnImg from "@/assets/lawn-care.jpg";
import { BUSINESS } from "@/lib/business";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { Section } from "@/components/site/Section";
import { TrustStrip } from "@/components/site/TrustStrip";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/projects";
import { StatsSection } from "@/components/site/StatsSection";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { ProcessSection } from "@/components/site/ProcessSection";
import { AreasWeCover } from "@/components/site/AreasWeCover";
import { GoogleReviewsWidget } from "@/components/site/GoogleReviewsWidget";
import { FacebookReviewsWidget } from "@/components/site/FacebookReviewsWidget";
import { InstagramFeedWidget } from "@/components/site/InstagramFeedWidget";
import { FAQ, HOME_FAQS } from "@/components/site/FAQ";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Sutton's Garden Maintenance | Premium Gardener in Deal, Kent" },
      {
        name: "description",
        content:
          "Premium garden maintenance, lawn care and full garden transformations across Deal, Kent. Reliable, insured and 5★ rated. Free quotes — call 07775 085518.",
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
          className="absolute inset-0 h-full w-full object-cover scale-105"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[oklch(0.14_0.012_150)]/35 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.012_150)] via-[oklch(0.14_0.012_150)]/85 to-[oklch(0.14_0.012_150)]/45 md:from-[oklch(0.14_0.012_150)] md:via-[oklch(0.14_0.012_150)]/60 md:to-[oklch(0.14_0.012_150)]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.012_150)]/80 via-[oklch(0.14_0.012_150)]/30 to-transparent" />

        {/* Floating rating card */}
        <div className="hidden lg:flex absolute top-32 right-10 z-10 reveal reveal-4">
          <div className="glass rounded-2xl border border-white/20 px-5 py-4 text-white shadow-elev backdrop-blur-md">
            <div className="flex items-center gap-1 text-[#FBBC04]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/80">5.0 · Loved locally</p>
            <p className="font-display text-sm mt-0.5">Trusted gardener in Deal</p>
          </div>
        </div>

        <div className="relative container-px mx-auto max-w-7xl pb-20 md:pb-28 pt-40 text-white">
          <p className="reveal text-xs md:text-sm font-medium uppercase tracking-[0.28em] text-white/80 mb-5">
            Deal · Kent &amp; Surrounding Areas
          </p>
          <h1 className="reveal reveal-2 text-4xl sm:text-5xl md:text-7xl font-display font-semibold text-balance leading-[1.02] max-w-4xl">
            Premium Garden Maintenance,<br className="hidden md:block" />
            <span className="italic text-[oklch(0.85_0.09_120)]">Crafted in Kent.</span>
          </h1>
          <p className="reveal reveal-3 mt-6 text-base md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Friendly, reliable and beautifully finished garden care for homes,
            estates and commercial properties across Deal, Kent and the surrounding
            coast and countryside.
          </p>

          <ul className="reveal reveal-3 mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
            {["Fully insured", "Domestic & Commercial", "5★ rated locally", "Free quotes"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.09_120)]" /> {t}
              </li>
            ))}
          </ul>

          <div className="reveal reveal-4 mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition shadow-elev"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#1ebe57] transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition"
            >
              <Phone className="h-4 w-4" /> {BUSINESS.phone}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="h-10 w-6 rounded-full border border-white/40 flex justify-center p-1">
            <span className="h-2 w-1 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* SERVICES */}
      <Section
        eyebrow="What we do"
        title="A full range of premium garden services."
        subtitle="From weekly maintenance and seasonal tidy-ups to full transformations and commercial grounds care — we handle every garden with the same obsessive eye for finish."
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

      <StatsSection />

      <WhyChooseUs />

      {/* BEFORE/AFTER */}
      <section className="py-20 md:py-28">
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

      <ProcessSection />

      {/* SPLIT LAWN */}
      <Section className="bg-[oklch(0.96_0.005_140)]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elev">
              <img
                src={lawnImg}
                alt="Professional gardener mowing a striped luxury lawn in Kent"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-xs font-medium text-primary shadow-soft">
                Lawn care specialists
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.5_0.08_145)] mb-3">
              Signature service
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

      <AreasWeCover />

      <GoogleReviewsWidget />

      <InstagramFeedWidget />

      <FacebookReviewsWidget />

      <FAQ items={HOME_FAQS} className="bg-[oklch(0.96_0.005_140)]" />

      <CTASection />
    </>
  );
}

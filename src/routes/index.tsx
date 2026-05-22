import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
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
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Beautifully maintained luxury garden in Kent at golden hour"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-[oklch(0.14_0.012_150)]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.012_150)]/75 via-[oklch(0.14_0.012_150)]/30 to-[oklch(0.12_0.012_150)]/90" />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 45%, transparent, oklch(0.10 0.012 150 / 0.65) 100%)",
          }}
        />

        <div className="relative container-px mx-auto max-w-5xl text-center text-white pt-32 pb-44 md:pb-56 flex flex-col items-center min-h-[100svh] justify-center">
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 text-[11px] md:text-xs font-medium uppercase tracking-[0.28em] text-white/85 mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.09_120)]" />
            Deal · Kent &amp; Surrounding Areas
          </p>

          <h1 className="reveal reveal-2 text-5xl sm:text-6xl md:text-8xl font-display font-semibold text-balance leading-[1.0] tracking-tight">
            Gardens, crafted with{" "}
            <span className="italic font-normal text-[oklch(0.85_0.09_120)]">care.</span>
          </h1>

          <p className="reveal reveal-3 mx-auto mt-7 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
            Friendly, reliable and beautifully finished garden care for homes,
            estates and commercial properties across Deal, Kent and the surrounding
            coast and countryside.
          </p>

          <div className="reveal reveal-4 mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[oklch(0.78_0.09_120)] text-[oklch(0.18_0.04_150)] px-8 py-4 text-sm font-semibold hover:bg-[oklch(0.82_0.10_120)] transition-all shadow-elev hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white px-8 py-4 text-sm font-semibold hover:bg-white/15 transition-all"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          <div className="reveal reveal-4 mt-8 flex items-center justify-center gap-2.5 text-xs md:text-sm text-white/75">
            <div className="flex items-center gap-0.5 text-[#FBBC04]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span className="tracking-wide">5.0 · Trusted by 500+ gardens across Kent</span>
          </div>
        </div>

      </section>

      {/* Stats bar — sits cleanly below the hero, overlapping just a touch */}
      <section className="relative z-20 -mt-12 md:-mt-14 mb-4 md:mb-8">
        <div className="container-px mx-auto max-w-5xl">
          <div className="rounded-2xl md:rounded-full bg-white/98 backdrop-blur-xl border border-black/5 shadow-elev grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/5">
            {[
              { v: "500+", l: "Gardens cared for" },
              { v: "10+", l: "Years' experience" },
              { v: "5.0★", l: "Average review" },
              { v: "100%", l: "Locally owned" },
            ].map((s) => (
              <div key={s.l} className="px-6 py-5 text-center">
                <p className="font-display text-2xl md:text-3xl text-primary tracking-tight">{s.v}</p>
                <p className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
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

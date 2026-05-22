import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Leaf, ShieldCheck, Smile, Wrench } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { StatsSection } from "@/components/site/StatsSection";
import { GoogleReviewsWidget } from "@/components/site/GoogleReviewsWidget";
import { FAQ, HOME_FAQS } from "@/components/site/FAQ";
import { TrustStrip } from "@/components/site/TrustStrip";
import aboutHero from "@/assets/about-hero.jpg";
import storyImg from "@/assets/garden-maintenance.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Sutton's Garden Maintenance | Local Gardener in Deal, Kent" },
      {
        name: "description",
        content:
          "Friendly, reliable local gardener serving Deal, Kent and surrounding areas. Domestic and commercial garden maintenance with attention to detail.",
      },
      { property: "og:title", content: "About — Sutton's Garden Maintenance" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: "/projects/p7-final.jpg" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { icon: Smile, t: "Friendly", d: "Approachable, honest service — no pushy sales talk, ever.", bg: "bg-amber-100", fg: "text-amber-700" },
  { icon: ShieldCheck, t: "Reliable", d: "Show up when we say we will. Do the job properly.", bg: "bg-blue-100", fg: "text-blue-700" },
  { icon: Wrench, t: "Professional", d: "Premium kit, premium finish, premium standards.", bg: "bg-slate-200", fg: "text-slate-700" },
  { icon: Leaf, t: "Detail-oriented", d: "Clean edges, neat lines, the small things that matter.", bg: "bg-emerald-100", fg: "text-emerald-700" },
  { icon: Heart, t: "Local", d: "Born and based in Deal — proud to look after Kent gardens.", bg: "bg-rose-100", fg: "text-rose-700" },
  { icon: ArrowRight, t: "Domestic & commercial", d: "From cottage borders to country estates.", bg: "bg-orange-100", fg: "text-orange-700" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Sutton's"
        title="A friendly local gardener with a serious eye for detail."
        subtitle="A Kent-based gardening service built on reliability, craftsmanship and the kind of personal touch you don't get from larger contractors."
        image={aboutHero}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90"
        >
          Get a Free Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <TrustStrip />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elev">
            <img src={storyImg} alt="Sutton's Garden Maintenance at work in Kent" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.5_0.08_145)] mb-3">
              Our story
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-balance">
              Built on hard work, honest pricing and gardens we're proud of.
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sutton's started with a simple idea: deliver the kind of garden care
                you'd want for your own home. That means showing up on time, doing the
                job thoroughly, and leaving the place looking better than we found it.
              </p>
              <p>
                Today we look after gardens of all sizes across Deal, Kent and the
                surrounding villages — from regular weekly visits and seasonal tidy
                ups to complete transformations and ongoing commercial grounds
                maintenance for estates and holiday lets.
              </p>
              <p>
                Whatever the brief, you'll get the same friendly, professional service
                — and a finish you can be proud of.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90">
                Our services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-muted">
                See our work
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <StatsSection />

      <Section
        eyebrow="Why choose Sutton's"
        title="Why customers across Kent come back to us."
        className="bg-[oklch(0.96_0.005_140)]"
        center
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, t, d, bg, fg }) => (
            <div key={t} className="rounded-2xl bg-card border border-border p-7 hover:shadow-elev transition-shadow">
              <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${bg} ${fg}`}>
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <GoogleReviewsWidget />

      <FAQ items={HOME_FAQS} />

      <CTASection />
    </>
  );
}

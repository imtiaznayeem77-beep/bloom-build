import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Leaf, ShieldCheck, Smile, Wrench } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
const logo = "/logo/logo.jpg";

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
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { icon: Smile, t: "Friendly", d: "Approachable, honest service — no pushy sales talk, ever." },
  { icon: ShieldCheck, t: "Reliable", d: "Show up when we say we will. Do the job properly." },
  { icon: Wrench, t: "Professional", d: "Premium kit, premium finish, premium standards." },
  { icon: Leaf, t: "Detail-oriented", d: "Clean edges, neat lines, the small things that matter." },
  { icon: Heart, t: "Local", d: "Born and based in Deal — proud to look after Kent gardens." },
  { icon: ArrowRight, t: "Domestic & commercial", d: "From cottage borders to country estates." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A friendly local gardener with a serious eye for detail."
        subtitle="Sutton's Garden Maintenance is a Kent-based gardening service built on reliability, craftsmanship and the kind of personal touch you don't get from larger contractors."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Get a Free Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
            <img src={logo} alt="Sutton's Garden Maintenance logo" className="absolute inset-0 h-full w-full object-cover" />
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
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Why choose Sutton's"
        title="Why customers across Kent come back to us."
        className="bg-[oklch(0.96_0.005_140)]"
        center
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-card border border-border p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}

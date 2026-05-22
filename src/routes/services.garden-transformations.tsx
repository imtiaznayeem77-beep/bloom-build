import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import hero from "@/assets/hero-garden.jpg";

export const Route = createFileRoute("/services/garden-transformations")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Garden Transformations Deal & Kent | Sutton's Garden Maintenance" },
      { name: "description", content: "Turn tired outdoor spaces into beautiful, manageable gardens. Garden transformations across Deal, Kent and surrounding areas." },
      { property: "og:title", content: "Garden Transformations Kent" },
      { property: "og:url", content: "/services/garden-transformations" },
      { property: "og:image", content: "/projects/p7-final.jpg" },
    ],
    links: [{ rel: "canonical", href: "/services/garden-transformations" }],
  }),
});

function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Garden Transformations"
      title="Garden transformations across Deal & Kent"
      subtitle="Bring an overgrown, tired or unloved garden back to life — with a clear plan, careful work and a finish you'll actually enjoy spending time in."
      heroImage={hero}
      intro={
        <>
          <p>
            Some gardens need more than a tidy — they need a reset. Whether you've
            inherited an overgrown plot, want to make a garden more manageable, or are
            preparing a property for sale, we'll plan and deliver a transformation
            that fits.
          </p>
          <p>
            We're honest about what's realistic, what it will cost, and how long it
            will take. No surprises, no upsells — just a beautifully refreshed garden.
          </p>
        </>
      }
      benefits={[
        { title: "Clear plan", desc: "We walk you through exactly what we'll do, in what order." },
        { title: "Hands-on work", desc: "Clearance, reshaping, planting, lawns, edges — all handled in-house." },
        { title: "Easier upkeep", desc: "We design the result to be enjoyable, not exhausting, to maintain." },
      ]}
      process={[
        { step: "1", title: "Vision call", desc: "We listen to what you want from the garden and how you'll use it." },
        { step: "2", title: "Plan & quote", desc: "Clear scope, clear price, no nasty surprises." },
        { step: "3", title: "Transform", desc: "Clearance, reshaping, lawns, edges and planting completed cleanly." },
        { step: "4", title: "Maintain", desc: "Optional ongoing maintenance keeps it looking as good as day one." },
      ]}
      includes={[
        "Full garden clearance",
        "Bed & border reshaping",
        "Lawn renovation or installation",
        "Hedge restoration",
        "Edge re-definition",
        "Planting & finishing",
        "Green waste removal",
        "Aftercare plan",
      ]}
      faqs={[
        { q: "How long does a garden transformation take?", a: "Most projects take between a few days and a couple of weeks depending on size and scope. We'll give you a clear timeline up front." },
        { q: "Can I keep some of my existing plants?", a: "Of course — we'll always work around mature plants you want to keep, and suggest what's worth saving." },
        { q: "Do you handle hard landscaping?", a: "We focus on garden transformations, planting and maintenance. For larger hard landscaping work we're happy to recommend trusted local trades." },
      ]}
      related={[
        { src: "/projects/p4-after.jpg", alt: "Garden transformation" },
        { src: "/projects/p5-after.jpg", alt: "Border restoration" },
        { src: "/projects/p7-final.jpg", alt: "Large garden transformation" },
      ]}
    />
  );
}

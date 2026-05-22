import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import hero from "@/assets/seasonal-tidy.jpg";

export const Route = createFileRoute("/services/seasonal-tidy")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Seasonal Garden Tidy Ups Deal & Kent | Sutton's" },
      { name: "description", content: "Spring, summer and autumn garden tidy ups across Deal, Kent. Get your garden back to its best, one season at a time." },
      { property: "og:title", content: "Seasonal Tidy Ups Deal & Kent" },
      { property: "og:url", content: "/services/seasonal-tidy" },
    ],
    links: [{ rel: "canonical", href: "/services/seasonal-tidy" }],
  }),
});

function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Seasonal Tidy Ups"
      title="Seasonal garden tidy ups across Deal & Kent"
      subtitle="A proper refresh at the start, middle or end of the season — the kind of tidy that takes a garden from forgotten back to feeling looked-after."
      heroImage={hero}
      intro={
        <>
          <p>
            Not every garden needs weekly visits — but most benefit from a proper
            seasonal tidy. A spring refresh to get things ready for summer; an autumn
            cutback and leaf clearance before winter; or a mid-season reset when
            things have got away from you.
          </p>
          <p>
            We bring the same standards as our regular maintenance — clean edges,
            neat finishes and all waste removed — in a one-off visit you can book as
            and when you need it.
          </p>
        </>
      }
      benefits={[
        { title: "Spring refresh", desc: "Mulch, cutback, lawn first cut, beds reshaped — ready for the growing season." },
        { title: "Summer reset", desc: "Mid-season tidy to keep things sharp through the busiest growth months." },
        { title: "Autumn cutback", desc: "Leaf clearance, perennial cutback and a final mow before winter." },
        { title: "Winter prep", desc: "Tools, beds and lawn put to bed properly so spring starts well." },
        { title: "One-off booking", desc: "No tie-in — book a single visit whenever your garden needs it." },
        { title: "Full clean-down", desc: "Lawn, paths and patio all left clean. Green waste removed." },
      ]}
      process={[
        { step: "1", title: "Get in touch", desc: "Tell us roughly what state the garden is in and which season you'd like the tidy in." },
        { step: "2", title: "Quick quote", desc: "We give you a fixed, honest quote — usually within 24 hours." },
        { step: "3", title: "Tidy day", desc: "A full day (or two) on site working through every area of the garden methodically." },
        { step: "4", title: "Leave it spotless", desc: "Hard surfaces blown clean, beds defined, lawn cut, waste removed." },
      ]}
      includes={[
        "Lawn mow & edge",
        "Hedge trim where needed",
        "Weeding of beds & borders",
        "Pruning & deadheading",
        "Mulching of borders",
        "Leaf clearance (autumn)",
        "Patio & path sweep down",
        "Full green waste removal",
      ]}
      faqs={[
        { q: "How often should I book a seasonal tidy?", a: "Most customers book 2–4 times a year (spring, summer, autumn, sometimes a pre-Christmas tidy). We're happy to recommend after a first visit." },
        { q: "Is this different from regular maintenance?", a: "Yes — a tidy up is a deeper one-off reset. Regular maintenance is a lighter visit on a fixed schedule. Many customers do both." },
        { q: "How long does a tidy up take?", a: "Usually one full day for a typical domestic garden, sometimes two for larger gardens or after a long period of neglect." },
        { q: "Do you remove leaves and clippings?", a: "Yes — all green waste is removed and disposed of responsibly as part of the tidy up." },
      ]}
      related={[
        { src: "/projects/p2-after-1.jpg", alt: "Seasonal tidy" },
        { src: "/projects/p6-2.jpg", alt: "Seasonal tidy" },
        { src: "/projects/p1-after.jpg", alt: "Seasonal tidy" },
      ]}
    />
  );
}

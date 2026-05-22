import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import hero from "@/assets/hedge-trimming.jpg";

export const Route = createFileRoute("/services/garden-maintenance")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Garden Maintenance Deal & Kent | Sutton's Garden Maintenance" },
      { name: "description", content: "Regular garden maintenance, seasonal care, hedge trimming and lawn edging across Deal, Kent. Domestic, holiday let and estate gardens." },
      { property: "og:title", content: "Garden Maintenance Deal & Kent" },
      { property: "og:url", content: "/services/garden-maintenance" },
      { property: "og:image", content: "/projects/p2-after-1.jpg" },
    ],
    links: [{ rel: "canonical", href: "/services/garden-maintenance" }],
  }),
});

function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Garden Maintenance"
      title="Regular garden maintenance across Deal & Kent"
      subtitle="Keep your garden looking its best year-round with reliable, professional visits tailored to your property."
      heroImage={hero}
      intro={
        <>
          <p>
            Our garden maintenance service is the backbone of what we do. Whether you'd
            like a weekly, fortnightly or monthly visit — or a one-off tidy to get
            things back under control — we'll build a schedule that suits your garden,
            your routine and your budget.
          </p>
          <p>
            From cottage gardens in Deal to larger estates and holiday lets across
            Kent, we treat every property with the same care, consistency and attention
            to detail.
          </p>
        </>
      }
      benefits={[
        { title: "Year-round care", desc: "A consistent rhythm of visits that keeps the garden looking effortless." },
        { title: "Reliable team", desc: "You'll know exactly who's turning up — and when." },
        { title: "Tailored plan", desc: "Built around your garden, your goals and your schedule." },
      ]}
      process={[
        { step: "1", title: "Free site visit", desc: "We walk the garden, listen to what you want, and quote on the spot." },
        { step: "2", title: "Tailored plan", desc: "Weekly, fortnightly, monthly or seasonal — your call." },
        { step: "3", title: "Regular visits", desc: "Consistent care, clean finishes, no nasty surprises." },
        { step: "4", title: "Ongoing care", desc: "We adjust as the seasons change to keep things looking sharp." },
      ]}
      includes={[
        "Lawn mowing & edging",
        "Hedge trimming & shaping",
        "Weeding of beds & borders",
        "Pruning & deadheading",
        "Leaf clearance",
        "Light tidying & green waste removal",
        "Seasonal feeding",
        "Holiday let turnarounds",
      ]}
      faqs={[
        { q: "How often should I have my garden maintained?", a: "Most domestic gardens benefit from a fortnightly visit during the growing season. We'll recommend a schedule based on your garden after a free site visit." },
        { q: "Do you cover Deal and the surrounding villages?", a: "Yes — we work throughout Deal, Kent and the surrounding areas. Get in touch with your postcode and we'll confirm." },
        { q: "Do you take green waste away?", a: "Yes, we remove and dispose of green waste responsibly as part of your visit." },
      ]}
      related={[
        { src: "/projects/p2-after-1.jpg", alt: "Garden maintenance" },
        { src: "/projects/p6-3.jpg", alt: "Garden maintenance" },
        { src: "/projects/p7-final.jpg", alt: "Garden maintenance" },
      ]}
    />
  );
}

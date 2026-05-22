import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import hero from "@/assets/commercial-grounds.jpg";

export const Route = createFileRoute("/services/commercial-grounds-maintenance")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Commercial Grounds & Estate Maintenance Kent | Sutton's" },
      { name: "description", content: "Reliable commercial grounds and estate maintenance across Deal, Kent. Holiday lets, residential developments, country estates and managed properties." },
      { property: "og:title", content: "Commercial Grounds Maintenance Kent" },
      { property: "og:url", content: "/services/commercial-grounds-maintenance" },
      { property: "og:image", content: "/projects/p8-after.jpg" },
    ],
    links: [{ rel: "canonical", href: "/services/commercial-grounds-maintenance" }],
  }),
});

function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Commercial Grounds"
      title="Commercial grounds & estate maintenance"
      subtitle="Premium, reliable grounds maintenance for estates, holiday lets, property managers and commercial properties across Kent."
      heroImage={hero}
      intro={
        <>
          <p>
            Your grounds are the first impression every visitor, tenant or guest gets.
            We help estate owners, property managers and commercial clients across
            Kent keep their grounds presentable, professional and beautifully kept —
            without you having to think about it.
          </p>
          <p>
            From holiday let turnarounds to scheduled maintenance for larger estates,
            we operate on a clear plan, agreed budget and consistent rhythm.
          </p>
        </>
      }
      benefits={[
        { title: "Always presentable", desc: "Consistent care means your grounds look ready every day of the year." },
        { title: "Single point of contact", desc: "One reliable team to manage all your grounds maintenance." },
        { title: "Tailored contracts", desc: "Visit frequency and scope built around your property — not a template." },
      ]}
      process={[
        { step: "1", title: "Site walk", desc: "We assess access, scope, seasonal demands and presentation standards." },
        { step: "2", title: "Service agreement", desc: "Clear scope, schedule and pricing — agreed in writing." },
        { step: "3", title: "Scheduled visits", desc: "We turn up as agreed, every time, with the right kit." },
        { step: "4", title: "Reviews", desc: "Regular check-ins to keep the plan aligned with your needs." },
      ]}
      includes={[
        "Lawn mowing & striping",
        "Hedge trimming & shaping",
        "Edge maintenance",
        "Beds & borders care",
        "Leaf clearance",
        "Seasonal tidy-ups",
        "Holiday let turnarounds",
        "Green waste removal",
      ]}
      faqs={[
        { q: "Do you work with property managers and letting agents?", a: "Yes — we work with managed properties, holiday lets and commercial clients across Kent on rolling agreements." },
        { q: "Can you cover multiple sites?", a: "Yes, we're happy to take on multiple sites under one agreement and a single point of contact." },
        { q: "Are you insured?", a: "Yes — full public liability insurance is in place for all our work." },
      ]}
      related={[
        { src: "/projects/p3.jpg", alt: "Estate hedges" },
        { src: "/projects/p8-after.jpg", alt: "Holiday let garden" },
        { src: "/projects/p7-final.jpg", alt: "Large grounds" },
      ]}
    />
  );
}

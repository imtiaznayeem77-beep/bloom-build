import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import hero from "@/assets/lawn-care.jpg";

export const Route = createFileRoute("/services/lawn-care")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Lawn Care & Lawn Installation Deal, Kent | Sutton's" },
      { name: "description", content: "Lawn care, mowing, edging, feeding and full lawn installations across Deal, Kent. Premium finish for domestic, holiday let and estate lawns." },
      { property: "og:title", content: "Lawn Care Deal & Kent" },
      { property: "og:url", content: "/services/lawn-care" },
      { property: "og:image", content: "/projects/p1-after.jpg" },
    ],
    links: [{ rel: "canonical", href: "/services/lawn-care" }],
  }),
});

function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Lawn Care"
      title="Lawn care & lawn installations done properly"
      subtitle="Crisp edges, healthy growth and that perfect striped finish — for lawns of every size across Deal and Kent."
      heroImage={hero}
      intro={
        <>
          <p>
            A great garden almost always starts with a great lawn. We look after lawns
            of every shape and size — from compact courtyards to sweeping estate lawns
            — with a finish that's clean, healthy and built to last.
          </p>
          <p>
            Need a brand new lawn? We handle full installations too, including site
            prep, levelling, turfing or seeding, and aftercare.
          </p>
        </>
      }
      benefits={[
        { title: "A flawless finish", desc: "Defined edges, even stripes, and a lawn that looks intentional." },
        { title: "Healthy growth", desc: "Seasonal feeding and care plans that keep the grass thriving." },
        { title: "Installations & repairs", desc: "From new turf to bare-patch repair — done to a high standard." },
      ]}
      process={[
        { step: "1", title: "Lawn assessment", desc: "We check the soil, drainage and existing growth before quoting." },
        { step: "2", title: "Care plan", desc: "Mowing frequency, feeding schedule and edging finalised with you." },
        { step: "3", title: "Regular care", desc: "Consistent mowing, edging, feeding and seasonal attention." },
        { step: "4", title: "Long-term health", desc: "Scarifying, aerating and overseeding as needed through the year." },
      ]}
      includes={[
        "Mowing & striping",
        "Edge defining",
        "Strimming around obstacles",
        "Seasonal feeding",
        "Scarifying & aerating",
        "Overseeding & patch repair",
        "Turf installation",
        "Seeded lawn installation",
      ]}
      faqs={[
        { q: "How short should my lawn be cut?", a: "It depends on the season and grass type. We'll adjust the cut height through the year to keep the lawn healthy and looking sharp." },
        { q: "Can you install a new lawn?", a: "Yes — we handle the full process, from clearance and prep to turf laying or seeding and aftercare." },
        { q: "Do you treat moss and weeds?", a: "Yes, we can include feed-and-weed treatments and seasonal moss control as part of a tailored lawn care plan." },
      ]}
      related={[
        { src: "/projects/p1-after.jpg", alt: "Lawn care" },
        { src: "/projects/p6-1.jpg", alt: "Lawn edge" },
        { src: "/projects/p6-4.jpg", alt: "Lawn finish" },
      ]}
    />
  );
}

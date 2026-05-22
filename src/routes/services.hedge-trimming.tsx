import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import hero from "@/assets/hedge-trimming.jpg";

export const Route = createFileRoute("/services/hedge-trimming")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Hedge Trimming Deal & Kent | Sutton's Garden Maintenance" },
      { name: "description", content: "Professional hedge trimming, shaping and reduction across Deal, Kent. Crisp lines, healthy growth, beautifully finished hedges for homes and estates." },
      { property: "og:title", content: "Hedge Trimming Deal & Kent" },
      { property: "og:url", content: "/services/hedge-trimming" },
      { property: "og:image", content: "/projects/p3.jpg" },
    ],
    links: [{ rel: "canonical", href: "/services/hedge-trimming" }],
  }),
});

function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Hedge Trimming"
      title="Hedge trimming & shaping across Deal & Kent"
      subtitle="Sharp, clean lines and healthier growth from a team that genuinely enjoys getting hedges right — from box balls to 12ft estate boundaries."
      heroImage={hero}
      intro={
        <>
          <p>
            A well-trimmed hedge does more for a garden than almost anything else. We
            cut, shape and rejuvenate every kind of hedge — beech, hornbeam, yew, box,
            laurel, leylandii, privet and more — across Deal, Kent and the surrounding
            villages.
          </p>
          <p>
            One-off cuts, twice-yearly schedules or full reductions on overgrown
            hedges: whatever the brief, we leave clean tops, square sides and a tidy
            site behind us.
          </p>
        </>
      }
      benefits={[
        { title: "Crisp finish", desc: "Square tops, clean sides and consistent height across the whole run." },
        { title: "Healthy growth", desc: "We cut at the right time of year for each species to encourage strong regrowth." },
        { title: "Big or small", desc: "From little box balls to tall estate boundary hedges — same care, same finish." },
        { title: "Tidy clean-up", desc: "All clippings collected, raked and removed. We leave the garden cleaner than we found it." },
        { title: "Reduction work", desc: "Overgrown or oversized? We can bring height and width back without damaging the hedge." },
        { title: "Insured & safe", desc: "Fully insured with proper kit including pole trimmers for tall and tricky hedges." },
      ]}
      process={[
        { step: "1", title: "Survey & quote", desc: "We measure up, check the species and quote on the spot — no obligation." },
        { step: "2", title: "Schedule", desc: "Book a one-off cut, or twice-a-year visits to keep things sharp." },
        { step: "3", title: "Trim & shape", desc: "Top, sides and faces cut clean. Tricky shapes handled with care." },
        { step: "4", title: "Clean down", desc: "All clippings raked and removed. Hard surfaces blown clean." },
      ]}
      includes={[
        "Tops, sides & faces cut to height",
        "Box, yew & topiary shaping",
        "Laurel, leylandii & privet maintenance",
        "Beech & hornbeam formal hedges",
        "Reduction of overgrown hedges",
        "Annual & twice-yearly schedules",
        "Pole-trimmer work for tall hedges",
        "Full clippings clearance & removal",
      ]}
      faqs={[
        { q: "When is the best time to trim my hedge?", a: "Most formal hedges (yew, box, beech, hornbeam) are best cut in late summer; fast-growing hedges like privet and leylandii benefit from two cuts a year. We'll recommend timing based on what you've got." },
        { q: "Do you cut very tall hedges?", a: "Yes — we use pole trimmers and proper access equipment to handle tall and awkward hedges safely." },
        { q: "Can you reduce the height of an overgrown hedge?", a: "Usually yes, depending on the species. We'll inspect first to make sure a reduction won't damage the plant." },
        { q: "Do you take the clippings away?", a: "Yes — all clippings are raked up, removed and disposed of responsibly." },
      ]}
      related={[
        { src: "/projects/p3.jpg", alt: "Hedge work" },
        { src: "/projects/p6-1.jpg", alt: "Hedge work" },
        { src: "/projects/p2-after-3.jpg", alt: "Hedge work" },
      ]}
    />
  );
}

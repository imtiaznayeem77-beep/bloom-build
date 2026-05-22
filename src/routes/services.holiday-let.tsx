import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import hero from "@/assets/holiday-let.jpg";

export const Route = createFileRoute("/services/holiday-let")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Holiday Let Garden Maintenance Deal & Kent | Sutton's" },
      { name: "description", content: "Garden maintenance for holiday lets and Airbnbs across Deal, Kent. Keep your property guest-ready every turnover, all year round." },
      { property: "og:title", content: "Holiday Let Gardening Deal & Kent" },
      { property: "og:url", content: "/services/holiday-let" },
      { property: "og:image", content: "/projects/p8-after.jpg" },
    ],
    links: [{ rel: "canonical", href: "/services/holiday-let" }],
  }),
});

function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Holiday Let Gardening"
      title="Garden care for holiday lets across Deal & Kent"
      subtitle="The same garden, every turnover, every guest — properly looked-after holiday let gardens that show up beautifully in photos and reviews."
      heroImage={hero}
      intro={
        <>
          <p>
            We look after holiday let and Airbnb gardens across Deal, Sandwich,
            St Margaret's, Kingsdown and the wider Kent coast. The brief is simple:
            keep the garden looking as good as the listing photos — every changeover,
            all year round.
          </p>
          <p>
            We work to a fixed schedule, communicate proactively, and handle
            everything from lawn care and bed maintenance to seasonal planting,
            so you (and your guests) never have to think about it.
          </p>
        </>
      }
      benefits={[
        { title: "Guest-ready every turnover", desc: "Lawn, patio and beds always presentable — no scrambling before check-in." },
        { title: "Fixed weekly or fortnightly visits", desc: "Reliable schedule that fits your changeover days." },
        { title: "Photo-ready finishes", desc: "Sharp edges, clean patios — gardens that earn 5★ reviews." },
        { title: "Property manager friendly", desc: "Happy to coordinate with cleaners and managers — minimal admin for you." },
        { title: "Seasonal planting", desc: "Pots and containers refreshed to keep the front looking welcoming all year." },
        { title: "Remote-owner peace of mind", desc: "Photo updates after every visit if you're not local." },
      ]}
      process={[
        { step: "1", title: "Walk-through", desc: "We visit the property, agree the scope and align with your turnover schedule." },
        { step: "2", title: "Fixed schedule", desc: "Weekly or fortnightly visits to suit your bookings and seasonality." },
        { step: "3", title: "Visit & report", desc: "Tidy, mow, edge, weed — followed by a quick update so you know it's done." },
        { step: "4", title: "Seasonal refreshes", desc: "Pots, containers and front-of-house refreshed across the year." },
      ]}
      includes={[
        "Weekly or fortnightly visits",
        "Lawn mowing & edging",
        "Patio & path sweep down",
        "Bin area tidy",
        "Bed & border weeding",
        "Seasonal pot planting",
        "Hedge trimming as needed",
        "Photo updates after each visit (optional)",
      ]}
      faqs={[
        { q: "Can you work around our changeover days?", a: "Yes — we schedule visits to make sure the garden is fresh before each new booking." },
        { q: "We're not local. How do we know it's been done?", a: "We can send a quick photo update after every visit so you always know the property is presented well." },
        { q: "Do you cover Deal, Sandwich, St Margaret's and Kingsdown?", a: "Yes — and the surrounding coastal villages. Get in touch with your postcode and we'll confirm." },
        { q: "Can you handle pots and planting too?", a: "Absolutely — refreshing the front pots and containers is one of the easiest ways to lift a holiday let's kerb appeal." },
      ]}
      related={[
        { src: "/projects/p8-before.jpg", alt: "Holiday let garden" },
        { src: "/projects/p8-after.jpg", alt: "Holiday let garden" },
        { src: "/projects/p2-after-1.jpg", alt: "Holiday let garden" },
      ]}
    />
  );
}

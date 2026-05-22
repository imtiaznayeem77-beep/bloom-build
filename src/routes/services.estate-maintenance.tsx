import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import hero from "@/assets/estate-maintenance.jpg";

export const Route = createFileRoute("/services/estate-maintenance")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Estate Maintenance Deal & Kent | Sutton's Garden Maintenance" },
      { name: "description", content: "Premium estate grounds maintenance across Kent. Sweeping lawns, formal hedges, gravel driveways and seasonal planting — looked after to estate standards." },
      { property: "og:title", content: "Estate Maintenance Deal & Kent" },
      { property: "og:url", content: "/services/estate-maintenance" },
    ],
    links: [{ rel: "canonical", href: "/services/estate-maintenance" }],
  }),
});

function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Estate Maintenance"
      title="Estate grounds maintenance across Kent"
      subtitle="Discreet, dependable grounds care for country estates and large private properties — the kind of standards owners and managers expect, delivered consistently."
      heroImage={hero}
      intro={
        <>
          <p>
            Larger estates need more than just a gardener — they need a team that
            understands formal grounds, period properties and the rhythm of estate
            life. Sutton's looks after a portfolio of estate gardens across East
            Kent, working quietly and consistently to keep grounds at their best.
          </p>
          <p>
            From sweeping lawns and formal hedges to gravel drives, walled gardens
            and seasonal planting, we tailor the service to each property and report
            into owners or estate managers on a schedule that suits.
          </p>
        </>
      }
      benefits={[
        { title: "Estate-standard finish", desc: "Formal lawns, hedges and parterres kept consistently sharp." },
        { title: "Discreet & dependable", desc: "We work quietly, respect the property, and are happy around staff and guests." },
        { title: "Manager-friendly", desc: "Direct, written communication and reporting that fits estate workflows." },
        { title: "Fully insured", desc: "Full public liability cover plus proper PPE and risk assessments where needed." },
        { title: "Seasonal planning", desc: "Annual plan covering mowing, hedging, planting and bed management." },
        { title: "Walled & period gardens", desc: "Sympathetic care for older planting, traditional features and listed surrounds." },
      ]}
      process={[
        { step: "1", title: "Site survey", desc: "Detailed walk-round with the owner or estate manager — scope, standards and access." },
        { step: "2", title: "Annual plan", desc: "Fixed schedule of weekly / fortnightly maintenance plus seasonal works." },
        { step: "3", title: "Quiet, consistent visits", desc: "Same team, same standards — week in, week out." },
        { step: "4", title: "Reporting", desc: "Written updates and proactive suggestions where works are needed." },
      ]}
      includes={[
        "Formal lawn care & striping",
        "Hedge trimming (incl. tall hedges)",
        "Driveway & gravel maintenance",
        "Walled garden care",
        "Seasonal bedding & containers",
        "Leaf clearance",
        "Tree & shrub pruning",
        "Full green waste removal",
      ]}
      faqs={[
        { q: "Do you have experience working on private estates?", a: "Yes — we look after a number of larger private and estate gardens across East Kent and work to the standards owners and managers expect." },
        { q: "Are you insured for estate work?", a: "Yes — we carry full public liability insurance and can provide method statements / risk assessments on request." },
        { q: "Can you provide a fixed annual contract?", a: "We can — most estate clients prefer a fixed annual plan covering both regular maintenance and seasonal works." },
        { q: "Do you cover Deal, Walmer, Sandwich and the surrounding villages?", a: "Yes — and the wider Kent coast and countryside. Get in touch with your location and we'll confirm." },
      ]}
      related={[
        { src: "/projects/p7-final.jpg", alt: "Estate garden" },
        { src: "/projects/p6-1.jpg", alt: "Estate garden" },
        { src: "/projects/p3.jpg", alt: "Estate garden" },
      ]}
    />
  );
}

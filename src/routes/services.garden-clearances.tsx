import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import hero from "@/assets/garden-clearance.jpg";

export const Route = createFileRoute("/services/garden-clearances")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Garden Clearance Deal & Kent | Sutton's Garden Maintenance" },
      { name: "description", content: "Overgrown garden clearance across Deal, Kent. Brambles, weeds, hedges and green waste removed — leaving you a tidy, manageable space." },
      { property: "og:title", content: "Garden Clearance Deal & Kent" },
      { property: "og:url", content: "/services/garden-clearances" },
      { property: "og:image", content: "/projects/p4-after.jpg" },
    ],
    links: [{ rel: "canonical", href: "/services/garden-clearances" }],
  }),
});

function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Garden Clearance"
      title="Garden clearances across Deal & Kent"
      subtitle="Brought a house with a jungle out the back? Inherited a garden that's run away? We clear, tidy and reset overgrown gardens of every size."
      heroImage={hero}
      intro={
        <>
          <p>
            Whether you're moving in, moving out or just finally taking your garden
            back, a proper clearance is the first step. We strip out brambles,
            self-seeded saplings, dead growth and years of overgrowth — and leave you
            with a clean, workable space.
          </p>
          <p>
            Once cleared, we can either hand it back to you ready to plant, or roll
            straight into a transformation or ongoing maintenance plan.
          </p>
        </>
      }
      benefits={[
        { title: "Total reset", desc: "From jungle to a clean canvas in days, not months." },
        { title: "All waste removed", desc: "Every barrowful of green waste cleared and disposed of responsibly." },
        { title: "Honest pricing", desc: "Fixed quotes after a free visit — no surprise bills at the end." },
        { title: "Move-in / move-out", desc: "Perfect for new homeowners and landlords getting ready to sell or let." },
        { title: "Roll into a plan", desc: "Want to keep it that way? Move straight onto a maintenance schedule." },
        { title: "Insured & careful", desc: "Fully insured, mindful of fences, neighbours and existing planting worth keeping." },
      ]}
      process={[
        { step: "1", title: "Free site visit", desc: "We walk the garden, agree what stays and what goes, and quote on the spot." },
        { step: "2", title: "Clear", desc: "Brambles, weeds, dead growth and overgrown shrubs removed methodically." },
        { step: "3", title: "Reduce & shape", desc: "Hedges brought back, lawns mowed back into shape, beds redefined." },
        { step: "4", title: "Tidy & hand over", desc: "Everything raked, swept and cleared. Optional next-step plan ready to go." },
      ]}
      includes={[
        "Bramble & weed clearance",
        "Overgrown shrub & hedge cut-back",
        "Dead growth & rubbish removal",
        "Lawn re-cut & edged",
        "Self-seeded sapling removal",
        "Bed & border definition",
        "Patio & path clearing",
        "Full green waste removal",
      ]}
      faqs={[
        { q: "How much does a garden clearance cost?", a: "It depends on size and how overgrown it is. We always visit first and give a fixed, honest quote with no obligation." },
        { q: "How long does a clearance take?", a: "Most domestic clearances take 1–3 days. Larger gardens or full estates can run longer — we'll give you a realistic timeline upfront." },
        { q: "Will you remove all the waste?", a: "Yes. All green waste, brambles and rubbish are removed and disposed of responsibly." },
        { q: "Can you keep certain plants?", a: "Absolutely — just point them out and we'll work around them carefully." },
      ]}
      related={[
        { src: "/projects/p4-before.jpg", alt: "Garden clearance" },
        { src: "/projects/p4-after.jpg", alt: "Garden clearance" },
        { src: "/projects/p2-after-2.jpg", alt: "Garden clearance" },
      ]}
    />
  );
}

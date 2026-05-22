import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Gardening Services in Deal & Kent | Sutton's Garden Maintenance" },
      {
        name: "description",
        content:
          "Garden maintenance, lawn care, hedge trimming, garden transformations, commercial grounds and holiday let gardening across Deal, Kent and the surrounding area.",
      },
      { property: "og:title", content: "Gardening Services | Sutton's Garden Maintenance" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Garden services for every property in Kent."
        subtitle="From weekly garden maintenance to full transformations and commercial grounds care — pick the service that fits, or let us put together a tailored plan."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Get a Free Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <Section>
        <ServicesGrid />
      </Section>

      <CTASection />
    </>
  );
}

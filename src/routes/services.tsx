import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CTASection } from "@/components/site/CTASection";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { ProcessSection } from "@/components/site/ProcessSection";
import { StatsSection } from "@/components/site/StatsSection";
import { GoogleReviewsWidget } from "@/components/site/GoogleReviewsWidget";
import { FAQ, HOME_FAQS } from "@/components/site/FAQ";
import { TrustStrip } from "@/components/site/TrustStrip";
import servicesHero from "@/assets/services-hero.jpg";

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
      { property: "og:image", content: "/projects/p7-final.jpg" },
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
        image={servicesHero}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90"
        >
          Get a Free Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <TrustStrip />

      <Section
        eyebrow="What we do"
        title="Nine specialist services, one trusted local team."
        subtitle="Every service is delivered to the same standard, by the same team, with the same obsessive eye for finish."
      >
        <ServicesGrid />
      </Section>

      <StatsSection />

      <WhyChooseUs />

      <ProcessSection />

      <GoogleReviewsWidget />

      <FAQ items={HOME_FAQS} />

      <CTASection />
    </>
  );
}

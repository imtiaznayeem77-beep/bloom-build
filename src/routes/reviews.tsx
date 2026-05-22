import { createFileRoute } from "@tanstack/react-router";
import { Star, Facebook, Instagram, ExternalLink } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Reviews | Sutton's Garden Maintenance, Deal Kent" },
      { name: "description", content: "What customers across Deal and Kent say about Sutton's Garden Maintenance. Friendly, reliable, professional gardening service." },
      { property: "og:title", content: "Customer Reviews — Sutton's" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
});

const REVIEWS = [
  {
    name: "Helen W.",
    where: "Deal, Kent",
    text: "Connor and the team are brilliant — friendly, on time and the garden has never looked better. We've had them on a fortnightly visit for over a year now.",
  },
  {
    name: "James R.",
    where: "Walmer",
    text: "Did a full transformation on a really overgrown garden for us. Honest pricing, hard-working and a beautiful finish. Couldn't recommend more highly.",
  },
  {
    name: "Sarah & David",
    where: "Sandwich",
    text: "Looks after our holiday let year-round. Guests constantly comment on how lovely the garden looks. Properly reliable — exactly what we needed.",
  },
  {
    name: "M. Carter",
    where: "Kingsdown",
    text: "Lawn care is spot on. Edges, stripes, everything tidy. Polite, professional and great value.",
  },
  {
    name: "Lisa H.",
    where: "Deal",
    text: "Spruced up our property before selling and it made a huge difference. Sold within a fortnight!",
  },
  {
    name: "Estate Manager",
    where: "Kent",
    text: "Reliable estate grounds maintenance — they understand the standards and just get on with the job.",
  },
];

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Trusted across Deal & Kent."
        subtitle="A few words from the customers we look after every week."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              className="relative rounded-2xl bg-card border border-border p-7 transition hover:-translate-y-1 hover:shadow-elev"
            >
              <div className="flex gap-0.5 text-[oklch(0.78_0.13_85)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-medium text-foreground">{r.name}</span>
                <span className="text-muted-foreground"> · {r.where}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Social proof"
        title="See more on Instagram & Facebook."
        className="bg-[oklch(0.96_0.005_140)]"
        center
      >
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={BUSINESS.instagram}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-5 py-3 text-sm font-medium hover:bg-muted"
          >
            <Instagram className="h-4 w-4" /> @suttongardener
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
          <a
            href={BUSINESS.facebook}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-5 py-3 text-sm font-medium hover:bg-muted"
          >
            <Facebook className="h-4 w-4" /> Facebook reviews
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>
      </Section>

      <CTASection />
    </>
  );
}

import { ChevronDown } from "lucide-react";
import { Section } from "./Section";

export type FAQItem = { q: string; a: string };

export function FAQ({
  eyebrow = "FAQs",
  title = "Questions, answered.",
  subtitle,
  items,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
}) {
  return (
    <Section eyebrow={eyebrow} title={title} subtitle={subtitle} center className={className}>
      <div className="max-w-3xl mx-auto divide-y divide-border rounded-3xl bg-card border border-border shadow-soft">
        {items.map((f, i) => (
          <details key={i} className="group p-6 md:p-7 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
              <span className="font-medium text-foreground text-base md:text-lg">{f.q}</span>
              <ChevronDown className="h-5 w-5 mt-1 shrink-0 text-muted-foreground transition group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </Section>
  );
}

export const HOME_FAQS: FAQItem[] = [
  {
    q: "What areas do you cover?",
    a: "We're based in Deal and cover the surrounding Kent area including Walmer, Sandwich, Kingsdown, St Margaret's, Dover, Ringwould, Eastry, Ash, Wingham and Folkestone. If you're nearby and unsure, just ask.",
  },
  {
    q: "Do you offer one-off jobs or only regular maintenance?",
    a: "Both. We handle one-off tidy-ups, seasonal refreshes and full transformations, as well as weekly, fortnightly and monthly regular maintenance plans.",
  },
  {
    q: "How quickly can you get to me?",
    a: "Most quotes are arranged within 48 hours and we can often start within a week or two, depending on the season and the size of the job.",
  },
  {
    q: "Are you insured?",
    a: "Yes — we carry full public liability insurance for every domestic and commercial job we take on.",
  },
  {
    q: "How do I get a quote?",
    a: "Send a quick message via the contact form, WhatsApp or email with a couple of photos of the garden. We'll arrange a visit and put together a friendly, honest quote with no obligation.",
  },
  {
    q: "Do you take away the garden waste?",
    a: "Yes. All green waste from regular maintenance, tidy-ups and clearances is removed and disposed of responsibly.",
  },
];

import { Star, ExternalLink, Facebook } from "lucide-react";
import { Section } from "./Section";
import { BUSINESS } from "@/lib/business";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    name: "Lucy M.",
    date: "Recommends · 2 weeks ago",
    text:
      "Highly recommend Connor and the team — beautifully tidy garden and lovely to deal with from start to finish.",
  },
  {
    name: "David A.",
    date: "Recommends · 1 month ago",
    text:
      "Sutton's transformed an old neglected garden for my mum. Genuinely lovely lads and the result was stunning.",
  },
  {
    name: "Rebecca T.",
    date: "Recommends · 2 months ago",
    text:
      "Best gardener in Deal hands down. Reliable, polite and the finish is always immaculate.",
  },
];

export function FacebookReviewsWidget() {
  return (
    <Section
      eyebrow="Facebook Recommendations"
      title="Real recommendations from Facebook."
      subtitle="A snapshot of what local customers are saying on our Facebook page."
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 rounded-2xl bg-card border border-border px-6 py-5">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white">
            <Facebook className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm text-muted-foreground">Facebook Rating</p>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl text-foreground">5.0</span>
              <Stars n={5} />
              <span className="text-xs text-muted-foreground">based on customer recommendations</span>
            </div>
          </div>
        </div>
        <a
          href={BUSINESS.facebook}
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#1466d4]"
        >
          View on Facebook <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.name} delay={i * 70}>
            <article className="h-full rounded-2xl bg-card border border-border p-7 hover:shadow-elev transition-shadow">
              <div className="flex items-center gap-3">
                <Avatar name={r.name} />
                <div>
                  <p className="font-medium text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.date}</p>
                </div>
              </div>
              <div className="mt-4">
                <Stars n={5} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href={BUSINESS.facebook}
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:bg-muted"
        >
          <Facebook className="h-4 w-4 text-[#1877F2]" /> See all on Facebook
        </a>
      </div>
    </Section>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < n ? "fill-[#FBBC04] text-[#FBBC04]" : "text-muted-foreground/40"}`} />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((s) => s[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="h-10 w-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] inline-flex items-center justify-center font-display text-sm">
      {initials}
    </div>
  );
}

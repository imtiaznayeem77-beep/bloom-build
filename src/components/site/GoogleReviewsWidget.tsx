import { Star, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

// Curated 5-star reviews. To swap in a fully live Google embed,
// replace the grid with an Elfsight / Trustindex widget script —
// the layout below is designed to match a Google Reviews surface.
const REVIEWS = [
  {
    name: "Sarah W.",
    location: "Deal",
    rating: 5,
    date: "2 weeks ago",
    text:
      "Connor and the team did an incredible job on our garden. Reliable, friendly and the finish is genuinely beautiful. Already booked them on a regular schedule.",
  },
  {
    name: "James H.",
    location: "Walmer",
    rating: 5,
    date: "1 month ago",
    text:
      "Easily the best gardener we've used in Kent. Turned up exactly when they said they would and the lawn has never looked better.",
  },
  {
    name: "Eleanor P.",
    location: "St Margaret's",
    rating: 5,
    date: "1 month ago",
    text:
      "Brilliant transformation of an overgrown back garden. Professional from quote to finish — would not hesitate to recommend.",
  },
  {
    name: "Mark R.",
    location: "Sandwich",
    rating: 5,
    date: "2 months ago",
    text:
      "We use Sutton's for our holiday let and they're absolutely faultless. Garden is always presentable for guests.",
  },
  {
    name: "Hannah L.",
    location: "Kingsdown",
    rating: 5,
    date: "3 months ago",
    text:
      "Genuinely lovely people and a fantastic eye for detail. The hedges have never looked sharper.",
  },
  {
    name: "Tom B.",
    location: "Dover",
    rating: 5,
    date: "3 months ago",
    text:
      "Great communication, fair price and a beautifully finished job. Connor clearly cares about what he does.",
  },
];

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=Sutton%27s+Garden+Maintenance+Deal+Kent+reviews";

export function GoogleReviewsWidget({
  eyebrow = "Google Reviews",
  title = "Loved by homeowners across Kent.",
  subtitle = "Real reviews from real customers across Deal, Walmer, Sandwich and beyond.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <Section eyebrow={eyebrow} title={title} subtitle={subtitle} className="bg-[oklch(0.96_0.005_140)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 rounded-2xl bg-card border border-border px-6 py-5">
        <div className="flex items-center gap-4">
          <GoogleG />
          <div>
            <p className="text-sm text-muted-foreground">Google Rating</p>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl text-foreground">5.0</span>
              <Stars n={5} />
              <span className="text-xs text-muted-foreground">based on customer reviews</span>
            </div>
          </div>
        </div>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90"
        >
          Read on Google <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.name + i} delay={i * 60}>
            <article className="h-full rounded-2xl bg-card border border-border p-7 hover:shadow-elev transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name={r.name} />
                  <div>
                    <p className="font-medium text-sm">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.location}</p>
                  </div>
                </div>
                <GoogleG small />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Stars n={r.rating} />
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < n ? "fill-[#FBBC04] text-[#FBBC04]" : "text-muted-foreground/40"}`}
        />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center font-display text-sm">
      {initials}
    </div>
  );
}

function GoogleG({ small = false }: { small?: boolean }) {
  const size = small ? 18 : 28;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-label="Google">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.9 6.5 29.2 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.9 6.5 29.2 4.5 24 4.5 16.3 4.5 9.6 8.8 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 43.5c5.1 0 9.7-1.9 13.2-5.1l-6.1-5c-2 1.5-4.5 2.4-7.1 2.4-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.5 39.1 16.2 43.5 24 43.5z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.2 5.4l6.1 5c-.4.4 6.8-5 6.8-14.4 0-1.2-.1-2.3-.4-3.5z" />
    </svg>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/business";

import gardenMaintenance from "@/assets/garden-maintenance.jpg";
import lawnCare from "@/assets/lawn-care.jpg";
import gardenTransformations from "@/assets/garden-transformations.jpg";
import hedgeTrimming from "@/assets/hedge-trimming.jpg";
import gardenClearance from "@/assets/garden-clearance.jpg";
import estateMaintenance from "@/assets/estate-maintenance.jpg";
import commercialGrounds from "@/assets/commercial-grounds.jpg";
import seasonalTidy from "@/assets/seasonal-tidy.jpg";
import holidayLet from "@/assets/holiday-let.jpg";

const META: Record<string, { image: string; bullets: string[]; badge?: string }> = {
  "garden-maintenance": {
    image: gardenMaintenance,
    badge: "Most popular",
    bullets: ["Weekly / fortnightly visits", "Mowing, edging & weeding", "Beds, borders & tidy-ups"],
  },
  "lawn-care": {
    image: lawnCare,
    badge: "Signature",
    bullets: ["Striped, professional finish", "Scarifying & seasonal feeds", "New lawn installations"],
  },
  "garden-transformations": {
    image: gardenTransformations,
    bullets: ["Full garden redesigns", "Planting & soft landscaping", "Project-managed end-to-end"],
  },
  "hedge-trimming": {
    image: hedgeTrimming,
    bullets: ["Crisp formal lines", "Healthy seasonal cuts", "All cuttings cleared"],
  },
  "garden-clearances": {
    image: gardenClearance,
    bullets: ["Overgrown gardens reset", "Green waste removed", "Ready to maintain again"],
  },
  "estate-maintenance": {
    image: estateMaintenance,
    bullets: ["Country estates & grounds", "Scheduled contracts", "Single point of contact"],
  },
  "commercial-grounds": {
    image: commercialGrounds,
    bullets: ["Offices, lettings & sites", "Reliable visit schedule", "Fully insured & uniformed"],
  },
  "seasonal-tidy": {
    image: seasonalTidy,
    bullets: ["Spring wake-ups", "Autumn leaf clearance", "Winter pruning & prep"],
  },
  "holiday-let": {
    image: holidayLet,
    bullets: ["Guest-ready turnarounds", "Discreet, scheduled visits", "Pristine first impression"],
  },
};

export function ServicesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => {
        const m = META[s.slug];
        return (
          <Link
            key={s.slug}
            to={s.href}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-card border border-border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elev hover:border-primary/30"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={m?.image}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.04_150)]/65 via-[oklch(0.2_0.04_150)]/10 to-transparent" />
              {m?.badge && (
                <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-semibold tracking-wide text-primary shadow-soft">
                  {m.badge}
                </span>
              )}
              <h3 className="absolute bottom-4 left-5 right-5 text-white font-display text-2xl leading-tight drop-shadow">
                {s.title}
              </h3>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">{s.short}</p>
              {m?.bullets && (
                <ul className="mt-4 space-y-2">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-[oklch(0.55_0.13_145)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Explore service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

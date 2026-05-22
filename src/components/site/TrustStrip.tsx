import { CheckCircle2 } from "lucide-react";

const items = [
  "Friendly Local Service",
  "Reliable Gardening",
  "Domestic & Commercial",
  "Garden Transformations",
  "Lawn Care Specialists",
  "Free Quotes Available",
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="container-px mx-auto max-w-7xl py-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {items.map((i) => (
            <li key={i} className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.13_145)]" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

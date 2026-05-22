import { MapPin } from "lucide-react";
import { Section } from "./Section";
import areasImg from "@/assets/areas-kent.jpg";

const AREAS = [
  "Deal", "Walmer", "Kingsdown", "St Margaret's", "Dover",
  "Sandwich", "Ringwould", "Eastry", "Ash", "Wingham",
  "Worth", "Tilmanstone", "Northbourne", "Sholden",
  "Great Mongeham", "Folkestone",
];

export function AreasWeCover() {
  return (
    <Section
      eyebrow="Areas we cover"
      title="Trusted gardeners across Deal & East Kent."
      subtitle="From the coast to the countryside, we look after homes, estates, holiday lets and commercial properties across East Kent."
    >
      <div className="grid lg:grid-cols-5 gap-8 items-stretch">
        <div className="lg:col-span-3 relative aspect-[4/3] lg:aspect-auto rounded-3xl overflow-hidden shadow-elev">
          <img
            src={areasImg}
            alt="Aerial view of Kent countryside and villages"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 md:bottom-7 md:left-7 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-sm font-medium text-primary w-fit shadow-soft">
            <MapPin className="h-4 w-4" /> Based in Deal · Serving East Kent
          </div>
        </div>

        <div className="lg:col-span-2 rounded-3xl bg-card border border-border p-7 md:p-9">
          <h3 className="font-display text-xl">Towns & villages we visit</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Not on the list? We probably still cover you — just ask.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
            {AREAS.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.55_0.13_145)]" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

import { ShieldCheck, Sparkles, Clock, Leaf, ThumbsUp, MapPin } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const POINTS = [
  { icon: ShieldCheck, t: "Fully insured", d: "Full public liability cover for every job — domestic and commercial." },
  { icon: Sparkles, t: "Obsessive about finish", d: "Clean edges, neat lines and the small details that make gardens feel cared-for." },
  { icon: Clock, t: "Reliable & on time", d: "We turn up when we say we will. No no-shows, no chasing, no surprises." },
  { icon: Leaf, t: "Plant-led approach", d: "We work with the seasons and your plants — not against them." },
  { icon: ThumbsUp, t: "Friendly & professional", d: "Genuinely lovely to deal with. Loved by neighbours, estates and holiday lets." },
  { icon: MapPin, t: "Local to Deal", d: "Born and based in Deal — we know the soils, microclimates and properties of East Kent." },
];

export function WhyChooseUs() {
  return (
    <Section
      eyebrow="Why choose us"
      title="The gardener Kent homeowners actually recommend."
      subtitle="Premium garden care without the agency price tag — built on reliability, finish and a genuinely friendly local team."
      className="bg-[oklch(0.96_0.005_140)]"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {POINTS.map(({ icon: Icon, t, d }, i) => (
          <Reveal key={t} delay={i * 70}>
            <div className="group relative h-full rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elev">
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-0"
                style={{ background: "linear-gradient(135deg, oklch(0.97 0.02 130), oklch(0.94 0.04 130))" }}
              />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

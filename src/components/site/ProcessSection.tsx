import { MessageSquare, ClipboardCheck, Leaf, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const STEPS = [
  { icon: MessageSquare, t: "Get in touch", d: "Send a quick message, photos or call — we'll get back to you within 24 hours." },
  { icon: ClipboardCheck, t: "Free quote & plan", d: "We visit, listen, and put together a friendly, honest quote with no obligation." },
  { icon: Leaf, t: "We get to work", d: "Tidy, methodical, respectful of your property — and always cleaning up after ourselves." },
  { icon: Sparkles, t: "Keep it beautiful", d: "Optional ongoing maintenance to keep your garden looking its best all year round." },
];

export function ProcessSection() {
  return (
    <Section
      eyebrow="Our process"
      title="Simple, honest, and built around you."
      subtitle="From the first message to a beautifully maintained garden — here's exactly what working with us looks like."
    >
      <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        {STEPS.map(({ icon: Icon, t, d }, i) => (
          <Reveal key={t} delay={i * 90}>
            <div className="relative h-full rounded-2xl bg-card border border-border p-7 text-center md:text-left">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-3xl text-[oklch(0.78_0.09_120)]">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

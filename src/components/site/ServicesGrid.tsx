import { Link } from "@tanstack/react-router";
import {
  Leaf, Sprout, Wand2, Scissors, Trash2, Trees, Building2, Sun, Home, ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/business";

const ICONS: Record<string, LucideIcon> = {
  Leaf, Sprout, Wand2, Scissors, Trash2, Trees, Building2, Sun, Home,
};

export function ServicesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => {
        const Icon = ICONS[s.icon] ?? Leaf;
        return (
          <Link
            key={s.slug}
            to={s.href}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elev"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.97 0.02 130), oklch(0.93 0.04 130))",
              }}
            />
            <div className="relative">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-display text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

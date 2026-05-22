import { Instagram, Facebook, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { allGalleryImages } from "@/lib/projects";

export function SocialSection() {
  const tiles = allGalleryImages.slice(0, 8);
  return (
    <section className="py-20 md:py-28 bg-[oklch(0.96_0.005_140)]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.5_0.08_145)] mb-3">
              From the field
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-foreground text-balance">
              Follow our latest work on Instagram &amp; Facebook
            </h2>
          </div>
          <div className="flex gap-2">
            <a
              href={BUSINESS.instagram}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted transition"
            >
              <Instagram className="h-4 w-4" /> @suttongardener
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>
            <a
              href={BUSINESS.facebook}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted transition"
            >
              <Facebook className="h-4 w-4" /> Facebook
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {tiles.map((t, i) => (
            <a
              key={i}
              href={BUSINESS.instagram}
              target="_blank" rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
            >
              <img
                src={t.src}
                alt={t.project}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition">
                <Instagram className="h-4 w-4" />
                <span className="text-xs font-medium truncate">@suttongardener</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Instagram, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { BUSINESS } from "@/lib/business";
import { allGalleryImages } from "@/lib/projects";

export function InstagramFeedWidget() {
  // Live Instagram feeds require either Behold/SnapWidget/Elfsight or
  // the deprecated Basic Display API. Until a widget ID is connected,
  // we render a polished Instagram-styled grid of the latest real
  // project photos that links straight to the @suttongardener profile.
  const tiles = allGalleryImages.slice(0, 8);

  return (
    <Section
      eyebrow="@suttongardener"
      title="Follow along on Instagram."
      subtitle="Fresh transformations, lawn edges and the work behind the gardens — straight from our day to day."
      className="bg-[oklch(0.96_0.005_140)]"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {tiles.map((t, i) => (
          <a
            key={i}
            href={BUSINESS.instagram}
            target="_blank" rel="noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-muted block"
          >
            <img
              src={t.src}
              alt={`${t.project} — ${t.category}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Instagram className="h-7 w-7 text-white drop-shadow" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href={BUSINESS.instagram}
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white px-6 py-3 text-sm font-medium hover:opacity-95 transition"
        >
          <Instagram className="h-4 w-4" /> Follow @suttongardener
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </Section>
  );
}

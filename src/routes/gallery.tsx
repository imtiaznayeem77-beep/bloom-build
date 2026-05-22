import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { allGalleryImages } from "@/lib/projects";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Garden Gallery | Sutton's Garden Maintenance Deal, Kent" },
      { name: "description", content: "Browse our gallery of recent garden maintenance, lawn care and transformation work across Deal and Kent." },
      { property: "og:title", content: "Garden Gallery — Sutton's" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

const CATS = ["All", "Before", "After", "Process", "Transformation", "Maintenance", "Hedges", "Holiday Let", "Lawn"] as const;

function GalleryPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = useMemo(
    () => (cat === "All" ? allGalleryImages : allGalleryImages.filter((i) => i.category === cat)),
    [cat],
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look at our recent work."
        subtitle="Real gardens, real results — across Deal, Kent and the surrounding villages."
      />

      <Section>
        <div className="flex flex-wrap gap-2 mb-8">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                cat === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {items.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img.src)}
              className="mb-4 block w-full overflow-hidden rounded-2xl bg-muted group break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.project}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </Section>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/15 text-white hover:bg-white/25 flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </button>
          <img src={lightbox} alt="" className="max-w-full max-h-full rounded-xl shadow-elev" />
        </div>
      )}

      <CTASection />
    </>
  );
}

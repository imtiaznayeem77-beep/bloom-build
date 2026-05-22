import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Sparkles } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { allGalleryImages } from "@/lib/projects";
import { TrustStrip } from "@/components/site/TrustStrip";
import { InstagramFeedWidget } from "@/components/site/InstagramFeedWidget";
import { Reveal } from "@/components/site/Reveal";
import galleryHero from "@/assets/gallery-hero.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Garden Gallery | Sutton's Garden Maintenance Deal, Kent" },
      { name: "description", content: "Browse our gallery of recent garden maintenance, lawn care and transformation work across Deal and Kent." },
      { property: "og:title", content: "Garden Gallery — Sutton's" },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: "/projects/p6-1.jpg" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

const CATS = ["All", "Before", "After", "Process", "Transformation", "Maintenance", "Hedges", "Holiday Let", "Lawn"] as const;

function GalleryPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const items = useMemo(
    () => (cat === "All" ? allGalleryImages : allGalleryImages.filter((i) => i.category === cat)),
    [cat],
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: allGalleryImages.length };
    for (const c of CATS) if (c !== "All") map[c] = allGalleryImages.filter((i) => i.category === c).length;
    return map;
  }, []);

  const close = useCallback(() => setLightboxIdx(null), []);
  const next = useCallback(
    () => setLightboxIdx((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length],
  );
  const prev = useCallback(
    () => setLightboxIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIdx, close, next, prev]);

  const active = lightboxIdx !== null ? items[lightboxIdx] : null;

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look at our recent work."
        subtitle="Real gardens, real results — across Deal, Kent and the surrounding villages."
        image={galleryHero}
      />

      <TrustStrip />

      {/* Stat header */}
      <section className="py-12 md:py-16 bg-[oklch(0.96_0.005_140)]">
        <div className="container-px mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Camera, label: "Gardens captured", value: `${allGalleryImages.length}+` },
            { icon: Sparkles, label: "Transformations", value: `${counts["Transformation"] || 0}` },
            { icon: MapPin, label: "Across Kent", value: "Deal & beyond" },
            { icon: Sparkles, label: "Avg. rating", value: "5.0 ★" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="rounded-2xl bg-card border border-border px-5 py-5 md:px-6 md:py-6 h-full">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-display text-2xl text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Section
        eyebrow="The Portfolio"
        title="Browse by what you're looking for."
        subtitle="Filter the feed to see transformations, before-and-afters, hedge work, lawns and more."
      >
        <div className="flex flex-wrap gap-2 mb-10">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm border transition inline-flex items-center gap-2 ${
                cat === c
                  ? "bg-primary text-primary-foreground border-primary shadow-soft"
                  : "bg-card text-foreground border-border hover:bg-muted hover:border-primary/30"
              }`}
            >
              <span>{c}</span>
              <span className={`text-[10px] font-semibold rounded-full px-1.5 py-0.5 ${cat === c ? "bg-white/20" : "bg-muted text-muted-foreground"}`}>
                {counts[c] || 0}
              </span>
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {items.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              onClick={() => setLightboxIdx(i)}
              className="mb-4 block w-full overflow-hidden rounded-2xl bg-muted group break-inside-avoid relative shadow-soft hover:shadow-elev transition-shadow"
            >
              <img
                src={img.src}
                alt={img.project}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.012_150)]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="inline-block text-[10px] uppercase tracking-[0.18em] text-white/80 mb-1">
                  {img.category}
                </span>
                <p className="text-white font-display text-sm leading-tight line-clamp-2">{img.project}</p>
              </div>
            </button>
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No images in this category yet.</p>
        )}
      </Section>

      {active && lightboxIdx !== null && (
        <div
          onClick={close}
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in"
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/15 text-white hover:bg-white/25 flex items-center justify-center transition"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/15 text-white hover:bg-white/25 flex items-center justify-center transition"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/15 text-white hover:bg-white/25 flex items-center justify-center transition"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full flex flex-col items-center"
          >
            <img
              src={active.src}
              alt={active.project}
              className="max-w-full max-h-[78vh] rounded-xl shadow-elev object-contain"
            />
            <div className="mt-4 w-full text-center text-white">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">{active.category}</p>
              <p className="mt-1 font-display text-lg">{active.project}</p>
              <p className="mt-2 text-xs text-white/60">
                {lightboxIdx + 1} / {items.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <InstagramFeedWidget />

      <CTASection />
    </>
  );
}

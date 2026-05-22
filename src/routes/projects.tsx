import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Garden Projects & Transformations | Sutton's, Deal Kent" },
      { name: "description", content: "Real garden transformations and maintenance projects from Deal, Kent. Drag the before/after sliders to see the difference." },
      { property: "og:title", content: "Garden Projects | Sutton's Garden Maintenance" },
      { property: "og:url", content: "/projects" },
      { property: "og:image", content: "/projects/p7-final.jpg" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects & Transformations"
        title="Real Kent gardens, brought back to life."
        subtitle="A look at recent transformations and maintenance work across Deal and the surrounding area."
      >
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Start your project <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <Section>
        <div className="space-y-24">
          {projects.map((p, i) => (
            <Reveal key={p.slug}>
              <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <span className="inline-block text-xs uppercase tracking-[0.2em] text-[oklch(0.5_0.08_145)] mb-3">
                    {String(i + 1).padStart(2, "0")} · {p.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display text-balance">{p.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
                <div className="lg:col-span-8">
                  {p.before && p.after ? (
                    <BeforeAfter before={p.before} after={p.after} alt={p.title} />
                  ) : null}

                  {p.gallery && p.gallery.length > 0 && (
                    <div className={`grid gap-3 mt-4 ${p.gallery.length > 2 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2"}`}>
                      {p.gallery.map((g, gi) => (
                        <div key={gi} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                          <img src={g} alt={`${p.title} ${gi + 1}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}

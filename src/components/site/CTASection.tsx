import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground px-8 py-16 md:px-16 md:py-20">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(60% 80% at 80% 20%, oklch(0.78 0.09 120 / 0.55), transparent 60%), radial-gradient(50% 70% at 0% 100%, oklch(0.7 0.05 145 / 0.5), transparent 60%)",
            }}
          />
          <div className="relative max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/70 mb-4">
              Free Quotes Available
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-balance">
              Let's bring your garden back to life.
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl">
              Whether it's a one-off tidy, regular maintenance or a full transformation —
              get a friendly, honest quote with no obligation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={BUSINESS.whatsappHref}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                <MessageCircle className="h-4 w-4" />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

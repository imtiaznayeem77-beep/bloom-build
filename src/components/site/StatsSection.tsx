const STATS = [
  { v: "10+", l: "Years' experience" },
  { v: "500+", l: "Gardens cared for" },
  { v: "5.0★", l: "Average review" },
  { v: "100%", l: "Locally owned" },
];

export function StatsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-primary text-primary-foreground overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(50% 80% at 20% 0%, oklch(0.78 0.09 120 / 0.5), transparent 60%), radial-gradient(40% 80% at 100% 100%, oklch(0.7 0.05 145 / 0.45), transparent 60%)",
        }}
      />
      <div className="relative container-px mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
        {STATS.map((s) => (
          <div key={s.l}>
            <p className="font-display text-4xl md:text-6xl tracking-tight">{s.v}</p>
            <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.18em] text-white/75">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

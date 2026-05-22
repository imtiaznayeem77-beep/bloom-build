import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  center = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-px mx-auto max-w-7xl">
        {(eyebrow || title || subtitle) && (
          <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
            {eyebrow && (
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[oklch(0.5_0.08_145)] mb-3">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-display text-foreground text-balance">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  if (image) {
    return (
      <section className="relative min-h-[72svh] flex items-end overflow-hidden">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={900}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.012_150)] via-[oklch(0.16_0.012_150)]/55 to-[oklch(0.16_0.012_150)]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.16_0.012_150)]/65 via-transparent to-transparent" />
        <div className="relative container-px mx-auto max-w-7xl pt-40 pb-20 md:pb-24 text-white">
          {eyebrow && (
            <p className="reveal text-xs md:text-sm font-medium uppercase tracking-[0.28em] text-white/85 mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="reveal reveal-2 text-4xl md:text-6xl font-display font-semibold text-balance leading-[1.05] max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="reveal reveal-3 mt-5 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {children && <div className="reveal reveal-4 mt-8">{children}</div>}
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-grain">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.95_0.012_145)] via-background to-background" />
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.5_0.08_145)] mb-4 reveal">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-display text-foreground text-balance leading-[1.05] reveal reveal-2">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed reveal reveal-3">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8 reveal reveal-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}

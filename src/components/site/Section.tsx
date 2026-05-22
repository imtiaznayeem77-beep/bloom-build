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
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
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

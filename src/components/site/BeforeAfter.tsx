import { useCallback, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  alt?: string;
};

export function BeforeAfter({ before, after, alt = "Before and after" }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted select-none cursor-ew-resize shadow-soft"
      onMouseMove={(e) => e.buttons === 1 && update(e.clientX)}
      onMouseDown={(e) => update(e.clientX)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
      onTouchStart={(e) => update(e.touches[0].clientX)}
    >
      <img
        src={after}
        alt={`${alt} — after`}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt={`${alt} — before`}
          className="h-full w-full object-cover"
          style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
          loading="lazy"
        />
      </div>
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_oklch(0.18_0.015_150_/_0.2)]"
        style={{ left: `calc(${pos}% - 1px)` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 h-10 w-10 rounded-full bg-white shadow-elev flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
            <path d="M8 7L3 12l5 5M16 7l5 5-5 5" />
          </svg>
        </div>
      </div>
      <span className="absolute top-3 left-3 rounded-full bg-black/55 backdrop-blur px-3 py-1 text-[11px] tracking-wider uppercase text-white">Before</span>
      <span className="absolute top-3 right-3 rounded-full bg-primary/90 backdrop-blur px-3 py-1 text-[11px] tracking-wider uppercase text-primary-foreground">After</span>
    </div>
  );
}

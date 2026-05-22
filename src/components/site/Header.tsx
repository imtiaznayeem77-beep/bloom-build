import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/business";
const logo = "/logo/logo.jpg";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 glass border-b ${
        scrolled
          ? "border-border/70 py-2 shadow-soft"
          : "border-white/10 py-3"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-11 w-11 overflow-hidden rounded-full ring-2 ring-primary/15 bg-card">
            <img
              src={logo}
              alt="Sutton's Garden Maintenance logo"
              className="h-full w-full object-cover"
              width={44}
              height={44}
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg sm:text-xl font-semibold tracking-tight text-foreground">
              Sutton's
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground -mt-0.5">
              Garden Maintenance
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  active
                    ? "text-primary bg-primary/8"
                    : "text-foreground/75 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={BUSINESS.phoneHref}
            className="hidden xl:inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary"
          >
            <Phone className="h-4 w-4" /> {BUSINESS.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-px mx-auto max-w-7xl pt-4 pb-6">
          <div className="rounded-2xl bg-card border border-border shadow-soft p-3">
            <nav className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-4 py-3 rounded-xl text-base font-medium text-foreground hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

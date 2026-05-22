import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/business";
const logo = "/logo/logo.jpg";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[oklch(0.18_0.015_150)] text-primary-foreground">
      <div
        className="absolute inset-x-0 -top-20 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.18 0.015 150))",
        }}
      />
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/10">
              <img src={logo} alt="Sutton's Garden Maintenance" className="h-full w-full object-cover" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">Sutton's Garden Maintenance</p>
              <p className="text-xs uppercase tracking-[0.18em] text-white/55">Deal · Kent</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm">
            Friendly, reliable and professional garden maintenance for domestic and
            commercial clients across Deal, Kent and surrounding areas.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <a
              href={BUSINESS.instagram}
              target="_blank" rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 hover:bg-white/15 transition"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={BUSINESS.facebook}
              target="_blank" rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 hover:bg-white/15 transition"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank" rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 hover:bg-white/15 transition"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/90 uppercase tracking-wider">Quick Links</p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-white">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/90 uppercase tracking-wider">Services</p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li><Link to="/services/garden-maintenance" className="hover:text-white">Garden Maintenance</Link></li>
            <li><Link to="/services/lawn-care" className="hover:text-white">Lawn Care</Link></li>
            <li><Link to="/services/garden-transformations" className="hover:text-white">Garden Transformations</Link></li>
            <li><Link to="/services/commercial-grounds-maintenance" className="hover:text-white">Commercial Grounds</Link></li>
            <li><Link to="/services" className="hover:text-white">Hedge Trimming</Link></li>
            <li><Link to="/services" className="hover:text-white">Holiday Let Gardening</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/90 uppercase tracking-wider">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-[oklch(0.78_0.09_120)]" />
              <a href={BUSINESS.phoneHref} className="hover:text-white">{BUSINESS.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="h-4 w-4 mt-0.5 text-[oklch(0.78_0.09_120)]" />
              <a href={BUSINESS.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp Us</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-[oklch(0.78_0.09_120)]" />
              <a href={BUSINESS.emailHref} className="hover:text-white break-all">{BUSINESS.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-[oklch(0.78_0.09_120)]" />
              <span>{BUSINESS.area}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Sutton's Garden Maintenance. All rights reserved.</p>
          <p>
            Website Designed and Developed by{" "}
            <a href="https://imtiaznayeem.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white underline-offset-4 hover:underline">
              Imtiaz Nayeem
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { BUSINESS } from "@/lib/business";

const SITE_TITLE = "Sutton's Garden Maintenance | Gardener in Deal, Kent";
const SITE_DESC =
  "Friendly, reliable and professional garden maintenance across Deal, Kent and surrounding areas. Domestic & commercial. Free quotes.";

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: BUSINESS.name,
  image: "/logo/logo.jpg",
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  url: "/",
  areaServed: [
    { "@type": "City", name: "Deal" },
    { "@type": "AdministrativeArea", name: "Kent" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Deal",
    addressRegion: "Kent",
    addressCountry: "GB",
  },
  sameAs: [BUSINESS.instagram, BUSINESS.facebook],
  priceRange: "££",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-semibold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1f3b2d" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: BUSINESS.name },
      { property: "og:site_name", content: BUSINESS.name },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/logo/logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { name: "twitter:image", content: "/logo/logo.jpg" },
      { title: "Sutton’s Garden Maintenance | Professional Garden Services i" },
      { property: "og:title", content: "Sutton’s Garden Maintenance | Professional Garden Services i" },
      { name: "twitter:title", content: "Sutton’s Garden Maintenance | Professional Garden Services i" },
      { name: "description", content: "Friendly, reliable, and professional garden maintenance services across Deal, Kent and surrounding areas. Lawn care, garden transformations, hedge trimming, com" },
      { property: "og:description", content: "Friendly, reliable, and professional garden maintenance services across Deal, Kent and surrounding areas. Lawn care, garden transformations, hedge trimming, com" },
      { name: "twitter:description", content: "Friendly, reliable, and professional garden maintenance services across Deal, Kent and surrounding areas. Lawn care, garden transformations, hedge trimming, com" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/jpeg", href: "/logo/logo.jpg" },
      { rel: "apple-touch-icon", href: "/logo/logo.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_SCHEMA),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}

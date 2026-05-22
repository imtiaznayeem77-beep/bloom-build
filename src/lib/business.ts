export const BUSINESS = {
  name: "Sutton's Garden Maintenance",
  short: "Sutton's Gardens",
  tagline:
    "Friendly, reliable, and professional gardening services across Deal, Kent and surrounding areas.",
  phone: "+44 7775 085518",
  phoneHref: "tel:+447775085518",
  whatsapp: "447775085518",
  whatsappHref: "https://wa.me/447775085518",
  email: "connorsutton2015@gmail.com",
  emailHref: "mailto:connorsutton2015@gmail.com",
  instagram: "https://www.instagram.com/suttongardener/",
  facebook: "https://www.facebook.com/profile.php?id=61555683012798",
  area: "Deal, Kent & surrounding areas",
  formspreeEndpoint: "https://formspree.io/f/REPLACE_WITH_YOUR_ID",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    short: "Regular care that keeps your garden looking its best year-round.",
    icon: "Leaf",
    href: "/services/garden-maintenance",
  },
  {
    slug: "lawn-care",
    title: "Lawn Care",
    short: "Mowing, edging, feeding and lawn installations for a flawless finish.",
    icon: "Sprout",
    href: "/services/lawn-care",
  },
  {
    slug: "garden-transformations",
    title: "Garden Transformations",
    short: "Turn tired outdoor spaces into something you'll love spending time in.",
    icon: "Wand2",
    href: "/services/garden-transformations",
  },
  {
    slug: "hedge-trimming",
    title: "Hedge Trimming",
    short: "Clean lines, healthy growth and beautifully shaped hedges.",
    icon: "Scissors",
    href: "/services/hedge-trimming",
  },
  {
    slug: "garden-clearances",
    title: "Garden Clearances",
    short: "Overgrown gardens cleared, tidied and made manageable again.",
    icon: "Trash2",
    href: "/services/garden-clearances",
  },
  {
    slug: "estate-maintenance",
    title: "Estate Maintenance",
    short: "Premium grounds care for larger estates and country properties.",
    icon: "Trees",
    href: "/services/estate-maintenance",
  },
  {
    slug: "commercial-grounds",
    title: "Commercial Grounds Maintenance",
    short: "Reliable, scheduled grounds maintenance for commercial properties.",
    icon: "Building2",
    href: "/services/commercial-grounds-maintenance",
  },
  {
    slug: "seasonal-tidy",
    title: "Seasonal Tidy Ups",
    short: "Spring, summer and autumn refreshes to keep gardens in top shape.",
    icon: "Sun",
    href: "/services/seasonal-tidy",
  },
  {
    slug: "holiday-let",
    title: "Holiday Let Gardening",
    short: "Keep your holiday let presentable for every guest, every season.",
    icon: "Home",
    href: "/services/holiday-let",
  },
] as const;

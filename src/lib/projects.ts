export type Project = {
  slug: string;
  title: string;
  description: string;
  category: "Transformation" | "Maintenance" | "Hedges" | "Holiday Let" | "Lawn";
  before?: string;
  after?: string;
  during?: string;
  gallery?: string[];
  cover: string;
};

export const projects: Project[] = [
  {
    slug: "shadesman-lawn-deal",
    title: "New Shadesman Lawn & Garden Tidy Up",
    description:
      "A new shadesman lawn and a general tidy up for this garden in Deal.",
    category: "Transformation",
    before: "/projects/p1-before.jpg",
    during: "/projects/p1-during.jpg",
    after: "/projects/p1-after.jpg",
    cover: "/projects/p1-after.jpg",
  },
  {
    slug: "spruce-up-before-moving",
    title: "Property Spruce Up Before Moving",
    description:
      "Whether it's general maintenance or a spruce up before moving home, we cover it all.",
    category: "Maintenance",
    before: "/projects/p2-before-1.jpg",
    after: "/projects/p2-after-1.jpg",
    gallery: [
      "/projects/p2-before-1.jpg",
      "/projects/p2-before-2.jpg",
      "/projects/p2-after-1.jpg",
      "/projects/p2-after-2.jpg",
      "/projects/p2-after-3.jpg",
      "/projects/p2-after-4.jpg",
    ],
    cover: "/projects/p2-after-1.jpg",
  },
  {
    slug: "box-tree-moth-treatment",
    title: "Box Tree Moth Treatment",
    description:
      "Caught the caterpillars (box tree moth) just in time before they damaged the estate hedges.",
    category: "Hedges",
    gallery: ["/projects/p3.jpg"],
    cover: "/projects/p3.jpg",
  },
  {
    slug: "garden-glow-up",
    title: "Garden Glow Up",
    description: "Making things a little more manageable for this customer.",
    category: "Transformation",
    before: "/projects/p4-before.jpg",
    after: "/projects/p4-after.jpg",
    cover: "/projects/p4-after.jpg",
  },
  {
    slug: "flower-bed-restoration",
    title: "Flower Bed Restoration",
    description: "All this bed needed was love.",
    category: "Transformation",
    before: "/projects/p5-before.jpg",
    after: "/projects/p5-after.jpg",
    cover: "/projects/p5-after.jpg",
  },
  {
    slug: "clean-edge-finish",
    title: "Clean Edge Finish",
    description: "A clean edge makes all the difference.",
    category: "Lawn",
    gallery: [
      "/projects/p6-1.jpg",
      "/projects/p6-2.jpg",
      "/projects/p6-3.jpg",
      "/projects/p6-4.jpg",
      "/projects/p6-5.jpg",
    ],
    cover: "/projects/p6-1.jpg",
  },
  {
    slug: "large-garden-transformation",
    title: "Large Garden Transformation",
    description: "Big garden transformation completed this week.",
    category: "Transformation",
    gallery: [
      "/projects/p7-1.jpg",
      "/projects/p7-2.jpg",
      "/projects/p7-3.jpg",
      "/projects/p7-final.jpg",
    ],
    after: "/projects/p7-final.jpg",
    cover: "/projects/p7-final.jpg",
  },
  {
    slug: "holiday-let-maintenance",
    title: "Holiday Let Garden Maintenance",
    description: "Keeping holiday lets presentable all year round.",
    category: "Holiday Let",
    before: "/projects/p8-before.jpg",
    after: "/projects/p8-after.jpg",
    cover: "/projects/p8-after.jpg",
  },
];

export const allGalleryImages = projects.flatMap((p) => {
  const imgs: { src: string; project: string; category: string }[] = [];
  if (p.before) imgs.push({ src: p.before, project: p.title, category: "Before" });
  if (p.during) imgs.push({ src: p.during, project: p.title, category: "Process" });
  if (p.after) imgs.push({ src: p.after, project: p.title, category: "After" });
  p.gallery?.forEach((g) =>
    imgs.push({ src: g, project: p.title, category: p.category }),
  );
  return imgs;
});

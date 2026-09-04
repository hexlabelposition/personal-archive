export type Project = {
  id: string;
  name: string;
  descriptor: string;
  discipline: string;
  year: string;
  state: "ACTIVE" | "PROTOTYPE" | "EXPERIMENTAL" | "LIVE";
  note: string;
  stack: string;
  link?: { href: string; label: string };
};

export const projects: readonly Project[] = [
  {
    id: "VK—001",
    name: "LUMOS",
    descriptor:
      "Digital agency landing page focused on clean design, accessibility, and performance.",
    discipline: "Web design",
    year: "2026",
    state: "LIVE",
    note: "A responsive landing page for a fictional digital agency, reimplemented from scratch as a personal design and frontend exercise. Built with Astro and Tailwind CSS, with strong Lighthouse results across performance, accessibility, best practices, and SEO.",
    stack: "Astro · Tailwind CSS · TypeScript",
    link: {
      href: "https://hexlabelposition.github.io/lumos/",
      label: "Visit website",
    },
  },
  {
    id: "VK—002",
    name: "DELVEX",
    descriptor: "Logistics platform for managing users and shipments.",
    discipline: "Platform",
    year: "2026",
    state: "ACTIVE",
    note: "A logistics MVP with account management, authentication, and shipment management. Built with a Spring Boot API and a Next.js web client, with PostgreSQL persistence and Redis-backed rate limiting.",
    stack: "Java · Spring Boot · Next.js · PostgreSQL · Redis",
    link: {
      href: "https://delvex.dev",
      label: "Visit website",
    },
  },
  {
    id: "VK—003",
    name: "CLUD",
    descriptor: "Cloud file storage built to explore microservices.",
    discipline: "Microservices",
    year: "2026",
    state: "PROTOTYPE",
    note: "An educational file storage system with authentication, file and folder management, uploads, downloads, and public sharing links. Five Spring Boot services use PostgreSQL for metadata, MinIO for file storage, and Kafka for events.",
    stack: "Java · Spring Boot · PostgreSQL · MinIO · Kafka",
  },
  {
    id: "VK—004",
    name: "Harmony Backpack",
    descriptor: "A Minecraft Fabric mod that adds portable backpack storage.",
    discipline: "Minecraft mod",
    year: "2026",
    state: "EXPERIMENTAL",
    note: "An experimental backpack mod with a 27-slot inventory stored in the backpack item. Players can open it directly or through a key binding, and backpacks cannot be nested inside one another.",
    stack: "Java · Fabric · Minecraft",
  },
];

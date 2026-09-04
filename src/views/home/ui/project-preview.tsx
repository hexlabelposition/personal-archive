import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../config/projects";

export function ProjectPreview({ project }: { project: Project }) {
  const isExternal = project.link?.href.startsWith("http");

  return (
    <article className="border-border bg-card relative grid overflow-hidden border">
      <div
        aria-hidden="true"
        className="bg-primary absolute inset-y-0 left-0 w-px"
      />

      <div className="border-border text-muted-foreground text-2xs tracking-ultra-wide flex items-center justify-between gap-4 border-b px-5 py-4 font-mono uppercase sm:px-6">
        <span>{project.id}</span>
        <span className="text-right">{project.discipline}</span>
      </div>

      <div className="grid gap-5 px-5 py-7 sm:px-6 sm:py-8">
        <div className="grid gap-3">
          <h3 className="font-display text-[clamp(1.65rem,3vw,2.25rem)] leading-tight tracking-wider text-pretty">
            {project.name}
          </h3>
          <p className="text-foreground text-base leading-relaxed text-pretty">
            {project.descriptor}
          </p>
        </div>

        <p className="text-muted-foreground text-sm leading-[1.75] text-pretty">
          {project.note}
        </p>
      </div>

      <div className="border-border grid gap-4 border-t px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="border-primary text-primary text-2xs tracking-ultra-wide border px-2.5 py-1 font-mono">
            {project.state}
          </span>
          <span className="text-muted-foreground text-2xs tracking-ultra-wide font-mono">
            {project.year}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.split(" · ").map((technology) => (
            <span
              key={technology}
              className="border-border bg-background text-muted-foreground text-2xs rounded-full border px-2.5 py-1 font-mono tracking-wider"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {project.link ? (
        <Link
          href={project.link.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="border-border hover:bg-background focus-visible:outline-primary group flex items-center justify-between gap-4 border-t px-5 py-4 text-sm tracking-wide transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 sm:px-6"
        >
          {project.link.label}
          <ArrowUpRight
            aria-hidden="true"
            className="text-primary size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      ) : null}
    </article>
  );
}

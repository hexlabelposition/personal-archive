import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../config/projects";

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="text-primary size-4 fill-current transition-transform duration-300 group-hover:scale-110"
    >
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.57-.29-5.28-1.29-5.28-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18A10.98 10.98 0 0 1 12 6.12c.98 0 1.95.13 2.87.39 2.19-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.27c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

export function ProjectPreview({ project }: { project: Project }) {
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
          target="_blank"
          rel="noreferrer"
          className="border-border hover:bg-background focus-visible:outline-primary group flex items-center justify-between gap-4 border-t px-5 py-4 text-sm tracking-wide transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 sm:px-6"
        >
          {project.link.label}
          <ArrowUpRight
            aria-hidden="true"
            className="text-primary size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      ) : null}

      {project.repository ? (
        <Link
          href={project.repository.href}
          target="_blank"
          rel="noreferrer"
          className="border-border hover:bg-background focus-visible:outline-primary group flex items-center justify-between gap-4 border-t px-5 py-4 text-sm tracking-wide transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 sm:px-6"
        >
          {project.repository.label}
          <GitHubIcon />
        </Link>
      ) : null}
    </article>
  );
}

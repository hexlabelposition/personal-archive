import { site } from "@shared/config";

export function FooterWidget() {
  return (
    <footer className="border-border text-muted-foreground text-2xs tracking-ultra-wide min-h-16 border-t py-4 font-mono">
      <div className="container flex flex-wrap items-center justify-between gap-4">
        <span className="font-display text-foreground tracking-extra-wide text-sm uppercase">
          {site.name}
        </span>
        <span>{site.location}</span>
        <a
          href={site.domainHref}
          className="hover:text-foreground uppercase transition-colors duration-250"
        >
          {site.domain}
        </a>
        <span>LAST UPDATED {site.lastUpdated}</span>
      </div>
    </footer>
  );
}

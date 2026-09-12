import { site } from "@shared/config";
import Link from "next/link";

export function FooterWidget() {
  return (
    <footer className="border-border text-muted-foreground text-2xs tracking-ultra-wide min-h-16 border-t py-4 font-mono">
      <div className="container flex flex-wrap items-center justify-between gap-4">
        <span className="font-display text-foreground tracking-extra-wide text-sm uppercase">
          {site.name}
        </span>
        <span>{site.location}</span>
        <Link
          href="/"
          className="hover:text-foreground uppercase transition-colors duration-250"
        >
          {site.domain}
        </Link>
        <a
          href={site.launchRecordHref}
          target="_blank"
          rel="noreferrer"
          title="Public launch record"
          className="hover:text-foreground uppercase transition-colors duration-250"
        >
          Established {site.established}
        </a>
      </div>
    </footer>
  );
}

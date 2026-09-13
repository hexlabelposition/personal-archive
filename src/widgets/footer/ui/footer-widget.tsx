import { site } from "@shared/config";
import { colophon } from "../config/colophon";

export function FooterWidget() {
  return (
    <footer className="border-border text-muted-foreground text-2xs tracking-ultra-wide flex min-h-16 items-center border-t py-4 font-mono leading-none">
      <div className="container flex flex-wrap items-center gap-x-6 gap-y-3 sm:justify-between">
        <span className="flex items-baseline gap-2">
          <span>ESTABLISHED</span>
          <a
            href={site.launchRecordHref}
            target="_blank"
            rel="noreferrer"
            title="Public launch record"
            className="text-foreground hover:text-primary transition-colors duration-250"
          >
            {site.established}
          </a>
        </span>

        {colophon.map((group) => (
          <span key={group.key} className="flex items-baseline gap-2">
            <span>{group.label}</span>
            <span className="text-foreground">{group.items.join(" · ")}</span>
          </span>
        ))}
      </div>
    </footer>
  );
}

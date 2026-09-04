import { site } from "@shared/config";
import { ToggleThemeButton } from "@features/toggle-theme";
import { ArchiveIcon } from "lucide-react";
import { navigation } from "../config/navigation";

export function HeaderWidget() {
  return (
    <header className="border-border bg-background/90 fixed inset-x-0 top-0 z-50 min-h-16 border-b py-4 backdrop-blur-sm">
      <div className="container flex items-center justify-between gap-4">
        <a
          href="#top"
          aria-label={site.name}
          className="border-border text-muted-foreground hover:text-foreground rounded-sm border bg-transparent p-2"
        >
          <ArchiveIcon
            aria-hidden="true"
            className="size-3 transition-colors duration-250 sm:size-4"
          />
        </a>

        <nav className="text-muted-foreground text-2xs sm:tracking-ultra-wide flex items-center gap-2 font-sans tracking-widest uppercase sm:gap-4 sm:text-xs">
          {navigation.map(({ key, href, label }) => (
            <a
              key={key}
              href={href}
              className={`hover:text-foreground p-2 transition-colors duration-250 ${
                href === "#top" ? "hidden sm:inline" : ""
              }`}
            >
              {label}
            </a>
          ))}

          <ToggleThemeButton />
        </nav>
      </div>
    </header>
  );
}

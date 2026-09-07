import { site } from "@shared/config";
import { ToggleThemeButton } from "@features/toggle-theme";
import { navigation } from "../config/navigation";
import { HomeLink } from "./home-link";

export function HeaderWidget() {
  return (
    <header className="border-border bg-background/90 fixed inset-x-0 top-0 z-50 min-h-16 border-b py-4 backdrop-blur-sm">
      <div className="container flex items-center justify-between gap-4">
        <HomeLink
          aria-label={site.name}
          className="border-border text-muted-foreground hover:text-foreground rounded-sm border bg-transparent p-2"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            className="size-3 transition-colors duration-250 sm:size-4"
          >
            <rect x="3" y="9.5" width="18" height="11.5" rx="2.6" />
            <path d="M6 6.2h12" stroke="#9184d9" />
            <path d="M8.5 3h7" stroke="#9184d9" />
          </svg>
        </HomeLink>

        <nav className="text-muted-foreground text-2xs sm:tracking-ultra-wide flex items-center gap-2 font-sans tracking-widest uppercase sm:gap-4 sm:text-xs">
          {navigation.map(({ key, href, label }) =>
            key === "index" ? (
              <HomeLink
                key={key}
                className="hover:text-foreground hidden p-2 transition-colors duration-250 sm:inline"
              >
                {label}
              </HomeLink>
            ) : (
              <a
                key={key}
                href={href}
                className="hover:text-foreground p-2 transition-colors duration-250"
              >
                {label}
              </a>
            ),
          )}

          <ToggleThemeButton />
        </nav>
      </div>
    </header>
  );
}

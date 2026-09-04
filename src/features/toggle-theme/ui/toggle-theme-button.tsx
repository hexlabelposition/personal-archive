"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";

export function ToggleThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="text-muted-foreground hover:text-foreground border-border rounded-sm border bg-transparent p-2"
    >
      <div className="flex items-center justify-center transition-all duration-200">
        <span className="dark:hidden">
          <SunIcon className="size-3 sm:size-4" />
          <span className="sr-only">Dark</span>
        </span>

        <span className="hidden dark:inline">
          <MoonIcon className="size-3 sm:size-4" />
          <span className="sr-only">Light</span>
        </span>
      </div>
    </button>
  );
}

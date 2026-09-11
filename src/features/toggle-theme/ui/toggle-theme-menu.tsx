"use client";

import { useSyncExternalStore } from "react";
import { Menu } from "@base-ui/react/menu";
import { CheckIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { themes } from "../config/themes";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function ToggleThemeMenu() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  // Keep the server and initial client render identical until storage is available.
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const selectedTheme = mounted
    ? themes.find(({ value }) => value === theme)
    : undefined;

  const ThemeIcon = mounted && resolvedTheme === "dark" ? MoonIcon : SunIcon;

  return (
    <Menu.Root>
      <Menu.Trigger
        disabled={!mounted}
        aria-label={
          selectedTheme
            ? `Color theme: ${selectedTheme.label}. Change theme`
            : "Change color theme"
        }
        className="text-muted-foreground hover:text-foreground border-border focus-visible:outline-primary data-popup-open:bg-card data-popup-open:text-foreground flex shrink-0 items-center justify-center rounded-sm border bg-transparent p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <ThemeIcon aria-hidden="true" className="size-3 sm:size-4" />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner
          side="bottom"
          align="end"
          sideOffset={8}
          collisionPadding={8}
          positionMethod="fixed"
          className="z-60"
        >
          <Menu.Popup className="border-border bg-background text-foreground max-h-(--available-height) w-32 max-w-[calc(100vw-16px)] origin-(--transform-origin) overflow-y-auto rounded-sm border p-1 font-sans text-xs tracking-normal normal-case shadow-lg outline-none transition-[opacity,scale] duration-150 ease-out data-ending-style:scale-[0.96] data-ending-style:opacity-0 data-ending-style:duration-100 data-ending-style:ease-in data-starting-style:scale-[0.96] data-starting-style:opacity-0 motion-reduce:transition-none sm:w-36 sm:text-sm">
            <Menu.RadioGroup
              aria-label="Color theme"
              value={selectedTheme?.value ?? ""}
              onValueChange={setTheme}
            >
              {themes.map(({ value, label, Icon }) => (
                <Menu.RadioItem
                  key={value}
                  value={value}
                  closeOnClick
                  className="data-highlighted:bg-card data-highlighted:text-foreground flex min-h-8 cursor-pointer items-center gap-1.5 rounded-xs px-1.5 outline-none select-none sm:min-h-9 sm:gap-2 sm:px-2"
                >
                  <Icon aria-hidden="true" className="size-3 shrink-0 sm:size-4" />
                  <span className="flex-1">{label}</span>
                  <span className="flex size-3 items-center justify-center sm:size-4">
                    <Menu.RadioItemIndicator>
                      <CheckIcon aria-hidden="true" className="size-3 sm:size-4" />
                    </Menu.RadioItemIndicator>
                  </span>
                </Menu.RadioItem>
              ))}
            </Menu.RadioGroup>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

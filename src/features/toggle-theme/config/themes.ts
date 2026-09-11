import { MonitorIcon, MoonIcon, SunIcon, type LucideIcon } from "lucide-react";

interface ThemeItem {
  value: string;
  label: string;
  Icon: LucideIcon;
}

type ThemeList = Array<ThemeItem>;

export const themes = [
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
  { value: "system", label: "System", Icon: MonitorIcon },
] as const satisfies ThemeList;

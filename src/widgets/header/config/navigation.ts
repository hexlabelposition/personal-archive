import type { Key } from "react";

interface NavigationItem {
  key: Key;
  href: string;
  label: string;
}

type NavigationList = NavigationItem[];

export const navigation: NavigationList = [
  { key: "index", href: "#top", label: "Index" },
  { key: "work", href: "#work", label: "Work" },
  // { key: "lab", href: "#lab", label: "Lab" },
  // { key: "notes", href: "#notes", label: "Notes" },
  { key: "about", href: "#about", label: "About" },
];

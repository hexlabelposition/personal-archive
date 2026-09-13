interface ColophonGroup {
  key: string;
  label: string;
  items: string[];
}

type ColophonList = ColophonGroup[];

export const colophon: ColophonList = [
  {
    key: "stack",
    label: "BUILT WITH",
    items: ["Next.js 16", "React 19", "Tailwind 4"],
  },
  {
    key: "typefaces",
    label: "TYPEFACES",
    items: ["Cinzel", "Archivo", "IBM Plex Mono"],
  },
];

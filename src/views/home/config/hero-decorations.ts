/**
 * Deterministic geometry for the hero background. Values are percentages of the
 * hero section box, so every layer scales with the viewport on its own.
 * Nothing here may be randomised — the background renders on the server.
 */

type HeroRule = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dashed?: boolean;
  delay: number;
  desktopOnly?: boolean;
};

type HeroCircle = {
  size: number;
  right: number;
  top: number;
  dash: string;
  spin: number;
  reverse?: boolean;
  delay: number;
  desktopOnly?: boolean;
};

type HeroMark = {
  kind: "node" | "cross";
  x: number;
  y: number;
  delay: number;
  desktopOnly?: boolean;
};

type HeroSpeck = { x: number; y: number; s: number; d: number };

/** Long hairlines. Axis-aligned only — each renders as a 1px CSS rule. */
export const heroRules: readonly HeroRule[] = [
  { x1: 0, y1: 17.5, x2: 63, y2: 17.5, delay: 260 },
  { x1: 60, y1: 0, x2: 60, y2: 30, delay: 340 },
  { x1: 0, y1: 29.5, x2: 60, y2: 29.5, delay: 420 },
  { x1: 63, y1: 0, x2: 63, y2: 100, dashed: true, delay: 500 },
  { x1: 88.5, y1: 34.5, x2: 88.5, y2: 62, delay: 580, desktopOnly: true },
  { x1: 66.5, y1: 61.5, x2: 66.5, y2: 100, delay: 660, desktopOnly: true },
  { x1: 40, y1: 81.5, x2: 57, y2: 81.5, dashed: true, delay: 740 },
];

/** Dashed construction circles. Sized and offset in percentages of the section width. */
export const heroCircles: readonly HeroCircle[] = [
  { size: 58, right: -8, top: -22, dash: "2 11", spin: 200, delay: 300 },
  {
    size: 46,
    right: 12,
    top: 58,
    dash: "2 13",
    spin: 260,
    reverse: true,
    delay: 460,
  },
  {
    size: 30,
    right: 34,
    top: 6,
    dash: "1.5 9",
    spin: 320,
    delay: 620,
    desktopOnly: true,
  },
];

/** Crosshairs and node markers — the punctuation of the drawing. */
export const heroMarks: readonly HeroMark[] = [
  { kind: "node", x: 63, y: 17.5, delay: 820 },
  { kind: "node", x: 88.5, y: 34.5, delay: 900, desktopOnly: true },
  { kind: "node", x: 92.5, y: 71.5, delay: 980, desktopOnly: true },
  { kind: "cross", x: 68, y: 42, delay: 860 },
  { kind: "cross", x: 66.5, y: 76.5, delay: 940, desktopOnly: true },
  { kind: "cross", x: 49, y: 81.5, delay: 1020, desktopOnly: true },
  { kind: "cross", x: 24, y: 63, delay: 1100, desktopOnly: true },
];

/** Scattered specks. `s` is the diameter in px, `d` the twinkle offset in seconds. */
export const heroSpecks: readonly HeroSpeck[] = [
  { x: 6.4, y: 22.8, s: 1, d: 0 },
  { x: 13.1, y: 47.5, s: 1.5, d: 6 },
  { x: 19.7, y: 9.4, s: 1, d: 12 },
  { x: 23.4, y: 34.1, s: 1, d: 18 },
  { x: 27.9, y: 71.2, s: 1.5, d: 3 },
  { x: 31.2, y: 18.6, s: 1, d: 21 },
  { x: 35.8, y: 55.3, s: 1, d: 9 },
  { x: 38.5, y: 88.7, s: 1.5, d: 27 },
  { x: 41.3, y: 26.4, s: 1, d: 15 },
  { x: 44.9, y: 64.8, s: 1, d: 33 },
  { x: 47.2, y: 4.9, s: 1.5, d: 24 },
  { x: 51.6, y: 43.7, s: 1, d: 30 },
  { x: 54.3, y: 79.1, s: 1, d: 5 },
  { x: 57.8, y: 13.2, s: 1, d: 36 },
  { x: 61.4, y: 58.6, s: 1.5, d: 11 },
  { x: 64.7, y: 93.4, s: 1, d: 17 },
  { x: 68.9, y: 31.8, s: 1, d: 23 },
  { x: 71.5, y: 68.3, s: 1.5, d: 29 },
  { x: 74.2, y: 7.6, s: 1, d: 2 },
  { x: 77.8, y: 50.2, s: 1, d: 35 },
  { x: 81.3, y: 85.9, s: 1, d: 8 },
  { x: 84.6, y: 21.4, s: 1.5, d: 14 },
  { x: 87.9, y: 60.7, s: 1, d: 20 },
  { x: 91.2, y: 96.1, s: 1, d: 26 },
  { x: 94.8, y: 38.5, s: 1, d: 32 },
  { x: 97.4, y: 74.9, s: 1.5, d: 4 },
  { x: 9.8, y: 66.3, s: 1, d: 10 },
  { x: 16.5, y: 91.7, s: 1, d: 16 },
];

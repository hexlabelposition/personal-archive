export const lab = [
  {
    id: "L—011",
    name: "Consensus sandbox",
    state: "RESEARCH",
    note: "A small Raft implementation with an injectable network, used to reproduce partition behaviour deterministically.",
  },
  {
    id: "L—009",
    name: "Backpressure harness",
    state: "ACTIVE",
    note: "Load generator that holds a target latency rather than a target rate, to find where a service actually bends.",
  },
  {
    id: "L—007",
    name: "Type-scale compiler",
    state: "EXPERIMENT",
    note: "Generates a modular type scale and its CSS from a single ratio and optical-size constraints.",
  },
  {
    id: "L—004",
    name: "Schema drift diff",
    state: "ARCHIVED",
    note: "Compares migrated schemas across environments and reports divergence as a reviewable diff.",
  },
  {
    id: "L—003",
    name: "Queue replay tool",
    state: "ACTIVE",
    note: "Replays a captured message window against a service so a consumer bug can be reproduced from real traffic.",
  },
  {
    id: "L—001",
    name: "Grid ruler",
    state: "EXPERIMENT",
    note: "An overlay that measures a rendered page against its intended baseline grid and reports the deviations.",
  },
] as const;

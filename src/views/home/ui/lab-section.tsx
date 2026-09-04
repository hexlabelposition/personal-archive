import { SectionHeading } from "@shared/ui";
import { lab } from "../config/lab";

export function LabSection() {
  return (
    <section
      id="lab"
      className="border-border bg-background container flex scroll-mt-16 flex-col gap-[clamp(30px,5vh,58px)] border-t py-[clamp(56px,9vh,110px)]"
    >
      <SectionHeading
        index="02"
        title="LAB"
        meta="SMALL SYSTEMS & EXPERIMENTS"
      />

      <div className="border-border grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t border-l">
        {lab.map((entry) => (
          <div
            key={entry.id}
            className="border-border bg-background hover:bg-card grid content-start gap-2.5 border-r border-b px-6 py-7"
          >
            <div className="text-muted-foreground text-2xs tracking-ultra-wide flex justify-between font-mono">
              <span>{entry.id}</span>
              <span>{entry.state}</span>
            </div>
            <div className="font-display text-xl leading-[1.2] tracking-wider">
              {entry.name}
            </div>
            <p className="text-muted-foreground text-sm leading-[1.7]">
              {entry.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

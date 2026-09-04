import { SectionHeading } from "@shared/ui";
import { notes } from "../config/notes";

export function NotesSection() {
  return (
    <section
      id="notes"
      className="border-border container flex scroll-mt-16 flex-col gap-[clamp(24px,4vh,44px)] border-t py-[clamp(56px,9vh,110px)]"
    >
      <SectionHeading index="03" title="NOTES" />

      <div className="max-w-4xl">
        {notes.map((note) => (
          <a
            key={note.title}
            href="#notes"
            className="border-border hover:text-primary focus-visible:text-primary flex flex-wrap items-baseline gap-x-5 gap-y-1.5 border-t py-5 pr-1 pl-1 transition-[padding-left,color] duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:pl-3 focus-visible:pl-3 sm:grid sm:grid-cols-[96px_minmax(0,1fr)_130px]"
          >
            <span className="text-muted-foreground tracking-extra-wide font-mono text-xs">
              {note.date}
            </span>
            <span className="order-last basis-full text-lg tracking-wide sm:order-0 sm:basis-auto">
              {note.title}
            </span>
            <span className="text-muted-foreground text-2xs tracking-ultra-wide ml-auto font-mono sm:ml-0 sm:justify-self-end">
              {note.kind}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

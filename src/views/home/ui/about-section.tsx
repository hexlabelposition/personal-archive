import { SectionHeading } from "@shared/ui";
// import { practice } from "../config/practice";
import { contacts } from "../config/contacts";

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-border container flex scroll-mt-16 flex-col gap-[clamp(30px,5vh,58px)] border-t pt-[clamp(56px,9vh,110px)] pb-[clamp(48px,8vh,96px)]"
    >
      <SectionHeading index="04" title="ABOUT" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-[clamp(28px,5vw,90px)]">
        <div className="flex max-w-160 flex-col gap-6">
          <p className="font-display text-about-lead leading-snug font-normal tracking-wide text-pretty">
            Engineering as a continuous practice — systems designed, measured,
            and revised.
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-base leading-relaxed text-balance">
              My work spans backend services and user-facing interfaces. I build
              projects to understand how data, messaging, application
              architecture, design, and performance come together as one system.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed text-balance">
              This website serves as an archive. Entries are added as systems
              are created and updated as they change.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {/* <div className="grid gap-3">
            <div className="border-border text-muted-foreground text-2xs tracking-ultra-wide border-b pb-2.5 font-mono">
              PRACTICE
            </div>
            <div className="text-foreground grid gap-2 text-sm">
              {practice.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div> */}
          <div className="grid gap-3">
            <div className="border-border text-muted-foreground text-2xs tracking-ultra-wide border-b pb-2.5 font-mono">
              CONTACT
            </div>
            <div className="grid gap-2 font-mono text-sm tracking-wider">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-250"
                >
                  {contact.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

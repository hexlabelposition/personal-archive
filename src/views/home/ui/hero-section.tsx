import { site } from "@shared/config";
import { HeroBackground } from "./hero-background";
import { heroIndex } from "../config/hero-index";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="top"
      className="border-border relative isolate scroll-mt-0 border-b"
    >
      <HeroBackground />

      <div className="container flex min-h-svh flex-col justify-between pt-35 pb-14">
        <div className="animate-fade animation-delay-200 text-muted-foreground tracking-ultra-wide flex items-baseline gap-4 font-mono text-xs">
          <span className="uppercase">{site.kicker}</span>
        </div>

        <div className="flex flex-col gap-y-10">
          <h1 className="font-display animate-rise animation-delay-250 delay text-hero leading-none font-normal tracking-tight uppercase">
            <span className="animate-rise animation-delay-250 block">
              {site.firstName}
            </span>
            <span className="animate-rise animation-delay-380 block">
              {site.lastName}
            </span>
          </h1>

          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-7">
            <div className="animate-rise animation-delay-620 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <span className="text-foreground text-hero-description tracking-wide">
                {site.descriptor}
              </span>

              <div className="tracking-extra-wide flex items-center gap-x-4">
                <span className="text-muted-foreground font-mono text-xs">
                  {site.location}
                </span>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground font-mono text-xs uppercase transition-colors duration-250"
                >
                  {site.domain}
                </Link>
              </div>
            </div>

            <div className="animate-fade animation-delay-800 flex items-end gap-x-12">
              <div className="flex flex-col gap-2">
                <div className="text-muted-foreground text-2xs tracking-ultra-wide font-mono">
                  INDEX
                </div>
                <div className="text-muted-foreground grid gap-2 font-mono text-xs tracking-widest">
                  {heroIndex.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="hover:text-foreground flex gap-3 uppercase transition-colors duration-250"
                    >
                      <span>{item.id}</span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-muted-foreground text-2xs tracking-ultra-wide flex flex-col gap-2 font-mono">
                <div>LAST UPDATED</div>
                <div className="text-foreground">{site.lastUpdated}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

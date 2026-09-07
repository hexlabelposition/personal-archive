import {
  heroCircles,
  heroMarks,
  heroRules,
  heroSpecks,
} from "../config/hero-decorations";

const dashes = (direction: "to right" | "to bottom") =>
  `repeating-linear-gradient(${direction}, currentColor 0 2px, transparent 2px 10px)`;

export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
    >
      {heroCircles.map((circle) => (
        <div
          key={`circle-${circle.size}-${circle.top}`}
          className={`animate-fade text-border absolute aspect-square ${
            circle.desktopOnly ? "max-md:hidden" : ""
          }`}
          style={{
            width: `${circle.size}%`,
            right: `${circle.right}%`,
            top: `${circle.top}%`,
            animationDelay: `${circle.delay}ms`,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="animate-orbit size-full"
            style={{
              animationDuration: `${circle.spin}s`,
              animationDirection: circle.reverse ? "reverse" : "normal",
            }}
          >
            <circle
              cx="50"
              cy="50"
              r="49"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray={circle.dash}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      ))}

      <div
        className="animate-fade animation-delay-620 text-foreground absolute top-[3%] right-[-26%] aspect-square w-[clamp(420px,58vw,1100px)] max-md:right-[-45%] max-md:w-[80vw] max-md:opacity-45 md:max-lg:opacity-60"
        style={{ animationDuration: "2.2s" }}
      >
        <svg viewBox="0 0 600 600" className="size-full">
          <defs>
            <filter
              id="hero-orb-stipple"
              x="0"
              y="0"
              width="100%"
              height="100%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.82"
                numOctaves="1"
                seed="9"
                result="noise"
              />
              <feColorMatrix
                in="noise"
                type="matrix"
                values="0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0 0
                        1 0 0 0 0"
                result="alpha"
              />
              {/* Only the top third of the noise range survives — that is the stipple. */}
              <feComponentTransfer in="alpha" result="dots">
                <feFuncA type="discrete" tableValues="0 0 1" />
              </feComponentTransfer>
              {/* Composited against SourceGraphic so the dots inherit currentColor. */}
              <feComposite in="SourceGraphic" in2="dots" operator="in" />
            </filter>

            {/* Hollow interior, dense rim — the stipple only survives near the limb. */}
            <radialGradient id="hero-orb-falloff">
              <stop offset="0.4" stopColor="#000" />
              <stop offset="0.84" stopColor="#4a4a4a" />
              <stop offset="0.97" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" />
            </radialGradient>

            {/* Painted over the rim to thin the right limb into a crescent. */}
            <linearGradient id="hero-orb-crescent">
              <stop offset="0" stopColor="#000" stopOpacity="0" />
              <stop offset="0.38" stopColor="#000" stopOpacity="0.2" />
              <stop offset="0.85" stopColor="#000" stopOpacity="1" />
            </linearGradient>

            <mask id="hero-orb-mask">
              <circle cx="300" cy="300" r="280" fill="url(#hero-orb-falloff)" />
              <rect width="600" height="600" fill="url(#hero-orb-crescent)" />
            </mask>
          </defs>

          <g className="animate-breathe opacity-50" mask="url(#hero-orb-mask)">
            <rect
              width="600"
              height="600"
              fill="currentColor"
              filter="url(#hero-orb-stipple)"
            />
          </g>

          <path
            d="M300 20A280 280 0 0 0 300 580"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-35"
          />
        </svg>
      </div>

      {heroRules.map((rule) => {
        const vertical = rule.x1 === rule.x2;
        const drawn = rule.dashed
          ? vertical
            ? "animate-drift-y"
            : "animate-drift-x"
          : vertical
            ? "animate-draw-y"
            : "animate-draw-x";

        return (
          <div
            key={`rule-${rule.x1}-${rule.y1}-${rule.x2}-${rule.y2}`}
            className={`text-border absolute ${drawn} ${
              vertical ? "w-px origin-top" : "h-px origin-left"
            } ${rule.desktopOnly ? "max-md:hidden" : ""}`}
            style={{
              left: `${rule.x1}%`,
              top: `${rule.y1}%`,
              ...(vertical
                ? { height: `${rule.y2 - rule.y1}%` }
                : { width: `${rule.x2 - rule.x1}%` }),
              animationDelay: `${rule.delay}ms`,
              ...(rule.dashed
                ? {
                    backgroundImage: dashes(
                      vertical ? "to bottom" : "to right",
                    ),
                  }
                : { backgroundColor: "currentColor" }),
            }}
          />
        );
      })}

      {heroMarks.map((mark) => (
        <div
          key={`mark-${mark.kind}-${mark.x}-${mark.y}`}
          className={`animate-fade text-muted-foreground absolute -translate-x-1/2 -translate-y-1/2 opacity-55 ${
            mark.desktopOnly ? "max-md:hidden" : ""
          }`}
          style={{
            left: `${mark.x}%`,
            top: `${mark.y}%`,
            animationDelay: `${mark.delay}ms`,
          }}
        >
          {mark.kind === "node" ? (
            <span className="block size-1.75 bg-current" />
          ) : (
            <svg viewBox="0 0 16 16" className="size-4 md:size-5">
              <path
                d="M8 0.5v15M0.5 8h15"
                stroke="currentColor"
                strokeWidth="0.9"
              />
            </svg>
          )}
        </div>
      ))}

      <div className="animate-fade animation-delay-800 absolute inset-0">
        {heroSpecks.map((speck) => (
          <span
            key={`speck-${speck.x}-${speck.y}`}
            className="animate-twinkle text-muted-foreground absolute block rounded-full bg-current opacity-40"
            style={{
              left: `${speck.x}%`,
              top: `${speck.y}%`,
              width: `${speck.s}px`,
              height: `${speck.s}px`,
              animationDelay: `-${speck.d}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

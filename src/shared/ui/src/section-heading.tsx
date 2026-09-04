type SectionHeadingProps = {
  index: string;
  title: string;
  meta?: string;
  size?: "md" | "lg";
  className?: string;
};

const titleSizes = {
  md: "text-section-title",
  lg: "text-section-title-lg",
} satisfies Record<NonNullable<SectionHeadingProps["size"]>, string>;

export function SectionHeading({
  index,
  title,
  meta,
  size = "md",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex items-baseline gap-5 ${className}`}>
      <span className="text-muted-foreground font-mono text-xs tracking-ultra-wide">
        {index}
      </span>
      <h2
        className={`font-display font-normal tracking-wider ${titleSizes[size]}`}
      >
        {title}
      </h2>
      <span className="bg-border h-px flex-1" />
      {meta ? (
        <span className="text-muted-foreground font-mono text-xs tracking-extra-wide">
          {meta}
        </span>
      ) : null}
    </div>
  );
}

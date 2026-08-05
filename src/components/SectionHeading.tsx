export function SectionHeading({
  overline,
  title,
  align = "left",
  color = "primary",
  children,
}: {
  overline?: string;
  title: string;
  align?: "left" | "center";
  color?: "primary" | "meat";
  children?: React.ReactNode;
}) {
  const overlineColor = color === "meat" ? "text-meat" : "text-primary";
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {overline && (
        <div className={`overline ${overlineColor} mb-4`}>{overline}</div>
      )}
      <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-text-primary">
        {title}
      </h2>
      {children && (
        <div className="mt-4 text-text-secondary max-w-2xl text-lg leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

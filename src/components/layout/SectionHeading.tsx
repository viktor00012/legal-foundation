import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({ title, subtitle, align = "center", className }: SectionHeadingProps) => (
  <div className={cn("mb-12", align === "center" && "text-center", className)}>
    <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
    {subtitle && <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg" style={align === "center" ? { margin: "1rem auto 0" } : undefined}>{subtitle}</p>}
  </div>
);

export default SectionHeading;

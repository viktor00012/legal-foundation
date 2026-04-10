import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted";
}

const SectionWrapper = ({ children, className, id, variant = "default" }: SectionWrapperProps) => (
  <section id={id} className={cn("py-16 md:py-24", variant === "muted" && "bg-muted", className)}>
    <div className="container">{children}</div>
  </section>
);

export default SectionWrapper;

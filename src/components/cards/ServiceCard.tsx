import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => (
  <article className={cn("group rounded-lg border bg-card p-8 transition-shadow hover:shadow-md", className)}>
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
  </article>
);

export default ServiceCard;

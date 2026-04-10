import { cn } from "@/lib/utils";

interface LawyerCardProps {
  name: string;
  specialization: string;
  image: string;
  className?: string;
}

const LawyerCard = ({ name, specialization, image, className }: LawyerCardProps) => (
  <article className={cn("group overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-md", className)}>
    <div className="aspect-[3/4] overflow-hidden bg-muted">
      <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
    </div>
    <div className="p-5">
      <h3 className="font-semibold">{name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{specialization}</p>
    </div>
  </article>
);

export default LawyerCard;

import victoriaImg from "@/assets/lawyer-victoria.jpg";
import jamesImg from "@/assets/lawyer-james.jpg";
import elenaImg from "@/assets/lawyer-elena.jpg";

export interface LawyerData {
  id: string;
  name: string;
  specialization: string;
  image: string;
  slug: string;
  bio: string;
  education: string;
  experience: string;
}

export const lawyers: LawyerData[] = [
  {
    id: "1",
    name: "Victoria Hargrove",
    specialization: "Criminal Defense",
    image: victoriaImg,
    slug: "victoria-hargrove",
    bio: "Victoria has defended clients in over 500 criminal cases, earning a reputation for meticulous preparation and courtroom excellence.",
    education: "J.D., Harvard Law School",
    experience: "15+ years in criminal defense",
  },
  {
    id: "2",
    name: "James Whitfield",
    specialization: "Civil Litigation",
    image: jamesImg,
    slug: "james-whitfield",
    bio: "James specializes in complex civil disputes, bringing analytical rigor and strategic thinking to every case.",
    education: "J.D., Yale Law School",
    experience: "12+ years in civil litigation",
  },
  {
    id: "3",
    name: "Elena Marchetti",
    specialization: "Corporate & Arbitration",
    image: elenaImg,
    slug: "elena-marchetti",
    bio: "Elena advises multinational corporations on dispute resolution and has represented clients in international arbitration proceedings.",
    education: "LL.M., Columbia Law School",
    experience: "10+ years in corporate law",
  },
];

export const getLawyerBySlug = (slug: string) => lawyers.find((l) => l.slug === slug);

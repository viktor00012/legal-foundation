import PageLayout from "@/components/layout/PageLayout";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import { Link } from "react-router-dom";

interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

const articles: ArticleItem[] = [
  { id: "1", title: "Understanding Your Rights During a Criminal Investigation", excerpt: "Learn what steps to take and what rights you have when facing a criminal investigation.", date: "2026-03-15", slug: "rights-during-investigation" },
  { id: "2", title: "Key Changes in Civil Litigation for 2026", excerpt: "An overview of the most important regulatory changes affecting civil cases this year.", date: "2026-02-20", slug: "civil-litigation-2026" },
  { id: "3", title: "When to Choose Arbitration Over Court", excerpt: "A practical guide to deciding the best dispute resolution path for your situation.", date: "2026-01-10", slug: "arbitration-vs-court" },
];

const ArticlesPage = () => (
  <PageLayout>
    <SectionWrapper>
      <SectionHeading title="Articles & Insights" subtitle="Stay informed with legal insights from our team." />
      <div className="grid gap-6 md:grid-cols-3">
        {articles.map((a) => (
          <article key={a.id} className="group rounded-lg border bg-card p-6 transition-shadow hover:shadow-md">
            <time className="text-xs text-muted-foreground">{new Date(a.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            <h3 className="mt-2 font-semibold leading-snug">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
            <Link to={`/articles/${a.slug}`} className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </SectionWrapper>
  </PageLayout>
);

export default ArticlesPage;

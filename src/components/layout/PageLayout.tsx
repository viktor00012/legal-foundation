import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { getContact } from '@/lib/cms';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const contact = getContact();

  return (
    <>
      <SiteHeader contact={contact} />
      <main>{children}</main>
      <SiteFooter contact={contact} />
      <FloatingButtons contact={contact} />
    </>
  );
}

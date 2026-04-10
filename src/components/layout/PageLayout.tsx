import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import MobileStickyBar from "./MobileStickyBar";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <SiteHeader />
    <main className="flex-1">{children}</main>
    <SiteFooter />
    <MobileStickyBar />
  </div>
);

export default PageLayout;

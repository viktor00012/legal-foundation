import { getHome, getContact } from '@/lib/cms';
import QRModal from '@/components/QRModal';


interface CTASectionProps {
  data?: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
}

export default async function CTASection({ data }: CTASectionProps) {
  const ctaData = data || (await getHome()).cta;
  const contact = await getContact();

  return (
    <section className="cta-section">
      <div className="container">
        <h2>{ctaData.title}</h2>
        <p>{ctaData.subtitle}</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <QRModal qrSrc="/max.PNG" triggerLabel={ctaData.ctaText} isPrimary={true} />
        </div>
      </div>
    </section>
  );
}

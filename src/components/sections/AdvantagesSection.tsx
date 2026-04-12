interface AdvantagesSectionProps {
  data: {
    heading: string;
    subheading: string;
    items: { id?: string; icon: string; title: string; desc: string }[];
  };
}

export default function AdvantagesSection({ data }: AdvantagesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AwardIcon': return <AwardIcon />;
      case 'UsersIcon': return <UsersIcon />;
      case 'ClockIcon': return <ClockIcon />;
      case 'ShieldIcon': return <ShieldIcon />;
      default: return null;
    }
  };

  return (
    <section className="section section--muted">
      <div className="container">
        <div className="section-heading">
          <h2>{data.heading}</h2>
          <p>{data.subheading}</p>
        </div>
        <div className="grid-4">
          {data.items.map((item, idx) => (
            <div key={item.id || idx} className="advantage-item">
              <div className="advantage-icon">{getIcon(item.icon)}</div>
              <h3 className="advantage-title">{item.title}</h3>
              <p className="advantage-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

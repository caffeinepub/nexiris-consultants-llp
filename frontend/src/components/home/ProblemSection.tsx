import { AlertTriangle, Globe, FileX } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const risks = [
  {
    icon: AlertTriangle,
    title: 'Counterparty Risk',
    description:
      'Unverified Indian exporters and trading partners expose your business to fraud, non-delivery, and financial loss. Independent counterparty risk assessment is essential before committing to cross-border transactions.',
  },
  {
    icon: Globe,
    title: 'Regulatory Exposure',
    description:
      'Evolving international trade regulations and India-specific compliance requirements create gaps that can result in penalties, delays, and reputational damage for importers worldwide.',
  },
  {
    icon: FileX,
    title: 'Documentation Failures',
    description:
      'Inaccurate or fraudulent trade documents from unverified suppliers undermine deal integrity and create costly disputes at customs and settlement — a risk that thorough trade due diligence eliminates.',
  },
];

function RiskCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: string;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`scroll-animate ${delay} ${isVisible ? 'is-visible' : ''} hover-float`}
    >
      <div className="bg-white border border-brand-mintyBlue/15 rounded-lg p-6 h-full shadow-card hover:shadow-card-hover transition-shadow">
        <div className="w-10 h-10 rounded-md bg-brand-frostGray flex items-center justify-center mb-4">
          <Icon size={20} className="text-brand-mintyBlue" />
        </div>
        <h3 className="font-heading font-semibold text-brand-dark text-lg mb-3">{title}</h3>
        <p className="text-brand-dark/60 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function ProblemSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="problem" className="py-20 bg-brand-frostWhite" aria-labelledby="problem-heading">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={titleRef}
          className={`scroll-animate text-center mb-12 ${titleVisible ? 'is-visible' : ''}`}
        >
          <h2 id="problem-heading" className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
            The Risks of Unverified Trade
          </h2>
          <p className="text-brand-dark/60 text-base max-w-xl mx-auto">
            Import risk management starts with knowing who you're dealing with. Without independent
            supplier verification, businesses operate blind in complex, high-stakes environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {risks.map((risk, i) => (
            <RiskCard
              key={risk.title}
              {...risk}
              delay={`stagger-${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AlertTriangle, TrendingDown, Globe } from 'lucide-react';

const risks = [
  {
    icon: AlertTriangle,
    tag: 'Fraud Risk',
    title: 'Unverified Counterparties',
    description:
      "Fraudulent trade partners cost global businesses over $42 billion annually. Without independent verification, you're relying on self-reported credentials.",
  },
  {
    icon: TrendingDown,
    tag: 'Financial Exposure',
    title: 'Capital at Risk',
    description:
      'Letters of credit, advance payments, and open account terms expose your capital to counterparties whose financial health you cannot independently assess.',
  },
  {
    icon: Globe,
    tag: 'Compliance',
    title: 'Regulatory Blind Spots',
    description:
      "Sanctions violations, AML exposure, and regulatory non-compliance can result from trading with parties you haven't properly screened.",
  },
];

export default function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-nexiris-darker relative">
      <div className="absolute inset-0 bg-gradient-to-b from-nexiris-dark/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-nexiris-lighter mb-4">
            The Risk You Cannot Afford to Ignore
          </h2>
          <p className="text-nexiris-light text-lg max-w-2xl mx-auto">
            International trade is built on trust — but trust without verification is just hope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {risks.map((risk, i) => {
            const Icon = risk.icon;
            return (
              <div
                key={risk.tag}
                className={`scroll-animate ${isVisible ? 'visible' : ''} hover-float`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="bg-nexiris-navy border border-nexiris-slate/50 rounded-2xl p-8 h-full shadow-dark-lg">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <span className="inline-block text-xs font-montserrat font-semibold text-gold-400 tracking-widest uppercase bg-gold-400/10 rounded-full px-3 py-1 mb-4">
                    {risk.tag}
                  </span>
                  <h3 className="font-montserrat font-bold text-xl text-nexiris-lighter mb-3">
                    {risk.title}
                  </h3>
                  <p className="text-nexiris-light text-sm leading-relaxed">
                    {risk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

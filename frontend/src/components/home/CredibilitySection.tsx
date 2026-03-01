import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

const metrics = [
  { end: 500, suffix: '+', label: 'Reports Delivered', description: 'Across 40+ countries and jurisdictions' },
  { end: 98, suffix: '%', label: 'Client Retention', description: 'Industry-leading satisfaction rate' },
  { end: 42, suffix: 'B+', label: 'USD Trade Value Screened', description: 'In cross-border transactions' },
];

function MetricCard({ metric, trigger }: { metric: typeof metrics[0]; trigger: boolean }) {
  const count = useCountUp({ end: metric.end, duration: 2000, trigger });

  return (
    <div className="bg-nexiris-navy border border-nexiris-slate/50 rounded-2xl p-8 text-center shadow-dark-lg hover-float">
      <div className="font-montserrat font-black text-5xl gradient-text mb-2">
        {count}{metric.suffix}
      </div>
      <div className="font-montserrat font-bold text-lg text-nexiris-lighter mb-2">
        {metric.label}
      </div>
      <div className="text-nexiris-light text-sm">
        {metric.description}
      </div>
    </div>
  );
}

export default function CredibilitySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-nexiris-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-nexiris-lighter mb-4">
            Trusted by{' '}
            <span className="gradient-text">Global Traders</span>
          </h2>
          <p className="text-nexiris-light text-lg max-w-2xl mx-auto">
            Our track record speaks for itself — consistent, reliable intelligence for the world's most demanding trade environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`scroll-animate ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <MetricCard metric={metric} trigger={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

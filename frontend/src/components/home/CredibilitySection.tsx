import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';

const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience', isNumber: true },
  { value: 2400, suffix: '+', label: 'Verifications Completed', isNumber: true },
  { value: 100, suffix: '%', label: 'Independent & Unbiased', isNumber: true },
];

function StatItem({
  value,
  suffix,
  label,
  triggered,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  triggered: boolean;
  delay: string;
}) {
  const count = useCountUp({ end: value, duration: 1800, trigger: triggered });

  return (
    <div className={`scroll-animate ${delay} text-center`}>
      <div className="font-heading font-bold text-4xl md:text-5xl text-brand-mintyBlue mb-2">
        {count}{suffix}
      </div>
      <div className="text-brand-dark/60 text-sm font-medium">{label}</div>
    </div>
  );
}

export default function CredibilitySection() {
  const { ref, isVisible } = useScrollAnimation();
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (isVisible && !triggered) {
      setTriggered(true);
    }
  }, [isVisible, triggered]);

  return (
    <section className="py-20 bg-brand-frostWhite">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`scroll-animate ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
              Trusted by Global Traders
            </h2>
            <p className="text-brand-dark/60 text-base max-w-xl mx-auto">
              Over a decade of independent verification expertise, serving businesses across six continents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                triggered={triggered}
                delay={`stagger-${i + 1}`}
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-brand-dark/40 text-sm italic max-w-lg mx-auto">
              "Nexiris provides the independent verification layer that modern global trade demands."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

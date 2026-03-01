import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnnualProgramSectionProps {
  onEnquire: () => void;
}

export default function AnnualProgramSection({ onEnquire }: AnnualProgramSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-nexiris-darker relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-nexiris-lighter mb-4">
            Choose Your{' '}
            <span className="gradient-text">Intelligence Plan</span>
          </h2>
          <p className="text-nexiris-light text-lg max-w-2xl mx-auto">
            From single reports to comprehensive annual programs — intelligence scaled to your trade volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Single Report */}
          <div
            className={`scroll-animate ${isVisible ? 'visible' : ''} hover-float`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="bg-nexiris-navy border border-nexiris-slate/50 rounded-2xl p-8 h-full shadow-dark-lg">
              <h3 className="font-montserrat font-bold text-2xl text-nexiris-lighter mb-2">
                Single Report
              </h3>
              <p className="text-nexiris-light text-sm mb-6">
                Perfect for one-time due diligence on a new trade partner.
              </p>
              <div className="mb-6">
                <span className="font-montserrat font-black text-4xl gradient-text">
                  Custom
                </span>
                <span className="text-nexiris-light text-sm ml-2">pricing</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Full Trade Trust Score™',
                  'Comprehensive background report',
                  'Regulatory screening',
                  '5-day delivery',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-nexiris-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={onEnquire}
                className="glass-btn w-full py-3 rounded-xl font-montserrat font-semibold text-sm"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Annual Program */}
          <div
            className={`scroll-animate ${isVisible ? 'visible' : ''} hover-float`}
            style={{ transitionDelay: '120ms' }}
          >
            <div className="bg-nexiris-navy border border-gold-400/40 rounded-2xl p-8 h-full shadow-gold-glow relative overflow-hidden">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent pointer-events-none rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-montserrat font-bold text-2xl text-nexiris-lighter">
                    Annual Program
                  </h3>
                  <span className="text-xs font-montserrat font-semibold text-nexiris-dark bg-gold-400 rounded-full px-3 py-1">
                    Most Popular
                  </span>
                </div>
                <p className="text-nexiris-light text-sm mb-6">
                  Ongoing intelligence for active traders with multiple partners.
                </p>
                <div className="mb-6">
                  <span className="font-montserrat font-black text-4xl gradient-text">
                    Custom
                  </span>
                  <span className="text-nexiris-light text-sm ml-2">annual pricing</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Unlimited Trade Trust Scores™',
                    'Priority 3-day delivery',
                    'Dedicated analyst',
                    'Quarterly market briefings',
                    'API access available',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-nexiris-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onEnquire}
                  className="glass-btn-primary w-full py-3 rounded-xl font-montserrat font-bold text-sm"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const scoreFactors = [
  { label: 'Financial Stability', value: 88 },
  { label: 'Regulatory Compliance', value: 94 },
  { label: 'Trade History', value: 76 },
  { label: 'Counterparty Network', value: 82 },
  { label: 'Documentation Integrity', value: 91 },
];

export default function TradeScoreSection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-nexiris-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-nexiris-navy/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Score display */}
          <div
            ref={leftRef}
            className={`scroll-animate-left ${leftVisible ? 'visible' : ''}`}
          >
            <div className="bg-nexiris-navy border border-nexiris-slate/50 rounded-2xl p-10 shadow-dark-lg">
              <div className="text-center mb-8">
                <div className="font-montserrat font-black text-8xl gradient-text leading-none mb-2">
                  86
                </div>
                <div className="font-montserrat font-bold text-xl text-nexiris-lighter mb-1">
                  Trade Trust Score™
                </div>
                <div className="text-nexiris-light text-sm">
                  Sample Report — Acme Trading Co.
                </div>
              </div>

              {/* Score factors */}
              <div className="space-y-4">
                {scoreFactors.map((factor) => (
                  <div key={factor.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-nexiris-light font-inter">{factor.label}</span>
                      <span className="text-gold-400 font-montserrat font-semibold">
                        {factor.value}
                      </span>
                    </div>
                    <div className="h-2 bg-nexiris-slate/40 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-1000"
                        style={{ width: leftVisible ? `${factor.value}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div
            ref={rightRef}
            className={`scroll-animate-right ${rightVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 bg-nexiris-navy border border-gold-400/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-gold-400" />
              <span className="font-montserrat text-xs font-semibold text-gold-400 tracking-widest uppercase">
                Proprietary Methodology
              </span>
            </div>

            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-nexiris-lighter mb-6 leading-tight">
              The Trade Trust{' '}
              <span className="gradient-text">Score™</span>
            </h2>

            <p className="text-nexiris-light text-lg leading-relaxed mb-6">
              Our proprietary scoring model synthesizes financial data, regulatory records, trade history, and network analysis into a single, actionable intelligence score.
            </p>

            <p className="text-nexiris-light text-lg leading-relaxed mb-8">
              Unlike generic credit scores, the Trade Trust Score™ is purpose-built for cross-border commerce — accounting for jurisdictional risk, documentation integrity, and counterparty network quality.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                '50+ data sources',
                'Real-time verification',
                'Jurisdictional analysis',
                'Network mapping',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                  <span className="text-nexiris-light text-sm font-inter">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

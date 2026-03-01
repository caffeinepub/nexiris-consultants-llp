import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useModal } from '@/App';
import { Shield, Eye, Globe, Target } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Independence',
    description:
      'We have no financial relationships with the entities we assess. Our analysts operate under strict conflict-of-interest policies, ensuring every score reflects objective intelligence — not commercial incentives.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'Every Trade Trust Score comes with a full factor breakdown. You see exactly what drove the score, which data sources were consulted, and where uncertainty exists. No black boxes.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'With coverage across 40+ countries and partnerships with regional intelligence networks, we provide consistent, reliable assessments regardless of jurisdiction or trade corridor.',
  },
  {
    icon: Target,
    title: 'Precision',
    description:
      'Our methodology is purpose-built for trade intelligence — not adapted from consumer credit models. Every data point, weighting, and algorithm is calibrated for cross-border commercial risk.',
  },
];

export default function OurLegacy() {
  const { openModal } = useModal();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-nexiris-dark">
      {/* Hero */}
      <section className="pt-32 pb-24 bg-nexiris-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 via-transparent to-nexiris-navy/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div
            ref={heroRef}
            className={`scroll-animate ${heroVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 bg-nexiris-navy border border-gold-400/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-gold-400" />
              <span className="font-montserrat text-xs font-semibold text-gold-400 tracking-widest uppercase">
                Our Story
              </span>
            </div>
            <h1 className="font-montserrat font-black text-5xl md:text-6xl text-nexiris-lighter mb-6 leading-tight">
              Built on a Foundation of{' '}
              <span className="gradient-text">Trust</span>
            </h1>
            <p className="text-nexiris-light text-xl leading-relaxed max-w-3xl mx-auto">
              Nexiris Global was founded by trade finance professionals who witnessed firsthand the damage caused by inadequate counterparty due diligence. We built the intelligence infrastructure we wished had existed.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-nexiris-dark relative">
        <div className="max-w-4xl mx-auto px-6">
          <div
            ref={storyRef}
            className={`scroll-animate ${storyVisible ? 'visible' : ''}`}
          >
            <div className="bg-nexiris-navy border border-nexiris-slate/50 rounded-2xl p-10 shadow-dark-lg">
              <h2 className="font-montserrat font-black text-3xl text-nexiris-lighter mb-6">
                The Problem We Set Out to Solve
              </h2>
              <div className="space-y-4 text-nexiris-light leading-relaxed">
                <p>
                  International trade operates on trust — but trust without verification is a liability. For decades, importers and exporters have relied on informal networks, self-reported credentials, and generic credit scores to assess counterparties. The results have been predictably costly.
                </p>
                <p>
                  Nexiris Global was established to fill this gap. Drawing on deep expertise in trade finance, regulatory compliance, and data intelligence, our founding team built a methodology specifically designed for the complexities of cross-border commerce.
                </p>
                <p>
                  Today, we serve importers, exporters, banks, and trade finance institutions across 40+ countries — providing the independent intelligence they need to trade with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 bg-nexiris-darker relative">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={pillarsRef}
            className={`text-center mb-16 scroll-animate ${pillarsVisible ? 'visible' : ''}`}
          >
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-nexiris-lighter mb-4">
              Our Core{' '}
              <span className="gradient-text">Pillars</span>
            </h2>
            <p className="text-nexiris-light text-lg max-w-2xl mx-auto">
              Four principles that guide every report, every score, and every client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`scroll-animate ${pillarsVisible ? 'visible' : ''} hover-float`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="bg-nexiris-navy border border-nexiris-slate/50 rounded-2xl p-8 h-full shadow-dark-lg">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-nexiris-lighter mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-nexiris-light text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-nexiris-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={statsRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 scroll-animate ${statsVisible ? 'visible' : ''}`}
          >
            {[
              { value: '500+', label: 'Reports Delivered', sub: 'Since inception' },
              { value: '40+', label: 'Countries Covered', sub: 'Active trade corridors' },
              { value: '$42B+', label: 'Trade Value Screened', sub: 'In cross-border transactions' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="bg-nexiris-navy border border-nexiris-slate/50 rounded-2xl p-8 text-center shadow-dark-lg hover-float"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="font-montserrat font-black text-5xl gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="font-montserrat font-bold text-lg text-nexiris-lighter mb-1">
                  {stat.label}
                </div>
                <div className="text-nexiris-light text-sm">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-nexiris-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 via-transparent to-nexiris-navy/30 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div
            ref={ctaRef}
            className={`scroll-animate ${ctaVisible ? 'visible' : ''}`}
          >
            <div className="bg-nexiris-navy border border-gold-400/30 rounded-3xl p-12 shadow-gold-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent pointer-events-none rounded-3xl" />
              <div className="relative z-10">
                <h2 className="font-montserrat font-black text-4xl text-nexiris-lighter mb-6">
                  Experience the{' '}
                  <span className="gradient-text">Nexiris Difference</span>
                </h2>
                <p className="text-nexiris-light text-lg mb-8 leading-relaxed">
                  Independent intelligence. Objective scoring. Actionable insights. Request your first Trade Trust Score today.
                </p>
                <button
                  onClick={openModal}
                  className="glass-btn-primary px-10 py-4 text-base rounded-xl font-montserrat font-bold"
                >
                  Request a Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

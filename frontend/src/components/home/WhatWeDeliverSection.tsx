import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle } from 'lucide-react';

const deliverables = [
  'Comprehensive counterparty background report',
  'Trade Trust Score™ with factor breakdown',
  'Regulatory & sanctions screening',
  'Financial health assessment',
  'Trade history & pattern analysis',
  'Counterparty network mapping',
  'Documentation integrity review',
  'Executive summary with recommendations',
];

export default function WhatWeDeliverSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-nexiris-darker relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-nexiris-lighter mb-4">
              What We{' '}
              <span className="gradient-text">Deliver</span>
            </h2>
            <p className="text-nexiris-light text-lg max-w-2xl mx-auto">
              Every Trade Trust Score™ report includes a comprehensive intelligence package designed for decision-makers.
            </p>
          </div>

          <div className="bg-nexiris-navy border border-nexiris-slate/50 rounded-2xl p-10 shadow-dark-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deliverables.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-start gap-4 p-4 bg-nexiris-dark/60 border border-nexiris-slate/30 rounded-xl scroll-animate ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-nexiris-lighter text-sm font-inter leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

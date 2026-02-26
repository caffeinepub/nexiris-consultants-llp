import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Check } from 'lucide-react';

const deliverables = [
  {
    title: 'Entity Verification',
    description: 'Comprehensive MCA verification of counterparty legal status, ownership, and registration in India.',
  },
  {
    title: 'Compliance Screening',
    description: 'Sanctions, PEP, and watchlist screening against global and Indian regulatory databases.',
  },
  {
    title: 'Document Authentication',
    description: 'Validation of trade documents including invoices, bills of lading, and export certificates.',
  },
  {
    title: 'Financial Due Diligence',
    description: 'Assessment of counterparty financial health and creditworthiness indicators for informed sourcing decisions.',
  },
  {
    title: 'Trade Route Analysis',
    description: 'Mapping and risk assessment of supply chain routes, transit jurisdictions, and logistics partners.',
  },
  {
    title: 'Regulatory Compliance Review',
    description: 'Review of applicable Indian export regulations, tariffs, and import/export requirements for your trade route.',
  },
  {
    title: 'Trade Trust Score™',
    description: 'Proprietary composite risk score synthesising all verification dimensions into a single actionable metric.',
  },
  {
    title: 'Executive Summary Report',
    description: 'Clear, actionable findings from our OSINT trade research presented in a structured professional report.',
  },
];

export default function WhatWeDeliverSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation();

  return (
    <section id="what-we-deliver" className="py-20 bg-white" aria-labelledby="deliver-heading">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={titleRef}
          className={`scroll-animate text-center mb-12 ${titleVisible ? 'is-visible' : ''}`}
        >
          <h2 id="deliver-heading" className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
            What We Deliver
          </h2>
          <p className="text-brand-dark/60 text-base max-w-xl mx-auto">
            Every Nexiris Indian exporter verification report covers eight critical dimensions of
            supplier due diligence, delivered within 3–5 business days.
          </p>
        </div>

        <div
          ref={listRef}
          className={`scroll-animate ${listVisible ? 'is-visible' : ''}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            {deliverables.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-brand-frostGray flex items-center justify-center">
                  <Check size={12} className="text-brand-mintyBlue" strokeWidth={3} />
                </div>
                <div>
                  <span className="font-semibold text-brand-dark text-sm">{item.title}</span>
                  <p className="text-brand-dark/55 text-sm mt-0.5 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-brand-mintyBlue/15 text-center">
            <p className="text-brand-dark/50 text-sm">
              Delivery within{' '}
              <span className="font-semibold text-brand-mintyBlue">3–5 business days</span>
              {' '}· Available for single transactions or annual subscription
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

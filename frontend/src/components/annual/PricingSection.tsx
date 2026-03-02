import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  onEnquire: () => void;
}

const singleFeatures = [
  'Full 8-dimension verification',
  'Trade Trust Score™',
  'Executive summary report',
  'Delivered in 3–5 business days',
  'Valid for 12 months',
];

const annualFeatures = [
  'Up to 10 verifications per year',
  'Priority 48-hour turnaround',
  'Dedicated account manager',
  'Quarterly compliance briefings',
  'Custom reporting templates',
  'API access for integrations',
];

export default function PricingSection({ onEnquire }: PricingSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-brand-frostWhite" aria-labelledby="pricing-heading">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={titleRef}
          className={`scroll-animate text-center mb-14 ${titleVisible ? 'is-visible' : ''}`}
        >
          <h1 id="pricing-heading" className="font-heading font-bold text-4xl md:text-5xl text-brand-dark mb-4">
            Pricing
          </h1>
          <p className="text-brand-dark/60 text-lg max-w-xl mx-auto">
            Transparent, straightforward pricing for independent Indian exporter verification and trade due diligence.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`scroll-animate ${cardsVisible ? 'is-visible' : ''} grid grid-cols-1 md:grid-cols-2 gap-8`}
        >
          {/* Single Report */}
          <div className="bg-white border border-brand-mintyBlue/20 rounded-lg p-8 hover-float shadow-card hover:shadow-card-hover transition-shadow">
            <div className="mb-6">
              <h2 className="font-heading font-bold text-2xl text-brand-dark mb-1">Single Report</h2>
              <p className="text-brand-dark/50 text-sm">One-time trade verification</p>
            </div>
            <div className="mb-6">
              <span className="font-heading font-bold text-5xl text-brand-dark">$649</span>
              <span className="text-brand-dark/40 text-sm ml-2">per report</span>
            </div>
            <ul className="space-y-3 mb-8">
              {singleFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-brand-dark/70">
                  <Check size={15} className="text-brand-mintyBlue shrink-0" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={onEnquire}
              className="w-full border border-brand-mintyBlue text-brand-mintyBlue font-semibold py-3.5 rounded-md hover:bg-brand-frostGray transition-colors text-sm"
            >
              Request Single Report
            </button>
          </div>

          {/* Annual Program */}
          <div className="bg-brand-dark rounded-lg p-8 hover-float shadow-card-hover relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-brand-mintyBlue text-white text-xs font-semibold px-3 py-1 rounded-full">
              Best Value
            </div>
            <div className="mb-6">
              <h2 className="font-heading font-bold text-2xl text-white mb-1">Annual Program</h2>
              <p className="text-white/50 text-sm">Ongoing trade intelligence</p>
            </div>
            <div className="mb-6">
              <span className="font-heading font-bold text-5xl text-brand-mintyBlue">$5,499</span>
              <span className="text-white/40 text-sm ml-2">per year</span>
            </div>
            <ul className="space-y-3 mb-8">
              {annualFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/75">
                  <Check size={15} className="text-brand-mintyBlue shrink-0" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={onEnquire}
              className="w-full bg-brand-mintyBlue text-white font-semibold py-3.5 rounded-md hover:bg-brand-mintyDark transition-colors text-sm shadow-minty"
            >
              Enquire About Annual Program
            </button>
          </div>
        </div>

        {/* Trust Note */}
        <div className="mt-10 p-6 bg-white border border-brand-mintyBlue/15 rounded-lg text-center shadow-card">
          <p className="text-brand-dark/60 text-sm leading-relaxed">
            All reports are delivered by experienced trade verification specialists. Pricing is in USD and excludes applicable taxes.
            Volume discounts available for enterprise clients.{' '}
            <button onClick={onEnquire} className="text-brand-mintyBlue font-semibold hover:underline">
              Contact us
            </button>{' '}
            to discuss your requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

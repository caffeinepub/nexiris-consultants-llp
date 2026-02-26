import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Check } from 'lucide-react';

interface AnnualProgramSectionProps {
  onEnquire: () => void;
}

const singleFeatures = [
  'Full 9-dimension verification',
  'Trade Trust Score™',
  'Executive summary report',
  'Analyst consultation (30 min)',
  'Delivered in 3–5 business days',
  'Valid for 12 months',
];

const annualFeatures = [
  'Up to 10 verifications per year',
  'Priority 48-hour turnaround',
  'Dedicated account manager',
  'Quarterly compliance briefings',
  'Unlimited analyst consultations',
  'Custom reporting templates',
  'API access for integrations',
];

export default function AnnualProgramSection({ onEnquire }: AnnualProgramSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="annual-program" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={titleRef}
          className={`scroll-animate text-center mb-12 ${titleVisible ? 'is-visible' : ''}`}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
            Choose Your Plan
          </h2>
          <p className="text-brand-dark/60 text-base max-w-xl mx-auto">
            Whether you need a single verification or ongoing trade intelligence, we have a plan for you.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`scroll-animate ${cardsVisible ? 'is-visible' : ''} grid grid-cols-1 md:grid-cols-2 gap-6`}
        >
          {/* Single Report */}
          <div className="border border-brand-mintyBlue/20 rounded-lg p-8 hover-float shadow-card hover:shadow-card-hover transition-shadow">
            <div className="mb-6">
              <h3 className="font-heading font-bold text-xl text-brand-dark mb-1">Single Report</h3>
              <p className="text-brand-dark/50 text-sm">One-time trade verification</p>
            </div>
            <div className="mb-6">
              <span className="font-heading font-bold text-4xl text-brand-dark">$649</span>
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
              className="w-full border border-brand-mintyBlue text-brand-mintyBlue font-semibold py-3 rounded-md hover:bg-brand-frostGray transition-colors text-sm"
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
              <h3 className="font-heading font-bold text-xl text-white mb-1">Annual Program</h3>
              <p className="text-white/50 text-sm">Ongoing trade intelligence</p>
            </div>
            <div className="mb-6">
              <span className="font-heading font-bold text-4xl text-brand-mintyBlue">$5,499</span>
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
              className="w-full bg-brand-mintyBlue text-white font-semibold py-3 rounded-md hover:bg-brand-mintyDark transition-colors text-sm shadow-minty"
            >
              Enquire About Annual Program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

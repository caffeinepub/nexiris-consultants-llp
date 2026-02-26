import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Search, FileText, BarChart2, Send } from 'lucide-react';

interface HowItWorksSectionProps {
  onEnquire?: () => void;
}

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Submit Your Request',
    description:
      'Provide the name and details of the trading counterparty you wish to verify. Our team reviews your request and confirms scope within one business day.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Deep-Dive Research',
    description:
      'Our analysts conduct an 8-dimension investigation — covering MCA filings, OSINT trade data, compliance records, and financial health indicators.',
  },
  {
    number: '03',
    icon: BarChart2,
    title: 'Trade Trust Score™',
    description:
      'We synthesise findings into a proprietary Trade Trust Score™ with a detailed breakdown across each verification dimension.',
  },
  {
    number: '04',
    icon: Send,
    title: 'Report Delivered',
    description:
      'Receive a comprehensive, executive-ready PDF report within 3–5 business days, valid for 12 months and ready for compliance or board review.',
  },
];

export default function HowItWorksSection({ onEnquire }: HowItWorksSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-br from-brand-dark via-brand-dark to-[oklch(0.22_0.04_200)]"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div
          ref={titleRef}
          className={`scroll-animate text-center mb-16 ${titleVisible ? 'is-visible' : ''}`}
        >
          <span className="inline-block text-brand-mintyBlue font-semibold text-xs uppercase tracking-widest mb-3">
            Our Process
          </span>
          <h2
            id="how-it-works-heading"
            className="font-heading font-bold text-3xl md:text-4xl text-white mb-4"
          >
            How It Works
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            From request to report in four transparent steps — no guesswork, no delays.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className={`scroll-animate ${stepsVisible ? 'is-visible' : ''} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-start p-6 bg-white/5 border border-white/10 rounded-lg hover:border-brand-mintyBlue/40 hover:bg-white/8 transition-all duration-300"
                style={{ transitionDelay: stepsVisible ? `${index * 80}ms` : '0ms' }}
              >
                {/* Step number */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-mintyBlue/15 border border-brand-mintyBlue/30 mb-4">
                  <span className="font-heading font-bold text-sm text-brand-mintyBlue">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <Icon size={22} className="text-brand-mintyBlue mb-3" strokeWidth={1.75} />

                {/* Content */}
                <h3 className="font-heading font-semibold text-base text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>

                {/* Connector arrow (desktop only, not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M2 8h12M10 4l4 4-4 4"
                        stroke="oklch(0.72 0.15 175)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Delivery callout strip */}
        <div
          ref={ctaRef}
          className={`scroll-animate ${ctaVisible ? 'is-visible' : ''} mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-brand-mintyBlue/10 border border-brand-mintyBlue/25 rounded-lg px-8 py-5`}
        >
          <div className="text-center sm:text-left">
            <p className="font-heading font-semibold text-white text-base">
              Typical delivery:{' '}
              <span className="text-brand-mintyBlue">3–5 business days</span>
            </p>
            <p className="text-white/50 text-sm mt-0.5">
              Priority 48-hour turnaround available on the Annual Program.
            </p>
          </div>
          {onEnquire && (
            <button
              onClick={onEnquire}
              className="shrink-0 bg-brand-mintyBlue text-white font-semibold text-sm px-7 py-3 rounded-md hover:bg-brand-mintyDark transition-colors shadow-minty"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

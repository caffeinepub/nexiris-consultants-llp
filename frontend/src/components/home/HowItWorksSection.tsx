import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FileText, Search, BarChart3, Download } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit',
    description: 'Provide the name and jurisdiction of your trade partner. Our team begins the intelligence gathering process immediately.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Research',
    description: 'Our analysts access 50+ proprietary and public data sources across financial, regulatory, and trade databases.',
  },
  {
    icon: BarChart3,
    step: '03',
    title: 'Score',
    description: 'The Trade Trust Score™ algorithm synthesizes all data points into a comprehensive, weighted intelligence score.',
  },
  {
    icon: Download,
    step: '04',
    title: 'Report',
    description: 'Receive your full intelligence report within 5 business days, complete with actionable recommendations.',
  },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-24 bg-nexiris-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-nexiris-lighter mb-4">
            How It{' '}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-nexiris-light text-lg max-w-2xl mx-auto">
            A streamlined four-step process from submission to actionable intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className={`scroll-animate ${isVisible ? 'visible' : ''} hover-float relative`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-gold-400/40 to-transparent z-0 -translate-y-1/2" />
                )}
                <div className="bg-nexiris-navy border border-nexiris-slate/50 rounded-2xl p-8 h-full shadow-dark-lg relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <span className="font-montserrat font-black text-3xl text-nexiris-slate/60">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-nexiris-lighter mb-3">
                    {step.title}
                  </h3>
                  <p className="text-nexiris-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Delivery callout */}
        <div className={`scroll-animate ${isVisible ? 'visible' : ''} text-center`}>
          <div className="inline-block bg-nexiris-navy border border-gold-400/30 rounded-2xl px-10 py-6">
            <p className="font-montserrat font-semibold text-nexiris-lighter text-lg">
              Reports delivered within{' '}
              <span className="gradient-text font-black">5 business days</span>
              {' '}— rush options available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

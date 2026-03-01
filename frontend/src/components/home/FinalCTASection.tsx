import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FinalCTASectionProps {
  onEnquire: () => void;
}

export default function FinalCTASection({ onEnquire }: FinalCTASectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-nexiris-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 via-transparent to-nexiris-navy/30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <div className="bg-nexiris-navy border border-gold-400/30 rounded-3xl p-12 text-center shadow-gold-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent pointer-events-none rounded-3xl" />
            <div className="relative z-10">
              <h2 className="font-montserrat font-black text-4xl md:text-5xl text-nexiris-lighter mb-6 leading-tight">
                Ready to Trade with{' '}
                <span className="gradient-text">Confidence?</span>
              </h2>
              <p className="text-nexiris-light text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of importers, exporters, and financial institutions who rely on Nexiris Global for independent trade intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onEnquire}
                  className="glass-btn-primary px-10 py-4 text-base rounded-xl font-montserrat font-bold"
                >
                  Request Your Report
                </button>
                <a
                  href="/annual-program"
                  className="glass-btn px-10 py-4 text-base rounded-xl font-montserrat font-semibold"
                >
                  View Annual Program
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FinalCTASectionProps {
  onEnquire: () => void;
}

export default function FinalCTASection({ onEnquire }: FinalCTASectionProps) {
  return (
    <section className="py-24 bg-gradient-cta">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
          Ready to Trade with{' '}
          <span className="text-brand-mintyBlue">Confidence?</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Join hundreds of businesses that rely on Nexiris for independent trade verification
          and compliance intelligence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onEnquire}
            className="bg-brand-mintyBlue text-white font-semibold px-10 py-4 rounded-md hover:bg-brand-mintyDark transition-all shadow-minty hover-lift text-base"
          >
            Schedule a Consultation
          </button>
          <a
            href="mailto:info@nexiris.com"
            className="border border-white/30 text-white font-semibold px-10 py-4 rounded-md hover:bg-white/10 transition-all text-base"
          >
            Contact Directly
          </a>
        </div>
      </div>
    </section>
  );
}

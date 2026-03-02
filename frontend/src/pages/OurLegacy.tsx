import { ExternalLink, FileText, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FIRM_PROFILE_PDF =
  'https://www.nexirisconsultants.com/_files/ugd/9b0883_a8ad90d67710468a9bdab66b562c8b7a.pdf';
const NEXIRIS_CONSULTANTS_URL = 'https://www.nexirisconsultants.com';

export default function OurLegacy() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <main className="bg-brand-frostWhite min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative py-28 md:py-36 bg-brand-dark overflow-hidden"
        aria-labelledby="legacy-heading"
      >
        {/* Subtle background accent */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-mintyBlue blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-mintyBlue blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div
          ref={heroRef}
          className={`scroll-animate relative z-10 max-w-4xl mx-auto px-6 text-center ${heroVisible ? 'is-visible' : ''}`}
        >
          <span className="inline-block text-brand-mintyBlue font-semibold text-xs uppercase tracking-widest mb-4">
            Our Heritage
          </span>
          <h1
            id="legacy-heading"
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Our Legacy
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Nexiris Global represents the evolution of a trusted trade intelligence and professional
            advisory platform.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div
          ref={bodyRef}
          className={`scroll-animate max-w-4xl mx-auto px-6 ${bodyVisible ? 'is-visible' : ''}`}
        >
          {/* Heritage Story */}
          <div className="bg-white border border-brand-mintyBlue/15 rounded-lg p-8 md:p-12 shadow-card mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-mintyBlue/15 border border-brand-mintyBlue/30 flex items-center justify-center shrink-0">
                <Globe size={18} className="text-brand-mintyBlue" strokeWidth={1.75} />
              </div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-dark">
                From Nexiris Consultants to Nexiris Global
              </h2>
            </div>

            <div className="space-y-5 text-brand-dark/70 text-base leading-relaxed">
              <p>
                Nexiris Global represents the evolution of a trusted trade intelligence and professional
                advisory platform. Our roots trace back to{' '}
                <strong className="text-brand-dark font-semibold">Nexiris Consultants</strong> — a
                specialist firm that built deep expertise in exporter verification, counterparty risk
                assessment, governance review, and structured trade due diligence. Over more than two
                decades, the firm established a reputation for rigorous, independent analysis — enabling
                international buyers to navigate sourcing environments with clarity and confidence.
              </p>
              <p>
                Through years of structured engagements across industries and jurisdictions, Nexiris
                refined proprietary methodologies and analytical frameworks designed to bring discipline
                and transparency to cross-border trade decisions. The development of the{' '}
                <strong className="text-brand-dark font-semibold">Trade Trust Score™</strong> reflects
                this structured evolution — transforming qualitative verification into measurable,
                decision-support intelligence.
              </p>
              <p>
                Today,{' '}
                <strong className="text-brand-dark font-semibold">Nexiris Global</strong> carries that
                foundation forward as a broader professional services platform — expanding geographic
                reach, strengthening multidisciplinary capability, and integrating advanced analytical
                systems to deliver institutional-grade risk intelligence.
              </p>
              <p>
                Our commitment remains constant: to provide international buyers and procurement teams
                with structured clarity, evidence-based assessment, and strategic insight — enabling
                informed trade decisions grounded in verified information.
              </p>
              <p>
                The name <strong className="text-brand-dark font-semibold">Iris</strong> represents
                clarity of vision and disciplined perspective. In optics, the iris regulates light to
                bring focus and definition. At Nexiris, this principle guides our approach — illuminating
                complexity, structuring uncertainty, and delivering focused insight where risk must be
                understood.
              </p>
              <p>
                Our legacy stands for independence, precision, institutional rigor, and the confidence
                that comes from structured expertise built over time.
              </p>
            </div>
          </div>

          {/* Key Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: '25+ Years',
                description: 'Of trade intelligence expertise carried forward into Nexiris Global.',
              },
              {
                title: '30+ Industries',
                description: 'Served across diverse sectors and global trade routes.',
              },
              {
                title: '180+ Countries',
                description: 'International buyers served across global trade routes.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-brand-mintyBlue/15 rounded-lg p-6 shadow-card text-center"
              >
                <div className="font-heading font-bold text-3xl text-brand-mintyBlue mb-2">
                  {item.title}
                </div>
                <p className="text-brand-dark/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div
          ref={ctaRef}
          className={`scroll-animate max-w-4xl mx-auto px-6 ${ctaVisible ? 'is-visible' : ''}`}
        >
          <div className="bg-white border border-brand-mintyBlue/20 rounded-lg p-8 md:p-12 shadow-card text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-mintyBlue/15 border border-brand-mintyBlue/30 flex items-center justify-center shrink-0">
                <FileText size={18} className="text-brand-mintyBlue" strokeWidth={1.75} />
              </div>
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-dark mb-3">
              Explore Our Firm Profile
            </h2>
            <p className="text-brand-dark/60 text-base leading-relaxed max-w-xl mx-auto mb-8">
              Learn more about our methodology, team, and the full scope of our trade intelligence
              capabilities in our official firm profile document.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA — PDF */}
              <a
                href={FIRM_PROFILE_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-mintyBlue text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-mintyDark transition-colors shadow-minty hover-lift"
                aria-label="View Firm Profile PDF (opens in new tab)"
              >
                <FileText size={16} />
                View Firm Profile
                <ExternalLink size={14} className="opacity-70" />
              </a>

              {/* Secondary CTA — Website */}
              <a
                href={NEXIRIS_CONSULTANTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-brand-mintyBlue text-brand-mintyBlue font-semibold px-8 py-3.5 rounded-md hover:bg-brand-frostGray transition-colors"
                aria-label="Visit Nexiris Consultants website (opens in new tab)"
              >
                <Globe size={16} />
                Visit Nexiris Consultants
                <ExternalLink size={14} className="opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

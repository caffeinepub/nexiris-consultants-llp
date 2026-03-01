import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface HeroSectionProps {
  onEnquire: () => void;
}

export default function HeroSection({ onEnquire }: HeroSectionProps) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-trade-bg.dim_1920x1080.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-nexiris-dark/75" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-nexiris-dark/30 via-transparent to-nexiris-dark/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div
          ref={heroRef}
          className={`scroll-animate ${heroVisible ? 'visible' : ''}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-nexiris-navy border border-gold-400/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="font-montserrat text-xs font-600 text-gold-400 tracking-widest uppercase">
              Independent Trade Intelligence
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-montserrat font-black text-5xl md:text-7xl leading-tight mb-6 text-nexiris-lighter">
            Know Who You're{' '}
            <span className="gradient-text">Trading With</span>
          </h1>

          <p className="text-nexiris-light text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Nexiris Global delivers independent verification and trust scoring for international trade partners — before you commit capital.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={onEnquire}
              className="glass-btn-primary px-8 py-4 text-base rounded-xl font-montserrat font-bold"
            >
              Request a Trade Trust Score™
            </button>
            <a
              href="#how-it-works"
              className="glass-btn px-8 py-4 text-base rounded-xl font-montserrat font-semibold"
            >
              See How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: '500+', label: 'Reports Delivered' },
              { value: '40+', label: 'Countries Covered' },
              { value: '98%', label: 'Client Retention' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-nexiris-navy/80 border border-nexiris-slate/50 rounded-xl px-6 py-4"
              >
                <div className="font-montserrat font-black text-3xl gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-nexiris-light text-sm font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-nexiris-muted">
        <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-nexiris-muted to-transparent" />
      </div>
    </section>
  );
}

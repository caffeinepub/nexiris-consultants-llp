import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onEnquire: () => void;
}

export default function HeroSection({ onEnquire }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById('problem');
    next?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero — Indian Exporter Verification & Counterparty Risk Intelligence"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.pexels.com/download/video/28647987/"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Transparent Overlay — no tint */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Content — left-aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-brand-mintyBlue/20 border border-brand-mintyBlue/40 text-brand-mintyLight text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-mintyBlue inline-block"></span>
            Independent Trade Verification · India
          </div>

          {/* Headline */}
          <h1
            className={`font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 text-left transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Trade Intelligence
            <br />
            <span className="text-brand-mintyBlue">You Can Trust</span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-white/75 text-lg md:text-xl mb-10 leading-relaxed text-left transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Nexiris Global delivers rigorous Indian exporter verification, counterparty risk intelligence,
            and supplier due diligence — empowering international buyers to trade with confidence.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-start mb-16 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={onEnquire}
              className="bg-brand-mintyBlue text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-mintyDark transition-all shadow-minty hover-lift"
            >
              Request a Verification Report
            </button>
            <button
              onClick={() => document.getElementById('what-we-deliver')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/40 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/10 transition-all"
            >
              Explore Services
            </button>
          </div>

          {/* Stats Row */}
          <div
            className={`flex gap-10 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '30+', label: 'Industries Served' },
              { value: '180+', label: 'Countries' },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <div className="font-heading font-bold text-2xl text-brand-mintyBlue">{stat.value}</div>
                <div className="text-white/60 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-brand-mintyBlue transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}

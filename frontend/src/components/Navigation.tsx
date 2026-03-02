import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useModal } from '../App';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnquire = () => {
    setIsMobileMenuOpen(false);
    openModal();
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate({ to: '/' }).then(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-brand-mintyBlue/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/assets/generated/nexiris-logo.png"
              alt="Nexiris Global"
              className="h-9 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const sibling = target.nextElementSibling as HTMLElement;
                if (sibling) sibling.style.display = 'block';
              }}
            />
            <span
              className="font-heading font-bold text-xl hidden"
              style={{ color: isScrolled ? '#3ECFB2' : '#fff' }}
            >
              Nexiris Global
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('what-we-deliver')}
              className={`font-medium text-sm transition-colors hover:text-brand-mintyBlue ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('trade-score')}
              className={`font-medium text-sm transition-colors hover:text-brand-mintyBlue ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              Trade Score
            </button>
            <Link
              to="/annual-program"
              className={`font-medium text-sm transition-colors hover:text-brand-mintyBlue ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/our-legacy"
              className={`font-medium text-sm transition-colors hover:text-brand-mintyBlue ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              Our Legacy
            </Link>
            <button
              onClick={handleEnquire}
              className="bg-brand-mintyBlue text-white font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-brand-mintyDark transition-colors shadow-minty"
            >
              Enquire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-brand-dark hover:bg-brand-frostGray' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brand-mintyBlue/20 pt-4 space-y-1">
            <button
              onClick={() => scrollToSection('what-we-deliver')}
              className="block w-full text-left px-3 py-2.5 text-brand-dark font-medium text-sm rounded-md hover:bg-brand-frostGray transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('trade-score')}
              className="block w-full text-left px-3 py-2.5 text-brand-dark font-medium text-sm rounded-md hover:bg-brand-frostGray transition-colors"
            >
              Trade Score
            </button>
            <Link
              to="/annual-program"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-brand-dark font-medium text-sm rounded-md hover:bg-brand-frostGray transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/our-legacy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-brand-dark font-medium text-sm rounded-md hover:bg-brand-frostGray transition-colors"
            >
              Our Legacy
            </Link>
            <div className="pt-2">
              <button
                onClick={handleEnquire}
                className="w-full bg-brand-mintyBlue text-white font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-mintyDark transition-colors shadow-minty"
              >
                Enquire
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

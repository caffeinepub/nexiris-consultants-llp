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
              alt="Nexiris Global Pvt Ltd"
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
              Nexiris Global Pvt Ltd
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
          <div className="md:hidden mt-4 pb-4 border-t border-brand-mintyBlue/20 bg-white rounded-b-lg shadow-card">
            <div className="flex flex-col gap-1 pt-4 px-2">
              <button
                onClick={() => scrollToSection('what-we-deliver')}
                className="text-left px-4 py-2.5 text-brand-dark font-medium text-sm rounded-md hover:bg-brand-frostGray hover:text-brand-mintyBlue transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('trade-score')}
                className="text-left px-4 py-2.5 text-brand-dark font-medium text-sm rounded-md hover:bg-brand-frostGray hover:text-brand-mintyBlue transition-colors"
              >
                Trade Score
              </button>
              <Link
                to="/annual-program"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 text-brand-dark font-medium text-sm rounded-md hover:bg-brand-frostGray hover:text-brand-mintyBlue transition-colors"
              >
                Pricing
              </Link>
              <button
                onClick={handleEnquire}
                className="mt-2 mx-2 bg-brand-mintyBlue text-white font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-brand-mintyDark transition-colors"
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

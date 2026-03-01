import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onEnquire: () => void;
}

export default function Navigation({ onEnquire }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'Trade Score', href: '/#trade-score' },
    { label: 'Pricing', href: '/annual-program' },
    { label: 'Our Legacy', href: '/our-legacy' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate({ to: '/' }).then(() => {
          setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav-scrolled' : 'glass-nav'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/assets/Nexiris Logo_page-0001.jpg"
                alt="Nexiris Global"
                className="h-10 w-auto rounded-sm opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="font-heading font-bold text-lg text-gold-light tracking-wide hidden sm:block">
              Nexiris Global
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith('/#') ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onEnquire}
              className="hidden sm:inline-flex glass-btn px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
            >
              Enquire Now
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg glass-card text-foreground/80 hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-panel-strong border-t border-gold/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) =>
              link.href.startsWith('/#') ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-foreground/80 hover:text-gold hover:bg-gold/5 transition-all"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-foreground/80 hover:text-gold hover:bg-gold/5 transition-all"
                >
                  {link.label}
                </Link>
              )
            )}
            <button
              onClick={() => { setIsMobileMenuOpen(false); onEnquire(); }}
              className="mt-2 glass-btn-primary px-5 py-3 rounded-xl text-sm font-semibold text-center"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

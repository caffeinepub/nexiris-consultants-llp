import { Link } from '@tanstack/react-router';
import { Mail, MapPin, Heart } from 'lucide-react';
import { useModal } from '../App';

export default function Footer() {
  const { openModal } = useModal();
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(window.location.hostname || 'nexiris');

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <div className="mb-5">
              <img
                src="/assets/generated/nexiris-logo.png"
                alt="Nexiris Global Pvt Ltd"
                className="h-10 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const sibling = target.nextElementSibling as HTMLElement;
                  if (sibling) sibling.style.display = 'block';
                }}
              />
              <span className="font-heading font-bold text-2xl text-brand-mintyBlue hidden">
                Nexiris Global Pvt Ltd
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Independent trade verification and counterparty risk intelligence for global commerce.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-brand-mintyBlue mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Trade Verification', anchor: 'what-we-deliver' },
                { label: 'Compliance Reports', anchor: 'what-we-deliver' },
                { label: 'Trade Trust Score™', anchor: 'trade-score' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(item.anchor);
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/70 text-sm hover:text-brand-mintyBlue transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/annual-program"
                  className="text-white/70 text-sm hover:text-brand-mintyBlue transition-colors"
                >
                  Annual Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-brand-mintyBlue mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-brand-mintyBlue mt-0.5 shrink-0" />
                <a
                  href="mailto:nexirisconsultants@gmail.com"
                  className="text-white/70 text-sm hover:text-brand-mintyBlue transition-colors break-all"
                >
                  nexirisconsultants@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-mintyBlue mt-0.5 shrink-0" />
                <address className="text-white/70 text-sm not-italic leading-relaxed">
                  Unit no. 419, DLF CORPORATE GREENS,<br />
                  Sector 74A, Gurugram,<br />
                  Haryana 122004
                </address>
              </li>
            </ul>
            <button
              onClick={openModal}
              className="mt-6 bg-brand-mintyBlue text-white font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-brand-mintyDark transition-colors"
            >
              Request Consultation
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/40 text-xs text-center md:text-left">
              <p>© {year} Nexiris Global Pvt Ltd. All rights reserved.</p>
              <p className="mt-1">
                The information provided in our reports is for due diligence purposes only. Nexiris Global Pvt Ltd does not provide legal, financial, or investment advice.
              </p>
            </div>
            <div className="text-white/40 text-xs flex items-center gap-1 shrink-0">
              Built with <Heart size={12} className="text-brand-mintyBlue fill-brand-mintyBlue" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-mintyBlue transition-colors"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

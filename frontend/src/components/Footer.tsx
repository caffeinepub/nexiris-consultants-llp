import { Link } from '@tanstack/react-router';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(window.location.hostname || 'nexiris-global');

  return (
    <footer className="bg-nexiris-darker border-t border-nexiris-slate/40">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/Nexiris Logo_page-0001.jpg"
                alt="Nexiris Global"
                className="h-10 w-auto rounded"
              />
              <div>
                <div className="font-montserrat font-bold text-lg text-nexiris-lighter tracking-wide">
                  NEXIRIS
                </div>
                <div className="font-montserrat text-xs text-gold-400 tracking-widest uppercase">
                  Global
                </div>
              </div>
            </div>
            <p className="text-nexiris-light text-sm leading-relaxed">
              Independent trade intelligence for global commerce. Trusted by importers, exporters, and financial institutions worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-semibold text-nexiris-lighter text-sm tracking-widest uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Trade Trust Score™', href: '/' },
                { label: 'Annual Program', href: '/annual-program' },
                { label: 'Our Legacy', href: '/our-legacy' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-nexiris-light text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold text-nexiris-lighter text-sm tracking-widest uppercase mb-4">
              Contact
            </h4>
            <p className="text-nexiris-light text-sm mb-2">
              For inquiries and partnerships:
            </p>
            <a
              href="mailto:info@nexirisglobal.com"
              className="text-gold-400 text-sm hover:text-gold-300 transition-colors duration-200"
            >
              info@nexirisglobal.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-nexiris-muted">
          <p>© {year} Nexiris Global. All rights reserved.</p>
          <p>
            Built with{' '}
            <span className="text-gold-400">♥</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

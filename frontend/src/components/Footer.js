import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_aerospace-hub-9/artifacts/6en35zx9_ADTS%20-%20LOGO%20FINAL%201%20-%20WHITE%20BG.png';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Careers', path: '/careers' },
];

const solutions = [
  'Structural Assembly',
  'Tooling Solutions',
  'Industry 4.0',
  'Critical Tightening',
  'Crimping Solutions',
  'Tool Storage',
];

export default function Footer() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer data-testid="footer" className="bg-[#1B2A4A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={LOGO_URL} alt="ADTS" className="h-10 object-contain rounded-sm" />
            <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              Your reliable partner for mission-critical aerospace solutions. Trusted by India's premier defence organizations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4FC3F7] mb-5">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={scrollToContact}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4FC3F7] mb-5">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((sol) => (
                <li key={sol}>
                  <span className="text-sm text-white/60">{sol}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4FC3F7] mb-5">Get In Touch</h4>
            <div className="space-y-3 text-sm text-white/60">
              <p>info@aerodart.in</p>
              <p>Bangalore, India</p>
              <a
                href="https://aerodart.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#4FC3F7] hover:text-[#4FC3F7]/80 transition-colors mt-2"
              >
                aerodart.in <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} AeroDart Techno Solutions. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Precision. Quality. Delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}

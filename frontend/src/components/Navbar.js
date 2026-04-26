import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_aerospace-hub-9/artifacts/6en35zx9_ADTS%20-%20LOGO%20FINAL%201%20-%20WHITE%20BG.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/#solutions' },
  { label: 'About Us', path: '/about' },
  { label: 'Careers', path: '/careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (link) => {
    setMobileOpen(false);
    if (link.path === '/#solutions') {
      scrollToSection('solutions');
    } else if (link.path === '/#contact') {
      scrollToSection('contact');
    } else if (link.path === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(link.path);
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

  const isOnHero = !scrolled && location.pathname === '/';

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/60'
          : 'bg-white/5 backdrop-blur-[2px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-2.5 flex-shrink-0">
          <div className={`transition-all duration-300 rounded-md ${!scrolled ? 'bg-white/90 px-2 py-1' : ''}`}>
            <img
              src={LOGO_URL}
              alt="AeroDart Techno Solutions"
              className="h-9 lg:h-10 object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              data-testid={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}-link`}
              onClick={() => handleNavClick(link)}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-[#4FC3F7]'
                  : isOnHero
                  ? 'text-white/90 hover:text-white'
                  : 'text-[#1B2A4A]/70 hover:text-[#1B2A4A]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <Button
            data-testid="nav-contact-btn"
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex bg-[#4FC3F7] text-[#1B2A4A] hover:bg-[#4FC3F7]/85 font-semibold text-sm px-5 py-2 rounded-sm"
          >
            Contact Us
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                data-testid="nav-mobile-toggle"
                className={`md:hidden p-2 rounded-sm ${isOnHero ? 'text-white' : 'text-[#1B2A4A]'}`}
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    data-testid={`nav-mobile-${link.label.toLowerCase().replace(/\s/g, '-')}-link`}
                    onClick={() => handleNavClick(link)}
                    className={`text-left px-4 py-3 text-sm font-medium rounded-sm transition-colors ${
                      isActive(link.path)
                        ? 'text-[#4FC3F7] bg-[#4FC3F7]/5'
                        : 'text-[#1B2A4A] hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-4 px-4">
                  <Button
                    data-testid="nav-mobile-contact-btn"
                    onClick={() => { scrollToSection('contact'); setMobileOpen(false); }}
                    className="w-full bg-[#4FC3F7] text-[#1B2A4A] hover:bg-[#4FC3F7]/85 font-semibold rounded-sm"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

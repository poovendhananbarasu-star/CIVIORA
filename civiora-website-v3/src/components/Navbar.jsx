import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/civiora-logo-full-lockup-transparent.png';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Civiora' },
  { to: '/pathways', label: 'Who We Work With' },
  { to: '/how-it-works', label: 'How We Work' },
  { to: '/why-civiora', label: 'Why Civiora' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-navy-100/70 shadow-[0_2px_12px_rgba(11,42,84,0.04)] ${
        scrolled ? 'py-2' : 'py-2.5 md:py-3'
      }`}
    >
      <nav 
        aria-label="Main Navigation" 
        className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between"
      >
        <Link 
          to="/" 
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg" 
          onClick={() => setOpen(false)}
          aria-label="Civiora Home"
        >
          <img 
            src={logo} 
            alt="CIVIORA" 
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-body text-sm tracking-wide text-navy-800">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative py-1 transition-colors duration-200 hover:text-gold-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-gold-500 after:transition-all after:duration-200 ${
                    isActive
                      ? 'text-gold-700 font-semibold after:w-full'
                      : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Primary CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-navy-800 hover:bg-navy-900 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow hover:shadow-navy-950/20 focus:outline-none focus:ring-2 focus:ring-navy-700 focus:ring-offset-2"
        >
          Discuss an Institutional Partnership
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-navy-800 p-2 rounded-xl hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-gold-400"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/98 backdrop-blur-md shadow-xl ${
          open ? 'max-h-[600px] border-t border-navy-100' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1 font-body text-navy-800">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center min-h-[46px] px-3 rounded-xl text-sm font-medium tracking-wide transition-colors ${
                    isActive 
                      ? 'bg-gold-50 text-gold-800 font-semibold border-l-4 border-gold-500' 
                      : 'hover:bg-navy-50 text-navy-800'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center min-h-[46px] w-full text-center bg-gold-500 hover:bg-gold-400 text-navy-950 text-sm font-semibold tracking-wide px-5 py-3 rounded-full transition-all duration-200 shadow-sm"
            >
              Discuss an Institutional Partnership
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

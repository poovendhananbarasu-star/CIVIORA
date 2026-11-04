import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '../../assets/civiora-logo-full-lockup-transparent.png';

export default function InstitutionalHeader({ onScrollToForm }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setMenuOpen(false);

    let element = document.getElementById(id);

    // Fallback if specific card id is not found
    if (!element && (id === 'school-partnerships' || id === 'campus-partnerships')) {
      element = document.getElementById('challenges');
    }

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const currentScroll = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || 0;
      const targetTop = elementPosition + currentScroll - headerOffset;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth',
      });

      try {
        window.history.pushState(null, '', `#${id}`);
      } catch (_) {}
    }
  };

  const handleCtaClick = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setMenuOpen(false);
    if (onScrollToForm) {
      onScrollToForm();
    } else {
      scrollToSection(e, 'lead-form');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-navy-100 shadow-[0_2px_10px_rgba(11,42,84,0.04)] ${
        scrolled ? 'py-2 sm:py-2.5' : 'py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between gap-4">
        
        {/* Civiora Logo Unchanged */}
        <Link
          to="/institutional-partnership"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg shrink-0"
          aria-label="Civiora Institutional Partnerships"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src={logo}
            alt="CIVIORA"
            decoding="async"
            width="160"
            height="40"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Minimal Section Navigation */}
        <nav aria-label="Landing Page Navigation" className="hidden lg:flex items-center gap-5 xl:gap-7 font-body text-xs xl:text-sm font-medium text-navy-800">
          <a
            href="#school-partnerships"
            onClick={(e) => scrollToSection(e, 'school-partnerships')}
            className="hover:text-gold-600 transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded"
          >
            School Partnerships
          </a>
          <a
            href="#campus-partnerships"
            onClick={(e) => scrollToSection(e, 'campus-partnerships')}
            className="hover:text-gold-600 transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded"
          >
            Campus Partnerships
          </a>
          <a
            href="#solutions"
            onClick={(e) => scrollToSection(e, 'solutions')}
            className="hover:text-gold-600 transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded"
          >
            Solutions
          </a>
          <a
            href="#invitation"
            onClick={(e) => scrollToSection(e, 'invitation')}
            className="hover:text-gold-600 transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded"
          >
            Next Steps
          </a>
        </nav>

        {/* Right CTA Action */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleCtaClick}
            className="btn-primary text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-5 whitespace-nowrap shadow-sm hover:shadow"
          >
            <span>Request a Partnership Discussion</span>
            <ArrowRight size={14} className="hidden sm:inline-block ml-0.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-navy-200 text-navy-900 hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors cursor-pointer"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-navy-100 px-5 py-4 shadow-xl space-y-3 animate-fadeUp">
          <div className="flex flex-col space-y-2 text-sm text-navy-800 font-medium">
            <a
              href="#school-partnerships"
              onClick={(e) => scrollToSection(e, 'school-partnerships')}
              className="text-left py-2 px-3 rounded-lg hover:bg-navy-50 text-navy-900 transition-colors cursor-pointer"
            >
              School Partnerships
            </a>
            <a
              href="#campus-partnerships"
              onClick={(e) => scrollToSection(e, 'campus-partnerships')}
              className="text-left py-2 px-3 rounded-lg hover:bg-navy-50 text-navy-900 transition-colors cursor-pointer"
            >
              Campus Partnerships
            </a>
            <a
              href="#solutions"
              onClick={(e) => scrollToSection(e, 'solutions')}
              className="text-left py-2 px-3 rounded-lg hover:bg-navy-50 text-navy-900 transition-colors cursor-pointer"
            >
              Civiora Solutions
            </a>
            <a
              href="#invitation"
              onClick={(e) => scrollToSection(e, 'invitation')}
              className="text-left py-2 px-3 rounded-lg hover:bg-navy-50 text-navy-900 transition-colors cursor-pointer"
            >
              Next Steps &amp; Invitation
            </a>
          </div>
          <div className="pt-2 border-t border-navy-100">
            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full btn-primary justify-center text-xs py-2.5"
            >
              Request a Partnership Discussion
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

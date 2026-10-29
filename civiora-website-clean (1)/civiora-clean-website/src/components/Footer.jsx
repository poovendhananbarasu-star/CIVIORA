import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube, ExternalLink } from 'lucide-react';
import logo from '../assets/civiora-logo-full-lockup-transparent.png';
import { openCookieBanner } from '../utils/cookieConsent';

function XIcon({ size = 18, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/civiora_official/',
    ariaLabel: 'Follow Civiora on Instagram',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/civiora/',
    ariaLabel: 'Follow Civiora on Facebook',
    icon: Facebook,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/civioraeducation/',
    ariaLabel: 'Follow Civiora on LinkedIn',
    icon: Linkedin,
  },
  {
    name: 'X',
    href: 'https://x.com/civiora_edu',
    ariaLabel: 'Follow Civiora on X',
    icon: XIcon,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@civioraedu',
    ariaLabel: 'Follow Civiora on YouTube',
    icon: Youtube,
  },
];

const FOOTER_NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Civiora', to: '/about' },
  { label: 'Who We Work With', to: '/pathways' },
  { label: 'How We Work', to: '/how-it-works' },
  { label: 'Why Civiora', to: '/why-civiora' },
  { label: 'The Civiora Ecosystem', to: '/ecosystem' },
  { label: 'Founder & Leadership', to: '/founder' },
  { label: 'Academic & Specialist Partners', to: '/network' },
  { label: 'Contact', to: '/contact' },
];

const POLICY_LINKS = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  { label: 'Cancellation & Refund Policy', to: '/cancellation-refund-policy' },
  { label: 'Grievance & Support', to: '/grievance-support' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white pt-14 pb-24 sm:pb-12 border-t border-white/10 font-body">
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12">
          
          {/* Column 1: Logo & Brand Purpose */}
          <div className="md:col-span-5 lg:col-span-5 space-y-4">
            <Link to="/" className="group inline-block focus:outline-none" aria-label="Civiora Home">
              <img 
                src={logo} 
                alt="CIVIORA" 
                className="h-9 sm:h-10 md:h-11 w-auto object-contain brightness-0 invert opacity-95 transition-opacity duration-300 group-hover:opacity-100" 
              />
            </Link>
            
            {/* Approved logo description */}
            <p className="text-xs md:text-sm text-navy-200/90 leading-relaxed max-w-md">
              Civiora partners with educational institutions to strengthen student development and career pathways through tailored planning, specialist expertise and coordinated implementation.
            </p>

            {/* Follow Civiora Social Links */}
            <div className="pt-2 space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-gold-400">
                Follow Civiora
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.ariaLabel}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-navy-200 hover:text-gold-300 hover:border-gold-400/50 hover:bg-gold-500/10 flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                    >
                      <Icon size={18} className="shrink-0" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Explore Civiora — Navigation links */}
          <div className="md:col-span-4 lg:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gold-400">
              Explore Civiora
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 sm:gap-y-2 text-xs md:text-sm text-navy-200">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="hover:text-gold-300 transition-colors py-1.5 sm:py-0.5 inline-flex items-center min-h-[36px] sm:min-h-0 focus:outline-none focus:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gold-400">
              Contact Details
            </h3>
            <div className="space-y-2.5 text-xs md:text-sm text-navy-200">
              <div>
                <a 
                  href="tel:+918150003610" 
                  aria-label="Call Civiora at +91 8150003610"
                  className="inline-flex items-center gap-2 py-1.5 sm:py-0.5 min-h-[44px] sm:min-h-0 hover:text-gold-300 transition-colors focus:outline-none focus:text-gold-300"
                >
                  <Phone size={14} className="text-gold-400 shrink-0" aria-hidden="true" />
                  <span>+91 8150003610</span>
                </a>
              </div>

              <div>
                <a 
                  href="mailto:connect@civiora.co.in" 
                  aria-label="Email Civiora at connect@civiora.co.in"
                  className="inline-flex items-center gap-2 py-1.5 sm:py-0.5 min-h-[44px] sm:min-h-0 hover:text-gold-300 transition-colors focus:outline-none focus:text-gold-300"
                >
                  <Mail size={14} className="text-gold-400 shrink-0" aria-hidden="true" />
                  <span className="break-all">connect@civiora.co.in</span>
                </a>
              </div>

              <div className="space-y-1.5 pt-0.5">
                <div className="inline-flex items-start gap-2 text-navy-300">
                  <MapPin size={14} className="text-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-snug">No. 134, 57, 13th Cross, Baldwins Road, Koramangala, Bengaluru, Karnataka – 560030</span>
                </div>
                <div className="pl-5">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=No.%20134%2C%2057%2C%2013th%20Cross%2C%20Baldwins%20Road%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560030"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Civiora location on Google Maps"
                    className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 underline font-medium py-0.5 focus:outline-none focus:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Policy Bar & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-navy-300">
          
          <nav aria-label="Policies" className="flex flex-wrap items-center justify-start gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs">
            {POLICY_LINKS.map((policy) => (
              <Link
                key={policy.to}
                to={policy.to}
                className="hover:text-gold-300 transition-colors py-1.5 sm:py-0.5 inline-flex items-center min-h-[36px] sm:min-h-0 focus:outline-none focus:text-gold-300"
              >
                {policy.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={openCookieBanner}
              className="hover:text-gold-300 transition-colors py-1.5 sm:py-0.5 inline-flex items-center min-h-[36px] sm:min-h-0 focus:outline-none focus:text-gold-300 text-left cursor-pointer"
            >
              Cookie Preferences
            </button>
          </nav>

          <p className="text-left md:text-right text-navy-400 text-[11px] sm:text-xs">
            © {currentYear} Civiora Education &amp; Institutional Services. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

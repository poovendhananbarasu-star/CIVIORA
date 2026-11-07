import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube, ExternalLink } from 'lucide-react';
import logoWhite from '../assets/civiora-logo-white-lockup.png';
import { openCookieBanner } from '../utils/cookieConsent';
import LazyMapIframe from './common/LazyMapIframe';

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

const FOOTER_COLUMN_1 = [
  { label: 'Home', to: '/' },
  { label: 'Who We Work With', to: '/pathways' },
  { label: 'Why Civiora', to: '/why-civiora' },
  { label: 'The Civiora Ecosystem', to: '/ecosystem' },
  { label: 'Academic & Specialist Partners', to: '/network' },
];

const FOOTER_COLUMN_2 = [
  { label: 'About Civiora', to: '/about' },
  { label: 'How We Work', to: '/how-it-works' },
  { label: 'Training & Development', to: '/training-development' },
  { label: 'Blog & Regulatory Insights', to: '/blog' },
  { label: 'Founder & Leadership', to: '/founder' },
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
                src={logoWhite} 
                alt="CIVIORA" 
                loading="lazy"
                decoding="async"
                width="160"
                height="44"
                className="h-9 sm:h-10 md:h-11 w-auto object-contain opacity-95 transition-opacity duration-300 group-hover:opacity-100" 
              />
            </Link>
            
            {/* Approved logo description */}
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed max-w-md">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 sm:gap-y-0 text-xs md:text-sm text-slate-200">
              <ul className="space-y-1 sm:space-y-2">
                {FOOTER_COLUMN_1.map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="hover:text-gold-300 transition-colors py-2 sm:py-0.5 inline-flex items-center min-h-[44px] sm:min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:rounded px-1 -mx-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1 sm:space-y-2">
                {FOOTER_COLUMN_2.map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="hover:text-gold-300 transition-colors py-2 sm:py-0.5 inline-flex items-center min-h-[44px] sm:min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:rounded px-1 -mx-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact details */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gold-400">
              Contact Details
            </h3>
            <div className="space-y-2.5 text-xs md:text-sm text-slate-200">
              <div>
                <a 
                  href="tel:+918150003810" 
                  aria-label="Call Civiora at +91 81500 03810"
                  className="inline-flex items-center gap-2 py-1.5 sm:py-0.5 min-h-[44px] sm:min-h-0 hover:text-gold-300 transition-colors focus:outline-none focus:text-gold-300"
                >
                  <Phone size={14} className="text-gold-400 shrink-0" aria-hidden="true" />
                  <span>+91 81500 03810</span>
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
                <div className="inline-flex items-start gap-2 text-slate-300">
                  <MapPin size={14} className="text-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-snug">No. 134, 57, 13th Cross, Baldwins Road, Koramangala, Bengaluru, Karnataka – 560030</span>
                </div>
                <div className="pl-5">
                  <a
                    href="https://maps.app.goo.gl/5GgFoYLVEgXDRABy7"
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

              {/* Embedded Map in Footer with strictly deferred lazy loading */}
              <div className="pt-2">
                <div className="w-full h-32 rounded-xl overflow-hidden border border-white/10 shadow-sm bg-navy-900">
                  <LazyMapIframe
                    title="Civiora Education & Institutional Services Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1374.7260370266315!2d77.60820004559733!3d12.951849956777046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157e083f8961%3A0x91739fc8064875b8!2sCiviora%20Education%20%26%20Institutional%20Services!5e0!3m2!1sen!2sin!4v1793298001823!5m2!1sen!2sin"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Policy Bar & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-300">
          
          <nav aria-label="Policies" className="flex flex-wrap items-center justify-start gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs text-slate-300">
            {POLICY_LINKS.map((policy) => (
              <Link
                key={policy.to}
                to={policy.to}
                className="hover:text-gold-300 transition-colors py-2 sm:py-0.5 inline-flex items-center min-h-[44px] sm:min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:rounded px-1.5 -mx-1.5"
              >
                {policy.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={openCookieBanner}
              className="hover:text-gold-300 transition-colors py-2 sm:py-0.5 inline-flex items-center min-h-[44px] sm:min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:rounded px-1.5 -mx-1.5 text-left cursor-pointer"
            >
              Cookie Preferences
            </button>
          </nav>

          <p className="text-left md:text-right text-slate-400 text-[11px] sm:text-xs">
            © {currentYear} Civiora Education &amp; Institutional Services. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

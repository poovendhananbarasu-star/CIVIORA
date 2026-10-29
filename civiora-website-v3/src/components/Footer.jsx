import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/civiora-logo-full-lockup-transparent.png';

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

const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/918150003610',
    ariaLabel: 'Connect with Civiora on WhatsApp',
    isOfficial: true,
  },
].filter(s => s.isOfficial && s.url);

const POLICY_LINKS = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  { label: 'Cancellation & Refund Policy', to: '/cancellation-refund-policy' },
  { label: 'Grievance & Support', to: '/grievance-support' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white pt-14 pb-10 border-t border-white/10 font-body">
      <div className="max-w-content mx-auto px-6 md:px-10">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12">
          
          {/* Column 1: Logo & Brand Purpose */}
          <div className="md:col-span-5 lg:col-span-5 space-y-4">
            <Link to="/" className="group inline-block focus:outline-none" aria-label="Civiora Home">
              <img 
                src={logo} 
                alt="CIVIORA" 
                className="h-10 md:h-11 w-auto object-contain brightness-0 invert opacity-95 transition-opacity duration-300 group-hover:opacity-100" 
              />
            </Link>
            
            {/* Approved logo description */}
            <p className="text-xs md:text-sm text-navy-200/90 leading-relaxed max-w-md">
              Civiora partners with educational institutions to strengthen student development and career pathways through tailored planning, specialist expertise and coordinated implementation.
            </p>

            {/* Social / WhatsApp quick connect */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 hover:border-emerald-400 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                >
                  <svg 
                    className="w-3.5 h-3.5 fill-current" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.818-.981zm10.74-7.581c-.08-.135-.3-.217-.63-.383-.33-.166-1.954-.964-2.257-1.074-.303-.11-.523-.166-.743.166-.22.33-.854 1.074-1.047 1.295-.193.22-.386.248-.716.082-.33-.166-1.393-.514-2.653-1.638-.98-.874-1.642-1.954-1.835-2.284-.193-.33-.021-.509.144-.674.149-.149.33-.386.495-.579.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.579-.083-.166-.743-1.791-1.018-2.453-.269-.645-.542-.557-.743-.567-.193-.01-.413-.012-.633-.012s-.578.083-.881.413c-.303.33-1.157 1.13-1.157 2.756 0 1.626 1.184 3.197 1.349 3.418.165.22 2.33 3.559 5.646 4.991.789.341 1.405.545 1.886.698.793.252 1.515.216 2.086.131.637-.095 1.954-.799 2.23-1.57.276-.771.276-1.432.193-1.57z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explore Civiora — Navigation links */}
          <div className="md:col-span-4 lg:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gold-400">
              Explore Civiora
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs md:text-sm text-navy-200">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="hover:text-gold-300 transition-colors py-0.5 inline-block focus:outline-none focus:text-gold-300"
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
                  className="inline-flex items-center gap-2 hover:text-gold-300 transition-colors focus:outline-none focus:text-gold-300"
                >
                  <Phone size={14} className="text-gold-400 shrink-0" aria-hidden="true" />
                  <span>+91 8150003610</span>
                </a>
              </div>

              <div>
                <a 
                  href="mailto:connect@civiora.co.in" 
                  aria-label="Email Civiora at connect@civiora.co.in"
                  className="inline-flex items-center gap-2 hover:text-gold-300 transition-colors focus:outline-none focus:text-gold-300"
                >
                  <Mail size={14} className="text-gold-400 shrink-0" aria-hidden="true" />
                  <span className="break-all">connect@civiora.co.in</span>
                </a>
              </div>

              <div className="inline-flex items-start gap-2 text-navy-300 pt-0.5">
                <MapPin size={14} className="text-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-snug">No. 134, 57, 13th Cross, Baldwins Road, Koramangala, Bengaluru, Karnataka – 560030.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Policy Bar & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-navy-300">
          
          <nav aria-label="Policies" className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 sm:gap-x-6 gap-y-2">
            {POLICY_LINKS.map((policy) => (
              <Link
                key={policy.to}
                to={policy.to}
                className="hover:text-gold-300 transition-colors focus:outline-none focus:text-gold-300"
              >
                {policy.label}
              </Link>
            ))}
          </nav>

          <p className="text-center md:text-right text-navy-400">
            © {currentYear} Civiora Education &amp; Institutional Services. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

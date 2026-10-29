import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cookie, X } from 'lucide-react';
import { getCookieConsent, setCookieConsent } from '../utils/cookieConsent';
import { initMetaPixel } from '../utils/metaPixel';

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const existingConsent = getCookieConsent();
    if (existingConsent === null) {
      // Show banner if no choice has been recorded yet
      setIsOpen(true);
    } else if (existingConsent === 'accepted') {
      // If already consented previously, initialize Pixel
      initMetaPixel();
    }

    // Allow reopening via custom event from Footer or Privacy Policy
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-cookie-banner', handleOpen);

    return () => {
      window.removeEventListener('open-cookie-banner', handleOpen);
    };
  }, []);

  const handleAccept = () => {
    setCookieConsent('accepted');
    initMetaPixel();
    setIsOpen(false);
  };

  const handleDecline = () => {
    setCookieConsent('declined');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <aside
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and Privacy Preferences"
      className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-5 bg-navy-950/95 backdrop-blur-lg border-t border-gold-500/30 shadow-2xl text-white font-body animate-fadeUp"
    >
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* Information text */}
        <div className="flex items-start gap-3 text-xs sm:text-sm text-navy-100 max-w-3xl">
          <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
            <Cookie size={18} />
          </div>
          <div>
            <p className="font-semibold text-white text-sm sm:text-base flex items-center gap-2">
              Privacy &amp; Cookie Preferences
            </p>
            <p className="mt-1 leading-relaxed text-navy-200 text-xs sm:text-sm">
              We use necessary cookies for site security and functionality. With your consent, we also use marketing &amp; analytics technologies (including Meta Pixel) to evaluate engagement. We{' '}
              <strong className="text-gold-300 font-semibold">never</strong> share form submissions, names, emails, or personal details with advertising networks. Learn more in our{' '}
              <Link
                to="/privacy-policy#cookies"
                className="text-gold-400 underline hover:text-gold-300 font-medium"
              >
                Privacy &amp; Cookie Policy
              </Link>.
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0">
          <button
            type="button"
            onClick={handleDecline}
            className="flex-1 md:flex-none px-4 py-2.5 text-xs sm:text-sm font-medium rounded-full bg-white/10 hover:bg-white/15 text-navy-100 border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Necessary Only
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 md:flex-none px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
          >
            Accept Cookies
          </button>
        </div>

      </div>
    </aside>
  );
}

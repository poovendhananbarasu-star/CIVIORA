import { Link } from 'react-router-dom';
import { Home, Mail, Compass } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

export default function NotFoundPage() {
  return (
    <div className="pt-28 min-h-[75vh] flex items-center justify-center bg-mist px-6 pb-20 font-body">
      <SEO
        title="Page Not Found | Civiora"
        description="The page may have moved. Explore Civiora’s institutional partnership approach or contact us for assistance."
      />
      <Reveal className="max-w-md w-full bg-white rounded-3xl p-10 border border-navy-100 shadow-xl text-center">
        <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mx-auto mb-5 shadow-sm">
          <Compass size={24} />
        </div>
        <span className="eyebrow">Notice</span>
        <h1 className="mt-3 font-display text-2xl sm:text-3xl text-navy-900 font-semibold">
          We Couldn’t Find That Page
        </h1>
        <p className="mt-4 text-navy-700 text-sm leading-relaxed">
          The page may have moved. Explore Civiora’s institutional partnership approach or contact us for assistance.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="btn-primary w-full sm:w-auto text-xs sm:text-sm py-2.5"
          >
            <Home size={15} />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/contact"
            className="btn-ghost text-navy-900 bg-mist border border-navy-200 hover:border-gold-500 w-full sm:w-auto text-xs sm:text-sm py-2.5"
          >
            <Mail size={15} />
            <span>Contact Civiora</span>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

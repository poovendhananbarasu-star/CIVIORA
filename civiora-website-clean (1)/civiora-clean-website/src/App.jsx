import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EcosystemPage from './pages/EcosystemPage';
import PathwaysPage from './pages/PathwaysPage';
import HowItWorksPage from './pages/HowItWorksPage';
import WhyCivioraPage from './pages/WhyCivioraPage';
import NetworkPage from './pages/NetworkPage';
import FounderPage from './pages/FounderPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import CancellationRefundPolicyPage from './pages/CancellationRefundPolicyPage';
import GrievanceSupportPage from './pages/GrievanceSupportPage';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      {/* Accessible keyboard skip link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-navy-950 focus:rounded-md focus:font-semibold focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <div className="min-h-screen flex flex-col justify-between bg-mist text-ink font-body">
        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/pathways" element={<PathwaysPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/why-civiora" element={<WhyCivioraPage />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/founder" element={<FounderPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
            <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicyPage />} />
            <Route path="/grievance-support" element={<GrievanceSupportPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />

        {/* Accessible Floating WhatsApp Button - sized responsively to prevent overlapping mobile content while meeting >=44px touch target */}
        <a
          href="https://wa.me/918150003610"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Civiora on WhatsApp"
          title="Chat with Civiora on WhatsApp"
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 group ${
            mobileMenuOpen ? 'hidden' : 'flex'
          }`}
        >
          <svg 
            className="w-6 h-6 sm:w-7 sm:h-7 fill-current transition-transform duration-300 group-hover:rotate-12" 
            viewBox="0 0 24 24" 
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.818-.981zm10.74-7.581c-.08-.135-.3-.217-.63-.383-.33-.166-1.954-.964-2.257-1.074-.303-.11-.523-.166-.743.166-.22.33-.854 1.074-1.047 1.295-.193.22-.386.248-.716.082-.33-.166-1.393-.514-2.653-1.638-.98-.874-1.642-1.954-1.835-2.284-.193-.33-.021-.509.144-.674.149-.149.33-.386.495-.579.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.579-.083-.166-.743-1.791-1.018-2.453-.269-.645-.542-.557-.743-.567-.193-.01-.413-.012-.633-.012s-.578.083-.881.413c-.303.33-1.157 1.13-1.157 2.756 0 1.626 1.184 3.197 1.349 3.418.165.22 2.33 3.559 5.646 4.991.789.341 1.405.545 1.886.698.793.252 1.515.216 2.086.131.637-.095 1.954-.799 2.23-1.57.276-.771.276-1.432.193-1.57z"/>
          </svg>
        </a>

        {/* Explicit Cookie Consent Banner */}
        <CookieBanner />
      </div>
    </Router>
  );
}

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import MagneticCursor from './components/effects/MagneticCursor';
import whatsappIcon from './assets/whatsapp.png';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EcosystemPage from './pages/EcosystemPage';
import PathwaysPage from './pages/PathwaysPage';
import HowItWorksPage from './pages/HowItWorksPage';
import WhyCivioraPage from './pages/WhyCivioraPage';
import NetworkPage from './pages/NetworkPage';
import FounderPage from './pages/FounderPage';
import ContactPage from './pages/ContactPage';
import InstitutionalPartnershipPage from './pages/InstitutionalPartnershipPage';
import WhoWeArePage from './pages/WhoWeArePage';
import SinglePreviewPage from './pages/SinglePreviewPage';
import TrainingDevelopmentPage from './pages/TrainingDevelopmentPage';
import BlogListingPage from './pages/BlogListingPage';
import BlogPostPage from './pages/BlogPostPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import CancellationRefundPolicyPage from './pages/CancellationRefundPolicyPage';
import GrievanceSupportPage from './pages/GrievanceSupportPage';

function AppLayout({ mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation();
  const isInstitutionalLanding = 
    location.pathname === '/institutional-partnership' || 
    location.pathname === '/preview' || 
    location.pathname === '/landing';

  return (
    <div className="min-h-screen flex flex-col justify-between bg-mist text-ink font-body">
      {!isInstitutionalLanding && (
        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      )}
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/pathways" element={<PathwaysPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/why-civiora" element={<WhyCivioraPage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/landing" element={<SinglePreviewPage />} />
          <Route path="/preview" element={<SinglePreviewPage />} />
          <Route path="/institutional-partnership" element={<SinglePreviewPage />} />
          <Route path="/training-development" element={<TrainingDevelopmentPage />} />
          <Route path="/blog" element={<BlogListingPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
          <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicyPage />} />
          <Route path="/grievance-support" element={<GrievanceSupportPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isInstitutionalLanding && <Footer />}

      {/* Accessible Floating WhatsApp Button */}
      <a
        href="https://wa.me/918150003610"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Civiora on WhatsApp"
        title="Chat with Civiora on WhatsApp"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 group ${
          mobileMenuOpen ? 'hidden' : 'flex'
        }`}
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          loading="lazy"
          decoding="async"
          width="56"
          height="56"
          className="w-full h-full object-contain rounded-2xl drop-shadow-md transition-transform duration-300 group-hover:rotate-6"
        />
      </a>

      {/* Explicit Cookie Consent Banner */}
      <CookieBanner />

      {/* Responsive Glowing Magnetic Cursor */}
      <MagneticCursor />


    </div>
  );
}

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
      <AppLayout mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </Router>
  );
}

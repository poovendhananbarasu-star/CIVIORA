import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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
        <Navbar />
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
      </div>
    </Router>
  );
}

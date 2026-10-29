import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, Mail, MapPin, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import contactHeaderImg from '../assets/headers/contact.jpg';
import { openCookieBanner } from '../utils/cookieConsent';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-mist min-h-screen font-body">
      <SEO
        title="Privacy Policy | Civiora"
        description="Read how Civiora handles website enquiry information and explains its privacy contact and information practices."
      />

      <PageHeader
        h1="Privacy Policy"
        openingHeadline="How Civiora handles website enquiries and explains its privacy contact and information practices."
        breadcrumbText="Privacy Policy"
        image={contactHeaderImg}
        imageAlt="Civiora Information Governance and Privacy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16">
        <Reveal>
          <div className="bg-white rounded-3xl p-4 sm:p-10 md:p-12 border border-navy-100 shadow-sm text-navy-800 space-y-8">
            
            <div className="border-b border-navy-100 pb-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mt-2">
                Information Practices &amp; Governance
              </h2>
              <p className="text-xs text-navy-500 mt-2">
                Effective: October 2026 | Civiora Education &amp; Institutional Services
              </p>
            </div>

            {/* Introduction */}
            <section className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                1. Introduction &amp; Scope
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                This policy explains how Civiora handles information received through website enquiries and related communications. Information collected during institutional engagements is handled according to the applicable arrangements and notices set out in the relevant written agreement.
              </p>
            </section>

            {/* Website Enquiries */}
            <section className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                2. Information Received via Website Enquiries
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                When you submit an institutional consultation request or contact us, we collect the details provided in the form: representative name, designation, institution name, location, official email address, telephone number, requirement context, and discussion preferences.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                This information is used solely to respond to your enquiry, coordinate discussions, and understand your institution’s student development priorities.
              </p>
            </section>

            {/* Student & Participant Data */}
            <section className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                3. Student and Participant Information
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                Where student or participant information is collected during institutional engagements (such as attendance, participation logs, or feedback surveys), it is handled strictly within the scope agreed with the partnering institution. Civiora does not sell, rent, or trade participant or institutional contact details.
              </p>
            </section>

            {/* Partner Sharing & Retention */}
            <section className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                4. Specialist Partner Sharing &amp; Retention
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                We only share institutional engagement details with specialist educators and academic partners to the extent necessary to deliver the agreed sessions. Information is retained only as long as required to fulfill the consultation or institutional partnership commitments.
              </p>
            </section>

            {/* Cookies & Tracking Technologies */}
            <section id="cookies" className="space-y-4 pt-4 border-t border-navy-100">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                5. Cookies, Analytics &amp; Marketing Technologies
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                Civiora uses cookies and browser technologies to provide a smooth, secure browsing experience, analyze aggregate site performance, and evaluate institutional communication campaigns.
              </p>

              <div className="space-y-3">
                <div className="p-4 sm:p-5 rounded-2xl bg-mist border border-navy-100">
                  <h4 className="font-semibold text-sm sm:text-base text-navy-900">
                    A. Essential &amp; Necessary Cookies
                  </h4>
                  <p className="text-xs sm:text-sm text-navy-600 mt-1.5 leading-relaxed">
                    These cookies are required for fundamental site operation, accessibility, security, and remembering your cookie consent status. They do not store personal data and cannot be switched off.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-mist border border-navy-100">
                  <h4 className="font-semibold text-sm sm:text-base text-navy-900">
                    B. Analytics &amp; Performance (Google Analytics / Google Tag Manager)
                  </h4>
                  <p className="text-xs sm:text-sm text-navy-600 mt-1.5 leading-relaxed">
                    Helps us understand aggregated metrics such as page visits, popular pathway topics, and navigation patterns to enhance site speed and usability.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-mist border border-navy-100">
                  <h4 className="font-semibold text-sm sm:text-base text-navy-900">
                    C. Marketing Measurement &amp; Meta Pixel
                  </h4>
                  <p className="text-xs sm:text-sm text-navy-600 mt-1.5 leading-relaxed">
                    With your explicit permission, we utilize the Meta Pixel to evaluate the effectiveness of our institutional outreach and educational partnership announcements across Meta platforms (Facebook &amp; Instagram).
                  </p>
                  <ul className="list-disc pl-5 mt-2.5 space-y-1.5 text-xs sm:text-sm text-navy-700">
                    <li>
                      <strong>Explicit Consent:</strong> The Meta Pixel is only loaded and executed after you click &ldquo;Accept Cookies&rdquo; on our cookie banner. If you choose &ldquo;Necessary Only&rdquo; or decline, Meta Pixel scripts are never downloaded or executed in your browser.
                    </li>
                    <li>
                      <strong>Strict Data Privacy Protection:</strong> We strictly guarantee that no consultation form fields—such as representative names, designations, institution names, official email addresses, telephone numbers, or academic requirements—are ever transmitted to Meta.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Interactive Consent Management Card */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-navy-50/90 border border-navy-200">
                <div>
                  <p className="text-sm font-semibold text-navy-900">Your Cookie Choices &amp; Consent</p>
                  <p className="text-xs text-navy-600 mt-0.5">You can view, grant, or withdraw your marketing/analytics consent at any time.</p>
                </div>
                <button
                  type="button"
                  onClick={openCookieBanner}
                  className="px-5 py-2.5 text-xs font-semibold rounded-full bg-navy-900 hover:bg-navy-800 text-white transition-all shadow-sm hover:shadow shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-navy-700"
                >
                  Manage Cookie Preferences
                </button>
              </div>
            </section>

            {/* Privacy Contact */}
            <section className="pt-4 border-t border-navy-100">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-navy-900 mb-4">
                6. Privacy Inquiries &amp; Contact
              </h3>
              <div className="bg-navy-900 text-white p-6 sm:p-7 rounded-2xl space-y-3">
                <p className="text-sm font-semibold text-gold-300">Civiora Education &amp; Institutional Services</p>
                <div className="space-y-1.5 text-xs sm:text-sm text-navy-100">
                  <div className="flex items-start gap-2">
                    <MapPin size={15} className="text-gold-400 shrink-0 mt-0.5" />
                    <span>No. 134, 57, 13th Cross, Baldwins Road, Koramangala, Bengaluru, Karnataka – 560030.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={15} className="text-gold-400 shrink-0" />
                    <a href="mailto:connect@civiora.co.in" className="hover:text-gold-300 transition-colors">connect@civiora.co.in</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={15} className="text-gold-400 shrink-0" />
                    <a href="tel:+918150003610" className="hover:text-gold-300 transition-colors">+91 8150003610</a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </Reveal>
      </div>
    </div>
  );
}

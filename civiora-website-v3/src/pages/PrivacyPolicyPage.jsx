import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, Mail, MapPin, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-mist min-h-screen pt-28 pb-20 font-body">
      <SEO
        title="Privacy Policy | Civiora"
        description="Read how Civiora handles website enquiry information and explains its privacy contact and information practices."
      />

      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-navy-100 shadow-sm text-navy-800 space-y-8">
            
            <div className="border-b border-navy-100 pb-6">
              <span className="eyebrow">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                Information Handling
              </span>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mt-2">
                Privacy Policy
              </h1>
              <p className="text-xs text-navy-500 mt-2">
                Effective: October 2026 | Civiora Education &amp; Institutional Services
              </p>
            </div>

            {/* Introduction */}
            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                1. Introduction &amp; Scope
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                This policy explains how Civiora handles information received through website enquiries and related communications. Information collected during institutional engagements is handled according to the applicable arrangements and notices set out in the relevant written agreement.
              </p>
            </section>

            {/* Website Enquiries vs Engagement Information */}
            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                2. Information Received via Website Enquiries
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                When you submit an institutional consultation request or contact us, we collect the details provided in the form: representative name, designation, institution name, location, official email address, telephone number, requirement context, and discussion preferences.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                This information is used solely to respond to your enquiry, coordinate discussions, and understand your institution’s student development priorities.
              </p>
            </section>

            {/* Student & Participant Data */}
            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                3. Student and Participant Information
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                Where student or participant information is collected during institutional engagements (such as attendance, participation logs, or feedback surveys), it is handled strictly within the scope agreed with the partnering institution. Civiora does not sell, rent, or trade participant or institutional contact details.
              </p>
            </section>

            {/* Partner Sharing & Retention */}
            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                4. Specialist Partner Sharing &amp; Retention
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                We only share institutional engagement details with specialist educators and academic partners to the extent necessary to deliver the agreed sessions. Information is retained only as long as required to fulfill the consultation or institutional partnership commitments.
              </p>
            </section>

            {/* Privacy Contact */}
            <section className="pt-4 border-t border-navy-100">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900 mb-4">
                5. Privacy Inquiries &amp; Contact
              </h2>
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

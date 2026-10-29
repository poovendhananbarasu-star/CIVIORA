import { Link } from 'react-router-dom';
import { Scale, FileText, MapPin, Mail, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

export default function TermsConditionsPage() {
  return (
    <div className="bg-mist min-h-screen pt-24 pb-14 sm:pt-28 sm:pb-20 font-body">
      <SEO
        title="Terms & Conditions | Civiora"
        description="Read Civiora’s website terms and the relationship between general information and separately agreed institutional engagement terms."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <div className="bg-white rounded-3xl p-4 sm:p-10 md:p-12 border border-navy-100 shadow-sm text-navy-800 space-y-8">
            
            <div className="border-b border-navy-100 pb-6">
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mt-2">
                Terms &amp; Conditions
              </h1>
              <p className="text-xs text-navy-500 mt-2">
                Effective: October 2026 | Civiora Education &amp; Institutional Services
              </p>
            </div>

            {/* Introduction */}
            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                1. General Information &amp; Scope
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                This website provides general information about Civiora’s institutional partnership approach. The scope, delivery arrangements, responsibilities and applicable terms of an engagement are set out in the relevant written agreement entered into between Civiora and the participating institution or partner.
              </p>
            </section>

            {/* Institutional Engagements */}
            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                2. Institutional Engagements
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                Nothing on this website constitutes a binding offer or universal delivery commitment. Every partnership is shaped around specific institutional objectives, learner groups, academic schedules, and mutually agreed scopes established through consultation and confirmed in writing.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                3. Intellectual Property
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                All content, text, trademarks, logos, frameworks, and visual presentation on this website are the property of Civiora Education &amp; Institutional Services or their respective rights holders, protected under applicable intellectual property laws. Unauthorised reproduction or distribution is prohibited.
              </p>
            </section>

            {/* Governing Law */}
            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                4. Governing Law &amp; Jurisdiction
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                Website terms and conditions are governed by the laws of India. Any disputes arising in connection with the use of this website shall be subject to the jurisdiction of the competent courts in Bengaluru, Karnataka, India.
              </p>
            </section>

            {/* Contact */}
            <section className="pt-4 border-t border-navy-100">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900 mb-4">
                5. Institutional Office &amp; Contact
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

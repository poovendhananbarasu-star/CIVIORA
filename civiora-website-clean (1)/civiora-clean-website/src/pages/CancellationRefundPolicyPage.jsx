import { Link } from 'react-router-dom';
import { RefreshCw, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

export default function CancellationRefundPolicyPage() {
  return (
    <div className="bg-mist min-h-screen pt-24 pb-14 sm:pt-28 sm:pb-20 font-body">
      <SEO
        title="Cancellation & Refund Policy | Civiora"
        description="Find information about Civiora’s cancellation, rescheduling and refund arrangements and how to submit a request."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <div className="bg-white rounded-3xl p-4 sm:p-10 md:p-12 border border-navy-100 shadow-sm text-navy-800 space-y-8">
            
            <div className="border-b border-navy-100 pb-6">
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mt-2">
                Cancellation &amp; Refund Policy
              </h1>
              <p className="text-xs text-navy-500 mt-2">
                Effective: October 2026 | Civiora Education &amp; Institutional Services
              </p>
            </div>

            {/* Introduction */}
            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                1. General Framework
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                Cancellation, rescheduling and refund arrangements depend on the nature of the engagement and the terms communicated before confirmation. Requests should be submitted through the designated contact channel for review under the applicable agreement.
              </p>
            </section>

            {/* Institutional Engagements */}
            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                2. Institutional Engagements
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                Because institutional engagements involve committed educator schedules, specialist alignment, and planned campus resources, specific notice periods, rescheduling guidelines, and fee adjustments are defined within each institutional proposal or memorandum of understanding before commencement.
              </p>
            </section>

            {/* Individual Participant Arrangements */}
            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                3. Participant &amp; Cohort Arrangements
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                Where an engagement involves individual participant registration within an institutional programme, cancellation and refund eligibility are governed by the specific terms communicated to learners and parents at the time of orientation or enrolment.
              </p>
            </section>

            {/* Request Submission */}
            <section className="pt-4 border-t border-navy-100">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900 mb-4">
                4. Submitting a Request
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700 mb-4">
                To submit a cancellation, rescheduling, or refund enquiry, contact Civiora in writing through our designated coordination channel with your institutional reference:
              </p>
              <div className="bg-navy-900 text-white p-6 sm:p-7 rounded-2xl space-y-3">
                <p className="text-sm font-semibold text-gold-300">Civiora Coordination Desk</p>
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

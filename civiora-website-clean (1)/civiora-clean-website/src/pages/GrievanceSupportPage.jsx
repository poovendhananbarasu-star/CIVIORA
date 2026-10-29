import { Link } from 'react-router-dom';
import { HelpCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

export default function GrievanceSupportPage() {
  return (
    <div className="bg-mist min-h-screen pt-24 pb-14 sm:pt-28 sm:pb-20 font-body">
      <SEO
        title="Grievance & Support | Civiora"
        description="Contact Civiora for institutional or participant concerns and understand the applicable support and escalation process."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <div className="bg-white rounded-3xl p-4 sm:p-10 md:p-12 border border-navy-100 shadow-sm text-navy-800 space-y-8">
            
            <div className="border-b border-navy-100 pb-6">
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mt-2">
                Clear Support for Institutional Teams and Participants
              </h1>
              <p className="text-xs text-navy-500 mt-2">
                Civiora Education &amp; Institutional Services
              </p>
            </div>

            {/* Content */}
            <section className="space-y-4">
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                For scheduling, communication, participation or delivery concerns, contact Civiora with your institution or engagement reference and a brief description of the issue.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-navy-700">
                Institutional representatives, educators, participants, and parents (where applicable) can reach our support desk for timely assistance and clear resolution workflows.
              </p>
            </section>

            {/* Resolution Process */}
            <section className="space-y-4">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                Escalation Process
              </h2>
              <div className="space-y-3 text-sm text-navy-700 leading-relaxed">
                <div className="p-4 rounded-xl bg-mist border border-navy-100">
                  <span className="font-semibold text-navy-900">1. Initial Enquiry:</span>
                  <p className="mt-1 text-xs sm:text-sm text-navy-600">Submit your concern with relevant institution, cohort or session details via official email.</p>
                </div>
                <div className="p-4 rounded-xl bg-mist border border-navy-100">
                  <span className="font-semibold text-navy-900">2. Review &amp; Coordination:</span>
                  <p className="mt-1 text-xs sm:text-sm text-navy-600">Our coordination desk reviews the operational log with the assigned institutional lead or academic partner.</p>
                </div>
                <div className="p-4 rounded-xl bg-mist border border-navy-100">
                  <span className="font-semibold text-navy-900">3. Resolution &amp; Follow-up:</span>
                  <p className="mt-1 text-xs sm:text-sm text-navy-600">A clear resolution, adjustment, or meeting is communicated directly to the designated contact.</p>
                </div>
              </div>
            </section>

            {/* Contact Box */}
            <section className="pt-4 border-t border-navy-100">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900 mb-4">
                Support Desk Contact
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

            {/* CTA */}
            <div className="pt-2 text-center">
              <Link
                to="/contact"
                className="btn-primary"
              >
                <span>Discuss an Institutional Requirement</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </Reveal>
      </div>
    </div>
  );
}

import PageHeader from '../components/PageHeader';
import FinalCTA from '../components/FinalCTA';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import SpotlightCard from '../components/effects/SpotlightCard';
import { MapPin, Navigation } from 'lucide-react';
import contactHeaderImg from '../assets/selected-client-images/C01-Contact-page-banner.png';

export default function ContactPage() {
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Civiora+Education+%26+Institutional+Services%2C+No.+134%2C+Baldwins+Road%2C+57%2C+13th+Cross+Rd%2C+Koramangala%2C+Bengaluru%2C+Karnataka+560030';
  const address = 'No. 134, 57, 13th Cross, Baldwins Road, Koramangala, Bengaluru, Karnataka – 560030';
  const embedMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1374.7260370266315!2d77.60820004559733!3d12.951849956777046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157e083f8961%3A0x91739fc8064875b8!2sCiviora%20Education%20%26%20Institutional%20Services!5e0!3m2!1sen!2sin!4v1793298001823!5m2!1sen!2sin';

  return (
    <div>
      <SEO
        title="Contact Civiora | Institutional Partnerships, Bengaluru"
        description="Contact Civiora in Koramangala, Bengaluru to discuss student-development and career partnerships for your institution."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Civiora",
          "description": "Contact Civiora for Institutional Learning & Career Partnerships",
          "mainEntity": {
            "@type": "Organization",
            "name": "Civiora Education & Institutional Services",
            "email": "connect@civiora.co.in",
            "telephone": "+918150003610",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No. 134, 57, 13th Cross, Baldwins Road, Koramangala",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560030",
              "addressCountry": "IN"
            }
          }
        }}
      />
      <PageHeader
        h1="Begin with Your Institution’s Priorities"
        openingHeadline="Tell us what your institution wants to strengthen. Share your student context, priorities and preferred timeline, and Civiora will discuss an appropriate approach with your team."
        breadcrumbText="Contact"
        image={contactHeaderImg}
        imageAlt="Institutional consultation and partnership discussion with Civiora."
      />
      <FinalCTA />

      {/* Responsive “Visit Civiora” Location Section */}
      <section className="bg-mist py-16 md:py-24 border-t border-navy-100 font-body">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="eyebrow">Location &amp; Directions</span>
              <h2 className="section-heading mt-4">Visit Civiora</h2>
              <div className="gold-rule mx-auto mt-4" />
              <p className="mt-4 text-navy-700 text-sm sm:text-base leading-relaxed">
                We welcome educational institution leadership and academic partners to our office in Koramangala for scheduled partnership discussions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SpotlightCard className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 border border-navy-100 shadow-xl shadow-navy-950/5">
              {/* Responsive Embedded Google Map */}
              <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] rounded-xl overflow-hidden border border-navy-100 bg-navy-50 shadow-inner">
                <iframe
                  title="Civiora Education & Institutional Services Location Map"
                  src={embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full"
                />
              </div>

              {/* Full Address Visibly Below the Map & Get Directions Button */}
              <div className="mt-6 pt-5 border-t border-navy-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-semibold text-navy-900">
                      Civiora Education &amp; Institutional Services
                    </h3>
                    <p className="text-xs sm:text-sm text-navy-700 mt-0.5 leading-relaxed">
                      {address}
                    </p>
                  </div>
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to Civiora on Google Maps"
                  className="btn-primary w-full sm:w-auto text-center justify-center shrink-0"
                >
                  <Navigation size={16} />
                  <span>Get Directions</span>
                </a>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
